import { SheetSideCard } from "@/components/SheetSideCard";
import Header from "@/components/Header";
import Cards from "@/components/Cards";

export function Results() {
    return(
        <section >
            <Header />
            <div className="flex flex-col justify-center items-center mt-10 gap-4 mx-2 lg:mx-8">
                <div className="w-full max-w-[1056px]">
                    <p className="">Showing 4 of 100 results</p>
                </div>
                <SheetSideCard>
                    <Cards />
                </SheetSideCard>
                <SheetSideCard>
                    <Cards />
                </SheetSideCard>
                <SheetSideCard>
                    <Cards />
                </SheetSideCard>
                <SheetSideCard>
                    <Cards />
                </SheetSideCard>
            </div>
        </section>
    )
}

export default Results;