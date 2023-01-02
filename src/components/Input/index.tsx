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
    errors?: string;
}

const Input: React.FC<InputProps> = ({
    type,
    value,
    onInput,
    label,
    textHelper,
    required,
    errors
}) => {

    const [ touched, setTouched] = useState(false);

      // Show error when input contains error and user has touched the input
      const showError: boolean = touched && errors != undefined && errors.length > 0;

    return (
        <label className="relative block">
            <input
                type={type}
                spellCheck="false"
                value={value}
                onInput={onInput}
                className={classNames(
                    "min-w-[280px] w-full h-12 pl-4 pr-3 rounded-t-lg peer",
                    "font-sans text-base font-normal transition-colors",
                    "bg-gradient-to-tl from-violet-400/80 via-rose-500/60 to-fuchsia-400 ",
                    "border-b border-black focus:outline-none focus:border-b-2",
                    "placeholder:text-transparent placeholder:select-none cursor-text",
                    { "border-red-500": showError}
                )}
                placeholder="placeholder"
                required={required}
                onChange={() => setTouched(true)}
            />
            {/** Placeholder */}
            <span
                className={classNames(
                    // Positions
                    'absolute select-none left-0 top-0 peer-placeholder-shown:top-3.5',
                    // Text
                    'text-primary text-xs peer-placeholder-shown:text-gray-800 peer-placeholder-shown:text-base ',
                    // other
                    'pl-4 transition-all cursor-text'
                )}
            >
                {label}
            </span>

            {/** Helpers at the bottom */}
            <div className={classNames(" pt-1 px-4 text-xs min-w-[280px] text-neutral-30 ",
                    {"text-red-500": showError}
                )}
            >
                    {showError ? errors : textHelper}
            </div>
            
        </label>
    );
}

export default Input;