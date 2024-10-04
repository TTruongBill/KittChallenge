'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { Combobox } from "@/components/Combobox";
import { Icons } from "@/components/icons";
import { useState } from "react";
import { DatePicker } from "@/components/DatePicker";

export default function Home() {
  const [goingTo, setGoingTo] = useState(true)

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[36px] font-semibold">Good afternoon, Brian</h1>
      <Card>
        <CardHeader>
          <CardTitle><Badge variant="secondary" className="bg-gray-bg w-[127px] h-[36px] justify-center">Flights</Badge></CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row">
          <div className={`flex ${goingTo ? "flex-row" : "flex-row-reverse"} justify-center items-center mr-2`}>
            <Combobox label="Where from?"/>
              <Button variant="ghost" className="rounded-full w-[52px] h-[52px] mx-4 bg-gray-bg" onClick={() => {setGoingTo(!goingTo)}}><Icons icon="SwitchIcon"/></Button>
            <Combobox label="Where to?"/>
          </div>
          <DatePicker label="Departure" />
          <DatePicker label="Return" />
        </CardContent>
        <CardFooter className="justify-end">
          <Button variant="outline" className="bg-primary text-white w-[249px] h-[48px]">
            <Icons icon="SearchIcon" className="mr-4"/>  
            Search flights
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
