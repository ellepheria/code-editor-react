import { EditorProvider } from './context/context.tsx';
import CodeBar from './components/CodeBar/CodeBar.tsx';
import cls from './App.module.scss';
import { Header } from './components/Header/Header.tsx';

function App() {
    return (
        <EditorProvider>
            <CodeBar />
            <div className={cls.main}>
                <Header />
            </div>
        </EditorProvider>
    );
}

export default App;
