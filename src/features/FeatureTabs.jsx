import { useState } from "react";
import { TAB_DATA } from "./tabData.js";

export default function FeatureTabs() {
  const [tabTitle, setTabtitle] = useState("simpleBookmark");

  function changeTab(tab) {
    setTabtitle(tab);
  }

  return (
    <>
      <div className="my-16 flex justify-center">
        <div className="w-5/6 space-y-4 md:w-3/4 lg:w-1/2">
          <div className="flex flex-wrap justify-center max-sm:space-y-4">
            <button className={`block pb-4 capitalize max-sm:w-full md:px-4 ${tabTitle == "simpleBookmark" ? "border-b-4 border-secondary text-custom-dark" : "border-b border-b-custom-grey text-custom-grey"} `} onClick={() => changeTab("simpleBookmark")}>
              Simple bookmarking
            </button>
            <button className={`block pb-4 capitalize max-sm:w-full md:px-4 ${tabTitle == "speedySearching" ? "border-b-4 border-secondary text-custom-dark" : "border-b border-b-custom-grey text-custom-grey"} `} onClick={() => changeTab("speedySearching")}>
              Speedy Searching
            </button>
            <button className={`block pb-4 capitalize max-sm:w-full md:px-4 ${tabTitle == "easySharing" ? "border-b-4 border-secondary text-custom-dark" : "border-b border-b-custom-grey text-custom-grey"} `} onClick={() => changeTab("easySharing")}>
              Easy Sharing
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-3">
        <div className="relative flex justify-center md:w-1/2">
          <div className="absolute right-1/2 top-1/2 -z-10 h-32 w-full rounded-r-full bg-primary md:h-44 md:-translate-y-12 lg:h-56"></div>
          <img src={TAB_DATA[tabTitle].image} className="h-60 md:h-48 lg:h-80" alt="Hero image" />
        </div>
        <div className="space-y-6 md:w-1/2">
          <h1 className="text-center text-2xl font-medium md:text-start md:text-3xl"> {TAB_DATA[tabTitle].heading}</h1>
          <p className="text-center leading-6 text-custom-grey md:w-3/4 md:text-start">{TAB_DATA[tabTitle].description}</p>
          <button className="block rounded-md border-2 border-primary bg-primary px-4 py-2 font-medium text-white shadow-lg hover:bg-white hover:text-primary max-sm:mx-auto md:px-6 md:py-3">{TAB_DATA[tabTitle].btnText}</button>
        </div>
      </div>
    </>
  );
}
