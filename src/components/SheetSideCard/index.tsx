"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Combobox } from "@/components/Combobox";
import { DatePicker } from "@/components/DatePicker";
import { Icons } from "@/components/icons";
import {
    CardContent,
} from "@/components/ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SheetSideProps } from "./types"
import { useRouter } from 'next/navigation';
import { Separator } from "../ui/separator";

export function SheetSideCard({children, fromLocation, toLocation, departureDate, returnDate, setFromLocation, setToLocation, setDepartureDate, setReturnDate}: SheetSideProps) {
    const router = useRouter();

    const [goingTo, setGoingTo] = useState(true)
   

    const [fromLocationError, setFromLocationError] = useState('');
    const [toLocationError, setToLocationError] = useState('');
    const [departureDateError, setDepartureDateError] = useState('');
    const [returnDateError, setReturnDateError] = useState('');

    function handleSearch() {
      setFromLocationError(!fromLocation ? 'Please select a location.' : '')
      setToLocationError(!toLocation ? 'Please select a location.' : '');
      setDepartureDateError(!departureDate ? 'Please select a date.' : '');
      setReturnDateError(!returnDate ? 'Please select a date.': '');

      if(fromLocation && toLocation && departureDate && returnDate){
        const queryParams = new URLSearchParams({
          from: fromLocation,
          to: toLocation,
          departureDate: departureDate ? departureDate.toLocaleDateString([],{month: 'short', day: 'numeric', year: '2-digit'}) : "", 
          returnDate: returnDate ? returnDate.toLocaleDateString([],{month: 'short', day: 'numeric', year: '2-digit'}) : "",       
        }).toString();

        router.push(`/results?${queryParams}`);
      }
    };

  return (
    <Sheet>
        <SheetTrigger asChild>
        {children}
        </SheetTrigger>
        <SheetContent side={"right"}>
        <div className="test">
            <CardContent className="flex flex-col justify-center p-12 px-2">
                <h1 className="font-medium mt-2 mb-6 text-xl">Flight details</h1>
                <Separator />
            </CardContent>
        </div>
        </SheetContent>
    </Sheet>
  )
}

export default SheetSideCard;