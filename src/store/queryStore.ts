import { create } from "zustand";
import { QueryStore } from "../types/QueryStore.type";

export const useQueryStore = create<QueryStore>((set) => ({
  query: "",
  tagNameQuery: "",
  updateQuery: (searchValue: string, type: "search" | "edit") =>
    set((state) => {
      if (type === "edit") {
        return {
          ...state,
          tagNameQuery: searchValue,
        };
      } else {
        return {
          ...state,
          query: searchValue,
        };
      }
    }),
}));
