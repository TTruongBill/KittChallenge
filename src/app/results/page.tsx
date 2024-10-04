import { Cards } from "@/components/Cards";
import SkeletonCard from "@/components/SkeletonCard"

export function results() {
    return(
        <section>
            <div className="w-full flex flex-col justify-center items-center mt-10">
                <Cards />
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-10 gap-4"> 
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
        </section>
    )
}

export default results;