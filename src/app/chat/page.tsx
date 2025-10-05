"use client";

import { Fragment, useState } from "react";
import { useChat } from "@ai-sdk/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputBody,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { Response } from "@/components/ai-elements/response";
import { Loader } from "@/components/ai-elements/loader";
import { ArrowLeft, MessageSquare, Upload, Bot, User, Loader2 } from "lucide-react";
import { CreatorFooter } from "@/components/creator-footer-simple";

export default function RAGChatBot() {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const { messages, sendMessage, status, error } = useChat();

  const handleSubmit = (message: PromptInputMessage) => {
    if (!message.text) {
      return;
    }
    setButtonPressed(true);
    sendMessage({
      text: message.text,
    });
    setInput("");
    setIsTyping(false);
    setTimeout(() => setButtonPressed(false), 200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) {
        // Add visual feedback
        setButtonPressed(true);
        // Add a slight delay for visual feedback
        setTimeout(() => {
          handleSubmit({ text: input });
        }, 100);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  return (
    <>
    <div className="h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 py-4 h-full flex flex-col">
        {/* Header */}
        <div className="mb-4 flex-shrink-0">
          <Link href="/" prefetch={true}>
            <Button variant="ghost" className="mb-2 hover:bg-gray-100 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Chat with Your Documents
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                Ask questions about your uploaded documents and get intelligent answers.
              </p>
            </div>
            <Link href="/upload">
              <Button variant="outline" className="hidden sm:flex">
                <Upload className="mr-2 h-4 w-4" />
                Upload New Document
              </Button>
            </Link>
          </div>
        </div>

        {/* Chat Container */}
        <Card className="flex-1 flex flex-col shadow-lg overflow-hidden">
          <div className="flex-1 flex flex-col">
            {error && (
              <div className="mx-4 mt-4 rounded-lg border bg-red-50 border-red-200 p-4 text-red-800">
                <p className="font-medium">Error occurred:</p>
                <p className="text-sm mt-1">{error.message}</p>
              </div>
            )}

            {messages.length === 0 && !error && (
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="text-center space-y-4 max-w-md">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Start a conversation
                  </h3>
                  <p className="text-gray-600">
                    Ask me anything about your uploaded documents. I'll search through them and provide accurate answers.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Try asking:</p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>"What is this document about?"</p>
                      <p>"Summarize the main points"</p>
                      <p>"What are the key findings?"</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Conversation className="flex-1 min-h-0 max-h-full overflow-y-auto">
              <ConversationContent className="p-4 space-y-4 pb-8">
                {messages.map((message, messageIndex) => (
                  <div key={message.id} className="message-enter">
                    {message.parts.map((part, index) => {
                      if (part.type === "text") {
                        return (
                          <Fragment key={`${message.id}-${index}`}>
                            <Message 
                              from={message.role}
                              className={`${
                                message.role === "user" 
                                  ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 shadow-sm" 
                                  : "bg-gradient-to-r from-white to-gray-50 border-gray-200 shadow-md"
                              } border rounded-xl p-4 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.01]`}
                            >
                                <div className="flex items-start gap-3 w-full">
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                    message.role === "user" 
                                      ? "bg-blue-600 text-white" 
                                      : "bg-gray-600 text-white"
                                  }`}>
                                    {message.role === "user" ? (
                                      <User className="w-4 h-4" />
                                    ) : (
                                      <Bot className="w-4 h-4" />
                                    )}
                                  </div>
                                  <div className="flex-1 overflow-visible min-w-0">
                                    <Response className="whitespace-pre-wrap break-words">{part.text}</Response>
                                  </div>
                                </div>
                              </Message>
                            </Fragment>
                          );
                        }
                        return null;
                    })}
                  </div>
                ))}
                {(status === "submitted" || status === "streaming") && (
                  <div className="message-enter bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-xl p-4 shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 text-white flex items-center justify-center animate-pulse">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce thinking-dot-1"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce thinking-dot-2"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce thinking-dot-3"></div>
                          </div>
                          <span className="text-sm text-gray-500 typing-indicator">AI is thinking...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </ConversationContent>
              <ConversationScrollButton />
            </Conversation>
          </div>

          {/* Enhanced Input Area */}
          <div className="border-t bg-gradient-to-r from-gray-50 to-white p-4 md:p-6 overflow-visible flex-shrink-0">
            <div className="max-w-4xl mx-auto">
              {/* Input Container with Modern Design */}
              <div className="relative overflow-visible">
                <PromptInput onSubmit={handleSubmit} className="max-w-none">
                  <PromptInputBody>
                    <div className="relative group">
                      {/* Background Glow Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Main Input Area */}
                      <div className="relative bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md focus-within:shadow-lg focus-within:border-blue-400 transition-all duration-300 overflow-visible">
                        <PromptInputTextarea
                          value={input}
                          onChange={handleInputChange}
                          onKeyDown={handleKeyPress}
                          placeholder="✨ Ask me anything about your documents... I'm here to help!"
                          className="min-h-[80px] w-full px-4 py-4 bg-transparent border-0 resize-none focus:ring-0 focus:outline-none text-gray-800 placeholder:text-gray-500 text-base leading-relaxed"
                          style={{ 
                            boxShadow: 'none',
                            outline: 'none',
                            border: 'none'
                          }}
                          rows={3}
                        />
                        
                        {/* Input Footer with Send Button */}
                        <div className="flex items-center justify-between px-4 py-4 border-t border-gray-100">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="inline-flex items-center">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              {isTyping ? (
                                <span className="typing-indicator">Typing...</span>
                              ) : (
                                'Ready to chat'
                              )}
                            </span>
                            <div className="hidden sm:flex items-center space-x-2">
                              <kbd className="px-2 py-1 text-xs bg-gray-100 border border-gray-200 rounded">Enter</kbd>
                              <span>to send</span>
                              <span>•</span>
                              <kbd className="px-2 py-1 text-xs bg-gray-100 border border-gray-200 rounded">Shift+Enter</kbd>
                              <span>for new line</span>
                            </div>
                          </div>
                          
                          <PromptInputToolbar className="flex items-center p-1">
                            <PromptInputSubmit 
                              className={`group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl ${buttonPressed ? 'button-press' : ''}`}
                              disabled={!input.trim()}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                              <div className="relative flex items-center justify-center space-x-2 min-w-[120px]">
                                {(status === "submitted" || status === "streaming") ? (
                                  <div className="flex items-center space-x-2">
                                    <div className="flex space-x-1">
                                      <div className="w-2 h-2 bg-white rounded-full animate-bounce thinking-dot-1"></div>
                                      <div className="w-2 h-2 bg-white rounded-full animate-bounce thinking-dot-2"></div>
                                      <div className="w-2 h-2 bg-white rounded-full animate-bounce thinking-dot-3"></div>
                                    </div>
                                    <span>Thinking...</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center space-x-2">
                                    <span>Send</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            </PromptInputSubmit>
                          </PromptInputToolbar>
                        </div>
                      </div>
                    </div>
                  </PromptInputBody>
                  <PromptInputTools />
                </PromptInput>
              </div>
              
              {/* Helper Text */}
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-400 flex items-center justify-center space-x-4">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    AI Assistant Online
                  </span>
                  <span>•</span>
                  <span>Powered by Google Gemini</span>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
    
    {/* Creator Footer - Outside main container */}
    <CreatorFooter />
    </>
  );
}