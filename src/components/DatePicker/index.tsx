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

export function DatePicker({label, value, setValue, errorText, setErrorText}: DatePickerProps) {
 
  return (
    <Popover>
      <div>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full max-w-[270px] md:w-[180px] h-[60px] justify-start text-left items-center font-normal my-4 mb-0 md:ml-4 md:my-0 ",
              !value && "text-muted-foreground"
            )}
          >
            <div className="flex flex-col">
              <div>
                {value && (
                  <label className="text-gray-secondary font-normal w-full text-xs text-start pl-7">{label}</label>
                )}
              </div>
              <div className="flex flex-row">
                <Icons icon="CalendarIcon" className="mr-2" />
                {value ? format(value, "dd/MM/yyyy") : <span className="font-normal text-gray">{label}</span>}
              </div>
            </div>
          </Button>
        </PopoverTrigger>
        <p className="text-red-400 absolute ml-4">{errorText}</p>
      </div>
      <PopoverContent className="w-[270px] p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            setValue(date)
            if(date){
              setErrorText('')
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}