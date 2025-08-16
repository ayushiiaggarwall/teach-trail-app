"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PasswordForm } from "./password-form"
import { OAuthButtons } from "./oauth-buttons"
import { EmailLinkForm } from "./email-link-form"
import { Link } from "@/components/ui/link"

export function SignupForm() {
  const [authMethod, setAuthMethod] = useState<"password" | "email" | "oauth">("password")

  return (
    <div className="space-y-6">
      <PasswordForm mode="signup" />
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <OAuthButtons mode="signup" />

      <div className="text-center text-sm">
        <span className="text-muted-foreground">Already have an account? </span>
        <Link href="/auth/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  )
}