import { Tag } from "./Tag.type";

export type TagStore = {
  tags: Tag[];
  currentEditingId: null | string;
  addTag: (startSymbols: string, pureQuery: string, endSymbols: string) => void;
  deleteTag: (tagId: string) => void;
  editTagName: (id: string, newValue: string) => void;
  setCurrentEditingId: (id: string | null) => void;
};
