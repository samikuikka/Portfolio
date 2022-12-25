import classNames from 'classnames/dedupe';
import { solidIcon, Icon } from '../icons';

interface ButtonProps {
    name: string;
    icon?: Icon;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton: React.FC<ButtonProps> = ({
    name,
    icon,
    onClick
}) => {

    return (
        <button
            onClick={onClick}
            className={classNames(
                "flex flex-row justify-center items-center",
                'text-md font-medium py-2.5 m-4 text-white-100 ',
                "h-10  transition-colors rounded-full shadow-lg",
                'opacity-80 hover:opacity-100',
                { 'pl-4 pr-6': icon },
                { 'px-6': !icon },
            )}
            style={{ background: 'linear-gradient(120.86deg, #4C1D95 3.99%, #E11D48 66.93%)'}}

        >
            {solidIcon(icon, 'mr-2')}
            {name}
        </button>
    );
}

export default PrimaryButton;