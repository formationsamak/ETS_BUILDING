import {mainTheme} from "../../theme/main";
import {useStyle} from "./Footer.style";
import {Box, Container, Grid, Typography} from "@mui/material";
import LogoFull from "../../public/img/full_logo.png"
import logo from "../../public/img/small_logo.svg"
import twitter from "../../public/img/twitter.svg"
import instagram from "../../public/img/instagram.svg"
import linkedin from "../../public/img/linkedin.svg"

function Item({title, texts}: { title: string, texts: string[] }) {
    const style = useStyle(mainTheme)
    return (
        <>
            <Typography variant={"h3"} sx={style.itemTitle}>{title}</Typography>
            {texts.map((text) => (<Typography marginBottom={"20px"}>{text}</Typography>))}
        </>
    )
}

export default function Footer() {
    const style = useStyle(mainTheme)
    return (
        <Box sx={{paddingTop: "80px", paddingBottom: "80px", boxShadow: "0px -3px 18px rgba(0, 0, 0, 0.08);"}}>
            <Container maxWidth={"xl"}>
                <Box src={LogoFull} component={"img"}/>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={style.linkContainer}
                >
                    <Grid item sm={6} md={4} lg={2}>
                        <Box>
                            <Item title={"Vente"} texts={["vente agricole", "vente pastoral"]}/>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={4} lg={2}>
                        <Box>
                            <Item title={"Commerce"} texts={["commerce import", "commerce export"]}/>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={4} lg={2}>
                        <Box>
                            <Item title={"Construction"} texts={["construction refection", "construction batiment"]}/>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={4} lg={2}>
                        <Box>
                            <Item title={"Support"} texts={["contact", "Estimation de prix"]}/>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={4} lg={2}>
                        <Box>
                            <Item title={"Autre"} texts={["Blog", "FAQ"]}/>
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item sm={6} md={4} lg={2}>
                        <Box component={"img"} src={logo} alt={"small logo"}/>
                    </Grid>
                    <Grid item sm={6} md={4} lg={8}>
                        <Typography textAlign={"center"} variant={"subtitle2"}>© 2022 ETS Intl AB (publ). Company no:
                            99999-9999. Regulated
                            by
                            the
                            african society of society <br/>(Finansinspektionen) under the Swedish Electronic Money Act
                            (2011:755). License no: 48003.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={4} lg={2}>
                        <Box sx={style.iconContainer}>
                            <Box component={"img"} src={twitter}/>
                            <Box component={"img"} src={instagram}/>
                            <Box component={"img"} src={linkedin}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
