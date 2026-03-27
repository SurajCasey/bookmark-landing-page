import {type CardProps } from "./Card.types"
import Button from "../Button"
import BgDots from "../../assets/images/bg-dots.svg"
import "./Card.scss"

function Card({
    image,
    title,
    description,
    buttonLabel,
    onButtonClick,
}: CardProps) {
    return (
        <div className="card">
            <div className="">
                <img className="card__image" src={image} alt={title} />
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>  
            </div>
            
            <img className="card__bg-dots" src={BgDots} alt="dots" />
            <Button 
                label={buttonLabel}
                variant="secondary"
                onClick={onButtonClick}
                disabled={false} 
           />
        </div>
    )
}

export default Card