import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
     
        <main className="flex flex-col gap-4 p-4 lg:gap-6">
          {children}
        </main>
    
    </div>
  )
}
