import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../sass/header.sass'
import HomeIcon from '@mui/icons-material/Home'
import DescriptionIcon from '@mui/icons-material/Description'
import LinkIcon from '@mui/icons-material/Link'
import Button from '@mui/material/Button'
import { Menu, MenuItem } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import TimelineIcon from '@mui/icons-material/Timeline'
import React from 'react'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { ChartsContext } from '../context/chart_context'
import LogoutIcon from '@mui/icons-material/Logout'
export const Header = () => {
  useEffect(() => {
    getDate()
  }, [])

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  function getDate() {
    const date = new Date()
    const year = String(date.getFullYear())
    const day = String(date.getDay()).padStart(2, '0')
    const month = String(date.getMonth()).padStart(2, '0')
    const allDate = `${day}/${month}/${year}`

    return allDate
  }

  const date = getDate()
  const { logout } = useContext(ChartsContext)
  return (
    <header id="header">
      {/* <ContactPhoneIcon/> */}
      <div>
        <nav className="navbar">
          <Link to="/">
            <div className="navlist">
              <HomeIcon className="navIcons" />
              {/* <p>Início</p> */}
            </div>
          </Link>

          <a target="_blank" href="https://simuladorrv.netlify.app">
            <AttachMoneyIcon />
          </a>

          {/* <Link to="/searchperson">
            <PersonSearchIcon />
          </Link>  */}

          <Link to="/matrizes">
            <div className="navlist">
              <DescriptionIcon className="navIcons" />
              {/* <p>O.S Interna</p> */}
            </div>
          </Link>
          <Button
            id="links"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <LinkIcon className="navIcons" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
          >
            <a target="_blank" href="http://gip.intranet/">
              <MenuItem onClick={handleClose}>GIP</MenuItem>
            </a>
            <a
              target="_blank"
              href="http://operacao-sisweb/Messenger/Sessao/Login?returnUrl=/Messenger"
            >
              {' '}
              <MenuItem onClick={handleClose}>SisWeb</MenuItem>
            </a>
            <a
              target="_blank"
              href="http://totalview.intranet/pt_BR/web/guest/"
            >
              {' '}
              <MenuItem onClick={handleClose}>TotalView</MenuItem>
            </a>
            <a target="_blank" href="http://minhabtcc.local.srv.br">
              <MenuItem onClick={handleClose}>Minha BTCC</MenuItem>
            </a>
            <a target="_blank" href="http://poi.gupy.io">
              <MenuItem onClick={handleClose}>POI</MenuItem>
            </a>
          </Menu>
        </nav>
        {/* <Button
          id="logout"
          onClick={logout}
          variant="text"
          startIcon={<LogoutIcon />}
        /> */}
      </div>
    </header>
  )
}
