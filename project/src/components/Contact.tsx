import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Get In Touch
        </h2>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <p className="text-gray-300 text-center mb-8 text-lg leading-relaxed">
            I'm currently looking for an end-of-studies internship to design and deploy
            intelligent solutions. Feel free to reach out if you'd like to collaborate or
            discuss opportunities!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:melek.khmiri@supcom.tn"
              className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 group"
            >
              <div className="p-3 bg-cyan-500/10 rounded-full mr-4 group-hover:bg-cyan-500 transition-colors">
                <Mail className="text-cyan-400 group-hover:text-white" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">melek.khmiri@supcom.tn</p>
              </div>
            </a>

            <a
              href="tel:+21644634682"
              className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 group"
            >
              <div className="p-3 bg-cyan-500/10 rounded-full mr-4 group-hover:bg-cyan-500 transition-colors">
                <Phone className="text-cyan-400 group-hover:text-white" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">+216 44 634 682</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/khmiri-malek-2404a2287"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 group"
            >
              <div className="p-3 bg-cyan-500/10 rounded-full mr-4 group-hover:bg-cyan-500 transition-colors">
                <Linkedin className="text-cyan-400 group-hover:text-white" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <p className="text-white font-medium">Malek Khmiri</p>
              </div>
            </a>

            <div className="flex items-center p-4 bg-slate-700/50 rounded-lg">
              <div className="p-3 bg-cyan-500/10 rounded-full mr-4">
                <MapPin className="text-cyan-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Tunis, Tunisia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            © 2025 Malek Khmiri. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
