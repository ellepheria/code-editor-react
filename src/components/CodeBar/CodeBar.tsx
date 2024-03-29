import { useState } from 'react';
import cls from './CodeBar.module.scss';

interface CodeBarProps {
    className?: string;
}

const CodeBar = ({ className }: CodeBarProps) => {
    const [activeTab, setActiveTab] = useState('HTML');

    return (
        <div className={`${cls.codebar} ${className}`}>
            <nav className={cls.tab}>
                <button
                    onClick={() => setActiveTab('HTML')}
                    className={`${cls.item} ${activeTab === 'HTML' && cls.active}`}
                    type="button"
                >
                    HTML
                </button>
                <button
                    onClick={() => setActiveTab('CSS')}
                    className={`${cls.item} ${activeTab === 'CSS' && cls.active}`}
                    type="button"
                >
                    CSS
                </button>
                <button
                    onClick={() => setActiveTab('JS')}
                    className={`${cls.item} ${activeTab === 'JS' && cls.active}`}
                    type="button"
                >
                    JS
                </button>
            </nav>

        </div>
    );
};

export default CodeBar;
