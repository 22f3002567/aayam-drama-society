"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

// The coordinates of a single "Target" (Name or Image)
type TargetCoords = {
  id: string;
  type: "text" | "image";
  x: number;
  y: number;
  width: number;
  height: number;
};

interface LiveWireContextType {
  targets: Record<string, TargetCoords>;
  registerTarget: (id: string, type: "text" | "image", el: HTMLElement) => void;
}

const LiveWireContext = createContext<LiveWireContextType | null>(null);

export function LiveWireProvider({ children }: { children: ReactNode }) {
  const [targets, setTargets] = useState<Record<string, TargetCoords>>({});

  // This function is called by the rows to report their position
  const registerTarget = useCallback((id: string, type: "text" | "image", el: HTMLElement) => {
    // We get the absolute position relative to the container
    // For simplicity in this demo, we'll rely on offsetTop/Left relative to the main container
    // In a full app, we might use getBoundingClientRect() and adjust for scroll
    
    // BUT: Since the SVG is absolute positioned inside the relative container,
    // offsetTop/Left is perfect.
    
    const update = () => {
        setTargets((prev) => ({
            ...prev,
            [`${id}-${type}`]: {
                id,
                type,
                x: el.offsetLeft + (el.offsetWidth / 2), // Center X
                y: el.offsetTop + (el.offsetHeight / 2), // Center Y
                width: el.offsetWidth,
                height: el.offsetHeight
            }
        }));
    };

    update();
    
    // Auto-update on resize
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();

  }, []);

  return (
    <LiveWireContext.Provider value={{ targets, registerTarget }}>
      {children}
    </LiveWireContext.Provider>
  );
}

export const useLiveWire = () => {
  const context = useContext(LiveWireContext);
  if (!context) throw new Error("useLiveWire must be used within a LiveWireProvider");
  return context;
};