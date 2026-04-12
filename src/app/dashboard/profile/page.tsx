import {
  ProfilePersonalInfoSection,
  ProfilePhoneSection,
  // ProfilePreferencesSection,
  // ProfilePremiumCard,
  ProfileQuickNavCard,
  ProfileSecuritySection,
  ProfileSummaryCard,
} from "@/features/dashboard/components/profile";

export default function ProfilePage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Left Column: Profile Summary and Quick Actions */}
      <aside className="flex flex-col gap-6 lg:col-span-1">
        <ProfileSummaryCard />
        {/* <ProfilePremiumCard /> */}
        <ProfileQuickNavCard />
        <ProfilePhoneSection />
      </aside>

      {/* Right Column: Detailed Information and Settings */}
      <main className="flex flex-col gap-6 lg:col-span-2">
        <ProfilePersonalInfoSection />

        <div className="grid grid-cols-1 gap-6 ">
          <ProfileSecuritySection />
          {/* <ProfilePreferencesSection preferences={preferences} /> */}
        </div>
      </main>
    </div>
  );
}
