export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black/50 backdrop-blur-lg pt-16 pb-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Identity */}
        <div>
          <h2 className="text-2xl font-serif text-white">AAYAM</h2>
          <p className="text-white/40 text-sm mt-4 leading-relaxed">
            The Dramatics Society of IIT Madras (BS Degree).<br/>
            Where logic meets emotion.
          </p>
        </div>

        {/* Column 2: The Legacy Links */}
        <div>
          <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6">The Green Room</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><a href="#" className="hover:text-amber-400 transition-colors">Join Aayam (Auditions)</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">The Alumni Hall</a></li>
            <li><a href="#" className="hover:text-amber-400 transition-colors">Past Productions</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6">Contact</h4>
          <p className="text-white/50 text-sm">
            secretary.aayam@iitm.ac.in<br/>
            IIT Madras BS Degree Office
          </p>
          <div className="flex gap-4 mt-6">
             {/* Social Icons (Instagram/YouTube) */}
             <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/60">IG</a>
             <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/60">YT</a>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center border-t border-white/5 pt-8">
        <p className="text-white/20 text-[10px] font-mono">
          DESIGNED BY THE ELITE • CODED FOR AAYAM
        </p>
      </div>
    </footer>
  );
}