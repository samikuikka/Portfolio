import React from 'react';
import TextButton from '../../../buttons/TextButton';

const StudyActions = () => {

    const showRecord = () => {
        fetch('study-record.pdf').then(response => {
            response.blob().then(blob => {

                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'study-record.pdf';
                alink.click();
            })
        })
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