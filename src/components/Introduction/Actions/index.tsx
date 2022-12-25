import PrimaryButton from '../../buttons/PrimaryButton';

const Actions = () => {

    return (
        <div
            className='flex flex-col mobile:flex-row mobile:h-14 mobile:pl-5 z-[3]'
        >
            <PrimaryButton 
                name="My Resume"
                icon="DownloadIcon"
                onClick={() => alert('Sorry, under development')}
            />
            <PrimaryButton 
                name="Contact"
                onClick={() => console.log('hello')}
            />
        </div>
    );
}

export default Actions;