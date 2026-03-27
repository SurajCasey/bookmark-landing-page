import { useState } from 'react'
import Button from '../Button'
import './Form.scss'
const Form = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const validateEmail = (value: string) => {
        return /\S+@\S+\.\S+/.test(value);
    }; 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        if(!validateEmail(email)){
            setError(true);
        }else{
            setError(false);
            console.log("Valid email: ", email);
        }
    };

 return (
    <form className='form' onSubmit={handleSubmit}>
        <div className={`form__field ${error ? "form__field--error" : ""}`}>
            <div className='form__input-wrapper'>
                <input
                    className='form__input'
                    type="text"
                    placeholder={error ? "example@email/com" : "Enter your email address"}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError(false);
                    }}
                />
                {error && <span className='form__icon'>!</span>}
            </div>
            {error && <p className='form__error'>Whoops, make sure it's an email</p>}
        </div>

        <Button
            label='Contact Us'
            variant='primary'
            disabled={false}
        />
    </form>
)
  
}

export default Form