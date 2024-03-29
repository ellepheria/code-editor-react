import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-noconflict/ext-language_tools';

const CssEditor = () => (
    <AceEditor
        placeholder="Write your CSS code here."
        mode="css"
        theme="monokai"
        name="editor_css"
        fontSize="16"
        height="100%"
        width="100%"
        showPrintMargin
        showGutter={false}
        highlightActiveLine
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            tabSize: 4,
        }}
    />
);

export default CssEditor;
