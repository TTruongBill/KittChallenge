export interface ComboboxProps {
    label: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    errorText?: string;
}