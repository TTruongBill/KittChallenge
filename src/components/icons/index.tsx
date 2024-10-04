import CalendarIcon from "./calendarIcon"
import ChevronDownIcon from "./chevronDownIcon"
import TargetIcon from "./targetIcon"
import SearchIcon from "./searchIcon"

import { IconProps } from "./types"

export const icons = {
    CalendarIcon, 
    ChevronDownIcon, 
    TargetIcon,
    SearchIcon
}

export function Icons({icon}: IconProps) {
    const IconComponent = icons[icon];

    return(
        <div>
            {IconComponent ? <IconComponent /> : null}
        </div>
    )
}