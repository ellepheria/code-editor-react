import React, {
    createContext, ReactNode, useMemo, useState,
} from 'react';

interface Editor {
    html?: string;
    css?: string;
    js?: string;
    setHtml?: React.Dispatch<React.SetStateAction<string>>;
    setCss?: React.Dispatch<React.SetStateAction<string>>;
    setJs?: React.Dispatch<React.SetStateAction<string>>;
}

interface EditorProviderProps {
    children?: ReactNode;
}

export const EditorContext = createContext<Editor>({});

export const EditorProvider = (props: EditorProviderProps) => {
    const { children } = props;

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    const providedValue = useMemo(() => ({
        html, setHtml, css, setCss, js, setJs,
    }), [css, html, js]);

    return (
        <EditorContext.Provider value={providedValue}>
            {children}
        </EditorContext.Provider>
    );
};
