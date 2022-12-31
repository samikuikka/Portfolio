import React from 'react';
import TextButton from '../../../buttons/TextButton';

const StudyActions = () => {

    const showRecord = () => {
        alert('Not implemented yet');
    }

    return (
        <div className='w-full flex flex-row justify-end'>
            <TextButton 
                name="My study record"
                icon="DownloadIcon"
                onClick={showRecord}
            />
        </div>
    );
};

export default StudyActions;