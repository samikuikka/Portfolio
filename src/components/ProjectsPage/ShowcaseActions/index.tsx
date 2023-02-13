import React from 'react';
import PrimaryButton from '../../buttons/PrimaryButton';
import { ReadMore } from '../../Projects/Carousel/ProjectCard/ReadMore';

const ShowcaseActions = () => {


  return (
    <div className='flex flex-row gap-10 justify-end items-center pt-4 '>
      
      <PrimaryButton
        name='GitHub'
        onClick={() => window.open('https://github.com/bytecraftoy/aalto-2022', '_blank', 'noreferrer')}
      />
      <ReadMore
        to='/projects/ai-assisted-content-creator'
        />
    </div>
  );
};

export default ShowcaseActions;