import { useEffect } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

/** Injects FAQPage JSON-LD structured data for the given Q&A list while the page is mounted. */
export function useFaqSchema(items: FaqItem[]) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [items]);
}
