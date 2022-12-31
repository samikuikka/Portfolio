import './glass.css';

interface GlassProps {
  children: JSX.Element;
  extra?: string;
}

const Glass: React.FC<GlassProps> = ({
  children,
  extra
}) => {

  return (
<div
    className={"box box-border w-full h-full rounded-3xl bg-gradient-to-t from-white-100/20 to-white-100/60 backdrop-blur-xl shadow-glass" + " " + extra }
>
    {children}
</div>


  );
}

export default Glass;

