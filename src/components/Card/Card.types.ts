export interface CardProps {
    image: string;
    title: string;
    description: string;
    buttonLabel: string;
    onButtonClick?: () => void;
}