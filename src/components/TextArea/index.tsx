import classNames from 'classnames/dedupe';

/**
 * 
 * Text area used for sending longer messages
 * Not conrtained in height
 * 
 */

 interface TextInputProps {
    placeholder: string;
    value: string;
    label: string;
    onInput: React.FormEventHandler<HTMLTextAreaElement>;
}

const TextArea: React.FC<TextInputProps> = ({
    placeholder,
    label,
    value,
    onInput,
}) => {

    return (
        <div className='relative  h-full w-full flex flex-col'>
            <textarea
                spellCheck={'false'}
                placeholder={placeholder}
                className={classNames(
                    'form-control peer h-full w-full pl-4 py-1.5 pt-3 text-base font-normal bg-clip-padding resize-none',
                    'border-b border-black focus:border-b-2 focus:outline-none',
                    'rounded-t-lg transition-colors',
                    'bg-gradient-to-tl from-violet-400/80 via-rose-500/60 to-fuchsia-400',
                    'placeholder:text-transparent placeholder:select-none cursor-text'
                )}
                value={value}
                onInput={onInput}
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
                {placeholder}
            </span>
            <div className=" pt-1 px-4 text-xs min-w-[280px] text-neutral-30 ">
                {label}
            </div>
            
        </div>
    );
};

export default TextArea;