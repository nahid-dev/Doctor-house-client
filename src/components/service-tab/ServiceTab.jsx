import { Tab } from "@headlessui/react";
import ServiceTabContent from "./ServiceTabContent";
import { services } from "../../assets/options";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ServiceTab() {
  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded border">
          {services.map((service) => (
            <Tab
              key={service.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded py-4 text-sm font-bold leading-5 text-[#3B3A3A]",
                  "ring-0 ring-opacity-0 ring-offset-0 focus:outline-none focus:ring-0",
                  selected
                    ? "primary-btn-bg text-[#3B3A3A]"
                    : "hover:bg-white/[0.12] hover:text-[#3B3A3A]"
                )
              }
            >
              {service.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-10">
          {services.map((service, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded bg-white",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div>
                <ServiceTabContent
                  key={service.id}
                  post={service}
                ></ServiceTabContent>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
