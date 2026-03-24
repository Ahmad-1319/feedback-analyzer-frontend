"use client";
import React from "react";
import {
  BarChart3,
  MessageSquare,
  TrendingUp,
  Settings,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
  Brain,
  Zap,
  ArrowUpRight,
  Users,
  Search,
  CheckCircle2,
  Shield,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDashboard } from "@/hooks/useDashboard";
import { cn } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import ChatSection from "./chat/page";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
  const {
    user,
    logout,
    sidebarOpen,
    activeTab,
    setActiveTab,
    toggleSidebar,
    analyticsData,
    historicalData,
    recommendations,
    getSentimentChartData,
    getThemeChartData,
    isAnalyzing,
  } = useDashboard();

  return (
    <div className="flex h-screen bg-secondary/20 text-foreground font-sans overflow-hidden">

      {/* Sidebar Overlay for Mobile */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full bg-white border-r border-border transition-all duration-300 ease-in-out flex flex-col overflow-hidden",
          sidebarOpen ? "w-64" : "w-0 lg:w-20 lg:opacity-100",
        )}
      >
        <div className="h-full flex flex-col bg-white border-r border-border">
          <div className="h-16 flex items-center px-6 mb-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              {sidebarOpen && (
                <span className="text-lg font-bold tracking-tight whitespace-nowrap text-foreground">
                  FeedbackNexus
                </span>
              )}
            </div>
          </div>

          <nav className="flex-1 px-4 space-y-2">
            <SidebarNavItem
              icon={LayoutDashboard}
              label="Dashboard"
              active={activeTab === "analytics"}
              expanded={sidebarOpen}
              onClick={() => setActiveTab("analytics")}
            />
            <SidebarNavItem
              icon={MessageSquare}
              label="Chat"
              active={activeTab === "chat"}
              expanded={sidebarOpen}
              onClick={() => setActiveTab("chat")}
            />
            <SidebarNavItem
              icon={TrendingUp}
              label="Insights"
              active={activeTab === "insights"}
              expanded={sidebarOpen}
              onClick={() => setActiveTab("insights")}
            />
            <div className="pt-4 pb-2">
              <div
                className={cn(
                  "h-px bg-border mx-4 mb-4",
                  !sidebarOpen && "hidden",
                )}
              />
            </div>
            <SidebarNavItem
              icon={Settings}
              label="Settings"
              expanded={sidebarOpen}
            />
          </nav>

          <div className="p-4 border-t border-border bg-secondary/10">
            <button
              onClick={logout}
              className={cn(
                "flex items-center gap-4 w-full h-10 px-4 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-colors group",
                !sidebarOpen && "justify-center",
              )}
            >
              <LogOut className="h-4 w-4 shrink-0 transition-transform" />
              {sidebarOpen && (
                <span className="font-semibold text-xs">
                  Logout
                </span>
              )}
            </button>
            {sidebarOpen && (
              <div className="mt-4 flex items-center gap-3 px-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
                  {user?.first_name?.charAt(0)}
                  {user?.last_name?.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-foreground truncate">
                    {user?.first_name} {user?.last_name}
                  </p>
                  <p className="text-[10px] text-muted-foreground truncate">
                    Enterprise User
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out pt-16",
          sidebarOpen ? "lg:pl-64" : "lg:pl-20",
        )}
      >
        <header className="glass-header fixed top-0 h-16 flex items-center justify-between px-6 lg:px-8 z-40 lg:w-[calc(100%-256px)] right-0 left-0 lg:left-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 text-muted-foreground"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h2 className="text-sm font-bold text-foreground uppercase tracking-widest">
              {activeTab === "analytics" && "Dashboard"}
              {activeTab === "chat" && "Chat"}
              {activeTab === "insights" && "Insights"}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-secondary border border-border rounded-md">
              <Search className="h-3.5 w-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-xs text-foreground w-40 placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto relative p-8">
          <AnimatePresence mode="wait">
            {activeTab === "analytics" && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <AnalyticsView
                  analyticsData={analyticsData}
                  historicalData={historicalData}
                  recommendations={recommendations}
                  getSentimentChartData={getSentimentChartData}
                  getThemeChartData={getThemeChartData}
                />
              </motion.div>
            )}
            {activeTab === "chat" && (
              <motion.div
                key="chat"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full"
              >
                <ChatSection />
              </motion.div>
            )}
            {activeTab === "insights" && (
              <motion.div
                key="insights"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <InsightsView />
              </motion.div>
            )}
          </AnimatePresence>

          {isAnalyzing && (
            <div className="fixed bottom-8 right-8 z-[100]">
              <div className="bg-primary text-white px-6 py-4 rounded-md shadow-2xl flex items-center gap-3">
                <Loader2 className="h-4 w-4 animate-spin" />
                <p className="text-xs font-bold uppercase tracking-widest">
                  Analyzing Feedback...
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function SidebarNavItem({
  icon: Icon,
  label,
  active,
  onClick,
  expanded,
}: {
  icon: any;
  label: string;
  active?: boolean;
  onClick?: () => void;
  expanded: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 w-full h-10 px-3 rounded-md transition-colors",
        active
          ? "bg-primary text-white"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary",
        !expanded && "justify-center",
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      {expanded && (
        <span className="font-semibold text-sm whitespace-nowrap">
          {label}
        </span>
      )}
    </button>
  );
}

function AnalyticsView({
  analyticsData,
  historicalData,
  recommendations,
  getSentimentChartData,
  getThemeChartData,
}: any) {
  const stats = [
    {
      label: "Total Feedback",
      value: analyticsData?.total_feedbacks || 0,
      icon: Users,
      color: "text-primary",
    },
    {
      label: "Customer Satisfaction",
      value: analyticsData
        ? Math.round(analyticsData.satisfaction_index * 100)
        : 0,
      icon: TrendingUp,
      color: "text-primary",
      suffix: "%",
    },
    {
      label: "Identified Themes",
      value: analyticsData?.themes?.length || 0,
      icon: Brain,
      color: "text-primary",
    },
    {
      label: "Analysis Confidence",
      value: 98.4,
      icon: Shield,
      color: "text-primary",
      suffix: "%",
    },
  ];

  const sentimentData = getSentimentChartData();
  const themeData = getThemeChartData();

  return (
    <div className="space-y-8 pb-12">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="saas-card shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </span>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black">
                {stat.value}{stat.suffix}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Sentiment Distribution */}
        <Card className="lg:col-span-2 saas-card">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              Sentiment Distribution
            </CardTitle>
            <CardDescription>
              Breakdown of customer sentiment in latest feedback.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                  animationDuration={1500}
                  animationBegin={200}
                >
                  {sentimentData.map((entry: any, index: number) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.fill}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
          <div className="grid grid-cols-2 gap-2 px-8 pb-8">
            {sentimentData.map((entry: any, i: number) => (entry.value > 0 && 
              <div key={i} className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: entry.fill }}
                />
                <span className="text-xs text-muted-foreground font-semibold uppercase">
                  {entry.name}: {entry.value}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Theme Analytics */}
        <Card className="lg:col-span-3 saas-card overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              Feedback Themes
            </CardTitle>
            <CardDescription>
              Most recurring topics automated via AI taxonomy.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[250px] lg:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={themeData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="rgba(0,0,0,0.05)"
                />
                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 700 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 700 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="positive" radius={[4, 4, 0, 0]} barSize={40} fill="oklch(0.5 0.15 240)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Historical Trend */}
      {historicalData && historicalData.length > 0 && (
        <Card className="saas-card p-6">
          <CardHeader className="px-0">
            <CardTitle className="text-lg font-bold">
              Feedback Volume Trend
            </CardTitle>
          </CardHeader>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={historicalData.slice(-15)}>
                <Bar
                  dataKey="count"
                  fill="oklch(0.55 0.16 260)"
                  opacity={0.3}
                  radius={[2, 2, 0, 0]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {/* Actionable Insights Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="saas-card border-l-4 border-l-primary">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-4 w-4 text-primary" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
                Growth Recommendation
              </h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4 min-h-[60px]">
              {recommendations[0] || "No recommendations available at this time."}
            </p>
            <Button
              variant="link"
              className="p-0 text-primary h-auto font-bold text-xs"
            >
              Learn More <ArrowUpRight className="ml-1 h-3 w-3" />
            </Button>
          </CardContent>
        </Card>
        <Card className="saas-card border-l-4 border-l-destructive">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-4 w-4 text-destructive" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
                Critical Issue
              </h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4 min-h-[60px]">
              {recommendations[1] || "Monitoring for critical user friction points."}
            </p>
            <Button
              variant="link"
              className="p-0 text-destructive h-auto font-bold text-xs"
            >
              View Issues <ArrowUpRight className="ml-1 h-3 w-3" />
            </Button>
          </CardContent>
        </Card>
        <Card className="saas-card">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Insight Found
              </span>
            </div>
            <h4 className="text-sm font-bold text-foreground">
              Market Opportunity
            </h4>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Customers are showing increased interest in self-service analysis modules.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function InsightsView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="saas-card overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Product Roadmap
            </CardTitle>
            <CardDescription className="uppercase tracking-widest text-[10px] font-bold">
              Upcoming features & releases
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-md bg-secondary/50 border border-border">
              <div className="h-10 w-10 shrink-0 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                Q1
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Enhanced AI Models</p>
                <div className="w-full bg-border h-1 rounded-full mt-2">
                  <div className="bg-primary h-full rounded-full w-3/4" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-md bg-white border border-border opacity-60">
              <div className="h-10 w-10 shrink-0 rounded bg-secondary flex items-center justify-center text-muted-foreground font-bold text-xs text-center">
                Q2
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Real-time Integration</p>
                <div className="w-full bg-border h-1 rounded-full mt-2">
                  <div className="bg-primary h-full rounded-full w-1/4 opacity-30" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="saas-card p-12 flex flex-col items-center justify-center text-center space-y-6 border-primary/20 bg-primary/5">
          <div className="h-20 w-20 rounded bg-white flex items-center justify-center text-primary shadow-sm border border-border">
            <Zap className="h-10 w-10 fill-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">
            Expand Capabilities
          </CardTitle>
          <p className="text-muted-foreground max-w-sm">
             Upgrade your plan to unlock advanced reporting and enterprise-grade tools.
          </p>
          <Button className="h-12 rounded-md px-10 font-bold text-sm shadow-lg shadow-primary/20">
             View Upgrade Options
          </Button>
        </Card>
      </div>
    </div>
  );
}
