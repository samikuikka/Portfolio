import Glass from '../../../Glass';
import soloSVG from '../../../../images/solo.svg';
import teamSVG from '../../../../images/team.svg';
import PrimaryButton from '../../../buttons/PrimaryButton';
import githubSVG from '../../../../images/logos/github.svg';

/**
 * Card showing project information
 * 
*/

interface ProjectProps {
    name: string;
    group: string;
    type: string;
    description: string;
    technologies: string;
    github: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
    name,
    group,
    type,
    description,
    technologies,
    github
}) => {
    /*  const { height, width } = useWindowDimensions();
     const card_h = Math.floor(height * 0.35); */

    return (
        <div className='h-full w-full flex justify-center'>
            <div className={`w-72 h-80 md:w-96 md:h-full px-[5%] py-[2%]`}>
                <Glass>
                    <div
                        className={`flex flex-col h-full w-full `}
                    >

                        {/** Header of the card */}
                        <div
                            className='flex flex-col px-4 pt-4'
                        >
                            <h2 className=' text-[1.15vw] font-semibold'>{name}</h2>
                            <div className='flex flex-row gap-2'>
                                {group == 'team' ? (
                                    <img src={soloSVG} className="inline" />
                                ) : (
                                    <img src={teamSVG} className="inline" />
                                )}
                                <p>{type}</p>
                            </div>

                        </div>

                        {/** Screenshot of the project */}
                        <div className='flex flex-col justify-center w-full h-52 py-4'>
                            <img className=' object-contain' src="http://placekitten.com/440/200" />
                        </div>

                        {/** Description */}
                        <div className='flex-1 p-4 text-xs'>
                            {description}
                        </div>

                        {/** Actions */}
                        <div className="h-24 w-full pl-4 flex flex-row">
                            {/** Tech stack */}
                            <div className="h-full flex-1 pb-4 flex flex-col justify-end">
                                <div className="text-xs">
                                    Tech Stack:
                                </div>
                                <div className='text-xs font-semibold'>
                                    {technologies}
                                </div>
                            </div>
                            {/** GitHub */}
                            <div className='h-full flex flex-col justify-end'>
                                <PrimaryButton name="GitHub">
                                    <div className="h-6 w-6 mr-2"><img src={githubSVG}/></div>
                                </PrimaryButton>
                            </div>
                        </div>

                    </div>
                </Glass>
            </div>
        </div>

    );
}

export default ProjectCard;