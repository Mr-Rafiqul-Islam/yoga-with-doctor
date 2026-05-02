import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BADGE_SRC = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKhwqTZGtdySSgPZfsWNrpGeeveLKk81n10GNthHsgzwHo4atmUVENgwG-TMLfHDuzk603SiGAuy4u1vM7qhbvXeqDJ1I0IAWdeglGEHtc99-Bc0pQ5vIAH0waHxn1dzvuvpAU9qheTIcrtq_Lv6s5hee3CgymH353XEVlpIg6k3S8_E1wRByMvWb8sgcCSxMnX84zb7_qEojvOjsljy1xhFBc8C-oVMjmvN92yKPS7hAgppuerYwI4IM73sUFesqr6PHGch121pea",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB0bEGCvISUZUVKt7dUhTWIbyBjuI4LB0-bXIn51Mw0DgEbiucrvA-JwU4OJcyGtGc2_jcK26T1pMOPHEquzVe6Qsk5AAXr8nGrKqgJO1C3Un4fULbbhKRE1T7-cUMwFGaD8-vlSDUGACk9YsHtdMekC88jge6pA154qbmUeQ_GYruD1D--V9ubvIP9zh3cTKznhGxlBA0fA7tqShJb3jeaSYYPhg4wLKUrKHe7QlU9l1IHNRQQ-vPO-NyhBVzqxZYUxBalEikyQFXo",
];

const DOCTOR_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA6CJxM-NAUQooloy5ItvPOTaG3bvKq9E-Galgzyo7_iW8wOHzJcbMtw9gJzkKfR-yputroLw68tX8riO1sBYINrWMh0LW-VMiXTq_-z-P3ajsKnswoXw9BkqPDcWjTqTfeCzkSZFhJ9vov-f6TOBagk0rhipJMMsGP5Hy2H5YGCsVhbmymUHGaqm-15Y2IJt90qk89uFbMCkEWapZCZqV1QkdoUD5cfn3Ykd97muFMIRKjAykWYcEEhdaZ1qnx7jYVomJ6hXBxtHN_";

export function PcpInstructor() {
  return (
    <ScrollReveal className="mx-auto max-w-7xl px-8 py-24" delay={0.1}>
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="pcp-text-h2 text-[color:var(--color-on-surface)]">
            Designed by Medicine, <span className="italic text-[color:var(--color-primary)]">Softened by Yoga</span>
          </h2>
          <p className="pcp-text-body-lg text-[color:var(--color-on-surface-variant)]">
            &ldquo;As an OB-GYN for over 15 years, I saw too many women forced into a sedentary lifestyle out of fear,
            only to experience more complications during labor. I created Sanctuary Yoga to provide a clinically safe, yet
            deeply nurturing path for movement.&rdquo;
          </p>
          <div className="pt-4">
            <p className="pcp-text-h3 text-[color:var(--color-on-surface)]">Dr. Elena Rossi</p>
            <p className="pcp-label-caps mt-1 text-[color:var(--color-primary)]">
              Chief of Prenatal Care &amp; Lead Instructor
            </p>
          </div>
          <div className="flex gap-4 pt-6">
            {BADGE_SRC.map((src) => (
              <Image
                key={src}
                alt=""
                className="h-16 w-16 rounded-full object-cover opacity-50 grayscale"
                height={64}
                src={src}
                width={64}
              />
            ))}
          </div>
        </div>
        <div className="group relative">
          <div className="absolute -inset-4 rounded-[3rem] bg-[color:var(--color-secondary-container)]/20 transition-transform group-hover:scale-105" />
          <Image
            alt="Lead instructor"
            className="relative aspect-square rounded-[2.5rem] object-cover shadow-xl"
            height={560}
            src={DOCTOR_IMG}
            width={560}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}
