export interface ComboboxProps {
    label: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    errorText?: string;
    setErrorText: React.Dispatch<React.SetStateAction<string>>;
    locationCode?: string;
    setLocationCode: React.Dispatch<React.SetStateAction<string>>;

}