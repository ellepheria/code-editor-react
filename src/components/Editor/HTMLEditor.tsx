import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/ext-language_tools';

const HtmlEditor = () => (
    <AceEditor
        placeholder="Write your HTML code here."
        mode="html"
        theme="monokai"
        name="editor_html"
        fontSize="16"
        height="100%"
        width="100%"
        showPrintMargin={false}
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

export default HtmlEditor;
