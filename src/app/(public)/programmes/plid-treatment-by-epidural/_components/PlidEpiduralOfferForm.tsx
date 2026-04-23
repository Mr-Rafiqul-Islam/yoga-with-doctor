"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { IMG } from "./epidural-assets";

export function PlidEpiduralOfferForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <ScrollReveal
      className="relative overflow-hidden bg-surface py-24 md:py-32"
      id="claim"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-headline text-4xl font-bold">
              The Path to a Pain-Free Life Starts Here
            </h2>
            <div className="mb-12 space-y-4">
              <div className="flex items-center justify-between border-b border-outline-variant/30 py-4">
                <span className="text-lg">Full Recovery System (All Modules)</span>
                <span className="font-bold text-on-surface-variant line-through opacity-50">$738</span>
              </div>
              <div className="flex items-center justify-between border-b border-outline-variant/30 py-4">
                <span className="text-lg">Private Community Access</span>
                <span className="font-bold text-on-surface-variant line-through opacity-50">$197</span>
              </div>
              <div className="flex items-center justify-between border-b border-outline-variant/30 py-4">
                <span className="text-lg">Lifetime Updates</span>
                <span className="font-bold text-on-surface-variant line-through opacity-50">$97</span>
              </div>
              <div className="flex items-center justify-between py-6">
                <span className="text-2xl font-bold">Total Value</span>
                <span className="text-2xl font-bold text-on-surface-variant line-through opacity-50">
                  $1,032
                </span>
              </div>
              <div className="rounded-lg border-2 border-dashed border-primary-container bg-primary-container/10 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-primary">Limited Time Offer</h3>
                    <p className="text-sm text-on-surface-variant">Valid for the next 48 hours only</p>
                  </div>
                  <span className="text-4xl font-bold text-primary">$197</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span className="text-xs font-semibold uppercase tracking-wider">100% Secure Checkout</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">workspace_premium</span>
                <span className="text-xs font-semibold uppercase tracking-wider">Doctor Led Program</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">history</span>
                <span className="text-xs font-semibold uppercase tracking-wider">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">group</span>
                <span className="text-xs font-semibold uppercase tracking-wider">5000+ Success Stories</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl bg-surface-container-high p-10 shadow-2xl">
            <h3 className="mb-8 text-2xl font-bold">Claim Your Recovery System</h3>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="mb-2 block text-sm font-bold text-on-surface-variant" htmlFor="epi-name">
                  Full Name
                </label>
                <input
                  className="w-full rounded-md border-none bg-surface-container-lowest px-4 py-3 transition-all focus:ring-2 focus:ring-primary/30"
                  id="epi-name"
                  name="name"
                  placeholder="Enter your full name"
                  type="text"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-on-surface-variant" htmlFor="epi-phone">
                  Phone Number
                </label>
                <input
                  className="w-full rounded-md border-none bg-surface-container-lowest px-4 py-3 transition-all focus:ring-2 focus:ring-primary/30"
                  id="epi-phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-bold text-on-surface-variant"
                  htmlFor="epi-condition"
                >
                  Current Spinal Condition
                </label>
                <select
                  className="w-full rounded-md border-none bg-surface-container-lowest px-4 py-3 transition-all focus:ring-2 focus:ring-primary/30"
                  defaultValue=""
                  id="epi-condition"
                  name="condition"
                >
                  <option disabled value="">
                    Select condition
                  </option>
                  <option value="acute-plid">Acute PLID / Slip Disc</option>
                  <option value="chronic">Chronic Back Pain</option>
                  <option value="sciatica">Sciatica Symptoms</option>
                  <option value="post-surgery">Post-Surgery Recovery</option>
                </select>
              </div>
              <div className="rounded-lg border-2 border-tertiary-container/40 bg-tertiary-fixed p-6">
                <label className="flex cursor-pointer items-start gap-4">
                  <div className="mt-1">
                    <input
                      className="h-5 w-5 rounded border-tertiary-container text-tertiary focus:ring-tertiary/20"
                      name="bump"
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-on-tertiary-fixed">ORDER BUMP:</span>
                      <span className="rounded bg-tertiary-container px-2 py-0.5 text-[10px] font-bold uppercase text-on-tertiary-container">
                        Save 85%
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-on-tertiary-fixed-variant">
                      Add a private 1-on-1 Consultation call with Dr. Shah Alam&apos;s senior therapist
                      to customize your plan. Only $29 (Normally $149).
                    </p>
                  </div>
                </label>
              </div>
              <button
                className="w-full rounded-xl bg-gradient-to-r from-primary to-primary-container py-5 text-xl font-bold text-white shadow-xl transition-all hover:shadow-2xl active:scale-[0.98]"
                type="submit"
              >
                Complete My Order
              </button>
              <div className="flex justify-center gap-6 opacity-60">
                <Image
                  alt="Payment card brands"
                  className="h-6 object-contain grayscale"
                  height={24}
                  src={IMG.payVisa}
                  width={120}
                />
                <Image
                  alt="Secure payment"
                  className="h-6 object-contain grayscale"
                  height={24}
                  src={IMG.payLock}
                  width={40}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
