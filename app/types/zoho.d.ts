export {};

declare global {
  interface Window {
    ZFWidget?: {
      init?: () => void;
      reload?: () => void;
    };
  }
}
