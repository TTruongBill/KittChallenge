
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function SkeletonCardInfo() {
    return(
        <div className="flex flex-row gap-6 justify-between">
            <div className="flex flex-row gap-6">
                <Skeleton className="h-[42px] w-[42px] rounded-xl bg-gradient-to-r from-gray-from bg-transparent"/>
                <div className="flex flex-col gap-3 justify-evenly">
                    <Skeleton className="h-[11px] w-[94px] rounded-xl bg-gradient-to-r from-gray-from bg-transparent"/>
                    <Skeleton className="h-[15px] w-[151px] rounded-xl bg-gradient-to-r from-gray-from bg-transparent"/>
                </div>
            </div>
            <div className="flex flex-row gap-28">
                <div className="flex flex-col gap-3 justify-evenly">
                    <Skeleton className="h-[11px] w-[67px] rounded-xl bg-gradient-to-r from-gray-from bg-transparent"/>
                    <Skeleton className="h-[15px] w-[71px] rounded-xl bg-gradient-to-r from-gray-from bg-transparent"/>
                </div>
                <div className="flex flex-col gap-3 justify-end">
                    <Skeleton className="h-[15px] w-[72px] rounded-xl bg-gradient-to-r from-gray-from bg-transparent"/>
                </div>
            </div>
        </div>
    )
}

function SkeletonCard() {
    return(
        <Card className="flex flex-row w-[1056px] justify-between pr-60 shadow-none border-gray-bg">
            <CardContent className="flex flex-col w-full pt-6 gap-10">
                <SkeletonCardInfo />
                <SkeletonCardInfo />
            </CardContent>
        </Card>
    )
}

export default SkeletonCard;
