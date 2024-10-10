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

export function SheetSideHeader({children, fromLocation, toLocation, departureDate, returnDate, setFromLocation, setToLocation, setDepartureDate, setReturnDate}: SheetSideProps) {
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
        <SheetContent side={"top"}>
            <CardContent className="flex flex-row justify-center">
                <div className={`flex ${goingTo ? "flex-row" : "flex-row-reverse"} justify-center items-center mr-2`}>
                    <Combobox label="Where from?" value={fromLocation} setValue={setFromLocation} errorText={fromLocationError} setErrorText={setFromLocationError}/>
                        <Button variant="ghost" className="rounded-full w-[52px] h-[52px] mx-4 bg-gray-bg" onClick={() => { setGoingTo(!goingTo); }}>
                            <Icons icon="SwitchIcon" />
                        </Button>
                    <Combobox label="Where to?" value={toLocation} setValue={setToLocation} errorText={toLocationError} setErrorText={setToLocationError}/>
                </div>
                <DatePicker label="Departure" value={departureDate} setValue={setDepartureDate} errorText={departureDateError} setErrorText={setDepartureDateError}/>
                <DatePicker label="Return" value={returnDate} setValue={setReturnDate} errorText={returnDateError} setErrorText={setReturnDateError}/>
            </CardContent>
        <SheetFooter>
            {fromLocation && toLocation && departureDate && returnDate ? (
                <>
                    <SheetClose>
                        <Button variant="outline" className="bg-primary text-white w-[249px] h-[48px]" onClick={handleSearch}>
                            <Icons icon="SearchIcon" className="mr-4"/>  
                            Search flights
                        </Button>
                    </SheetClose>
                </>
            ) : (
                <Button variant="outline" className="bg-primary text-white w-[249px] h-[48px]" onClick={handleSearch}>
                    <Icons icon="SearchIcon" className="mr-4"/>  
                    Search flights
                </Button>
            )}
        </SheetFooter>
        </SheetContent>
    </Sheet>
  )
}

export default SheetSideHeader;