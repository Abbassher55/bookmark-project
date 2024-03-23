import Section from "../UI-elements/Section";
import Accordions from "./Accordions";

export default function Faq() {
  return (
    <Section>
      <div className="flex justify-center">
        <div className="mb-8 w-5/6 space-y-4 md:w-2/3 lg:w-1/3">
          <h2 className="text-center text-3xl font-medium capitalize">Frequently Asked Questions</h2>
          <p className="text-center leading-6 text-custom-grey">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
        </div>
      </div>
      <Accordions />
    </Section>
  );
}
