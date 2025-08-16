import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { CourseProgress } from "@/components/dashboard/course-progress"
import { RecentLessons } from "@/components/dashboard/recent-lessons"
import { Announcements } from "@/components/dashboard/announcements"

export function DashboardPage() {
  // Mock data for demo
  const mockUser = {
    id: "dashboard-user",
    email: "user@learnforge.com",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    app_metadata: {},
    user_metadata: {},
    aud: "authenticated",
    role: "authenticated"
  }

  const mockProfile = {
    id: "dashboard-profile",
    user_id: "dashboard-user",
    name: "John Doe",
    email: "user@learnforge.com",
    role: "student" as const,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={mockUser} profile={mockProfile} />
      <main className="container mx-auto px-4 py-8">
        <DashboardStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <CourseProgress />
          <RecentLessons />
        </div>
        <Announcements />
      </main>
    </div>
  )
}
