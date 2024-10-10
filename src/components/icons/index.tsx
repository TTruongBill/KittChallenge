import CalendarIcon from "./calendarIcon"
import ChevronDownIcon from "./chevronDownIcon"
import TargetIcon from "./targetIcon"
import SearchIcon from "./searchIcon"
import SwitchIcon from "./switchIcon"
import XIcon from "./xIcon"
import ArrowIcon from "./arrowIcon"
import CircleIcon from "./circleIcon"
import ClockIcon from './clockIcon'
import { IconProps } from "./types"

export const icons = {
    CalendarIcon, 
    ChevronDownIcon, 
    TargetIcon,
    SearchIcon,
    SwitchIcon,
    XIcon,
    ArrowIcon,
    CircleIcon,
    ClockIcon,
}

export function Icons({icon, className}: IconProps) {
    const IconComponent = icons[icon];

    return(
        <div className={className}>
            {IconComponent ? <IconComponent /> : null}
        </div>
    )
}