import Bandhu from "@/assets/svg/Bandhu";
import Buddy from "@/assets/svg/Buddy";
import Explore from "@/assets/svg/Explore";
import Feed from "@/assets/svg/Feed";
import Gallery from "@/assets/svg/Gallery";
import Routes from "@/assets/svg/Routes";
import Vlogs from "@/assets/svg/Vlogs";

export const ROUTES = [
  {
    name: "Home",
    icon: Explore,
    route: "/",
  },
  {
    name: "Feeds",
    icon: Feed,
    route: "/feeds",
  },
  {
    name: "Buddy",
    icon: Vlogs,
    route: "/buddy",
  },
  {
    name: "AI Gallery",
    icon: Gallery,
    route: "/gallery",
  },
  {
    name: "Ask Bandhu",
    icon: Bandhu,
    route: "/ask-bandhu",
  },
];

const imagePlaceholder =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.unfe.org%2Fjusticeprotection%2Fsm-placeholder%2F&psig=AOvVaw24km2n5eV0nk7_41D4AiyA&ust=1702646546564000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjKtOiCj4MDFQAAAAAdAAAAABAD";
