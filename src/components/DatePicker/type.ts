export interface DatePickerProps {
    label: string;
    value?: Date;
    setValue: React.Dispatch<React.SetStateAction<Date | undefined>>;
    errorText?: string
    setErrorText: React.Dispatch<React.SetStateAction<string>>;
}