import { EditorProvider } from './context/context.tsx';
import CodeBar from './components/CodeBar/CodeBar.tsx';
import cls from './App.module.scss';

function App() {
    return (
        <EditorProvider>
            <CodeBar />
            <div className={cls.main}>
                /
            </div>
        </EditorProvider>
    );
}

export default App;
