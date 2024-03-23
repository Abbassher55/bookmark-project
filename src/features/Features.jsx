import Section from "../UI-elements/Section";
import FeatureTabs from "./FeatureTabs";

export default function Features() {
  return (
    <Section id="features">
      <div className="flex justify-center">
        <div className="w-5/6 space-y-4 md:w-2/3 lg:w-1/3">
          <h2 className="text-center text-3xl font-medium capitalize">features</h2>
          <p className="text-center leading-6 text-custom-grey">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
      </div>
      <FeatureTabs />
    </Section>
  );
}
