import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import FlightSearch from "@/components/FlightSearch"

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[36px] font-semibold">Good afternoon, Brian</h1>
      <Card>
        <CardHeader>
          <CardTitle><Badge variant="secondary" className="bg-gray-bg w-[127px] h-[36px] justify-center">Flights</Badge></CardTitle>
        </CardHeader>
       <FlightSearch />
      </Card>
    </div>
  );
}
