import { icons } from "./index"

export interface IconProps {
    icon: keyof typeof icons; 
    className?: string;
}