import { Icons } from "@/components/icons";
import { FlightDetailsProps } from "./types"

export function FlightDetails({date, arrivalTime, airportCode, airport, img, airline, airlineCode, classType, classTypeCode, time, dotted, border = "none"}: FlightDetailsProps) {
   
   const borderType = () => {if(border == "solid"){
        return "border-solid"
   } else if(border == "dotted"){
        return "border-dashed border-gray-secondary"
   } else {
        return "border-none"
   }}

    return(
        <div className="flex flex-row mt-2">
            <div className="flex flex-col justify-center items-center gap-2">
                <Icons icon="CircleIcon"/>
                <div className={`border-l-2 h-full relative ${borderType()}`}></div>
            </div>
            <div className="flex flex-row ml-4 justify-between w-full">
                <div className="flex flex-col">
                    <p className="text-gray-secondary text-xs">{date}<span className="font-sans"> • </span>{arrivalTime}</p>
                    <h2 className="font-medium text-secondary max-w-[250px]">{airportCode}<span className="font-sans"> • </span>{airport}</h2>
                    {border == "dotted" && (   
                        <div className="flex flex-row justify-center items-center text-gray-secondary py-12 text-sm">
                            <Icons icon="ClockIcon" className="mr-2"/>
                            <p>Layover {time}</p>
                        </div>
                    )}
                </div>
                {border == "solid" && (
                    <div className="flex flex-row pt-6">
                        <img></img>
                        <div className="flex flex-col text-gray text-xs">
                            <p>{airline}<span className="font-sans"> • </span>{airlineCode}</p>
                            <p>{classType}<span className="font-sans"> • </span>{classTypeCode}</p>
                            <p>{time ? 'Flight time ' + time : null}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
   ) 
}

export default FlightDetails;