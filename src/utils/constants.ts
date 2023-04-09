export enum ProfileTabsKeys {
  ActivityCenter,
  ProfileDetails,
  Reviews,
  Products,
  Rewards,
}

export const ProfileTabs = [
  {
    key: ProfileTabsKeys.ActivityCenter,
    value: "Activity Center",
  },
  {
    key: ProfileTabsKeys.ProfileDetails,
    value: "Profile Details",
  },
  {
    key: ProfileTabsKeys.Reviews,
    value: "Reviews",
  },
  {
    key: ProfileTabsKeys.Products,
    value: "Products",
  },
  {
    key: ProfileTabsKeys.Rewards,
    value: "Rewards",
  },
] as const;
