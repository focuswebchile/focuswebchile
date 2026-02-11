import Link from "next/link"

type BreadcrumbItem = {
  label: string
  href?: string
}

type SiteBreadcrumbProps = {
  items: BreadcrumbItem[]
  className?: string
}

export function SiteBreadcrumb({ items, className }: SiteBreadcrumbProps) {
  if (!items.length) return null

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {item.href && !isLast ? (
                <Link className="transition-colors hover:text-primary" href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "font-medium text-foreground" : ""}>{item.label}</span>
              )}
              {!isLast ? <span aria-hidden="true">/</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
