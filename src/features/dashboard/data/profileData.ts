export type ProfileUser = {
  firstName: string;
  lastName: string;
  email: string;
  name: string;
  role: string;
  avatarSrc: string;
  bio: string;
};

export type ProfileStats = {
  courses: number;
  certificates: number;
  points: string;
};

export type ProfileSecurity = {
  passwordLastChanged: string;
  twoFactorEnabled: boolean;
};

export type ProfilePreferences = {
  language: string;
  notifications: string;
};

export const DEFAULT_PROFILE_USER: ProfileUser = {
  firstName: "Sarah",
  lastName: "Jenkins",
  email: "sarah.jenkins@example.com",
  name: "Sarah Jenkins",
  role: "Wellness Enthusiast",
  avatarSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDmyxoefgit0eX7UXZsRMIrbSGPe8QDVaK0Vm8vc6ZlmhNJ52EEXDKavc0GpULLt6SK9SjkEctxDQTeK_Rz3fCH_nd5bxoxEvQDDFN115EaayUVx6nBQSGh_DofxV9RMsOzYGE---aedkqRq9vdejM7rydgWtPND7YMBCJUZ3229gvcrlIA9Jdi4IiJ8-qyi5brPrzSIy-nHltSnVv-vPuu-CmUoDKI3ZWROcJ4_kCazFSjjr8XMgyxTTaoVxXI5CozAcwJwMV9MA",
  bio: "Passionate about holistic wellness and yoga. Certified practitioner looking to expand knowledge in medical wellness.",
};

export const DEFAULT_PROFILE_STATS: ProfileStats = {
  courses: 15,
  certificates: 12,
  points: "2.5k",
};

export const DEFAULT_PROFILE_SECURITY: ProfileSecurity = {
  passwordLastChanged: "3 months ago",
  twoFactorEnabled: false,
};

export const DEFAULT_PROFILE_PREFERENCES: ProfilePreferences = {
  language: "English (US)",
  notifications: "Email, Push",
};

