import { SheetSideCard } from "@/components/SheetSideCard";
import Header from "@/components/Header";
import Cards from "@/components/Cards";

export function Results() {
    return(
        <section>
            <Header />
            <div className="w-full flex flex-col justify-center items-center mt-10 gap-4">
                <p className="">Showing 4 of 100 results</p>
                <SheetSideCard>
                    <Cards />
                </SheetSideCard>
            </div>
        </section>
    )
}

export default Results;