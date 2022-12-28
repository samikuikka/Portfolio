import './glass.css';

interface GlassProps {
  children: JSX.Element;
}

const Glass: React.FC<GlassProps> = ({
  children
}) => {

  return (
<div
    className="box box-border w-full h-full rounded-3xl bg-gradient-to-t from-white-100/20 to-white-100/60 backdrop-blur-xl shadow-glass"
>
    {children}
</div>


  );
}

export default Glass;

