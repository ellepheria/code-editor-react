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
    children: ReactNode;
}

export const EditorContext = createContext<Editor>({});

export const EditorProvider = ({ children }: EditorProviderProps) => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    const providedValue: Editor = useMemo(() => ({
        html,
        css,
        js,
        setHtml,
        setCss,
        setJs,
    }), [css, html, js]);

    return (
        <EditorContext.Provider value={providedValue}>
            {children}
        </EditorContext.Provider>
    );
};
