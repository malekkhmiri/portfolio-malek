import { Code2, Cloud, Shield, Brain, Globe } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['C', 'C++', 'Python', 'JavaScript', 'Java', 'C#'],
    },
    {
      title: 'Web & Mobile Development',
      icon: Globe,
      skills: ['React', 'Node.js', 'HTML', 'CSS', 'Flutter', 'SQL'],
    },
    {
      title: 'DevOps & CI/CD',
      icon: Cloud,
      skills: ['GitHub Actions', 'GitLab CI', 'Docker'],
    },
    {
      title: 'Cloud & Data',
      icon: Cloud,
      skills: ['AWS S3', 'Redshift', 'Glue', 'Kinesis', 'SageMaker'],
    },
    {
      title: 'Security & Networks',
      icon: Shield,
      skills: ['Wazuh', 'Packet Tracer', 'IDS', 'UEBA'],
    },
    {
      title: 'AI & Multi-Agent Tools',
      icon: Brain,
      skills: ['RAG', 'LangChain', 'Streamlit', 'FAISS'],
    },
  ];

  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'Fluent' },
    { name: 'English', level: 'Professional' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Icon className="text-cyan-400 mr-3" size={24} />
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Languages</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="text-center px-6 py-4 bg-slate-700/50 rounded-lg hover:bg-cyan-500/20 transition-colors"
              >
                <p className="text-lg font-semibold text-cyan-400">{lang.name}</p>
                <p className="text-sm text-gray-300">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
