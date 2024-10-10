export interface FlightDetailsProps {
    date: string;
    arrivalTime: string;
    airportCode: string;
    airport: string;
    img?: string;
    airline?: string;
    airlineCode?: string;
    classType?: string;
    classTypeCode?: string;
    time: string;
    border?: "solid" | "dotted" | "none";
}