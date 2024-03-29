import { EditorProvider } from './context/context.tsx';
import CodeBar from './components/CodeBar/CodeBar.tsx';
import cls from './App.module.scss';
import { Header } from './components/Header/Header.tsx';
import { Preview } from './components/Preview/Preview.tsx';

function App() {
    return (
        <EditorProvider>
            <CodeBar />
            <div className={cls.main}>
                <Header />
                <Preview />
            </div>
        </EditorProvider>
    );
}

export default App;
