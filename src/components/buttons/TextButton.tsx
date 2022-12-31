import type { ButtonProps } from "./PrimaryButton";
import classNames from 'classnames/dedupe';
import { solidIcon } from "../icons";

const TextButton: React.FC<ButtonProps> = ({
    name,
    icon,
    onClick,
    children
}) => {

    return (
        <button
            onClick={onClick}
            className={classNames(
                "flex flex-row justify-center items-center z-[999]",
                "text-md py-2.5 text-black font-semibold h-10 border border-transparent",
                "hover:border hover:rounded-full hover:border-black",
                { 'pl-4 pr-6': icon },
                { 'px-6': !icon }           )}
        >
            {name}
            {solidIcon(icon, 'ml-2')}
        </button>
    )
}


export default TextButton;