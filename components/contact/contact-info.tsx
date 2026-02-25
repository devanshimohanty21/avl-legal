import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Patna, Bihar, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@avllegal.com",
  },
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-sm border border-border bg-card p-8">
        <h3 className="font-serif text-xl font-semibold text-card-foreground">
          Get in Touch
        </h3>
        <ul className="mt-6 flex flex-col gap-6">
          {contactDetails.map((detail) => (
            <li key={detail.label} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                <detail.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {detail.label}
                </p>
                <p className="mt-1 text-sm font-medium text-card-foreground">
                  {detail.value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-sm border border-border bg-card p-8">
        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-accent" />
          <h3 className="font-serif text-xl font-semibold text-card-foreground">
            Business Hours
          </h3>
        </div>
        <ul className="mt-6 flex flex-col gap-4">
          {businessHours.map((item) => (
            <li
              key={item.day}
              className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
            >
              <span className="text-sm text-muted-foreground">{item.day}</span>
              <span className="text-sm font-medium text-card-foreground">
                {item.hours}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
