import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type Props = {
  value: string;
  question: string;
  answer: string;
};

export const FaqItem = ({ value, question, answer }: Props) => {
  return (
    <>
      <Accordion.Item
        value={value}
        className="overflow-hidden mt-6 md:mt-8 first:mt-0"
      >
        <Accordion.Trigger
          className={`group w-full p-8 rounded text-left bg-neutral-100
                      hover:bg-neutral-200 transition-colors`}
        >
          <div className="flex items-center justify-between gap-4 text-black">
            <h3 className="text-xl sm:text-2xl font-bold">{question}</h3>
            <ChevronDownIcon
              className={`w-10 sm:w-12 h-10 sm:h-12 group-data-[state=open]:rotate-180 shrink-0
                          transition-transform`}
              aria-hidden
            />
          </div>

          <Accordion.Content asChild>
            <p
              className={`overflow-hidden mt-4 sm:text-lg text-neutral-700
                          data-[state=open]:animate-accordionSlideDown 
                          data-[state=closed]:animate-accordionSlideUp`}
            >
              {answer}
            </p>
          </Accordion.Content>
        </Accordion.Trigger>
      </Accordion.Item>
    </>
  );
};
