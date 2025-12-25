export const loadMewsScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.querySelector('script[src*="distributor.min.js"]')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://api.mews.com/distributor/distributor.min.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Mews script'));

    document.head.appendChild(script);
  });
};
