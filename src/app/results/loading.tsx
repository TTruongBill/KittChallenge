import SkeletonCard from "@/components/SkeletonCard"
import Header from "@/components/Header"

export function Loading() {
    return(
        <div className="w-full flex flex-col justify-center items-center mt-10 gap-4"> 
            <Header />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}

export default Loading;