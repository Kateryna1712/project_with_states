export type QueryStore = {
  query: string;
  tagNameQuery: string;
  updateQuery: (searchValue: string, type: "search" | "edit") => void;
};
