import { FolderGit2, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Social Media Sentiment Analysis & Trend Summarization',
      period: '11/2025 - Present',
      description:
        'Development of a complete AWS pipeline for sentiment analysis and automatic summary generation, integrating SageMaker for NLP and Bedrock for contextual synthesis with QuickSight visualization.',
      tools: ['AWS Lambda', 'Glue', 'Athena', 'S3', 'SageMaker', 'Bedrock', 'QuickSight'],
      highlight: true,
    },
    {
      title: 'Multi-Agent Fraud Detection System (Claims Data Analyst)',
      period: '09/2025 – 11/2025',
      description:
        'Development of an intelligent multi-agent system for fraud detection in insurance claims. Implementation of an interactive analytical dashboard for trend and anomaly visualization using autonomous agents.',
      tools: ['LangChain', 'RAG', 'Streamlit', 'Python', 'FAISS'],
      highlight: true,
    },
    {
      title: 'Intrusion Detection System (IDS)',
      period: '2025',
      description:
        'Implementation of an IDS based on Wazuh and CALDERA for real-time threat detection and response. Application of behavioral analysis algorithms (Isolation Forest, UEBA) and creation of a dynamic dashboard.',
      tools: ['Wazuh', 'CALDERA', 'Python', 'UEBA'],
      highlight: false,
    },
    {
      title: 'QuickFood - Delivery Platform',
      period: '2024',
      description:
        'Creation of a complete delivery website with customer journey management and fluid interface.',
      tools: ['React', 'Node.js', 'SQL'],
      highlight: false,
    },
    {
      title: 'TuniPath - University Guidance Mobile App',
      period: '2024',
      description:
        'Design and development of an interactive mobile application helping tourists plan and optimize their stay in Tunisia.',
      tools: ['Flutter', 'Firebase'],
      highlight: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-[1.02] ${
                project.highlight
                  ? 'border-cyan-500 md:col-span-2'
                  : 'border-slate-700 hover:border-cyan-500'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <FolderGit2 className="text-cyan-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <ExternalLink
                  className="text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors"
                  size={20}
                />
              </div>

              <p className="text-gray-400 text-sm mb-4">{project.period}</p>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
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
