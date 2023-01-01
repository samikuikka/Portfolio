import Input from "../../../Input";
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    
    return (
        <div className=" px-[10%] h-full">
            <Input type="text" value={name} onInput={({target}) => setName((target as HTMLInputElement).value)}/>
        </div>
    );
};

export default Form;