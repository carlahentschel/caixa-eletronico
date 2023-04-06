import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

import ResponsiveAppBar from "../components/ResponsiveAppBar";

const Home: React.FC = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <ResponsiveAppBar />
                </Grid>
            </Grid>
            <Grid container spacing={2} paddingX={20} paddingTop={10}>
                <Grid item xs={12}>
                    <Typography variant="h5">Minhas transações</Typography>
                    <Typography variant="h6">Meu saldo:</Typography>
                    <Divider />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
