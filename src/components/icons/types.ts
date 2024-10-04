import { icons } from "./index"

export interface IconProps {
    icon: keyof typeof icons; // The prop can be one of the string keys in `iconMap`
}