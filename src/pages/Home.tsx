import { Grid, Typography } from "@mui/material";
import React from "react";

import ResponsiveAppBar from "../components/ResponsiveAppBar";

const Home: React.FC = () => {
    return (
        <>
            <Grid container>
                <Grid item>
                    <ResponsiveAppBar />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
