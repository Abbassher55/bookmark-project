import { useState } from "react";

export default function Accordions() {
  const [accordionTitle, setAccordionTitle] = useState("");
  function setTitle(title) {
    if (accordionTitle == title) {
      setAccordionTitle("");
    } else {
      setAccordionTitle(title);
    }
  }
  return (
    <div className="mb-8 flex items-center justify-center">
      <div className="md:w-2/3 lg:w-1/2">
        {/*  Question 1 */}
        <div className="question">
          <button className={`flex w-full justify-between py-3 text-custom-dark hover:text-secondary ${accordionTitle == "bookmark" ? "text-secondary" : "border-y-2"}`} onClick={() => setTitle("bookmark")}>
            <span>What is Bookmark?</span>
            <span className={`${accordionTitle == "bookmark" ? "rotate-180" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
          <div className={`${accordionTitle == "bookmark" ? "block" : "hidden"} my-4 text-custom-grey`}>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</div>
        </div>
        {/*  Question 2 */}
        <div className="question">
          <button className={`flex w-full justify-between py-3 text-custom-dark hover:text-secondary ${accordionTitle == "newBrowser" ? "text-secondary" : "border-b-2"}`} onClick={() => setTitle("newBrowser")}>
            <span>How can I request a new browser??</span>
            <span className={`${accordionTitle == "newBrowser" ? "rotate-180" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
          <div className={`${accordionTitle == "newBrowser" ? "block" : "hidden"} my-4 text-custom-grey`}>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</div>
        </div>
        {/*  Question 3 */}
        <div className="question">
          <button className={`flex w-full justify-between py-3 text-custom-dark hover:text-secondary ${accordionTitle == "mobApp" ? "text-secondary" : "border-b-2"}`} onClick={() => setTitle("mobApp")}>
            <span>Is there a mobile app?</span>
            <span className={`${accordionTitle == "mobApp" ? "rotate-180" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
          <div className={`${accordionTitle == "mobApp" ? "block" : "hidden"} my-4 text-custom-grey`}>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</div>
        </div>
        {/*  Question 3 */}
        <div className="question">
          <button className={`flex w-full justify-between py-3 text-custom-dark hover:text-secondary ${accordionTitle == "chromeBrowser" ? "text-secondary" : "border-b-2"}`} onClick={() => setTitle("chromeBrowser")}>
            <span>What about other Chromium browsers?</span>
            <span className={`${accordionTitle == "chromeBrowser" ? "rotate-180" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
          <div className={`${accordionTitle == "chromeBrowser" ? "block" : "hidden"} my-4 text-custom-grey`}>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</div>
        </div>
      </div>
    </div>
  );
}
