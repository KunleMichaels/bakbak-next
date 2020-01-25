import React, { useState, useMemo, useCallback } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { SlateLeaf, SlateElement } from "../../shared/slate/SlateEditorUtil";

interface Props {
  details: string;
}

export const SlateReadOnlyView = (props: Props) => {
  const [value, setValue] = useState(JSON.parse(props.details));
  const editor = useMemo(() => withReact(createEditor()), []);
  const renderElement = useCallback((props) => <SlateElement {...props} />, []);
  const renderLeaf = useCallback((props) => <SlateLeaf {...props} />, []);

  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <Editable
        readOnly
        renderLeaf={renderLeaf}
        renderElement={renderElement}
      />
    </Slate>
  );
};
