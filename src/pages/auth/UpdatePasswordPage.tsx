import { UpdatePasswordForm } from "@/components/auth/update-password-form"

export function UpdatePasswordPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <UpdatePasswordForm />
      </div>
    </div>
  )
}
