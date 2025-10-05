"use client";

export function CreatorFooter() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16">
      <div className="container mx-auto px-4 text-center space-y-8">
        {/* Creator Highlight */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Built by
            </h2>
            <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sai Ravi Charan
            </h1>
          </div>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            AI Engineer & Full-Stack Developer passionate about creating intelligent solutions
          </p>
        </div>

        {/* Social Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/SaiRaviCharan/RAG-ChatBot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            ⭐ Star on GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sai-ravi-charan-neerumalla-b04740278/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            🔗 Connect on LinkedIn
          </a>
        </div>

        {/* Love Message */}
        <div className="flex items-center justify-center gap-2 text-white/60">
          <span>Made with</span>
          <span className="text-red-400">❤️</span>
          <span>for the AI community</span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['Next.js', 'TypeScript', 'AI SDK', 'PostgreSQL', 'Google Gemini'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}