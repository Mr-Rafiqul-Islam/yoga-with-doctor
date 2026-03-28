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



export const DEFAULT_PROFILE_STATS: ProfileStats = {
  courses: 15,
  certificates: 12,
  points: "2.5k",
};

export const DEFAULT_PROFILE_PREFERENCES: ProfilePreferences = {
  language: "English (US)",
  notifications: "Email, Push",
};

