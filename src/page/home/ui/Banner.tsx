import {Box, Button, Container, Divider, Typography} from "@mui/material";
import {useStyle} from "./index.style";
import {mainTheme} from "../../../theme/main";

function Banner() {
    const {banner: style} = useStyle(mainTheme)
    return (
        <Container maxWidth="xl" sx={style.container}>
            <Box>
                <Typography sx={style.text} variant={"h1"}>We are ETS</Typography>
                <Divider sx={style.divider}/>
                <Typography sx={style.text} variant={"h2"}>Live an unique housing experience</Typography>
                <Button sx={style.btn}>Estimation de prix</Button>
            </Box>
        </Container>
    )
}

export default Banner
