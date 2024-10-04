import CalendarIcon from "./calendarIcon"
import ChevronDownIcon from "./chevronDownIcon"
import TargetIcon from "./targetIcon"
import SearchIcon from "./searchIcon"
import SwitchIcon from "./switchIcon"
import { IconProps } from "./types"

export const icons = {
    CalendarIcon, 
    ChevronDownIcon, 
    TargetIcon,
    SearchIcon,
    SwitchIcon
}

export function Icons({icon, className}: IconProps) {
    const IconComponent = icons[icon];

    return(
        <div className={className}>
            {IconComponent ? <IconComponent /> : null}
        </div>
    )
}