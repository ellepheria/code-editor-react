import { EditorProvider } from './context/context.tsx';
import CodeBar from './components/CodeBar/CodeBar.tsx';

function App() {
    return (
        <EditorProvider>
            <CodeBar />
        </EditorProvider>
    );
}

export default App;
