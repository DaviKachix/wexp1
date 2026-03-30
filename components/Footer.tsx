import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Star,
  ExternalLink,
  Building2,
  Share2,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#061833] text-white overflow-hidden">

      {/* PREMIUM GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-orange-400/10 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-wide text-orange-400">
              WeXP Limited
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Premium event planning, logistics coordination, and safari experiences delivered with precision, trust, and excellence across Africa.
            </p>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-orange-300 text-xs uppercase tracking-[0.3em]">
              <Star size={14} />
              Excellence • Precision • Trust
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white">
              Contact
            </h3>

            <div className="w-10 h-[2px] bg-orange-400 my-4 mx-auto md:mx-0 rounded-full" />

            <div className="flex flex-col items-center md:items-start gap-5 text-white/70">

              {/* LOCATION */}
              <div className="flex items-center gap-3 hover:text-orange-300 transition">
                <MapPin size={18} />
                <span className="text-sm">Arusha, Tanzania</span>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3 hover:text-orange-300 transition">
                <Phone size={18} />
                <span className="text-sm">+255 620 451 936</span>
              </div>

              {/* WHATSAPP CHAT (LIVE LINK) */}
              <a
                href="https://wa.me/255620451936"
                target="_blank"
                className="flex items-center gap-3 hover:text-orange-300 transition"
              >
                <MessageCircle size={18} />
                <span className="text-sm">WhatsApp Chat</span>
              </a>

              {/* EMAIL */}
              <div className="flex items-center gap-3 hover:text-orange-300 transition">
                <Mail size={18} />
                <span className="text-sm">wexptanzania@gmail.com</span>
              </div>

            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white">
              Explore
            </h3>

            <div className="w-10 h-[2px] bg-orange-400 my-4 ml-auto md:ml-0 rounded-full" />

            <div className="space-y-3 text-white/70">

              <div className="flex items-center gap-2 hover:text-orange-300 transition cursor-pointer">
                <Building2 size={16} />
                <span>Our Services</span>
              </div>

              <div className="flex items-center gap-2 hover:text-orange-300 transition cursor-pointer">
                <ExternalLink size={16} />
                <span>Projects</span>
              </div>

              <div className="flex items-center gap-2 hover:text-orange-300 transition cursor-pointer">
                <ExternalLink size={16} />
                <span>About Us</span>
              </div>

              <div className="flex items-center gap-2 hover:text-orange-300 transition cursor-pointer">
                <ExternalLink size={16} />
                <span>Contact</span>
              </div>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10"></div>

        {/* SOCIAL ICONS (BOTTOM) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-white/50 text-sm">
            © 2026 WeXP Limited. All Rights Reserved.
          </p>

          <div className="flex gap-4">

            {/* INSTAGRAM */}
            <a
              href="#"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-orange-400/10 hover:border-orange-400/40 transition group"
            >
              <Share2 size={18} className="group-hover:text-orange-400 transition" />
            </a>

            {/* FACEBOOK */}
            <a
              href="#"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-orange-400/10 hover:border-orange-400/40 transition group"
            >
              <Send size={18} className="group-hover:text-orange-400 transition" />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}