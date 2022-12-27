
/**
 * Individual technology "bubble" that shows the technology icon
 *  and the name of the technology when hovered / clicked
 */

interface TechProps {
    src: string,
    name: string
}

const IndividualTech: React.FC<TechProps> = ({
    src,
    name
}) => {

    return (
        <div className="group h-24 w-24 relative">
            <div
                className="h-24 w-24 rounded-3xl
              group-hover:-translate-y-12 ease-in-out duration-500
            "
                style={{ background: 'linear-gradient(111.34deg, rgba(232, 121, 249, 0.85) 9.74%, rgba(244, 63, 94, 0.6) 51.32%, rgba(167, 139, 250, 0.96) 100%)' }}
            >
                {/** Glass effect */}
                <div
                    className="  flex justify-center items-center h-full w-full bg-gradient-to-t from-white-100/40 to-white-100/80 group-hover:from-white-100/0 group-hover:to-white-100/0
                "
                >
                    {/** Logo container */}
                    <div
                        className='h-12 w-12 flex justify-center'
                    >

                        <img src={src} />
                    </div>
                </div>


            </div>
            <div
                className=" absolute bottom-3 left-0 w-full
                group-hover:transition-all ease-in-out duration-300
                opacity-0 group-hover:opacity-100 text-center
                "
            >
                    {name}
            </div>
        </div>
    );
}

export default IndividualTech;