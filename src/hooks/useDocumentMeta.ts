import { useEffect } from 'react';

const SITE_ORIGIN = 'https://replychief.com';

interface DocumentMetaOptions {
  title: string;
  description: string;
  /** Path this page should canonicalize to, e.g. "/linkedin-comment-generator/" */
  canonicalPath: string;
}

/** Sets document title/meta description/canonical link for the current route, restoring the previous values on unmount. */
export function useDocumentMeta({ title, description, canonicalPath }: DocumentMetaOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute('content') ?? null;
    descriptionTag?.setAttribute('content', description);

    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const didCreateCanonical = !canonicalTag;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    const previousHref = canonicalTag.href;
    canonicalTag.href = `${SITE_ORIGIN}${canonicalPath}`;

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription !== null) {
        descriptionTag.setAttribute('content', previousDescription);
      }
      if (didCreateCanonical) {
        canonicalTag?.remove();
      } else if (canonicalTag) {
        canonicalTag.href = previousHref;
      }
    };
  }, [title, description, canonicalPath]);
}
