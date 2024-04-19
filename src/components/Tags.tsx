import { useTagStore } from "../store";
import { useQueryStore } from "../store";
import { Icon } from "@iconify-icon/react";

const Tags = () => {
  const { tags, deleteTag, editTagName, setCurrentEditingId, currentEditingId } = useTagStore();
  const { tagNameQuery, updateQuery } = useQueryStore();

  const handleEdit = (tagId: string, tagNameQuery: string) => {
    editTagName(tagId, tagNameQuery);
    setCurrentEditingId(null);
    updateQuery("", "edit");
  };

  const renderTag = (tagId: string, tagName: string) => {
    return currentEditingId === tagId ? (
      <div className="relative">
        <input
          className="bg-gray-500 focus:outline-none border-none py-[2px] w-[100px] pr-10"
          name="edit"
          value={tagNameQuery}
          autoFocus
          onChange={(e) => updateQuery(e.target.value, e.target.name as "edit")}
        />
        <div className="absolute top-[6px] right-1 flex">
          <button
            type="button"
            id="approve"
            className="flex items-center justify-center"
            onClick={() => handleEdit(tagId, tagNameQuery)}
          >
            <Icon icon={"material-symbols:check"} />
          </button>
          <button
            type="button"
            id="cancel"
            className="flex items-center justify-center"
            onClick={() => setCurrentEditingId(null)}
          >
            <Icon icon={"material-symbols:close"} />
          </button>
        </div>
      </div>
    ) : (
      <span
        className="min-w-[50px] min-h-[24px] text-center"
        onClick={() => setCurrentEditingId(tagId)}
      >
        {tagName !== "" ? tagName : "n/a"}
      </span>
    );
  };

  return (
    <ul className="flex">
      {tags.map(({ id, startSymbols, tagName, endSymbols }, i) => (
        <li key={`${id}_${i}`} className="flex items-center">
          {startSymbols.map((symbol: string, i: number) => (
            <span key={`${symbol}_${i}`} className="text-[30px]">
              {symbol}
            </span>
          ))}
          <div className="flex items-center justify-center min-w-[120px] gap-2 bg-gray-400 h-[60px] text-[20px] text-white rounded-lg p-1">
            {renderTag(id, tagName)}
            <button onClick={() => deleteTag(id)} type="button" className="border border-black p-1">
              X
            </button>
          </div>
          <span className="flex text-[30px]">{endSymbols}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
