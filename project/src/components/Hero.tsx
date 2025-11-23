import { Mail, Linkedin, Github, ChevronDown, Download } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {/* PHOTO DE PROFIL */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img
            src="/malouka1.jpg"
            alt="Malek Khmiri"
            className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
          />
        </div>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Malek Khmiri
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            DevOps Engineer | Cloud Architect | AI Enthusiast
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Engineering student passionate about designing and deploying intelligent solutions 
            through DevOps, Cloud, and Artificial Intelligence
          </p>
        </div>

        {/* ICONES */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="mailto:melek.khmiri@supcom.tn"
            className="p-3 bg-slate-800 hover:bg-cyan-500 text-white rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/khmiri-malek-2404a2287/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-cyan-500 text-white rounded-full transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://github.com/malekkhmiri"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-cyan-500 text-white rounded-full transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>

        {/* 🔽 BOUTON TELECHARGER CV */}
        <div className="mb-12">
          <a
            href="CV_Malek_Khmiri.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2" size={20} />
            Download CV
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
}
