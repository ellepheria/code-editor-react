import { memo, useContext, useMemo } from 'react';
import cls from './Preview.module.scss';
import { EditorContext } from '../../context/context.tsx';

interface PreviewProps {
    className?: string;
}

export const Preview = memo((props: PreviewProps) => {
    const {
        className,
    } = props;

    const { html, css, js } = useContext(EditorContext);

    const document = useMemo(() => (
        `
            <!doctype html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title></title>
              <style>${css}</style>
            </head>
            <body>
            ${html}
            
            <script>
            ${js}
            </script>
            </body>
            </html>
`
    ), [css, html, js]);

    return (
        <div className={`${cls.content} ${className} ${(!html && !css && !js) ? cls.grey : ''}`}>
            {
                (html || css || js)
                    ? (
                        <iframe title="preview" className={cls.preview} srcDoc={document} />
                    )
                    : (
                        <div className={cls.loading}>
                            Your code will be displayed here.
                        </div>
                    )
            }
        </div>
    );
});
