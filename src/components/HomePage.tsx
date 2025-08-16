import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function HomePage() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            <span className="text-xl font-bold">LearnForge</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative"
            >
              <span className="sr-only">Toggle theme</span>
              {isDark ? '☀️' : '🌙'}
            </Button>
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="pt-24">
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <span className="text-sm text-purple-400">✨ New features available</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              From No-Code to Product
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Master the complete product development cycle. From idea to deployment, 
              learn to build without writing a single line of code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Start Learning
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>

            {/* Success Card */}
            <Card className="max-w-md mx-auto bg-white/5 backdrop-blur-md border-white/10 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white">Success Guarantee</h3>
                  <p className="text-sm text-gray-400">Build your first product in 30 days</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}