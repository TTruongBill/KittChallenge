'use client'

import {
    Card,
    CardContent,
  } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import { Button } from "../ui/button";
import { useState, useEffect } from 'react'
import { SheetSideHeader } from "@/components/SheetSideHeader"
import Link from "next/link";

export function Header() {
    const [fromLocationCode, setFromLocationCode] = useState('');
    const [toLocationCode, setToLocationCode] = useState('');
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [departureDate, setDepartureDate] = useState<Date>();
    const [returnDate, setReturnDate] = useState<Date>();
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const queryParams = new URLSearchParams(window.location.search);
        setFromLocationCode(queryParams.get('fromCode') || '');
        setToLocationCode(queryParams.get('toCode') || '');
        setFromLocation(queryParams.get('from') || '');
        setToLocation(queryParams.get('to') || '');
        setDepartureDate(new Date(queryParams.get('departureDate')!) || '');
        setReturnDate(new Date(queryParams.get('returnDate')!) || '');
      }
    }, []);

    const [modifyFlight, setModifyFlight] = useState(false);

    return(
        <>
            <header className="flex flex-row justify-center mx-2 lg:mx-8">
                <div className="py-8 flex justify-between items-center w-full max-w-[1056px]">
                    <SheetSideHeader 
                    fromLocation={fromLocation} 
                    toLocation={toLocation}
                    departureDate={departureDate}
                    returnDate={returnDate}
                    fromLocationCode={fromLocationCode}
                    toLocationCode={toLocationCode}
                    setFromLocation={setFromLocation}
                    setToLocation={setToLocation}
                    setDepartureDate={setDepartureDate}
                    setReturnDate={setReturnDate}
                    setFromLocationCode={setFromLocationCode}
                    setToLocationCode={setToLocationCode}>
                        <Button className="px-0 rounded-full w-full max-w-[680px] mt-16 md:mt-0" onClick={() => {setModifyFlight(!modifyFlight)}}>
                            <Card className="rounded-full text-base shadow-none hover:bg-gray-bg transition-all w-full ">
                                <CardContent className="flex flex-row justify-center items-center p-4 space-x-4 h-[56px] w-full text-gray-secondary font-medium">
                                    <p className="truncate"><span className="font-medium text-secondary pr-2">{fromLocationCode}</span>{fromLocation}</p>
                                    <Separator orientation="vertical" />
                                    <p className="truncate"><span className="font-medium text-secondary pr-2">{toLocationCode}</span>{toLocation}</p>
                                    <Separator orientation="vertical" />
                                    <p className="font-medium text-secondary">{departureDate?.toLocaleDateString([],{month: 'short', day: 'numeric'}) + " - " + returnDate?.toLocaleDateString([],{month: 'short', day: 'numeric'})}</p>
                                    <Separator orientation="vertical" />
                                    <div className="rounded-full bg-light-green w-[34px] h-[34px] flex justify-center items-center aspect-square">
                                        <Icons icon="SearchIcon" className="text-secondary"/>
                                    </div>
                                </CardContent>
                            </Card>
                        </Button>
                    </SheetSideHeader>
                    <Button variant="outline" className="absolute top-4 right-4 md:top-0 md:right-0 md:relative rounded-full w-[44px] h-[44px]" asChild>
                        <Link href="/">
                            <Icons icon="XIcon"/>
                        </Link>
                    </Button>
                </div>
            </header>
            <Separator />
        </>

)}

export default Header;