"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Share2, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function CreatorFooter() {
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Glare Animation 1 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent rounded-full blur-3xl animate-pulse opacity-60 -top-48 -left-48"></div>
          <div className="absolute w-96 h-96 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse opacity-60 -bottom-48 -right-48 animation-delay-1000"></div>
        </div>
        
        {/* Moving Glare Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-45 animate-glare-move opacity-40"></div>
        </div>

        {/* Particles Effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className={`absolute particle animate-float`}
              data-particle={i}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          {/* Creator Highlight */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/10 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Crafted with passion</span>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
                Built by
              </h2>
              <div className="relative inline-block">
                <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  Sai Ravi Charan
                </h1>
                {/* Glare overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-glare-sweep opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
            </div>

            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              AI Engineer & Full-Stack Developer passionate about creating intelligent solutions
            </p>
          </div>

          {/* Social Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onMouseEnter={() => setIsGitHubHovered(true)}
              onMouseLeave={() => setIsGitHubHovered(false)}
              onClick={() => window.open('https://github.com/sairavicharan', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <FaGithub className={`mr-2 h-5 w-5 transition-transform duration-300 ${isGitHubHovered ? 'rotate-12 scale-110' : ''}`} />
              <Star className={`mr-2 h-4 w-4 text-yellow-400 transition-transform duration-300 ${isGitHubHovered ? 'animate-pulse' : ''}`} />
              Star on GitHub
            </Button>

            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onMouseEnter={() => setIsLinkedInHovered(true)}
              onMouseLeave={() => setIsLinkedInHovered(false)}
              onClick={() => window.open('https://linkedin.com/in/sairavicharan', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <FaLinkedin className={`mr-2 h-5 w-5 transition-transform duration-300 ${isLinkedInHovered ? 'rotate-12 scale-110' : ''}`} />
              <Share2 className={`mr-2 h-4 w-4 transition-transform duration-300 ${isLinkedInHovered ? 'animate-pulse' : ''}`} />
              Connect on LinkedIn
            </Button>
          </div>

          {/* Love Message */}
          <div className="flex items-center justify-center gap-2 text-white/60">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>for the AI community</span>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {['Next.js', 'TypeScript', 'AI SDK', 'PostgreSQL', 'Google Gemini'].map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-white/10 text-white/80 border-white/20 hover:bg-white/20 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}