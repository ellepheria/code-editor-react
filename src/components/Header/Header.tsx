import { memo, useState } from 'react';
import { BsFillCameraVideoFill, BsCameraVideoOffFill } from 'react-icons/bs';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const {
        className,
    } = props;

    const [camera, setCamera] = useState(false);

    return (
        <header className={`${cls.header} ${className}`}>
            <button
                onClick={() => setCamera((prev) => !prev)}
                type="button"
                className={cls.button}
            >
                {
                    camera
                        ? <BsFillCameraVideoFill fill="#fff" size={23} />
                        : <BsCameraVideoOffFill fill="#fff" size={23} />
                }
            </button>
        </header>
    );
});
