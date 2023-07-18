import { useState } from "react";
import { Tab } from "@headlessui/react";
import tabImage1 from "../../assets/services_images/service_img_2.png";
import ServiceTabContent from "./ServiceTabContent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ServiceTab() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        image: { tabImage1 },
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl border">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-4 text-sm font-bold leading-5 text-[#3B3A3A]",
                  "ring-0 ring-opacity-0 ring-offset-0 focus:outline-none focus:ring-0",
                  selected
                    ? "primary-btn-bg text-[#3B3A3A]"
                    : "hover:bg-white/[0.12] hover:text-[#3B3A3A]"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-10">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div>
                {posts.map((post) => (
                  <ServiceTabContent
                    key={post.id}
                    post={post}
                  ></ServiceTabContent>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
