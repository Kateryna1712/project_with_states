import { create } from "zustand";
import { suggestListPositionStore } from "../types/suggestedListPosition/suggestListPositionStore.type";

export const useSuggestListPositionStore = create<suggestListPositionStore>((set) => ({
  suggestListPosition: { top: 0, left: 0, display: "none" },
  updateSuggestListPosition: (ElementPosition) =>
    set(() => ({
      suggestListPosition: {
        top: ElementPosition.top + ElementPosition.height,
        left: ElementPosition.left,
        display: "block",
      },
    })),
}));
