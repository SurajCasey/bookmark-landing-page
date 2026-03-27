import Button from "../Button"
import './Hero.scss'
import HeroImg from '../../assets/images/illustration-hero.svg?react'

const Hero = () => {
  return (

    <section
    className="hero"
>
    <div className="hero__header">
        <h1 className="hero__title">
            A Simple Bookmark Manager
        </h1>
        <p className="hero__subtitle">
            A clean and simple interface to organize your favourite websites. 
            Open a new browser tab and see your sites load instantly. 
            Try it for free.
        </p>
        <div className="hero__buttons">
            <Button
            label="Get it on Chrome"
            variant="secondary"
            disabled={false}
            />
            <Button
            label="Get it on Firefox" 
            variant="tertiary"
            disabled={false}
            />
        </div>
    </div>
    <div className="hero__image">
        <HeroImg/>
        <span className="hero__background">

        </span>
    </div>
</section>
    
  )
}

export default Hero