import { Cards } from "@/components/Cards";
import Header from "@/components/Header";

export function Results() {
    return(
        <section>
            <Header />
            <div className="w-full flex flex-col justify-center items-center mt-10 gap-4">
                <p className="">Showing 4 of 100 results</p>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </section>
    )
}

export default Results;