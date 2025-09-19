import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/animate-ui/components/radix/accordion";
import FAQuestions from "@/lib/faq-json";

type FAQProps = {
  multiple?: boolean;
  collapsible?: boolean;
  keepRendered?: boolean;
  showArrow?: boolean;
};

export const FAQ = ({
  multiple = false,
  collapsible = true,
  keepRendered = false,
  showArrow = true,
}: FAQProps) => {
  return (
    <div className="my-10 flex w-full flex-col items-center gap-6 px-4">
      <Accordion
        type={multiple ? "multiple" : "single"}
        collapsible={collapsible}
        className="w-full max-w-[600px]"
      >
        {FAQuestions.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger showArrow={showArrow}>
              {item.question}
            </AccordionTrigger>
            <AccordionContent keepRendered={keepRendered}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
