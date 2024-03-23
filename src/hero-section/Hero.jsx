import Section from "../UI-elements/Section";
import heroImg from "../assets/images/illustration-hero.svg";
export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-3">
        <div className="space-y-8 pe-3 md:w-2/3 lg:w-1/2">
          <h1 className="text-center text-3xl font-medium md:text-start lg:w-3/4 lg:text-5xl"> A Simple Bookmark Manager</h1>
          <p className="text-center leading-6 text-custom-grey md:text-start lg:w-3/4">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
          <div className="flex space-x-2">
            <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 font-medium text-white shadow-lg hover:bg-white hover:text-primary md:py-3 lg:px-6">Get it on Chrome</button>
            <button className="rounded-md border-2 border-white bg-white px-4 py-2 font-medium text-custom-dark shadow-lg hover:border-custom-dark md:py-3 lg:px-6">Get it on Firefox</button>
          </div>
        </div>
        <div className="relative flex justify-center md:w-1/3 lg:w-1/2">
          <div className="absolute left-1/2 top-1/2 -z-10 h-32 w-full rounded-l-full bg-primary md:h-44 md:-translate-y-12 lg:h-64"></div>
          <img src={heroImg} className="h-60 md:h-72 lg:h-96" alt="Hero image" />
        </div>
      </div>
    </Section>
  );
}
