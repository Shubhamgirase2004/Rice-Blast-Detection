import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the system know about my rice variety?",
      answer: "Our database contains genetic information for 50+ popular Indian rice varieties including their blast resistance genes (Pi genes). When you select your variety, the system automatically considers its specific genetic makeup to predict susceptibility to different blast races."
    },
    {
      question: "Can I use the system without internet connection?",
      answer: "Yes! After initial registration, the app caches your farm data and previous recommendations. It can work offline for up to 7 days and will sync when connection is restored. Critical alerts are also sent via SMS if WhatsApp fails."
    },
    {
      question: "Which diseases does the system cover?",
      answer: "Currently, we focus specifically on rice blast disease (caused by Magnaporthe oryzae) as it's the most destructive rice disease in India. We're developing models for brown spot and bacterial blight, which will be added in future updates."
    },
    {
      question: "Is my farm data secure and private?",
      answer: "Absolutely. Your data is encrypted and stored securely. We only use aggregated, anonymous data for research purposes. Your personal information, location, and farm details are never shared with third parties without your explicit consent."
    },
    {
      question: "How accurate are the predictions?",
      answer: "Our AI model achieves 94.7% accuracy in predicting blast outbreaks 2-3 days in advance. Accuracy improves over time as the system learns from local conditions and feedback from farmers in your region."
    },
    {
      question: "What languages are supported for alerts?",
      answer: "We support 15+ Indian languages including Hindi, Odia, Bengali, Tamil, Telugu, Marathi, Gujarati, Punjabi, Malayalam, Kannada, and others. Alerts are sent in your preferred language with local terminology for farming practices."
    },
    {
      question: "How much does it cost to use?",
      answer: "The service is completely FREE for farmers. This is a government-supported initiative to help Indian farmers reduce crop losses. Standard SMS/WhatsApp charges from your mobile operator may apply."
    },
    {
      question: "What should I do when I receive a high-risk alert?",
      answer: "Follow the spray recommendations immediately. Typically, this involves applying fungicides like Tricyclazole or Kasugamycin. The alert includes specific dosage, timing, and application methods. Contact your local agricultural officer if you need help obtaining fungicides."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about RiceGuard AI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-green-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-green-800 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-green-600 mb-6">
            Our support team is here to help you protect your crops
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              WhatsApp Support
            </button>
            <button className="bg-white hover:bg-gray-50 text-green-600 border border-green-600 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Call Helpline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;