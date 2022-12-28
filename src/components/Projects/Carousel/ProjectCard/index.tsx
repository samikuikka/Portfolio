import React from 'react';
import Glass from '../../../Glass';
import { useWindowDimensions } from './widthHook';
import soloSVG from '../../../../images/solo.svg';
import PrimaryButton from '../../../buttons/PrimaryButton';
import githubSVG from '../../../../images/logos/github.svg';

/**
 * Card showing project information
 * 
 */

const ProjectCard = () => {
    /*  const { height, width } = useWindowDimensions();
     const card_h = Math.floor(height * 0.35); */

    return (
        <div className='h-full w-full flex justify-center'>
            <div className={`w-72 h-80 md:w-96 md:h-fit px-[5%] py-[2%]`}>
                <Glass>
                    <div
                        className={`flex flex-col h-full w-full `}
                    >

                        {/** Header of the card */}
                        <div
                            className='flex flex-col px-4 pt-4'
                        >
                            <h2 className=' text-xl'>Portfolio website</h2>
                            <div className='flex flex-row gap-2'>
                                <img src={soloSVG} className="inline" />
                                <p>Frontend</p>
                            </div>

                        </div>

                        {/** Screenshot of the project */}
                        <div className='flex flex-col justify-center w-full h-52 py-4'>
                            <img className=' object-contain' src="http://placekitten.com/440/200" />
                        </div>

                        {/** Description */}
                        <div className='flex-1 p-4 text-xs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vestibulum placerat. Phasellus leo nisl, malesuada vitae turpis quis, semper faucibus massa. Sed risus nulla
                        </div>

                        {/** Actions */}
                        <div className="h-24 w-full pl-4 flex flex-row">
                            {/** Tech stack */}
                            <div className="h-full flex-1 pb-4 flex flex-col justify-end">
                                <div className="text-xs">
                                    Tech Stack:
                                </div>
                                <div className='text-xs font-semibold'>
                                    Astro, Tailwind, React, MaterialUI
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