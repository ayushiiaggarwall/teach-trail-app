import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { CourseProgress } from "@/components/dashboard/course-progress"
import { RecentLessons } from "@/components/dashboard/recent-lessons"
import { Announcements } from "@/components/dashboard/announcements"

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
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
