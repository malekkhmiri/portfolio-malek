import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-cyan-400 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400">
                  École Supérieure des Communications de Tunis (Sup'Com)
                </h4>
                <p className="text-gray-300">Engineering Degree in ICT</p>
                <p className="text-gray-400 text-sm">2023 - Present | Tunis, Tunisia</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400">
                  Institut Préparatoire aux Études d'Ingénieur de Sfax (IPEIS)
                </h4>
                <p className="text-gray-300">Preparatory Classes - Physics-Chemistry</p>
                <p className="text-gray-400 text-sm">Rank: 40/900</p>
                <p className="text-gray-400 text-sm">2021-2023 | Sfax, Tunisia</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400">
                  Lycée Mohamed Ali
                </h4>
                <p className="text-gray-300">Baccalaureate in Mathematics</p>
                <p className="text-gray-400 text-sm">Mention Bien - 15.23/20</p>
                <p className="text-gray-400 text-sm">2021 | Sfax, Tunisia</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Award className="text-cyan-400 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-cyan-400 pl-4">
                <h4 className="text-lg font-semibold text-white">
                  AWS Machine Learning Specialty
                </h4>
                <p className="text-gray-300 text-sm">ML models, data pipelines, S3, SageMaker</p>
                <p className="text-gray-400 text-sm">2025</p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-4">
                <h4 className="text-lg font-semibold text-white">
                  AWS Cloud Computing Certification
                </h4>
                <p className="text-gray-300 text-sm">Core services, IAM, cloud architecture</p>
                <p className="text-gray-400 text-sm">2025</p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-4">
                <h4 className="text-lg font-semibold text-white">
                  AWS Data Engineering Certification
                </h4>
                <p className="text-gray-300 text-sm">Glue, Redshift, Kinesis</p>
                <p className="text-gray-400 text-sm">2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
