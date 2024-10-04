import SkeletonCard from "@/components/SkeletonCard"
export function Loading() {
    return(
        <div> 
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}

export default Loading;