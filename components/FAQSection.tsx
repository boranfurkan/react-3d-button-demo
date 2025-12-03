interface FAQ {
  readonly question: string;
  readonly answer: string;
}

const faqs: readonly FAQ[] = [
  {
    question: 'What is React 3D Button?',
    answer:
      'React 3D Button is a customizable button component library for React and Next.js that provides realistic 3D press effects, multiple themes, and easy customization through CSS variables.',
  },
  {
    question: 'How do I install React 3D Button?',
    answer:
      'You can install React 3D Button using npm, yarn, or pnpm: `npm install react-3d-button`. Then import the component and styles in your React application.',
  },
  {
    question: 'Does React 3D Button work with Next.js 13+?',
    answer:
      'Yes! React 3D Button is fully compatible with Next.js 13+ and the App Router. Just add the "use client" directive at the top of your component file.',
  },
  {
    question: 'Can I customize the button colors and themes?',
    answer:
      'Absolutely! React 3D Button comes with 5 pre-built themes (Ocean, Sunset, Forest, Pirate, Neon) and supports full customization through CSS variables. You can easily override colors to match your brand.',
  },
  {
    question: 'Is React 3D Button mobile-friendly?',
    answer:
      'Yes, React 3D Button is optimized for mobile devices with enhanced touch support. It works perfectly on all screen sizes and handles touch events correctly.',
  },
  {
    question: 'Does React 3D Button support TypeScript?',
    answer:
      "Yes! React 3D Button is built with TypeScript and includes full type definitions. You'll get excellent IntelliSense and autocomplete support in your IDE.",
  },
  {
    question: 'What button variants are available?',
    answer:
      'React 3D Button provides 9 variants: Primary, Secondary, Tertiary, Success, Error, Warning, Info, Anchor, and Danger. Each variant has its own color scheme and can be customized.',
  },
  {
    question: 'How big is the React 3D Button package?',
    answer:
      'The package is lightweight at approximately 24KB with zero runtime dependencies, making it perfect for performance-conscious applications.',
  },
];

export default function FAQSection() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-200 dark:border-slate-700 last:border-0 pb-6 last:pb-0"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
