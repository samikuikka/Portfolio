import classNames from 'classnames/dedupe';
import { solidIcon, IconName } from '../icons';
import './button.css'

export interface ButtonProps {
    name: string;
    icon?: IconName;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: JSX.Element;
    disabled?: boolean;
    type?: 'submit';
    size?: 'small';
}

const PrimaryButton: React.FC<ButtonProps> = ({
    name,
    icon,
    onClick,
    children,
    disabled,
    type,
    size
}) => {

    return (
        <button
            type={type ? type : 'button'}
            onClick={onClick}
            className={classNames(
                "button-style flex flex-row justify-center items-center z-[9999]",
                'text-md font-medium py-2.5 text-white-100 ',
                " transition-colors rounded-full shadow-lg",
                "bg-gradient-to-br from-violet-900 to-rose-600",
                { 'pl-4 pr-6': icon },
                { 'px-6': !icon },
                {'opacity-80 hover:opacity-100': !disabled},
                {'opacity-40': disabled},
                {'h-10': !size},
                {'text-xs py-0 h-6 px-3': size === 'small'}
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