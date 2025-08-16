import { AuthCard } from "@/components/auth/auth-card"
import { AuthCarousel } from "@/components/auth/auth-carousel"
import { LoginForm } from "@/components/auth/login-form"

export function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <AuthCarousel />
        <AuthCard 
          title="Welcome back" 
          description="Sign in to continue your learning journey"
          type="login"
        >
          <LoginForm />
        </AuthCard>
      </div>
    </div>
  )
}
