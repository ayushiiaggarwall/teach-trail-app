import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { HeroSection } from "@/components/landing/hero-section"
import { WhoItsForSection } from "@/components/landing/who-its-for-section"
import { SyllabusSection } from "@/components/landing/syllabus-section"
import { ToolsSection } from "@/components/landing/tools-section"
import { FeaturesInteractiveSection } from "@/components/landing/features-section-interactive"
import { AboutSection } from "@/components/landing/about-section"
import { TestimonialsInteractive } from "@/components/landing/testimonials-interactive"
import { PricingSection } from "@/components/landing/pricing-section"
import { CTASection } from "@/components/landing/cta-section"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ParticlesBackground } from "@/components/ui/particles-background"

// Import page components
import { LoginPage } from "@/pages/auth/LoginPage"
import { SignupPage } from "@/pages/auth/SignupPage"
import { DashboardPage } from "@/pages/dashboard/DashboardPage"
import { AdminPage } from "@/pages/admin/AdminPage"
import { ResetPasswordPage } from "@/pages/auth/ResetPasswordPage"
import { UpdatePasswordPage } from "@/pages/auth/UpdatePasswordPage"

function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global background effects */}
      <ParticlesBackground particleCount={80} className="fixed inset-0 opacity-20" />
      
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <WhoItsForSection />
        <SyllabusSection />
        <ToolsSection />
        <FeaturesInteractiveSection />
        <AboutSection />
        <TestimonialsInteractive />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Router>
        <div className="min-h-screen bg-background relative font-sans antialiased">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignupPage />} />
            <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
            <Route path="/auth/update-password" element={<UpdatePasswordPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
