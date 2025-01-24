import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full">
      <div>{children}</div>
    </section>
  )
}


