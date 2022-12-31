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
        <div className="flex flex-row w-full h-min py-4">
            {/** Part 1 */}
            <div className="flex flex-col items-center pr-4">
                <div className="h-[30px] w-[30px] flex-0">
                    <img src={educationSVG} />
                </div>
                <div className="h-full w-[6px] bg-gray-500 border rounded border-black">
                </div>
            </div>

            {/** Info */}
            <div className="flex-1 text-center text-base pr-4">
                {info}
            </div>

            {/** Description */}
            <div className="bg-white-100 z-[9]">
            <div className="flex-[2] text-center text-sm text-black">
                {description}
            </div>
            </div>
            
        </div>
    );
}

export default School;