import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const FAQ_QUESTIONS = [
  {
    question: "How long does it take to build a website?",
    answer:
      "We understand the importance of timely delivery. The timeline for website development varies depending on the complexity of the project. We'll provide you with a clear timeline after discussing your specific requirements.",
  },
  {
    question: "Can I update the content on website?",
    answer:
      "Absolutely! We use user-friendly content management systems that empower you to easily update and manage your website content without the need for technical expertise.",
  },
  {
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, we provide ongoing maintenance services to ensure your website remains up-to-date, secure, and performing at its best. Our team is here to support you even after your website is launched.",
  },
  {
    question: "What makes a good website?",
    answer:
      "A good website is one that not only looks visually appealing but also offers a seamless user experience. It should be easy to navigate, mobile-friendly, and effectively communicate your brand's message to your target audience.",
  },
  {
    question: "How do I get with building my website?",
    answer:
      "Getting started is easy! Simply reach out to us through our contact page or give us a call. We'll schedule a consultation to discuss your ideas, goals, and specific requirements to kick off the website creation process.",
  },
];

type FaqQuestionProps = {
  question: string;
  answer: string;
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
