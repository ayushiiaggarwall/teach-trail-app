import { AuthCard } from "@/components/auth/auth-card"
import { AuthCarousel } from "@/components/auth/auth-carousel"
import { SignupForm } from "@/components/auth/signup-form"

export function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <AuthCarousel />
        <AuthCard 
          title="Create your account" 
          description="Start your no-code journey today"
          type="signup"
        >
          <SignupForm />
        </AuthCard>
      </div>
    </div>
  )
}
