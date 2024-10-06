'use client'

import {
    Card,
    CardContent,
  } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import { Button } from "../ui/button";
import { useState, useEffect } from 'react'
import { SheetSide } from "@/components/SheetSide";
import Link from "next/link";

export function Header() {
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [departureDate, setDepartureDate] = useState<Date>();
    const [returnDate, setReturnDate] = useState<Date>();
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const queryParams = new URLSearchParams(window.location.search);
        setFromLocation(queryParams.get('from') || '');
        setToLocation(queryParams.get('to') || '');
        setDepartureDate(new Date(queryParams.get('departureDate')!) || '');
        setReturnDate(new Date(queryParams.get('returnDate')!) || '');
      }
    }, []);

    const [modifyFlight, setModifyFlight] = useState(false);

    return(
        <>
            <header className="flex justify-center">
                <div className="py-8 flex justify-between items-center w-[1056px]">
                    <SheetSide 
                    fromLocation={fromLocation} 
                    toLocation={toLocation}
                    departureDate={departureDate}
                    returnDate={returnDate}
                    setFromLocation={setFromLocation}
                    setToLocation={setToLocation}
                    setDepartureDate={setDepartureDate}
                    setReturnDate={setReturnDate}>
                        <Button className="px-0 rounded-full" onClick={() => {setModifyFlight(!modifyFlight)}}>
                            <Card className="w-fit rounded-full text-base shadow-none hover:bg-gray-bg transition-all">
                                <CardContent className="flex flex-row justify-center items-center p-4 space-x-4 h-[56px] text-gray-secondary font-medium">
                                    <p><span className="font-medium text-secondary pr-2">CDG</span>{fromLocation}</p>
                                    <Separator orientation="vertical" />
                                    <p><span className="font-medium text-secondary pr-2">CDG</span>{toLocation}</p>
                                    <Separator orientation="vertical" />
                                    <p className="font-medium text-secondary">{departureDate?.toLocaleDateString([],{month: 'short', day: 'numeric'}) + " - " + returnDate?.toLocaleDateString([],{month: 'short', day: 'numeric'})}</p>
                                    <Separator orientation="vertical" />
                                    <div className="rounded-full bg-light-green w-[34px] h-[34px] flex justify-center items-center">
                                        <Icons icon="SearchIcon" className="text-secondary"/>
                                    </div>
                                </CardContent>
                            </Card>
                        </Button>
                    </SheetSide>
                    <Button variant="outline" className="rounded-full w-[44px] h-[44px]" asChild>
                        <Link href="/">
                            <Icons icon="XIcon" />
                        </Link>
                    </Button>
                </div>
            </header>
            <Separator />
        </>

)}

export default Header;