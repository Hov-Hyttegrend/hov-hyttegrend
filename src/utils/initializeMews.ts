interface MewsWindow extends Window {
  Mews?: {
    Distributor: (config: { configurationIds: string[]; openElements: string }) => void;
  };
}

export const initializeMews = (configurationId: string) => {
  const mewsWindow = window as MewsWindow;
  if (!mewsWindow.Mews) {
    console.error('Mews object not available');
    return;
  }

  mewsWindow.Mews.Distributor({
    configurationIds: [configurationId],
    openElements: '.distributor',
  });
};
