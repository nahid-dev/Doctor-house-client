import React from "react";
import "./profileTab.css";

const DoctorTab = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap main-container">
        <div className="w-full">
          <ul
            className="flex mb-0 border-b-2 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1 ? "activeTab" : "defaultTab")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Overview
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2 ? "activeTab" : "defaultTab")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Locations
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3 ? "activeTab" : "defaultTab")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Reviews
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4 ? "activeTab" : "defaultTab")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Business Hours
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div>
                    <div>
                      <h5 className="text-xl font-bold">About Me</h5>
                      <p className="text-[#3B3A3A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <ul className="space-y-5">
                          <h5 className="text-xl font-bold">Education</h5>
                          <li className="flex flex-col">
                            American Dental Medical University <span>DBS</span>{" "}
                            <span>1998-2003</span>
                          </li>
                          <li className="flex flex-col">
                            American Dental Medical University <span>MDS</span>{" "}
                            <span>2003-2005</span>
                          </li>
                        </ul>
                        <ul className="mt-5 space-y-4">
                          <h5 className="text-xl font-bold">
                            Work & Experience
                          </h5>
                          <li className="flex flex-col">
                            Glowing Smile Family Dental Clinic{" "}
                            <span>2010-present(5 years)</span>{" "}
                            <span>1998-2003</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div>
                    <div>
                      <h5 className="text-xl font-bold">About Me</h5>
                      <p className="text-[#3B3A3A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <ul className="space-y-5">
                          <h5 className="text-xl font-bold">Education</h5>
                          <li className="flex flex-col">
                            American Dental Medical University <span>DBS</span>{" "}
                            <span>1998-2003</span>
                          </li>
                          <li className="flex flex-col">
                            American Dental Medical University <span>MDS</span>{" "}
                            <span>2003-2005</span>
                          </li>
                        </ul>
                        <ul className="mt-5 space-y-4">
                          <h5 className="text-xl font-bold">
                            Work & Experience
                          </h5>
                          <li className="flex flex-col">
                            Glowing Smile Family Dental Clinic{" "}
                            <span>2010-present(5 years)</span>{" "}
                            <span>1998-2003</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div>
                    <div>
                      <h5 className="text-xl font-bold">About Me</h5>
                      <p className="text-[#3B3A3A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <ul className="space-y-5">
                          <h5 className="text-xl font-bold">Education</h5>
                          <li className="flex flex-col">
                            American Dental Medical University <span>DBS</span>{" "}
                            <span>1998-2003</span>
                          </li>
                          <li className="flex flex-col">
                            American Dental Medical University <span>MDS</span>{" "}
                            <span>2003-2005</span>
                          </li>
                        </ul>
                        <ul className="mt-5 space-y-4">
                          <h5 className="text-xl font-bold">
                            Work & Experience
                          </h5>
                          <li className="flex flex-col">
                            Glowing Smile Family Dental Clinic{" "}
                            <span>2010-present(5 years)</span>{" "}
                            <span>1998-2003</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <div>
                    <div>
                      <h5 className="text-xl font-bold">About Me</h5>
                      <p className="text-[#3B3A3A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <ul className="space-y-5">
                          <h5 className="text-xl font-bold">Education</h5>
                          <li className="flex flex-col">
                            American Dental Medical University <span>DBS</span>{" "}
                            <span>1998-2003</span>
                          </li>
                          <li className="flex flex-col">
                            American Dental Medical University <span>MDS</span>{" "}
                            <span>2003-2005</span>
                          </li>
                        </ul>
                        <ul className="mt-5 space-y-4">
                          <h5 className="text-xl font-bold">
                            Work & Experience
                          </h5>
                          <li className="flex flex-col">
                            Glowing Smile Family Dental Clinic{" "}
                            <span>2010-present(5 years)</span>{" "}
                            <span>1998-2003</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorTab;
