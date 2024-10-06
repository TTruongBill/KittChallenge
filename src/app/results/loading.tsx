import SkeletonCard from "@/components/SkeletonCard"
export function Loading() {
    return(
        <div className="w-full flex flex-col justify-center items-center mt-10 gap-4"> 
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}

export default Loading;