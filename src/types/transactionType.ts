import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type TransactionType = {
    id: number;
    value: number;
    description: string;
    date: AdapterDayjs;
    type: "credit" | "debit";
};

export default TransactionType;
