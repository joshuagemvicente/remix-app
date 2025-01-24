import { ReactNode } from "react"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full">
      <div>{children}</div>
    </section>
  )
}

