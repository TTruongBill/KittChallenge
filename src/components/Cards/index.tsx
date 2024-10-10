import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FlightInfoProps } from "./types";
import Image from "next/image";

export function Cards() {
    return(
        <Card className="flex flex-col md:flex-row md:h-[220px] max-w-[1056px] w-full justify-between shadow-none cursor-pointer bg-white hover:bg-gray-bg">
            <CardContent className="flex flex-col w-full pt-6 gap-4">
                <FlightInfo 
                    name="New Delhi • AT 4334" 
                    time="9:45 AM - 11:45 AM"
                    direction="DEL - BOM"
                    eta="2h 10min"
                    secondFlightStopAmount="Non stop"
                    date="Thu 25 Jun"
                    img="/img/emiratesLogo.png"
                />
                <FlightInfo 
                    name="New Delhi • AT 4334" 
                    time="9:45 AM - 11:45 AM"
                    direction="BOM - DEL"
                    eta="2h 10min"
                    date="Sat 2 Jul"
                    secondFlightName="6h 32m in Lisbom, Pawewa"
                    secondFlightStopAmount="Non stop"
                    img="/img/lufthansaLogo.png"
                />
            </CardContent>
            <Separator orientation="vertical"/>
            <Separator className="md:hidden mb-6" />
            <CardFooter className="flex flex-col items-start justify-end">
                <p className="text-gray-secondary text-sm">from</p>
                <h2 className="font-medium text-secondary text-xl">AED 2,456.90</h2>
                <Button variant="outline" className="bg-primary text-white text-base font-normal w-[182px] h-[40px]">
                    Select
                </Button>
            </CardFooter>
        </Card>
    )
}

function FlightInfo({date, name, time, direction, eta, secondFlightName, secondFlightStopAmount, img}: FlightInfoProps){
    return(
        <div className="flex flex-col">
            <p className="text-sm text-gray-secondary font-medium mb-2">{date}</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between">
                <div className="flex flex-row gap-4">
                    <div className="w-[44px] h-[44px] border rounded-lg border-gray-from"> 
                        <Image src={img} alt="" fill={true} objectFit='contain' className="!relative"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-gray-secondary text-sm">{name}</p>
                        <h2 className="font-medium text-secondary text-lg">{time}</h2>
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-20 my-4 md:my-0">
                    <div className="flex flex-col items-start">
                        <p className="text-gray-secondary text-sm">{direction}</p>
                        <h2 className="font-medium text-secondary text-lg">{eta}</h2>
                    </div>
                    <div className="flex flex-col justify-end w-[150px]">
                        {secondFlightName ? (<p className="text-gray-secondary truncate text-sm">{secondFlightName}</p>) : null}
                        <h2 className="font-medium text-secondary text-lg">{secondFlightStopAmount ? secondFlightStopAmount : 'Non stop'}</h2>
                    </div>
                </div>
            </div>
        </div>
       
    )
}
export default Cards;