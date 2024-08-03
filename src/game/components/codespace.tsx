"use client";

import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor/esm/vs/editor/editor.api";

const Codespace = () => {
  const options: editor.IStandaloneEditorConstructionOptions = {
    minimap: {
      enabled: false,
    },
    hideCursorInOverviewRuler: true,
    scrollbar: {
      horizontal: "hidden",
      vertical: "hidden",
    },
    renderWhitespace: "none",
    lineNumbers: "off",
    renderLineHighlight: "none",
    fontSize: 20,
  };

  return (
    <>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        options={options}
      />
    </>
  );
};

export default Codespace;
