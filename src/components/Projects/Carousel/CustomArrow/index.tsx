import './arrow.css';

export const CustomArrowPrev = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <button
            className="own-prev"
            onClick={onClick}
        >
            &lt;
        </button>
    )
}

export const CustomArrowNext = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <button
            className="own-next"
            onClick={onClick}
        >
            &gt;
        </button>
    )
}

