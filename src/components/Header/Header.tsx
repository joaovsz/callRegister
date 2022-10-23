import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/header.sass"
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link';
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import React from "react";
export const Header = () => {
  useEffect(() => {
    getDate()
  }, [])
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function getDate(){
    const date = new Date();
    const year = String(date.getFullYear());
    const day = String(date.getDay()).padStart(2, '0');
    const month = String(date.getMonth()).padStart(2, '0');
    const allDate = `${day}/${month}/${year}`
    console.log(allDate);
      return allDate
  }

  const date = getDate()


  return (
    <header id="header">
      {/* <ContactPhoneIcon/> */}
      <div>
     <nav className="navbar">
      <Link to="/">
        <div className="navlist">
        <HomeIcon className="navIcons"/>
        {/* <p>Início</p> */}
        </div>
        </Link>
      {/* <Link to="dashboard">Dashboard</Link> */}
      <Button
      id="links"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      >
        <LinkIcon className="navIcons"/>
        </Button> 
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><a target="_blank" href="gip.intranet/">GIP</a></MenuItem>
        <MenuItem onClick={handleClose}><a target="_blank" href="operacao-sisweb/Messenger/Sessao/Login?returnUrl=/Messenger">SisWeb</a></MenuItem>
        <MenuItem onClick={handleClose}><a target="_blank" href="totalview.intranet/pt_BR/web/guest/">TotalView</a></MenuItem>
        <MenuItem onClick={handleClose}><a target="_blank" href="minhabtcc.local.srv.br">Minha BTCC</a></MenuItem>
      </Menu>
      <Link to="matrizes">
      <div className="navlist">
      <DescriptionIcon className="navIcons" />
        {/* <p>O.S Interna</p> */}
        </div>
        
        </Link>
      </nav> 
      </div>
    </header>
  )
}


