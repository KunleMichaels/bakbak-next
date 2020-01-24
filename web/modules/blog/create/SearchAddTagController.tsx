import { useCallback, useState } from "react";
import { ChipsComponent } from "./ChipsComponent";
import { useSearchTagsLazyQuery, TagInput } from "../../../../controller";
import AutoSearchInputView from "./AutoSearchInputView";

interface Props {
  updateSelectedValues: (data: TagInput[]) => void;
}

export const SearchAddTagController = (props: Props) => {
  const [tags, setTags] = useState<TagInput[]>([]);
  const [callSearch, { data }] = useSearchTagsLazyQuery();

  const updateSelectedValues = useCallback(
    (selectedTag) => {
      if (tags.findIndex((tag) => tag.tagName === selectedTag.name) === -1) {
        const newTags = [
          ...tags,
          { tagId: selectedTag.id, tagName: selectedTag.name }
        ];
        setTags(newTags);
        props.updateSelectedValues(newTags);
      }
    },
    [tags]
  );

  const callTagSearch = (name: string) => {
    callSearch({ variables: { tagName: name } });
  };

  const deleteData = (tagName: string) => {
    const index = tags.findIndex((s) => s.tagName === tagName);
    if (index !== -1) {
      const newTags = [...tags.slice(0, index), ...tags.slice(index + 1)];
      setTags(newTags);
      props.updateSelectedValues(newTags);
    }
  };

  const renderTags = () => {
    return tags.map((tag) => (
      <ChipsComponent
        label={tag.tagName}
        deleteData={deleteData}
        key={`${tag.tagId}${tag.tagName}`}
        size="small"
      />
    ));
  };
  return (
    <>
      <AutoSearchInputView
        searchData={data?.searchTags}
        callTagSearch={callTagSearch}
        updateSelectedValues={updateSelectedValues}
      />
      <div style={{ marginTop: 10, display: "flex", flexDirection: "row" }}>
        {renderTags()}
      </div>
    </>
  );
};
