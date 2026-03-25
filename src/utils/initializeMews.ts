// MEWS BOOKING ENGINE DISABLED - To be replaced with alternative booking engine

/* COMMENTED OUT MEWS CODE
interface MewsWindow extends Window {
  Mews?: {
    Distributor: (
      config: { configurationIds: string[]; openElements: string },
      callback?: (api: MewsAPI) => void,
    ) => void;
  };
}

interface MewsAPI {
  open: () => void;
  close: () => void;
  enableTracking: () => void;
  disableTracking: () => void;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
  setLanguageCode: (code: string) => void;
  setCurrencyCode: (code: string) => void;
  setVoucherCode: (code: string) => void;
  setAdultCount: (count: number) => void;
  setChildCount: (count: number) => void;
}

let mewsApiInstance: MewsAPI | null = null;

export const initializeMews = (configurationId: string): Promise<MewsAPI> => {
  return new Promise((resolve, reject) => {
    const mewsWindow = window as MewsWindow;

    if (!mewsWindow.Mews) {
      reject(new Error('Mews object not available'));
      return;
    }

    // Initialize booking engine
    mewsWindow.Mews.Distributor(
      {
        configurationIds: [configurationId],
        openElements: '.distributor',
      },
      (api) => {
        mewsApiInstance = api;

        api.disableTracking();

        // console.log('Mews booking engine initialized with tracking disabled');
        resolve(api);
      },
    );
  });
};

export const setMewsTracking = (enabled: boolean): void => {
  if (!mewsApiInstance) {
    return;
  }

  if (enabled) {
    mewsApiInstance.enableTracking();
    // console.log('✅ Mews tracking ENABLED (analytics active)');
  } else {
    mewsApiInstance.disableTracking();
    // console.log('🔒 Mews tracking DISABLED (analytics off, booking still works)');
  }
};

export const getMewsApi = (): MewsAPI | null => mewsApiInstance;
*/
