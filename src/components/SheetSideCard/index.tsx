"use client"

import { useState } from "react";
import { Icons } from "@/components/icons";
import {
    CardContent,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SheetSideProps } from "./types"
import { Separator } from "@/components/ui/separator";
import FlightDetails from "@/components/FlightDetails";

export function SheetSideCard({children, fromLocation, toLocation, departureDate, returnDate, setFromLocation, setToLocation, setDepartureDate, setReturnDate}: SheetSideProps) {

  return (
    <Sheet>
        <SheetTrigger asChild>
        {children}
        </SheetTrigger>
        <SheetContent side={"right"} className="overflow-x-auto">
            <CardContent className="flex flex-col justify-center p-12 px-2">
                <h1 className="font-medium mt-2 mb-6 text-xl">Flight details</h1>
                <Separator />
                <div className="mt-6">
                    <FlightDetails date="Sat 28 Sept" arrivalTime="2:15" airportCode="DXB" airport="Dubai International Airport" airline="Saudi Arabian Airlines" airlineCode="SV553" classType="Economy" classTypeCode="A330" time="3h 45m" border="solid"/>
                    <FlightDetails date="Sat 28 Sept" arrivalTime="2:15" airportCode="RUH" airport="King Khalid International Airport" time="2h 25m" border="dotted"/>
                    <FlightDetails date="Sat 28 Sept" arrivalTime="2:15" airportCode="RUH" airport="King Khalid International Airport" airline="Saudi Arabian Airlines" airlineCode="SV553" classType="Economy" classTypeCode="A330" time="3h 45m" border="solid"/>
                    <FlightDetails date="Sat 28 Sept" arrivalTime="2:15" airportCode="CDG" airport="Paris - Charles de Gualle Airport" time="2h 25m" border="none"/>
                </div>
            </CardContent>
        </SheetContent>
    </Sheet>
  )
}

export default SheetSideCard;