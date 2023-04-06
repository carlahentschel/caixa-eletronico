import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as React from "react";

interface BasicDatePickerProps {
    setDate: (value: any) => void;
}

const BasicDatePicker: React.FC<BasicDatePickerProps> = ({ setDate }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <DemoContainer components={["DatePicker"]}>
                <DatePicker
                    label="Data"
                    sx={{ width: "100%" }}
                    slotProps={{
                        textField: {
                            helperText: "MM / DD / YYYY",
                        },
                    }}
                    onChange={(newValue) => setDate(newValue)}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default BasicDatePicker;
