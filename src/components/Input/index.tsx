import classNames from 'classnames';
import { useState } from 'react';

/**
 * Reusable input component with predefined style.
 *
*/

interface InputProps {
    type: React.HTMLInputTypeAttribute;
    value: string | number | readonly string[] | undefined;
    onInput: React.FormEventHandler<HTMLInputElement>;
    label?: string;
    textHelper?: string;
    required?: true;
}

const Input: React.FC<InputProps> = ({
    type,
    value,
    onInput,
    label,
    textHelper,
    required
}) => {


    return (
        <label className="relative">
            <input
                type={type}
                spellCheck="false"
                value={value}
                onInput={onInput}
                className={classNames(
                    "min-w-[280px] w-full h-12 pl-4 pr-3 rounded-t-lg peer",
                    "font-sans text-base font-normal transition-colors",
                    "bg-gradient-to-tl from-violet-400/80 via-rose-500/60 to-fuchsia-400 ",
                    "border-b border-black focus:outline-none focus:border-b-2"
                )}
            >
            </input>
        </label>
    );
}

export default Input;