import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How long does a hair patch last?",
    answer: "A high-quality hair patch typically lasts 6-12 months with proper care and maintenance. The lifespan depends on factors like the base material, hair quality, your lifestyle, and how well you follow the maintenance routine."
  },
  {
    question: "Is the hair patch noticeable or detectable?",
    answer: "Our hair patches are virtually undetectable. We use premium human hair and advanced base materials that blend seamlessly with your scalp. The hairline is custom-designed to match your natural hair pattern, making it impossible for others to tell."
  },
  {
    question: "Can I swim, exercise, or shower with a hair patch?",
    answer: "Yes! Once properly bonded, our hair patches are waterproof and sweat-resistant. You can swim, exercise, shower, and engage in all your regular activities without worry. We recommend using specialized shampoos to extend the longevity of the bond."
  },
  {
    question: "How often do I need maintenance appointments?",
    answer: "We recommend maintenance appointments every 3-4 weeks to maintain the optimal look and bond strength. During these visits, we clean, re-bond if necessary, and style your hair patch to keep it looking fresh and natural."
  },
  {
    question: "What is the cost of a hair patch?",
    answer: "The cost varies depending on the hair quality, density, base material, and coverage area needed. We offer customized solutions starting from ₹15,000. We recommend scheduling a free consultation to get an accurate quote based on your specific needs."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
        onClick={onClick}
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our hair patch services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-amber-500 text-white font-medium rounded-full hover:bg-amber-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
