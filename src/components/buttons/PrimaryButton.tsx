import classNames from 'classnames/dedupe';
import { solidIcon, IconName } from '../icons';
import './button.css'

export interface ButtonProps {
    name: string;
    icon?: IconName;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: JSX.Element;
    disabled?: boolean;
}

const PrimaryButton: React.FC<ButtonProps> = ({
    name,
    icon,
    onClick,
    children,
    disabled
}) => {

    return (
        <button
            onClick={onClick}
            className={classNames(
                "button-style flex flex-row justify-center items-center z-[9999]",
                'text-md font-medium py-2.5 m-4 text-white-100 ',
                "h-10  transition-colors rounded-full shadow-lg",
                "bg-gradient-to-br from-violet-900 to-rose-600",
                { 'pl-4 pr-6': icon },
                { 'px-6': !icon },
                {'opacity-80 hover:opacity-100': !disabled},
                {'opacity-40': disabled}
            )}
            disabled={disabled}
        >
            {children}
            {solidIcon(icon, 'mr-2')}
            {name}
        </button>
    );
}

export default PrimaryButton;