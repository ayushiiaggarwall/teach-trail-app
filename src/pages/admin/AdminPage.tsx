import { AdminHeader } from "@/components/admin/admin-header"
import { AdminStats } from "@/components/admin/admin-stats"
import { UserManagement } from "@/components/admin/user-management"
import { ContentManagement } from "@/components/admin/content-management"
import { PaymentOverview } from "@/components/admin/payment-overview"
import { SystemHealth } from "@/components/admin/system-health"

export function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
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
