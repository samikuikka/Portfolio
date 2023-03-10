import Glass from '../../../Glass';
import soloSVG from '../../../../images/solo.svg';
import teamSVG from '../../../../images/team.svg';
import PrimaryButton from '../../../buttons/PrimaryButton';
import githubSVG from '../../../../images/logos/github.svg';
import { ReadMore } from './ReadMore';

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
    links: { url: string; label: string; }[];
    image?: string;
    to: string;
    className?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
    name,
    group,
    type,
    description,
    technologies,
    github,
    links,
    image,
    to,
    className
}) => {


    return (
        <div className={`h-full w-full flex justify-center ${className}`}>
            <div className={`w-72 md:w-96 h-full px-[5%] py-[2%]`}>
                <Glass>
                    <div
                        className={`flex flex-col h-full w-full `}
                    >

                        {/** Header of the card */}
                        <div
                            className='flex flex-col px-4 pt-4'
                        >
                            <h2 className=' text-base lg:text-lg font-semibold'>{name}</h2>
                            <div className='flex flex-row gap-2'>
                                {group == 'solo' ? (
                                    <img src={soloSVG} className="inline" />
                                ) : (
                                    <img src={teamSVG} className="inline" />
                                )}
                                <p>{type}</p>
                            </div>

                        </div>

                        {/** Screenshot of the project */}
                        <div className='flex flex-col justify-center w-full h-min py-4'>
                            {image ? (
                                <img className=' object-contain' src={image} />)
                                : (
                                <img className=' object-contain' src="http://placekitten.com/440/200" />
                                )}
                        </div>

                        {/** Description */}
                        <p className='flex-1 p-2 pt-0 text-xs z-10'>
                            {description}
                            <br />
                            {links?.map(link => {
                                return <><a href={link.url} target="_blank" className='text-sm text-blue-600 hover:underline'>{link.label}</a> <br /></>
                            })}
                        </p>

                        {/** Actions */}
                        <div className="min-h-24 w-full pl-4 flex flex-row">
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
                            <div className='h-full flex flex-col justify-end pb-4 pr-2'>
                                <PrimaryButton
                                    name="GitHub"
                                    onClick={() => window.open(github, '_blank', 'noreferrer')}
                                    size="small"
                                >
                                    <div className="h-4 w-4 mr-2"><img src={githubSVG} /></div>
                                </PrimaryButton>
                                <ReadMore 
                                    to={to}
                                />

                            </div>
                        </div>

                    </div>
                </Glass>
            </div>
        </div>

    );
}

export default ProjectCard;