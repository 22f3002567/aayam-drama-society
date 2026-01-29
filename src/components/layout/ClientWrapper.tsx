"use client";

import { useState, useEffect, ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import GhostLight from "@/components/intro/GhostLight";

export default function ClientWrapper({ 
  children 
}: { 
  children: ReactNode 
}) {
  const [stageReady, setStageReady] = useState(false);

  useEffect(() => {
    // Check if the user has already visited in this session
    const hasVisited = sessionStorage.getItem("aayam_session");
    if (hasVisited) setStageReady(true);
  }, []);

  const handleIgnition = () => {
    sessionStorage.setItem("aayam_session", "true");
    setStageReady(true);
  };

  return (
    <>
      {/* ACT 1: THE IGNITION */}
      <AnimatePresence mode="wait">
        {!stageReady && <GhostLight key="intro" onIgnite={handleIgnition} />}
      </AnimatePresence>

      {/* ACT 2: THE REVEAL (The content passed from the Server) */}
      {stageReady && (
        <div className="relative flex flex-col animate-fade-in perspective-1000">
           {children}
        </div>
      )}
    </>
  );
}

// "use client";

// import { useState, useEffect, ReactNode } from "react";
// import { AnimatePresence } from "framer-motion";
// import GhostLight from "@/components/intro/GhostLight";

// export default function ClientWrapper({ 
//   children 
// }: { 
//   children: ReactNode 
// }) {
//   const [stageReady, setStageReady] = useState(false);

//   useEffect(() => {
//     const hasVisited = sessionStorage.getItem("aayam_session");
//     if (hasVisited) setStageReady(true);
//   }, []);

//   const handleIgnition = () => {
//     sessionStorage.setItem("aayam_session", "true");
//     setStageReady(true);
//   };

//   return (
//     <>
//       <AnimatePresence mode="wait">
//         {!stageReady && <GhostLight key="intro" onIgnite={handleIgnition} />}
//       </AnimatePresence>

//       {stageReady && (
//         <div className="relative flex flex-col animate-fade-in perspective-1000">
//            {children}
//         </div>
//       )}
//     </>
//   );
// }