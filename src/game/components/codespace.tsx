"use client";

import { Editor, useMonaco } from "@monaco-editor/react";
import { editor } from "monaco-editor/esm/vs/editor/editor.api";
import { oneDarkProTheme } from "../utils/theme";

import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400" });

const Codespace = () => {
  const monaco = useMonaco();

  const options: editor.IStandaloneEditorConstructionOptions = {
    minimap: {
      enabled: false,
    },
    hideCursorInOverviewRuler: true,
    scrollbar: {
      horizontal: "hidden",
      vertical: "hidden",
      handleMouseWheel: false,
    },
    renderWhitespace: "none",
    lineNumbers: "off",
    renderLineHighlight: "none",
    fontSize: 40,
    fontFamily: spaceMono.style.fontFamily,
    tabSize: 2,
    insertSpaces: true,
    guides: {
      indentation: false,
    },
    lineDecorationsWidth: 0,
    lineNumbersMinChars: 0,
    glyphMargin: false,
    folding: false,
    rulers: [],
    overviewRulerLanes: 0,
  };

  monaco?.editor.defineTheme("oneDarkPro", oneDarkProTheme);

  return (
    <>
      <Editor
        height="100px"
        width="100px"
        defaultLanguage="javascript"
        defaultValue="// Enter code here!"
        options={options}
        theme="oneDarkPro"
      />
    </>
  );
};

export default Codespace;
