"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Simple "Gatekeeper" (Replace with real Auth later)
  const handleLogin = () => {
    if (password === "AAYAM_SECRET_2026") setIsAuthenticated(true);
    else alert("Access Denied");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-neutral-900 p-8 rounded-xl border border-white/10 text-center">
          <h1 className="text-white font-serif text-2xl mb-4">The Backstage</h1>
          <input 
            type="password" 
            placeholder="Enter Stage Code"
            className="bg-black border border-white/20 text-white px-4 py-2 rounded mb-4 block w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="bg-amber-500 text-black px-6 py-2 rounded font-bold">
            Unlock
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] text-white font-mono p-8">
      <header className="mb-12 flex justify-between items-end border-b border-white/10 pb-4">
        <div>
          <h1 className="text-3xl font-serif text-amber-500">Control Room</h1>
          <p className="text-xs text-white/50 mt-1">SYSTEM STATUS: ONLINE</p>
        </div>
        <button onClick={() => setIsAuthenticated(false)} className="text-red-500 text-xs hover:underline">
          Log Out
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* PANEL 1: ADD NEW PLAY */}
        <section className="bg-black/50 border border-white/10 p-6 rounded-xl">
          <h2 className="text-xl mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> 
            Add to Repertoire
          </h2>
          <AddPlayForm />
        </section>

        {/* PANEL 2: MANAGE TEAM (Placeholder) */}
        <section className="bg-black/50 border border-white/10 p-6 rounded-xl opacity-50">
           <h2 className="text-xl mb-6">Manage Ensemble (Coming Soon)</h2>
        </section>
      </div>
    </div>
  );
}

// SUB-COMPONENT: The Form
function AddPlayForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    youtubeId: "",
    mood: "drama",
    director: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Insert into Supabase
    const { error } = await supabase
      .from('plays') // You need to create this table in Supabase dashboard
      .insert([formData]);

    if (error) alert("Error: " + error.message);
    else {
      alert("Play Added Successfully!");
      setFormData({ title: "", youtubeId: "", mood: "drama", director: "" }); // Reset
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs text-white/40 uppercase tracking-widest">Play Title</label>
        <input 
          required
          className="w-full bg-neutral-900 border border-white/10 p-3 rounded text-white focus:border-amber-500 outline-none"
          value={formData.title}
          onChange={e => setFormData({...formData, title: e.target.value})}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
           <label className="text-xs text-white/40 uppercase tracking-widest">YouTube ID</label>
           <input 
             required
             placeholder="e.g. dQw4w9WgXcQ"
             className="w-full bg-neutral-900 border border-white/10 p-3 rounded text-white focus:border-amber-500 outline-none"
             value={formData.youtubeId}
             onChange={e => setFormData({...formData, youtubeId: e.target.value})}
           />
        </div>
        <div>
           <label className="text-xs text-white/40 uppercase tracking-widest">Mood</label>
           <select 
             className="w-full bg-neutral-900 border border-white/10 p-3 rounded text-white focus:border-amber-500 outline-none"
             value={formData.mood}
             onChange={e => setFormData({...formData, mood: e.target.value})}
           >
             <option value="drama">Drama</option>
             <option value="comedy">Comedy</option>
             <option value="thriller">Thriller</option>
             <option value="street">Street Play</option>
           </select>
        </div>
      </div>

      <div>
        <label className="text-xs text-white/40 uppercase tracking-widest">Director Name</label>
        <input 
          required
          className="w-full bg-neutral-900 border border-white/10 p-3 rounded text-white focus:border-amber-500 outline-none"
          value={formData.director}
          onChange={e => setFormData({...formData, director: e.target.value})}
        />
      </div>

      <button 
        disabled={loading}
        className="w-full bg-white text-black font-bold py-3 rounded hover:bg-amber-400 transition-colors"
      >
        {loading ? "Uploading..." : "Publish to Website"}
      </button>
    </form>
  );
}