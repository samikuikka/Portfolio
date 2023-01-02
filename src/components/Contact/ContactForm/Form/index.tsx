import Input from "../../../Input";
import TextArea from "../../../TextArea";
import { useState } from "react";
import { z } from "zod";
import PrimaryButton from "../../../buttons/PrimaryButton";

/**
* Contact form
* 
*/

// Validation schemas
const nameSchema = z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string"
}).trim().min(1, { message: 'Name can not be empty' });

const emailSchema = z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string"
}).email({ message: "Must be valid email" });


// Function for validating
const validateInput = (validated: z.SafeParseReturnType<string, string>): string => {
    if (!validated.success) {
        const formattedErrors = validated.error.format();
        return formattedErrors._errors.join(', ');
    } else {
        return '';
    }
}

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    let nameErrors = '';
    let emailErrors = '';

    // Validations
    const validatedName = nameSchema.safeParse(name);
    const validatedEmail = emailSchema.safeParse(email);
    nameErrors = validateInput(validatedName);
    emailErrors = validateInput(validatedEmail);

    return (
        <div className="flex flex-col px-2 mobile:px-[10%] h-full gap-6">
            <div className="flex flex-col flex-1 justify-evenly gap-6">
                <Input
                    type="text"
                    value={name}
                    onInput={({ target }) => setName((target as HTMLInputElement).value)}
                    label="Name"
                    textHelper="Your name"
                    errors={nameErrors}
                />
                <Input
                    type="email"
                    value={email}
                    onInput={({ target }) => setEmail((target as HTMLInputElement).value)}
                    label="Email"
                    textHelper="Your email where I can contact you"
                    errors={emailErrors}
                />
            </div>
            <div className="flex-1 flex flex-col gap-6">
                <TextArea
                    placeholder="Message"
                    label="Optional message"
                    value={message}
                    onInput={({ target }) => setMessage((target as HTMLTextAreaElement).value)}
                />
                <PrimaryButton
                    name="Submit"

                />
            </div>
        </div>
    );
};

export default Form;