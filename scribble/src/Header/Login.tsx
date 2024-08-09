import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LockIcon from '@mui/icons-material/Lock';
import Grid from '@mui/material/Grid';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
// import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {

    return (
        <Container maxWidth="xs" sx={{ textAlign: 'center', mt: 5 }}>
            <Box sx={{ mb: 2 }}>
                <Button
                    startIcon={<LockIcon />}
                  >Log In
                </Button>
            </Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Log into Scribble
            </Typography>
            <Typography variant="body2" sx={{ mb: 4 }}>
                New to Scribble?{' '}
                <Link underline="hover">
                    Sign up for free
                </Link>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button
                        startIcon={<GoogleIcon />}
                        variant="contained"
                        color="inherit"
                        fullWidth
                        sx={{ mb: 1, backgroundColor: '#f5f5f5' }}
                    >
                        Log in with Google
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        startIcon={<EmailIcon />}
                        variant="contained"
                        color="inherit"
                        fullWidth
                        sx={{ mb: 1, backgroundColor: '#f5f5f5' }}
                    >
                        Email
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
