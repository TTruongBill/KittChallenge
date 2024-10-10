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
          departureDate: departureDate ? departureDate.toLocaleDateString([],{month: 'short', day: 'numeric', year: '2-digit'}) : "", 
          returnDate: returnDate ? returnDate.toLocaleDateString([],{month: 'short', day: 'numeric', year: '2-digit'}) : "",       
        }).toString();

        router.push(`/results?${queryParams}`);
      }
    };

    return(
      <>
        <CardContent className="flex flex-col md:flex-row ">
          <div className={`flex ${goingTo ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"} justify-center items-center mr-2`}>
              <Combobox label="Where from?" value={fromLocation} setValue={setFromLocation} errorText={fromLocationError} setErrorText={setFromLocationError}/>
                  <Button variant="ghost" className="rounded-full w-[52px] h-[52px] mx-4 my-4 md:my-0 bg-gray-bg" onClick={() => { setGoingTo(!goingTo); }}>
                      <Icons icon="SwitchIcon" />
                  </Button>
              <Combobox label="Where to?" value={toLocation} setValue={setToLocation} errorText={toLocationError} setErrorText={setToLocationError}/>
          </div>
        <DatePicker label="Departure" value={departureDate} setValue={setDepartureDate} errorText={departureDateError} setErrorText={setDepartureDateError} />
        <DatePicker label="Return" value={returnDate} setValue={setReturnDate} errorText={returnDateError} setErrorText={setReturnDateError}/>
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