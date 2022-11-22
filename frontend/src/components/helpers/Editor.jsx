import React from "react";
import AceEditor from "react-ace";


import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

require(`ace-builds/src-noconflict/mode-python`);
require(`ace-builds/src-noconflict/theme-github`);

const changeSize = (editorInstance) => {
  editorInstance.container.style.width = "100%";
  document.addEventListener("mouseup", (e) => editorInstance.resize());
};

const cawEditorOptions = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
};

export default function Editor() {
  return (
    <AceEditor
      onLoad={changeSize}
      placeholder="# Put your code here! Good luck!"
      mode="python"
      theme="github"
      name="cawEditor"
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={""}
      setOptions={cawEditorOptions}
    />
  );
}
