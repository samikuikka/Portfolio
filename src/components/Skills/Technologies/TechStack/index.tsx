import React from 'react';
import IndividualTech from './IndividualTech';
import arrowSVG from '../../../../images/tech-arrow.svg';


// Logos
import tsLogo from '../../../../images/logos/typescript.svg';
import reactLogo from '../../../../images/logos/react.svg';
import nodeLogo from '../../../../images/logos/node.svg';
import mongodbLogo from '../../../../images/logos/mongodb.svg';
import reduxLogo from '../../../../images/logos/redux.svg';
import postgresLogo from '../../../../images/logos/postgres.svg';
import tailwindLogo from '../../../../images/logos/tailwind.svg';
import expressLogo from '../../../../images/logos/express.svg';
import githubLogo from '../../../../images/logos/github.svg';
import flutterLogo from '../../../../images/logos/flutter.svg';
import muiLogo from '../../../../images/logos/mui.svg';
import astroLogo from '../../../../images/logos/astro.svg';


/**
 * Container and data for the technologies I know
 * 
 */

const TechStack = () => {
    const json = data;

    return (
        <div
            className="relative flex items-center justify-center flex-wrap flex-row gap-8 pb-8 pt-12 px-12"
        >
            <div
                className='absolute hidden top-0 left-0 text-sm lg:flex flex-col'
            >
                <div>Hover for names</div>
                <div className='w-full h-full flex justify-center scale-x-[-1]'>
                    <div className="h-6 w-6">
                        <img src={arrowSVG} alt="arrow pointing at technology icon" />
                    </div>
                </div>
            </div>
            {json.map((obj, i) => {
                return <IndividualTech name={obj.name} src={obj.src} key={i} />
            })}
        </div>
    );
}

const data = [
    {
        src: tsLogo,
        name: 'TypeScript'
    },
    {
        src: reactLogo,
        name: 'React'
    },
    {
        src: nodeLogo,
        name: 'Node.js'
    },
    {
        src: mongodbLogo,
        name: 'MongoDB'
    },
    {
        src: reduxLogo,
        name: 'Redux'
    },
    {
        src: postgresLogo,
        name: 'PostgreSQL'
    },
    {
        src: tailwindLogo,
        name: 'Tailwind'
    },
    {
        src: expressLogo,
        name: 'Express.js'
    },
    {
        src: githubLogo,
        name: 'GitHub'
    },
    {
        src: flutterLogo,
        name: 'Flutter'
    },
    {
        src: muiLogo,
        name: 'MaterialUI'
    },
    {
        src: astroLogo,
        name: 'Astro'
    }
];

export default TechStack;