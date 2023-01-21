import './readmore.css';

interface ReadmoreProps {
    to: string;
}

export const ReadMore: React.FC<ReadmoreProps> = ({
    to,
}) => {

    return (
        <a href={to}
            className="readmore z-[999] font-semibold"
        >
            Read more...
        </a>
    )
}