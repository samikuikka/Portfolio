import React from 'react';
import Glass from '../../../Glass';
import { useWindowDimensions } from './widthHook';

const ProjectCard = () => {
    /*  const { height, width } = useWindowDimensions();
     const card_h = Math.floor(height * 0.35); */

    return (
        <div className='h-full w-full flex justify-center'>
            <div className={`w-72 h-80  px-[5%] py-[2%]`}>
                <Glass>
                    <div
                        className={` h-full w-full `}
                    >

                    </div>
                </Glass>
            </div>
        </div>

    );
}

export default ProjectCard;