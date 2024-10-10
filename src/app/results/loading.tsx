import SkeletonCard from "@/components/SkeletonCard"
import Header from "@/components/Header"
import { CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export function Loading() {
    return(
        <div className="w-full flex flex-col justify-center items-center mt-10 gap-4"> 
        <Header />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <CardContent className="absolute flex flex-col border-2 rounded-lg border-gray-bg-sheet text-gray-secondary font-medium bg-white w-[320px] h-[300px] justify-around items-center">
            <Icons icon="AirplaneIcon" />
            <div className="flex flex-col items-start gap-4">
                <p>Searching 400+ flights</p>
                <p>Attaching company rules</p>
                <p>Serving best results</p>
            </div>
        </CardContent>
    </div>
    )
}

export default Loading;