import { ContactDetailItem } from "./ContactDetailItem";

export type ContactDetail = {
  icon: string;
  label: string;
  value: React.ReactNode;
};

const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: "mail",
    label: "Email",
    value: (
      <a href="mailto:support@yogawithdoctor.com">support@yogawithdoctor.com</a>
    ),
  },
  {
    icon: "location_on",
    label: "Office",
    value: "House-56, Road-1, Block-A, Aftabnagar. Badda. Dhaka",
  },
  {
    icon: "schedule",
    label: "Working Hours",
    value: "Mon-Fri, 9am - 5pm",
  },
];

export function ContactDetailsSection() {
  return (
    <section className="space-y-8 mb-12" aria-label="Contact details">
      {CONTACT_DETAILS.map((item) => (
        <ContactDetailItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          value={item.value}
        />
      ))}
    </section>
  );
}
