"use client"
 
import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
import { ComboboxProps } from "./types"

const airports = {
    "airports": [
      {
        "name": "Indira Gandhi International Airport",
        "code": "DEL",
        "city": "New Delhi",
        "country": "India"
      },
      {
        "name": "Chhatrapati Shivaji Maharaj International Airport",
        "code": "BOM",
        "city": "Mumbai",
        "country": "India"
      },
      {
        "name": "John F. Kennedy International Airport",
        "code": "JFK",
        "city": "New York",
        "country": "United States"
      },
      {
        "name": "Dubai International Airport",
        "code": "DXB",
        "city": "Dubai",
        "country": "United Arab Emirates"
      },
      {
        "name": "Heathrow Airport",
        "code": "LHR",
        "city": "London",
        "country": "United Kingdom"
      },
      {
        "name": "Singapore Changi Airport",
        "code": "SIN",
        "city": "Singapore",
        "country": "Singapore"
      },
      {
        "name": "Los Angeles International Airport",
        "code": "LAX",
        "city": "Los Angeles",
        "country": "United States"
      },
      {
        "name": "Beijing Capital International Airport",
        "code": "PEK",
        "city": "Beijing",
        "country": "China"
      },
      {
        "name": "Sydney Kingsford Smith International Airport",
        "code": "SYD",
        "city": "Sydney",
        "country": "Australia"
      },
      {
        "name": "Tokyo Haneda Airport",
        "code": "HND",
        "city": "Tokyo",
        "country": "Japan"
      }
    ]
  }
  

export function Combobox({label, value, setValue, errorText}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[270px] h-[60px] justify-between"
        >
          <div className="flex flex-row gap-2 font-normal text-gray">
            <Icons icon="TargetIcon" />
            {value
              ? airports.airports.find((airport) => airport.name === value)?.name
              : label}
          </div>
          <Icons icon="ChevronDownIcon" />
        </Button>
      </PopoverTrigger>
      <p className="text-red-400 absolute">{errorText}</p>
      </div>
      
      <PopoverContent className="w-[270px] p-0">
        <Command>
          <CommandInput placeholder="Search Airports..." className="h-9" />
          <CommandList>
            <CommandEmpty>No airport found.</CommandEmpty>
            <CommandGroup>
              {airports.airports.map((airport) => (
                <CommandItem
                  key={airport.name}
                  value={airport.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {airport.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === airport.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}