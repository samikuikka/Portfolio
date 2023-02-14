import ProjectCard from '../../Projects/Carousel/ProjectCard';
import projects from '../../Projects/Carousel/projects.json';


const ProjectCards = ({
}) => {

    return (
        <div className='w-full flex flex-row overflow-x-hidden flex-wrap justify-center'>
            {
                projects.map(project => {
                    return (
                        <div>
                            <ProjectCard {...project} className=" w-auto flex-auto" />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ProjectCards;