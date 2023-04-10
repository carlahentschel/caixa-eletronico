import {
    Grid,
    Typography,
    TextField,
    Divider,
    Checkbox,
    FormControlLabel,
    Button,
    FormGroup,
} from "@mui/material";
import React, { useState } from "react";

import BasicDatePicker from "../components/BasicDatePicker";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import TransactionType from "../types/transactionType";

const AddTransactions: React.FC = () => {
    const [transaction, setTransaction] = useState({} as TransactionType);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTransaction((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleChangeDate = (newDate: any) => {
        setTransaction((prevState) => ({ ...prevState, date: newDate }));
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <ResponsiveAppBar />
                </Grid>
            </Grid>
            <Grid container spacing={2} paddingX={50} paddingTop={10}>
                <Grid item xs={12}>
                    <Typography variant="h5">Cadastrar uma transação</Typography>
                    <Divider />
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        onChange={handleChange}
                        type="number"
                        id="Valor"
                        label="Valor"
                        variant="outlined"
                        name="value"
                        fullWidth
                        value={transaction.value}
                    />
                </Grid>

                <Grid xs={12} item>
                    <TextField
                        onChange={handleChange}
                        type="text"
                        id="Descricao"
                        label="Descricao"
                        variant="outlined"
                        name="description"
                        value={transaction.description}
                        fullWidth
                    />
                </Grid>

                <Grid xs={12} item>
                    <BasicDatePicker setDate={handleChangeDate} />
                </Grid>
                <Grid xs={12} item>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Saque" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Depósito" />
                    </FormGroup>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="outlined">
                        Limpar
                    </Button>
                </Grid>
                <Grid xs={6} item>
                    <Button onClick={() => console.log(transaction)} variant="contained" fullWidth>
                        Cadastrar
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default AddTransactions;
