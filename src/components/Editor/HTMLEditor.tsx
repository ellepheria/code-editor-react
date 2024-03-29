import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useContext } from 'react';
import { EditorContext } from '../../context/context.tsx';

const HtmlEditor = () => {
    const { html, setHtml } = useContext(EditorContext);

    return (
        <AceEditor
            placeholder="Write your HTML code here."
            mode="html"
            value={html}
            onChange={(value) => setHtml?.(value)}
            theme="monokai"
            name="editor_html"
            fontSize="16"
            height="100%"
            width="100%"
            showPrintMargin
            showGutter
            highlightActiveLine
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 4,
            }}
        />
    );
};

export default HtmlEditor;
