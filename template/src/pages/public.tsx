import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import CopyRight from '../components/common/CopyRight';

function Public() {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/login"
              sx={{ my: 1, mx: 1.5, textDecoration: 'none' }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/login"
              sx={{ my: 1, mx: 1.5, textDecoration: 'none' }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/login"
              sx={{ my: 1, mx: 1.5, textDecoration: 'none' }}
            >
              Support
            </Link>
          </nav>
          <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6, flex: 1 }}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Public Page
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              quaerat consectetur sit! Sit, ad. Dolores quod sapiente ipsam
              nostrum dolorum id similique velit amet ducimus laudantium,
              officia sit et ipsa.
            </Typography>
          </Container>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <CopyRight />
      </Box>
      {/* End footer */}
    </>
  );
}

export default Public;
