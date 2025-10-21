import type { LucideIcon } from "lucide-react"

interface ContactButtonProps {
  icon: LucideIcon
  label: string
  href: string
  description: string
}

export default function ContactButton({ icon: Icon, label, href, description }: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 wood-accent"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/20 transition-colors flex-shrink-0">
          <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{label}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </a>
  )
}
