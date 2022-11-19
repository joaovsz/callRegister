import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../sass/signup.sass'
import { useContext } from 'react'
import { ChartsContext } from '../context/chart_context'

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/"></Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#6C4C9C'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#96BAFF'
    }
  },
  typography: {
    fontFamily: ['Poppins'].join(',')
  }
})

export default function Signup() {
  const {
    handleChangeUser,
    handleChangePassword,
    handleChangePasswordRepeat,
    user,
    password,
    password_repeat,
    handleSubmitRegister
  } = useContext(ChartsContext)

  return (
    <main id="main-signup">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Criar Conta
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={e => handleSubmitRegister(e)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    onChange={e => handleChangeUser(e)}
                    variant="filled"
                    value={user}
                    required
                    fullWidth
                    id="email"
                    label="Nome de usuário"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={e => handleChangePassword(e)}
                    variant="filled"
                    value={password}
                    required
                    fullWidth
                    name="password"
                    label="Digite uma senha"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                  <TextField
                    onChange={e => handleChangePasswordRepeat(e)}
                    variant="filled"
                    value={password_repeat}
                    required
                    fullWidth
                    name="password"
                    label="Digite a senha novamente"
                    type="password"
                    id="password"
                    className="password-repeat"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Já possuo uma conta
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </main>
  )
}
