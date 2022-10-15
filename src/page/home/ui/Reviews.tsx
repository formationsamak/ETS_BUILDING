import logo1 from "../../../public/img/logo_1.svg"
import logo2 from "../../../public/img/logo_2.svg"
import logo3 from "../../../public/img/logo_3.svg"
import logo4 from "../../../public/img/logo_4.svg"
import logo5 from "../../../public/img/logo_5.svg"
import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import {mainTheme} from "../../../theme/main";
import {useStyle} from "./index.style";

const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
]

const project = [
    "24 Years",
    "22 Members",
    "92 Projects",
    "43 Awards"
]

export default function Reviews() {
    const {review: style} = useStyle(mainTheme)
    return (
        <Container maxWidth={"xl"}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                width={"100%"}
            >
                {logos.map((logo) => (
                    <Grid item xs={4} md={2.25} sx={{textAlign: "center"}}>
                        <Box component={"img"} src={logo}/>
                    </Grid>
                ))}
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                width={"100%"}
            >
                {project.map((desc) => (
                    <Grid sx={style.textContainer} item xs={6} md={3}>
                        <Typography fontSize={"2rem"} fontWeight={700} variant={"h3"}>{desc}</Typography>
                        <Divider sx={style.divider}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
