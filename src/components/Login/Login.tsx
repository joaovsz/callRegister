import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../sass/login.sass'
import { ChartsContext } from '../context/chart_context'
import { FormEvent, useContext, useState } from 'react'

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        joaovsz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#8758FF'
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

export default function Login() {
  const {
    handleChangeUser,
    handleChangePassword,
    user,
    password,
    isAuthenticated,
    token,
    handleSubmitLogin
  } = useContext(ChartsContext)
  return (
    <div id="main-login">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
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
              {token == '' && !isAuthenticated
                ? 'Faça login'
                : token && isAuthenticated
                ? 'Logado'
                : 'Faça Login'}
            </Typography>
            <Box
              component="form"
              onSubmit={e => handleSubmitLogin(e)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={e => handleChangeUser(e)}
                value={user}
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Nome de Usuário"
                name="user"
                autoFocus
              />
              <TextField
                variant="filled"
                onChange={e => handleChangePassword(e)}
                sx={{ borderColor: '#8758FF' }}
                margin="normal"
                required
                fullWidth
                value={password}
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {'Não tem uma conta? Criar conta'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  )
}
