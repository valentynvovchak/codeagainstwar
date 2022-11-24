import React     from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";

const language = 'python'
const theme    = 'github'

require(`ace-builds/src-noconflict/mode-${language}`);
require(`ace-builds/src-noconflict/theme-${theme}`);

const changeSize = (editorInstance) => {
  editorInstance.container.style.width = "100%";
  document.addEventListener("mouseup", (e) => editorInstance.resize());
};

const cawEditorOptions = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2
}
export default Editor = React.forwardRef((props, ref) => (
    <AceEditor
    onLoad              = { changeSize }
    placeholder         = "# Put your code here! Good luck!"
    mode                = { language }
    theme               = { theme }
    name                = "cawEditor"
    fontSize            = { 18 }
    showPrintMargin     = { true }
    showGutter          = { true }
    highlightActiveLine = { true }
    value               = { '' }
    setOptions          = { cawEditorOptions }
    ref                 = { ref } />
  )
);
