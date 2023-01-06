import PrimaryButton from '../../buttons/PrimaryButton';

const Actions = () => {

    const showResume= () => {
        fetch('Resume.pdf').then(response => {
            response.blob().then(blob => {

                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <div
            className='flex flex-col mobile:flex-row mobile:h-14 mobile:pl-5 z-[3]'
        >
            <PrimaryButton 
                name="My Resume"
                icon="DownloadIcon"
                onClick={showResume}
            />
            <PrimaryButton 
                name="Contact"
                onClick={() => location.href="#contact"}
            />
        </div>
    );
}

export default Actions;