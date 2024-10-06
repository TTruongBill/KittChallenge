export interface SheetSideProps {
    children: React.ReactNode;
    fromLocation: string;
    toLocation: string;
    departureDate: Date | undefined;
    returnDate: Date | undefined;
    setFromLocation: React.Dispatch<React.SetStateAction<string>>;
    setToLocation: React.Dispatch<React.SetStateAction<string>>;
    setDepartureDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    setReturnDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}