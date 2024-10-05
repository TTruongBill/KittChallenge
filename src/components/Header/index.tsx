import {
    Card,
    CardContent,
  } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import { Button } from "../ui/button";

export function Header() {
    return(
        <>
            <header className="flex justify-center">
                <div className="py-8 flex justify-between items-center w-[1056px]">
                    <Card className="w-fit rounded-full text-normal shadow-none">
                        <CardContent className="flex flex-row justify-center items-center p-4 space-x-4 h-[56px] text-gray-secondary font-medium">
                            <p><span className="font-medium text-secondary pr-2">CDG</span>Paris Charles De Gu...</p>
                            <Separator orientation="vertical" />
                            <p><span className="font-medium text-secondary pr-2">CDG</span>Paris Charles De Gu...</p>
                            <Separator orientation="vertical" />
                            <p className="font-medium text-secondary">Jun 25 - Jul 2</p>
                            <Separator orientation="vertical" />
                            <div className="rounded-full bg-light-green w-[34px] h-[34px] flex justify-center items-center">
                                <Icons icon="SearchIcon" className="text-secondary"/>
                            </div>
                        </CardContent>
                    </Card>
                    <Button variant="outline" className="rounded-full w-[44px] h-[44px]">
                        <Icons icon="XIcon" />
                    </Button>
                </div>
            </header>
            <Separator />
        </>

)}

export default Header;