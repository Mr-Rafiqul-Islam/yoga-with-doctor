import {
  ProfilePersonalInfoSection,
  ProfilePreferencesSection,
  // ProfilePremiumCard,
  ProfileQuickNavCard,
  ProfileSecuritySection,
  ProfileSummaryCard,
} from "@/features/dashboard/components/profile";
import {
  DEFAULT_PROFILE_PREFERENCES,
  DEFAULT_PROFILE_STATS,
} from "@/features/dashboard/data/profileData";

export default function ProfilePage() {
  const stats = DEFAULT_PROFILE_STATS;
  const preferences = DEFAULT_PROFILE_PREFERENCES;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Left Column: Profile Summary and Quick Actions */}
      <aside className="flex flex-col gap-6 lg:col-span-1">
        <ProfileSummaryCard stats={stats} />
        {/* <ProfilePremiumCard /> */}
        <ProfileQuickNavCard />
      </aside>

      {/* Right Column: Detailed Information and Settings */}
      <main className="flex flex-col gap-6 lg:col-span-2">
        <ProfilePersonalInfoSection  />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ProfileSecuritySection />
          <ProfilePreferencesSection preferences={preferences} />
        </div>
      </main>
    </div>
  );
}
