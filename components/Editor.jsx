import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { convertToRaw, ContentState, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "../components/Editor.module.css";

let draftToHtml = null;
if (typeof window === "object") {
  draftToHtml = require("draftjs-to-html");
}

let htmlToDraft = null;
if (typeof window === "object") {
  htmlToDraft = require("html-to-draftjs").default;
}

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const prepareDraft = (value) => {
  const draft = htmlToDraft(value);
  const contentState = ContentState.createFromBlockArray(draft.contentBlocks);
  const editorState = EditorState.createWithContent(contentState);
  return editorState;
};

export default function EditorComponent(props) {
  const { editOnsen, onChange } = props;
  const [editorState, setEditorState] = useState(
    editOnsen ? prepareDraft(editOnsen) : EditorState.createEmpty()
  );

  return (
    <Editor
      editorState={editorState}
      wrapperClassName={styles.wrapperClass}
      editorClassName={styles.editorClass}
      toolbarClassName={styles.toolbarClass}
      onEditorStateChange={(editorState) => {
        const forFormik = draftToHtml(
          convertToRaw(editorState.getCurrentContent())
        );
        onChange(forFormik);
        setEditorState(editorState);
      }}
    />
  );
}

// onEditor = { onEditorForm }
