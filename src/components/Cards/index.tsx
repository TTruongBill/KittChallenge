import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FlightInfoProps } from "./types";

export function Cards() {
    return(
        <Card className="flex flex-row w-[1056px] h-[186px] justify-between shadow-none">
            <CardContent className="flex flex-col w-full pt-6 gap-10">
                <FlightInfo 
                    name="New Delhi • AT 4334" 
                    time="9:45 AM - 11:45 AM"
                    direction="DEL - BOM"
                    eta="2h 10min"
                    secondFlightStopAmount="Non stop"
                />
                  <FlightInfo 
                    name="New Delhi • AT 4334" 
                    time="9:45 AM - 11:45 AM"
                    direction="BOM - DEL"
                    eta="2h 10min"
                    secondFlightName="6h 32m in Lisbom, Pawewa"
                    secondFlightStopAmount="Non stop"
                />
            </CardContent>
            <Separator orientation="vertical" />
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

function FlightInfo({name, time, direction, eta, secondFlightName, secondFlightStopAmount}: FlightInfoProps){
    return(
        <div className="flex flex-row items-end justify-between">
            <div className="flex flex-col">
                <p className="text-gray-secondary text-sm">{name}</p>
                <h2 className="font-medium text-secondary text-lg">{time}</h2>
            </div>
            <div className="flex flex-row gap-20">
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
    )
}
export default Cards;