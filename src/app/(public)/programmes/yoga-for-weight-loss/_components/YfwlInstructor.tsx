import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const DOC_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA5zL22td8TTbTxigp_x0g5N-JX-Ye-N7Yf0KQNqNv-Vdq-ZsHcITCnk4BrNwPxhq7stw2qK0F9Rt7ON9nc81JtNQvcGCSJXdN6sXcPVnedf5AIpCjKQjbkHZbZELuEls5WiMw5TSAB7BpYbcM4Z5QMU3sXML69reYQwvE6mZIS9aejrAhaAY6I94IdjQ3KdvJ2BrFtwdNTVk1C5Mte7j35nBosJSqWUmJ_dGV_Fpr4OU0HzfC4D3DxAt2ftS6FbMkCQx5COJKOION_";

export function YfwlInstructor() {
  return (
    <ScrollReveal className="bg-[color:var(--yfwl-surface-container-high)] px-6 py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
        <div className="flex-1">
          <Image
            src={DOC_IMG}
            alt="Professional medical doctor in a soft setting smiling warmly at the camera"
            width={960}
            height={720}
            className="rounded-2xl shadow-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex-1 space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[color:var(--yfwl-primary)]">
            Meet Dr. Sarah Chen
          </span>
          <h2 className="yfwl-text-h2 text-[color:var(--yfwl-on-surface)]">
            A Journey from Medical Burnout to Holistic Health
          </h2>
          <p className="yfwl-text-body-lg text-[color:var(--yfwl-on-surface-variant)]">
            &quot;As a physician, I was advising patients on health while my own body was failing under
            the weight of stress and poor habits. I discovered that yoga isn&apos;t just about
            flexibility—it&apos;s a clinical tool to reset the metabolism and lower
            hypertension.&quot;
          </p>
          <p className="yfwl-text-body-lg text-[color:var(--yfwl-on-surface-variant)]">
            This program is the synthesis of medical science and ancient wisdom, tested on thousands
            of patients who had &apos;given up&apos; on weight loss.
          </p>
          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="yfwl-text-h3 text-[color:var(--yfwl-primary)]">15k+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--yfwl-outline)]">
                Patients Helped
              </div>
            </div>
            <div>
              <div className="yfwl-text-h3 text-[color:var(--yfwl-primary)]">12 yrs</div>
              <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--yfwl-outline)]">
                Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
