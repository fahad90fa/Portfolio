export interface Skill {
  name: string;
  icon: string;
  color: string;
  type: "regular" | "brand" | "custom-svg";
  svgPath?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "slots",
    title: "Slot Games",
    icon: "fa-dice-d6",
    skills: [
      { name: "Classic Slots", icon: "fa-dice", color: "text-orange-500", type: "regular" },
      { name: "Video Slots", icon: "fa-tv", color: "text-blue-500", type: "regular" },
      { name: "Progressive", icon: "fa-trophy", color: "text-yellow-500", type: "regular" },
      { name: "3D Slots", icon: "fa-cube", color: "text-blue-400", type: "regular" },
      { name: "Mega Spins", icon: "fa-bolt", color: "text-purple-500", type: "regular" },
      { name: "Bonus Rounds", icon: "fa-gift", color: "text-red-500", type: "regular" }
    ]
  },
  {
    id: "table-games",
    title: "Table Games",
    icon: "fa-table",
    skills: [
      { name: "Blackjack", icon: "fa-coins", color: "text-green-600", type: "regular" },
      { name: "Roulette", icon: "fa-circle", color: "text-red-600", type: "regular" },
      { name: "Baccarat", icon: "fa-money-bill", color: "text-blue-600", type: "regular" },
      { name: "Craps", icon: "fa-dice-five", color: "text-yellow-600", type: "regular" },
      { name: "Poker", icon: "fa-spade", color: "text-gray-800", type: "regular" },
      { name: "Sic Bo", icon: "fa-dice-three", color: "text-purple-600", type: "regular" }
    ]
  },
  {
    id: "live-dealer",
    title: "Live Dealer Games",
    icon: "fa-video",
    skills: [
      { name: "Live Blackjack", icon: "fa-users", color: "text-purple-500", type: "regular" },
      { name: "Live Roulette", icon: "fa-sync", color: "text-blue-500", type: "regular" },
      { name: "Live Baccarat", icon: "fa-crown", color: "text-red-500", type: "regular" },
      { name: "Game Shows", icon: "fa-star", color: "text-yellow-500", type: "regular" },
      { name: "VIP Tables", icon: "fa-gem", color: "text-indigo-500", type: "regular" },
      { name: "Poker Rooms", icon: "fa-user-friends", color: "text-green-500", type: "regular" }
    ]
  },
  {
    id: "sports",
    title: "Sports Betting",
    icon: "fa-futbol",
    skills: [
      { name: "Football", icon: "fa-football-ball", color: "text-gray-700 dark:text-gray-300", type: "regular" },
      { name: "Cricket", icon: "fa-baseball-ball", color: "text-yellow-600", type: "regular" },
      { name: "Tennis", icon: "fa-table-tennis", color: "text-green-600", type: "regular" },
      { name: "Basketball", icon: "fa-basketball-ball", color: "text-orange-600", type: "regular" },
      { name: "E-Sports", icon: "fa-gamepad", color: "text-purple-600", type: "regular" },
      { name: "Horse Racing", icon: "fa-horse", color: "text-brown-600", type: "regular" }
    ]
  },
  {
    id: "payments",
    title: "Payment Methods",
    icon: "fa-credit-card",
    skills: [
      { name: "Credit Cards", icon: "fa-credit-card", color: "text-blue-800", type: "regular" },
      { name: "E-Wallets", icon: "fa-wallet", color: "text-green-600", type: "regular" },
      { name: "Bank Transfer", icon: "fa-university", color: "text-gray-600", type: "regular" },
      { name: "Cryptocurrencies", icon: "fa-bitcoin", color: "text-orange-500", type: "brand" },
      { name: "Mobile Payments", icon: "fa-mobile-alt", color: "text-blue-500", type: "regular" },
      { name: "Prepaid Cards", icon: "fa-money-check", color: "text-purple-500", type: "regular" }
    ]
  },
  {
    id: "features",
    title: "Special Features",
    icon: "fa-star",
    skills: [
      { name: "VIP Program", icon: "fa-medal", color: "text-yellow-500", type: "regular" },
      { name: "Tournaments", icon: "fa-trophy", color: "text-yellow-600", type: "regular" },
      { name: "Mobile App", icon: "fa-mobile-alt", color: "text-blue-500", type: "regular" },
      { name: "Live Chat", icon: "fa-comments", color: "text-green-500", type: "regular" },
      { name: "Fast Payouts", icon: "fa-bolt", color: "text-orange-500", type: "regular" },
      { name: "Bonuses", icon: "fa-gift", color: "text-red-500", type: "regular" }
    ]
  }
];
