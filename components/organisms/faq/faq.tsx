import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { SOCIALS } from "@/lib/constants";

export const FAQ_QUESTIONS = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The time to build a website varies based on its complexity. A standard 5-tab business site takes around 10 days, while a more extensive 20-tab site may take approximately 20 days. Keep in mind these are general estimates, and the actual timeline depends on specific project requirements.",
  },
  {
    question: "What materials should I prepare when getting a website made?",
    answer: (
      <>
        - Brand Assets: Share your logo, colors, and any brand guidelines.
        <br />- Content: Identify the sections you want on your site, prepare
        text content.
        <br />- Contact: Give us your business contact details.
        <br />- Reference websites: Share sites you like for inspiration.
      </>
    ),
  },
  {
    question: "How much time do I need to spend helping on the website?",
    answer:
      "Don't worry if you're busy! Your level of involvement is totally up to you. We have different ways to work together because we know running a business can keep you pretty busy.",
  },
  {
    question: "How do I get with building my website?",
    answer: (
      <>
        Getting started is easy! Simply reach out to us through our{" "}
        <Link href="/contact" className="link-blue">
          Contact Page
        </Link>{" "}
        or find us on{" "}
        <Link
          href={SOCIALS.find((s) => s.label === "Fiverr")!.href}
          className="link-blue"
          target="_blank"
        >
          Fiverr
        </Link>
        .
      </>
    ),
  },
  {
    question:
      "Can I expand the website with extra tabs and features in the future?",
    answer:
      "Yes, definitely! Our websites are built to grow with your needs. You can easily include more sections or features whenever you want.",
  },
];

type FaqQuestionProps = {
  question: string;
  answer: React.ReactNode;
};

const FaqQuestion = ({ question, answer }: FaqQuestionProps) => {
  return (
    <Accordion.Item
      value={question}
      className="overflow-hidden border-b first:border-t border-gray-800"
    >
      <Accordion.Trigger className="group flex justify-between items-center gap-4 w-full py-4">
        <h3 className="text-xl font-bold text-left">{question}</h3>
        <ChevronDownIcon
          className={`w-12 h-12 group-data-[state=open]:rotate-180 shrink-0
                  transition-transform`}
          aria-hidden
        />
      </Accordion.Trigger>
      <Accordion.Content asChild>
        <p
          className={`overflow-hidden mb-4 text-neutral-300
                  data-[state=open]:animate-accordionSlideDown 
                  data-[state=closed]:animate-accordionSlideUp`}
        >
          {answer}
        </p>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export const Faq = () => {
  return (
    <section className="container max-w-5xl flex flex-col sm:items-center my-36">
      <span className="sm:text-xl font-bold text-primary-600">
        Frequently asked questions
      </span>
      <h2 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold">
        Stille have questions?
      </h2>

      <Accordion.Root
        className="mt-16 w-full"
        type="single"
        defaultValue={FAQ_QUESTIONS[0].question}
        collapsible
      >
        {FAQ_QUESTIONS.map((props, i) => (
          <FaqQuestion key={i} {...props} />
        ))}
      </Accordion.Root>
    </section>
  );
};
