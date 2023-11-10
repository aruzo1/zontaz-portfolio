import * as Accordion from "@radix-ui/react-accordion";
import { FaqItem } from "./faq-item";
import { FAQ } from "@/lib/constants";

export const FaqSection = () => {
  return (
    <section className="-mt-6 pt-16 md:pt-24 pb-24 md:pb-[7.5rem] rounded-t bg-white">
      <div className="container">
        <span className="text-lg sm:text-xl font-bold text-primary-600">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-4">
          Questions? Look here
        </h2>

        <Accordion.Root className="mt-12 md:mt-16" type="single" collapsible>
          {FAQ.map(({ question, answer }, i) => (
            <FaqItem
              key={i}
              value={`${i}`}
              question={`${i + 1}. ${question}`}
              answer={answer}
            />
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};
