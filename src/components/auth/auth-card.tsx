"use client"

import { BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AuthCardProps {
  children: React.ReactNode
  title: string
  description?: string
  className?: string
  type?: "login" | "signup"
}

export function AuthCard({ children, title, description, className, type }: AuthCardProps) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-purple-600 via-accent to-primary">
      {/* Left side - Welcome section with floating circles */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="relative w-full h-full flex flex-col justify-center items-start p-12 text-white">
          {/* Floating circles with theme colors */}
          <div className="absolute top-20 right-32 w-32 h-32 bg-gradient-to-br from-primary to-yellow-300 rounded-full opacity-80 animate-float"></div>
          <div className="absolute top-1/3 left-16 w-24 h-24 bg-gradient-to-br from-accent to-purple-400 rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-20 w-20 h-20 bg-gradient-to-br from-purple-400 to-accent rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-gradient-to-br from-primary to-yellow-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-yellow-300 to-primary rounded-full opacity-40 animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-accent to-purple-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
          
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-12 z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">LearnForge</span>
          </div>
          
          {/* Welcome content */}
          <div className="z-10 max-w-md">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Welcome Page
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {title === "Welcome back" ? "Sign in to continue your no-code journey" : "Join our community of successful entrepreneurs"}
            </p>
            <div className="text-white/70 text-sm">
              www.learnforge.com
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <Card className={cn("w-full max-w-md border-0 shadow-none bg-card", className)}>
          <CardHeader className="text-center space-y-2 pb-8">
            {/* Mobile logo */}
            <div className="lg:hidden mx-auto w-12 h-12 bg-gradient-to-br from-purple-600 to-primary rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground">{title}</CardTitle>
            {description && (
              <CardDescription className="text-base text-muted-foreground">{description}</CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}