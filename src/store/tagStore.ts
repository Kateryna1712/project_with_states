import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { TagStore } from "../types/Tags/TagStore.type";

export const useTagStore = create<TagStore>((set) => ({
  tags: [],
  currentEditingId: null,
  setCurrentEditingId: (id: string | null) => set({ currentEditingId: id }),

  addTag: (startSymbols: string, tagName: string, endSymbols: string) =>
    set((state) => {
      const newTag = { id: uuidv4(), startSymbols: startSymbols.split(""), tagName, endSymbols };
      return {
        tags: [...state.tags, newTag],
      };
    }),
  deleteTag: (tagId: string) =>
    set((state) => ({
      tags: state.tags.filter((item) => item.id !== tagId),
      currentEditingId: state.currentEditingId === tagId ? null : state.currentEditingId,
    })),
  editTagName: (id, newValue) =>
    set((state) => ({
      tags: state.tags.map((tag) => (tag.id === id ? { ...tag, tagName: newValue } : tag)),
    })),
}));
