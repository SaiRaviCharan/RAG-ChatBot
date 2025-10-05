import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Upload, Brain, Search, Zap, Shield } from "lucide-react";
import { CreatorFooter } from "@/components/creator-footer-simple";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAG Chatbot - Transform Documents into Intelligent Conversations",
  description: "Experience the power of RAG (Retrieval-Augmented Generation) AI. Upload PDFs and chat with your documents using advanced vector search and Google Gemini AI. Built by Sai Ravi Charan.",
  openGraph: {
    title: "RAG Chatbot - AI Document Intelligence",
    description: "Transform your documents into intelligent conversations using cutting-edge RAG technology.",
    images: ["/og-home.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RAG Chatbot
            </h1>
            {/* RAG Full Form */}
            <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full">
              <span className="text-sm md:text-base font-medium text-gray-700">
                <span className="text-blue-600 font-semibold">R</span>etrieval-<span className="text-blue-600 font-semibold">A</span>ugmented <span className="text-blue-600 font-semibold">G</span>eneration
              </span>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Transform your documents into intelligent conversations. Upload PDFs and chat with your content using advanced AI.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/upload" prefetch={true}>
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-colors">
                <Upload className="mr-2 h-5 w-5" />
                Upload Document
              </Button>
            </Link>
            <Link href="/chat" prefetch={true}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg transition-colors">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Chatting
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Upload className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Easy Upload</CardTitle>
              <CardDescription>
                Simply drag and drop your PDF files or click to upload. Supports multiple document formats.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">AI-Powered Analysis</CardTitle>
              <CardDescription>
                Advanced AI processes your documents and creates semantic embeddings for intelligent search.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">Natural Conversations</CardTitle>
              <CardDescription>
                Ask questions in plain English and get accurate answers based on your document content.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="text-xl">Semantic Search</CardTitle>
              <CardDescription>
                Find relevant information even when using different words or phrases than in your documents.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-xl">Lightning Fast</CardTitle>
              <CardDescription>
                Get instant responses powered by Google's Gemini AI and optimized vector search technology.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <CardTitle className="text-xl">Secure & Private</CardTitle>
              <CardDescription>
                Your documents are processed securely with authentication and stored in your private database.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* How it Works Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Upload Your Document</h3>
              <p className="text-gray-600">Upload any PDF document you want to chat with</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">AI Processing</h3>
              <p className="text-gray-600">Our AI analyzes and creates searchable chunks from your content</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Start Chatting</h3>
              <p className="text-gray-600">Ask questions and get intelligent answers based on your document</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Upload your first document and experience the power of AI-driven conversations.
          </p>
          <Link href="/upload" prefetch={true}>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg transition-colors">
              <Upload className="mr-2 h-5 w-5" />
              Upload Your First Document
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Creator Footer */}
      <CreatorFooter />
    </div>
  );
}