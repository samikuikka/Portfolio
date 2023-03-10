import educationSVG from '../../../../../images/school.svg';

interface SchoolProps {
    info: string;
    description: string;
}

const School: React.FC<SchoolProps> = ({
    info,
    description
}) => {

    return (
        <div className="flex flex-row flex-1 w-full lg:h-min py-4">
            {/** Part 1 */}
            <div className="flex flex-col items-center pr-2 lg:pr-4">
                <div className="h-[30px] w-[30px] flex-0">
                    <img src={educationSVG} />
                </div>
                <div className="h-full w-[6px] bg-gray-500 border rounded border-black">
                </div>
            </div>

            {/** Info */}
            <div className="flex-1 flex flex-col justify-center text-center text-base pr-2 lg:pr-4">
                <div className='h-min'>
                    {info}
                </div>
            </div>

            {/** Description */}
            <div className="flex-[2] flex flex-col justify-center text-center text-sm text-black">
                <div className='h-min'>
                    {description}
                </div>
            </div>

        </div>
    );
}

export default School;