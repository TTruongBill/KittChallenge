"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Combobox } from "@/components/Combobox";
import { DatePicker } from "@/components/DatePicker";
import Link from "next/link";
import { Icons } from "@/components/icons";
import {
    CardContent,
    CardFooter,
} from "@/components/ui/card";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SheetSideProps } from "./type"

export function SheetSide({children}: SheetSideProps) {
    const [goingTo, setGoingTo] = useState(true)
  return (
    <Sheet>
        <SheetTrigger asChild>
        {children}
        </SheetTrigger>
        <SheetContent side={"top"}>
        <SheetHeader>
   
        </SheetHeader>
            <CardContent className="flex flex-row justify-center">
                <div className={`flex ${goingTo ? "flex-row" : "flex-row-reverse"} justify-center items-center mr-2`}>
                    <Combobox label="Where from?"/>
                    <Button variant="ghost" className="rounded-full w-[52px] h-[52px] mx-4 bg-gray-bg" onClick={() => {setGoingTo(!goingTo)}}><Icons icon="SwitchIcon"/></Button>
                    <Combobox label="Where to?"/>
                </div>
                <DatePicker label="Departure" />
                <DatePicker label="Return" />
            </CardContent>
        <SheetFooter>
            <SheetClose asChild>
                <Button asChild variant="outline" className="bg-primary text-white w-[249px] h-[48px]">
                    <Link href="/results">
                    <Icons icon="SearchIcon" className="mr-4"/>  
                    Search flights
                    </Link>
                </Button>
            </SheetClose>
        </SheetFooter>
        </SheetContent>
    </Sheet>
  )
}
