import {Box, Container, Typography} from "@mui/material";
import banner from "../../../public/img/banner_2.png"
import {mainTheme} from "../../../theme/main";
import {useStyle} from "./index.style";
import bg from "../../../public/img/bg.png"

export default function Clients() {
    const {clients: style} = useStyle(mainTheme)
    return (
        <Container sx={{position: "relative"}} maxWidth={"xl"}>
            <Box sx={style.bg} component={"img"} src={bg}/>
            <Box sx={style.container}>
                <Box component={"img"} src={banner}/>
                <Box sx={style.textContainer}>
                    <Typography variant={"h1"} fontWeight={700}>Our Clients.</Typography>
                    <Typography marginTop={2.5} variant={"h3"}>/Green Hause</Typography>
                    <Typography marginTop={2.5} variant={"h3"}>/The Artikitek</Typography>
                    <Typography marginTop={2.5} variant={"h3"}>/Abu dhabi sky</Typography>
                    <Typography marginTop={2.5} variant={"h3"}>/Sydney city hall</Typography>
                    <Typography marginTop={2.5} variant={"h3"}>/Maz project</Typography>
                    <Typography marginTop={2.5} variant={"h3"}>/The DC</Typography>
                </Box>
            </Box>
        </Container>
    )
}
