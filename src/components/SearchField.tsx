import React, { useRef } from "react";
import { useTagStore, useQueryStore, useSuggestListPositionStore } from "../store";

import Tags from "./Tags";
import SuggestedTags from "./SuggestedTags";

const SearchField: React.FC = () => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const { query, updateQuery } = useQueryStore();
  const { addTag } = useTagStore();
  const { updateSuggestListPosition } = useSuggestListPositionStore();

  const onOptionClick = (query: string, itemName: string) => {
    const replacingReg = /(\W*)(\w+\s*\d*)/;
    const newQuery = query.replace(replacingReg, `$1${itemName}`);

    const dividingRegex = /^([^\w]*)(\w+\s*\d*)([^\w]*)$/;
    const regResult = newQuery.match(dividingRegex);

    if (regResult) {
      addTag(regResult[1], regResult[2], regResult[3]);
    }
    updateQuery("", "search");
    inputRef.current?.focus();
  };

  const findCursorPosition = (element: HTMLElement) => {
    const cursorPosition = element.getBoundingClientRect();
    updateSuggestListPosition(cursorPosition);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateQuery(e.target.value, e.target.name as "search");
    findCursorPosition(e.target);
  };

  return (
    <div className="flex items-center min-w-[1000px] h-[120px] border border-gray-300 py-2 px-3 bg-white">
      <Tags />
      <input
        ref={inputRef}
        name="search"
        type="text"
        value={query}
        onChange={(e) => handleInputChange(e)}
        className="relative py-3 w-full focus:outline-none text-[30px]"
      />
      <SuggestedTags onOptionClick={onOptionClick} />
    </div>
  );
};
export default SearchField;
