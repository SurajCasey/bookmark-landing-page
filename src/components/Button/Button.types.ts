export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps {
    label: string;
    variant?: ButtonVariant;
    onClick?: () => void;
    disabled: boolean;
}