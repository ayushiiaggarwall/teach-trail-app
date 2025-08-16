import { AdminHeader } from "@/components/admin/admin-header"
import { AdminStats } from "@/components/admin/admin-stats"
import { UserManagement } from "@/components/admin/user-management"
import { ContentManagement } from "@/components/admin/content-management"
import { PaymentOverview } from "@/components/admin/payment-overview"
import { SystemHealth } from "@/components/admin/system-health"

export function AdminPage() {
  // Mock data for demo
  const mockUser = {
    id: "admin-user",
    email: "admin@learnforge.com",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    app_metadata: {},
    user_metadata: {},
    aud: "authenticated",
    role: "authenticated"
  }

  const mockProfile = {
    id: "admin-profile",
    user_id: "admin-user",
    name: "Admin User",
    email: "admin@learnforge.com",
    role: "admin" as const,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={mockUser} profile={mockProfile} />
      <main className="container mx-auto px-4 py-8">
        <AdminStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <UserManagement />
          <ContentManagement />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <PaymentOverview />
          <SystemHealth />
        </div>
      </main>
    </div>
  )
}
