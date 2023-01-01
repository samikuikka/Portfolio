
interface CircleProps {
    extra?: string;
}

const Circle: React.FC<CircleProps> = ({
    extra
}) => {
    return (
        <div
            className={"circle h-96 w-96 rounded-full bg-gradient-to-t from-blue-50/0 to-blue-50/80 opacity-50" + ' ' + extra}
        >

        </div>
    )
}

export default Circle;