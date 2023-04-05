import { Grid, Typography, TextField, Divider } from "@mui/material";
import React from "react";

import ResponsiveAppBar from "../components/ResponsiveAppBar";

const AddTransactions: React.FC = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <ResponsiveAppBar />
                </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={4}>
                <Grid item xs={12}>
                    <Typography variant="h5">Cadastrar uma transação</Typography>
                    <Divider />
                </Grid>
                <Grid xs={12} item>
                    <TextField id="Valor" label="Valor" variant="outlined" fullWidth />
                </Grid>

                <Grid xs={12} item>
                    <TextField id="Descricao" label="Descricao" variant="outlined" fullWidth />
                </Grid>

                <Grid xs={12} item>
                    <TextField id="Descricao" label="Descricao" variant="outlined" fullWidth />
                </Grid>
            </Grid>
        </>
    );
};

export default AddTransactions;
