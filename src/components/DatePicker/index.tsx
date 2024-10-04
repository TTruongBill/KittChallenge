"use client"
 
import * as React from "react"
import { format } from "date-fns"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
import { DatePickerProps } from "./type"

export function DatePicker({label}: DatePickerProps) {
  const [date, setDate] = React.useState<Date>()
 
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[180px] h-[60px] justify-start text-left items-center font-normal ml-4",
            !date && "text-muted-foreground"
          )}
        >
          <Icons icon="CalendarIcon" className="mr-2" />
          {date ? format(date, "PPP") : <span className="font-normal text-gray">{label}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[270px] p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}