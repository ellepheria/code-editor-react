import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/ext-language_tools';

const JsEditor = () => (
    <AceEditor
        placeholder="Write your JS code here."
        mode="javascript"
        theme="monokai"
        name="editor_js"
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

export default JsEditor;
