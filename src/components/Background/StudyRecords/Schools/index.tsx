import React from 'react';
import School from './School';

const data = [
    {
        info: "Arkadia Yhteislyseo (2015-2018)",
        description: "I did my upper secondary school at Arkadia Yhteislyseo at Nurmijärvi."
    },
    {
        info: "Aalto University - Computer Science (Bachelor’s level) (2019- )",
        description: "I started my Bachelor’s degree at 2019, conscription prolonged the graduation. 175 / 180 ECTS credits done (1 course away from graduation) 4,58 GPA"
    },
    {
        info: "Aalto University - Web Technologies, Application and Technologies (Master’s level)",
        description: "I have also done Master’s level courses besides the Bachelor’s degree for the Web Technologies Master’s programme study track. 85 / 120 credits done (Master thesis + 1 course away from graduation) 4,58 GPA"
    }
]

const Schools = () => {

    return (
        <div className='flex flex-col flex-1'>
            {data.map((props) => {
                return <School {...props} />
            })}
        </div>
    );
}

export default Schools;