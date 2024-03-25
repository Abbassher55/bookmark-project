import Section from "../UI-elements/Section";
import chrome from "../assets/images/logo-chrome.svg";
import firefox from "../assets/images/logo-firefox.svg";
import opera from "../assets/images/logo-opera.svg";
import dots from "../assets/images/bg-dots.svg";
export default function Extensions() {
  return (
    <Section id="pricing">
      <div className="my-16 flex justify-center">
        <div className="w-5/6 space-y-4 md:w-2/3 lg:w-1/3">
          <h2 className="text-center text-3xl font-medium capitalize">Download the extension</h2>
          <p className="text-center leading-6 text-custom-grey">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
        </div>
      </div>
      <div className="grid w-full gap-5 md:grid-cols-3">
        <div className="feature-card flex flex-col items-center justify-center space-y-8 rounded-xl p-2 py-7 shadow-lg">
          <img src={chrome} alt="chrome image" />
          <div className="description">
            <h2 className="text-center text-lg font-medium">Add to Chrome</h2>
            <p className="text-custom-grey">Minimum version 62</p>
          </div>
          <img src={dots} className="w-full" alt="background dots image" />
          <button className="block rounded-md border-2 border-primary bg-primary px-4 py-2 font-medium text-white shadow-lg hover:bg-white hover:text-primary max-sm:mx-auto md:px-9 md:py-3">Add & Install Extension</button>
        </div>
        <div className="feature-card flex flex-col items-center justify-center space-y-8 rounded-xl p-2 py-7 shadow-lg">
          <img src={firefox} alt="firefox image" />
          <div className="description">
            <h2 className="text-center text-lg font-medium">Add to Chrome</h2>
            <p className="text-custom-grey">Minimum version 62</p>
          </div>
          <img src={dots} className="w-full" alt="background dots image" />
          <button className="block rounded-md border-2 border-primary bg-primary px-4 py-2 font-medium text-white shadow-lg hover:bg-white hover:text-primary max-sm:mx-auto md:px-9 md:py-3">Add & Install Extension</button>
        </div>
        <div className="feature-card flex flex-col items-center justify-center space-y-8 rounded-xl p-2 py-7 shadow-lg">
          <img src={opera} alt="opera image" />
          <div className="description">
            <h2 className="text-center text-lg font-medium">Add to Chrome</h2>
            <p className="text-custom-grey">Minimum version 62</p>
          </div>
          <img src={dots} className="w-full" alt="background dots image" />
          <button className="block rounded-md border-2 border-primary bg-primary px-4 py-2 font-medium text-white shadow-lg hover:bg-white hover:text-primary max-sm:mx-auto md:px-9 md:py-3">Add & Install Extension</button>
        </div>
      </div>
    </Section>
  );
}
