import { ReactNode } from "react"

export default function MarketplaceLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full">
      <div>{children}</div>
    </section>
  )
}


