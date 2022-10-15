import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "../../public/img/full_logo.png"
import {useStyle} from "./Navbar.style"
import {mainTheme} from "../../theme/main";

const pages = ['Accueil', 'Commerce', 'Vente', 'Batiments'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const style = useStyle(mainTheme)
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={logo} alt={"enterprise logo"}/>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, marginLeft: "50px"}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                style={style.items}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Button sx={style.primary}>Estimation de Prix</Button>
                        <Button sx={style.secondary}>Contact</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
