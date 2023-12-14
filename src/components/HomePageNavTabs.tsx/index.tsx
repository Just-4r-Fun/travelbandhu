import React from "react";
import Bandhu from "@/assets/svg/Bandhu";
import Buddy from "@/assets/svg/Buddy";
import Explore from "@/assets/svg/Explore";
import Feed from "@/assets/svg/Feed";
import Gallery from "@/assets/svg/Gallery";
import Routes from "@/assets/svg/Routes";
import Vlogs from "@/assets/svg/Vlogs";
import Link from "next/link";

const routes = [
  {
    name: "Explore",
    icon: Explore,
    route: "/explore",
  },
  {
    name: "Feed",
    icon: Feed,
    route: "/feed",
  },
  {
    name: "Vlogs",
    icon: Vlogs,
    route: "/vlogs",
  },
  {
    name: "Buddy",
    icon: Buddy,
    route: "/buddy",
  },
  {
    name: "Routes",
    icon: Routes,
    route: "/routes",
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

function HomePageNavTabs() {
  return (
    <div className="flex mt-10">
      {routes.map((route, index) => (
        <Link href={route.route} key={route.name + index}>
          <div className="flex justify-center flex-col w-[120px] items-center">
            <route.icon height={60} width={65} />
            <span className="font-medium">{route.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePageNavTabs;
