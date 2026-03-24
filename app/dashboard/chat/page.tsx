"use client";
import React, { useState } from "react";
import {
  Send,
  Paperclip,
  Copy,
  RotateCcw,
  MoreVertical,
  Brain,
  Zap,
  BarChart3,
  Search,
  Settings,
  Shield,
  Trash2,
  X,
  User,
  MessageSquare,
  TrendingUp,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "@/hooks/useChat";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatSection() {
  const {
    messages,
    inputValue,
    setInputValue,
    loading,
    handleSendMessage,
    handleFileInputChange,
    triggerFileUpload,
    handleCopyMessage,
    startNewChat,
    fileInputRef,
  } = useChat();

  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className="flex h-full bg-white rounded-md border border-border overflow-hidden shadow-sm relative">
      {/* Mobile Toggle Button (Nexus Style) */}
      <button
        onClick={() => setSidebarVisible(!sidebarVisible)}
        className="lg:hidden absolute top-4 left-4 z-[80] p-2 rounded-md bg-secondary border border-border text-foreground"
      >
        {sidebarVisible ? (
          <X className="h-4 w-4" />
        ) : (
          <MoreVertical className="h-4 w-4" />
        )}
      </button>

      {/* History Sidebar */}
      <aside
        className={cn(
          "absolute lg:relative z-[70] h-full w-72 bg-white border-r border-border flex flex-col transition-transform duration-300",
          sidebarVisible
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="p-4 border-b border-border flex flex-col gap-3">
          <Button
            onClick={startNewChat}
            className="w-full h-10 rounded-md bg-primary hover:bg-primary/90 text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            New Chat
          </Button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full h-10 pl-10 pr-4 bg-secondary border border-border rounded-md text-xs text-foreground focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground px-4 mt-2 mb-1">
            Recent Conversations
          </p>
          <HistoryItem
            active
            label="Customer Feedback"
            timestamp="3:41 PM"
            icon={MessageSquare}
          />
          <HistoryItem
            label="Market Sentiment"
            timestamp="Yesterday"
            icon={TrendingUp}
          />
          <HistoryItem
            label="Product Strategy"
            timestamp="Feb 22"
            icon={Brain}
          />
          <HistoryItem
            label="Regional Data"
            timestamp="Feb 21"
            icon={BarChart3}
          />
        </div>

        <div className="p-4 border-t border-border bg-secondary/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="h-8 w-8 rounded-md bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
              <Settings className="h-3.5 w-3.5" />
            </button>
            <button className="h-8 w-8 rounded-md bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
              <Shield className="h-3.5 w-3.5" />
            </button>
          </div>
          <button className="text-muted-foreground hover:text-destructive transition-colors p-2 rounded-md hover:bg-destructive/5">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </aside>

      {/* Main Chat Interface */}
      <main className="flex-1 flex flex-col relative overflow-hidden h-full bg-secondary/10">

        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8 custom-scrollbar">
          {messages.map((message) => (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              key={message.id}
              className={cn(
                "flex w-full group/msg",
                message.sender === "user" ? "justify-end" : "justify-start",
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] flex gap-4",
                  message.sender === "user" ? "flex-row-reverse" : "flex-row",
                )}
              >
                <div
                  className={cn(
                    "h-8 w-8 shrink-0 rounded flex items-center justify-center shadow-sm",
                    message.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-white border border-border text-primary",
                  )}
                >
                  {message.sender === "user" ? (
                    <User className="h-4 w-4" />
                  ) : message.type === "question" ? (
                    <Brain className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <BarChart3 className="h-4 w-4 text-primary" />
                  )}
                </div>

                <div className="space-y-2">
                  <div
                    className={cn(
                      "relative px-4 py-3 rounded-lg border text-sm leading-relaxed",
                      message.sender === "user"
                        ? "bg-primary text-white border-primary"
                        : "bg-white border-border text-foreground",
                    )}
                  >
                    {message.sender === "agent" ? (
                      <div className="markdown-content">
                        <StyledFeedbackResponse
                          content={message.text}
                          type={message.type}
                        />
                      </div>
                    ) : (
                      <p className="font-medium text-white">{message.text}</p>
                    )}

                    {/* Quick Actions */}
                    <div
                      className={cn(
                        "absolute -bottom-8 flex gap-2 opacity-0 group-hover/msg:opacity-100 transition-opacity duration-300",
                        message.sender === "user" ? "right-0" : "left-0",
                      )}
                    >
                      <button
                        onClick={() => handleCopyMessage(message.text)}
                        className="p-1.5 rounded-lg bg-white/80 border border-black/5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:scale-105 shadow-sm"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                      <button className="p-1.5 rounded-lg bg-white/80 border border-black/5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:scale-105 shadow-sm">
                        <RotateCcw className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <p
                    className={cn(
                      "text-[9px] font-black uppercase tracking-widest text-muted-foreground/40 px-2",
                      message.sender === "user" ? "text-right" : "text-left",
                    )}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    • {message.sender === "user" ? "You" : "Feedback Assistant"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start gap-4"
            >
              <div className="h-8 w-8 shrink-0 rounded bg-white border border-border flex items-center justify-center text-primary">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
              <div className="bg-white border border-border px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
                <span className="text-xs font-semibold text-muted-foreground italic">
                   AI is processing...
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-border bg-white">
          <form
            onSubmit={handleSendMessage}
            className="relative flex items-center gap-2 p-1 rounded-md bg-secondary border border-border focus-within:border-primary transition-all"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              className="hidden"
              accept=".csv"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={triggerFileUpload}
              className="h-10 w-10 rounded text-muted-foreground hover:text-primary transition-all"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask the Feedback Assistant..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm h-10 py-0 placeholder:text-muted-foreground font-sans"
            />
            <Button
              type="submit"
              disabled={!inputValue.trim() || loading}
              className="h-10 px-6 rounded-md font-bold text-xs flex items-center gap-2 shadow-sm shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all"
            >
              Send Message
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            <SuggestionChip label="Summarize feedback" />
            <SuggestionChip label="Market trends" />
            <SuggestionChip label="Competitive analysis" />
          </div>
        </div>
      </main>
    </div>
  );
}

function HistoryItem({ label, timestamp, active, icon: Icon }: any) {
  return (
    <button
      className={cn(
        "flex items-center gap-3 w-full h-12 px-3 rounded-md border transition-all duration-200",
        active
          ? "bg-primary/5 border-primary/20 text-primary"
          : "bg-transparent border-transparent text-muted-foreground hover:bg-secondary hover:text-foreground",
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <div className="text-left overflow-hidden">
        <p className="text-xs font-semibold truncate">{label}</p>
        <p className="text-[10px] text-muted-foreground/60 font-medium">
          {timestamp}
        </p>
      </div>
    </button>
  );
}

function SuggestionChip({ label }: { label: string }) {
  return (
    <button className="whitespace-nowrap px-4 py-2 rounded-full bg-white border border-border text-muted-foreground text-[11px] font-bold hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all shadow-sm active:scale-95">
      {label}
    </button>
  );
}

function StyledFeedbackResponse({
  content,
  type,
}: {
  content: string;
  type?: string;
}) {
  const sections = content.split("\n\n");

  return (
    <div className="space-y-6">
      <div className="font-sans leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>

      {type === "feedback" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                Optimization
              </span>
            </div>
            <p className="text-xs font-bold text-foreground">
              Feature Engagement High
            </p>
          </div>
          <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-3.5 w-3.5 text-destructive" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-destructive">
                 Risk Area
              </span>
            </div>
            <p className="text-xs font-bold text-foreground">
              Latency Threshold Peak
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
