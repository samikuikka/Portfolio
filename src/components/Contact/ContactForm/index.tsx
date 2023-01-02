import Glass from '../../Glass';
import Circle from '../../Circle';
import Form from './Form';

const ContactForm = () => {

    return (
        <div className='h-full w-full px-2 mobile:px-[3%] py-[5%] '>
            <Glass>
                <div className='relative h-full w-full'>
                    {/** Circle */}
                    <div className='absolute bottom-[-50px] right-[-50px] z-[2]'>
                        <Circle extra=" w-80 h-80"/>
                    </div>

                    {/** Content */}
                    <div className='flex flex-col h-full w-full px-2 mobile:px-4 py-4 relative z-[3]'>
                        {/** Header */}
                        <div className='w-full text-center text-2xl pb-6'>
                            By form:
                        </div>

                        <div className='flex-1'>
                            <Form />
                        </div>
                    </div>

                </div>
            </Glass>
        </div>


    );
};

export default ContactForm;