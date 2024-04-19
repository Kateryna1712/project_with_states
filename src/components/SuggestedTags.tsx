import { useQueryStore } from "../store";
import { useSuggestListPositionStore } from "../store";
import { useSuggestions } from "../hooks/useSuggestions";
import { Suggestion } from "../types/Suggestions.type";

const SuggestedTags = ({
  onOptionClick,
}: {
  onOptionClick: (query: string, itemName: string) => void;
}) => {
  const { query } = useQueryStore();
  const { suggestListPosition } = useSuggestListPositionStore();

  const { data } = useSuggestions();

  return (
    <ul
      className={`${suggestListPosition.display} absolute overflow-auto w-[150px] h-fit`}
      style={{
        top: suggestListPosition.top,
        left: suggestListPosition.left,
      }}
    >
      {data &&
        data
          .filter((item: Suggestion) => {
            const words = query.split(/[\+\-\*\/\^\(\)\.]+/).filter(Boolean);
            const lastWord = words[words.length - 1];
            const itemName = item.name.toLowerCase();

            return lastWord && itemName.startsWith(lastWord);
          })
          .slice(0, 5)
          .map((item: Suggestion, i: number) => {
            const { name, id, category } = item;
            return (
              <div
                onClick={() => {
                  onOptionClick(query, name);
                }}
                className="py-2 px-4 w-full cursor-pointer hover:bg-slate-200 flex items-center justify-between border-t border-t-gray-500 bg-white"
                key={`${id}_${i}`}
              >
                <span>{name}</span>
                <span>{category}</span>
              </div>
            );
          })}
    </ul>
  );
};

export default SuggestedTags;
