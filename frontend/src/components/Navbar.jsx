
// import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
// import { useState } from "react";
// import MenuIcon from '@mui/icons-material/Menu';
// import { useNavigate } from "react-router-dom";

// const pages = [{name :'Home' , url : "/"}, {name :'Services' , url : "/services"}, {name :'About Us' , url : "/aboutUs"} , {name :'Portfolio' , url : "/portfolio"} , {name :'Contact Us' , url : "/contact"}];
// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   const Navigate = useNavigate();

//   return (
//     <AppBar position="sticky">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             DIGITECH
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page.name} 
//                 onClick={(e)=>{
//                   handleCloseNavMenu(e);
//                   Navigate(page.url);
//                 }}
//                 >
//                   <Typography textAlign="center">{page.name}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             DIGITECH
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page.name}
//                 onClick={(e)=>{
//                   handleCloseNavMenu(e);
//                   Navigate(page.url);
//                 }}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page.name}
//               </Button>
//             ))}
//           </Box>

    
//         </Toolbar>
//       </Container>
//     </AppBar>
//   )
// }

// export default Navbar
import { FaBeer } from 'react-icons/fa';
import React, { useState } from "react";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

const pages = [
  { name: 'Home', url: "/" },
  { name: 'Services', url: "/services" },
  { name: 'About Us', url: "/aboutUs" },
  { name: 'Portfolio', url: "/portfolio" },
  { name: 'Contact Us', url: "/contact" }
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const Navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ background: "#222", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#00bfff',
              textDecoration: 'none',
              fontSize: "1.5rem",
              '&:hover': {
                color: '#00bfff',
              },
            }}
          >
            DIGITECH
          </Typography>
           
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={(e) => {
                    handleCloseNavMenu(e);
                    Navigate(page.url);
                  }}
                  sx={{
                    my: 2,
                    color: 'white',
                    textTransform: "uppercase",
                    fontWeight: 600,
                    '&:hover': {
                      color: '#00bfff',
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={(e) => {
                      handleCloseNavMenu(e);
                      Navigate(page.url);
                    }}
                    sx={{ textAlign: "center" }}
                  >
                    <Typography>{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
