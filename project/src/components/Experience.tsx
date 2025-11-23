import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack & DevOps Developer',
      company: 'Converty',
      location: 'Tunis, Tunisia',
      period: '09/2025 - Present',
      description:
        'Development of an intelligent Landing Page creation platform enabling dynamic content generation.',
      tools: ['React', 'Node.js', 'GitHub'],
    },
    {
      title: 'DevOps Engineering Intern',
      company: 'KPIT',
      location: 'Sfax, Tunisia',
      period: '07/2025 – 08/2025',
      description:
        'Design of an automated CI/CD pipeline under GitLab, integrating Docker and Python scripts for automatic base branch detection and management.',
      tools: ['GitLab CI/CD', 'Docker', 'Python'],
    },
    {
      title: 'Software Development Intern',
      company: 'Lexpert Business Technology',
      location: 'Sfax, Tunisia',
      period: '07/2024 – 08/2024',
      description:
        'Development of a .NET application for real-time alert and notification management.',
      tools: ['C#', 'WPF', 'DBeaver', 'Npgsql'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-gray-300 mb-2">
                    <Briefcase size={18} className="mr-2" />
                    <span className="font-semibold">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={18} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-700 text-cyan-300 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
