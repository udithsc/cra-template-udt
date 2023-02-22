import React from 'react';
import { Grid, Paper } from '@mui/material';
import Counter from '../features/counter/counter';
import PostTable from '../features/post/postTable';

function Home() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
          id="welcomeText"
        >
          Welcome!
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Counter />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        {/* <Paper
          sx={{
            p: 2,
          }}
        > */}
        <PostTable />
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
}

export default Home;
