import "./Button.scss"
import { type ButtonProps } from "./Button.types";

function Button({
    label,
    variant = 'primary',
    onClick,
    disabled = false,    
}: ButtonProps) {
    return(
        <button
            className={`button button--${variant}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="button__label">{label}</span>
        </button>
    )
}

export default Button;
