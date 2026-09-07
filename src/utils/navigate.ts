/** Navigates within the app's hand-rolled SPA router (pathname + popstate), scrolling to top. */
export function navigateTo(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Navigates home, then (after the route swap settles) scrolls to a same-page anchor like "#pricing". */
export function navigateHomeToAnchor(hash: string) {
  window.history.pushState({}, '', '/');
  window.dispatchEvent(new PopStateEvent('popstate'));
  setTimeout(() => {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 350);
}
