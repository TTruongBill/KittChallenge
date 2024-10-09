import CalendarIcon from "./calendarIcon"
import ChevronDownIcon from "./chevronDownIcon"
import TargetIcon from "./targetIcon"
import SearchIcon from "./searchIcon"
import SwitchIcon from "./switchIcon"
import XIcon from "./xIcon"
import ArrowIcon from "./arrowIcon"
import { IconProps } from "./types"

export const icons = {
    CalendarIcon, 
    ChevronDownIcon, 
    TargetIcon,
    SearchIcon,
    SwitchIcon,
    XIcon,
    ArrowIcon
}

export function Icons({icon, className}: IconProps) {
    const IconComponent = icons[icon];

    return(
        <div className={className}>
            {IconComponent ? <IconComponent /> : null}
        </div>
    )
}