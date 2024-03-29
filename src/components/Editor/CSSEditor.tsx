import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useContext } from 'react';
import { EditorContext } from '../../context/context.tsx';

const CssEditor = () => {
    const { css, setCss } = useContext(EditorContext);

    return (
        <AceEditor
            placeholder="Write your CSS code here."
            mode="css"
            value={css}
            onChange={(value) => setCss?.(value)}
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
};

export default CssEditor;
