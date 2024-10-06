'use client'

import {
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Combobox } from "@/components/Combobox";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/DatePicker";
import { Icons } from "@/components/icons";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export function FlightSearch() {
    const router = useRouter();
    const [goingTo, setGoingTo] = useState(true)
    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [departureDate, setDepartureDate] = useState<Date>();
    const [returnDate, setReturnDate] = useState<Date>();

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
          departureDate: departureDate ? departureDate.toISOString() : "", // Convert Date to string
          returnDate: returnDate ? returnDate.toISOString() : "",         // Convert Date to string
        }).toString();

        router.push(`/results?${queryParams}`);
      }
    };

    return(
      <>
        <CardContent className="flex flex-row">
        <div className={`flex ${goingTo ? "flex-row" : "flex-row-reverse"} justify-center items-center mr-2`}>
            <Combobox label="Where from?" value={fromLocation} setValue={setFromLocation} errorText={fromLocationError}/>
                <Button variant="ghost" className="rounded-full w-[52px] h-[52px] mx-4 bg-gray-bg" onClick={() => { setGoingTo(!goingTo); }}>
                    <Icons icon="SwitchIcon" />
                </Button>
            <Combobox label="Where to?" value={toLocation} setValue={setToLocation} errorText={toLocationError}/>
        </div>
        <DatePicker label="Departure" value={departureDate} setValue={setDepartureDate} errorText={departureDateError} />
        <DatePicker label="Return" value={returnDate} setValue={setReturnDate} errorText={returnDateError}/>
        </CardContent>
        <CardFooter className="justify-end">
        <Button variant="outline" className="bg-primary text-white w-[249px] h-[48px]" onClick={handleSearch} >
            <Icons icon="SearchIcon" className="mr-4"/>  
            Search flights
        </Button>
        </CardFooter>
      </>
    )
}

export default FlightSearch;