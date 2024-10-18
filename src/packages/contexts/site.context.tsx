import { create } from "zustand";

type IUseSiteContext = {
  isCookieBannerVisible: boolean;
  handleSetCookieBannerVisible(state: boolean): void;
};

const useSiteContext = create<IUseSiteContext>((set) => ({
  isCookieBannerVisible: true,
  handleSetCookieBannerVisible: (state: boolean) =>
    set(() => ({ isCookieBannerVisible: state })),
}));

export { useSiteContext };
