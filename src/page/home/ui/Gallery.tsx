import {Box, Container, Divider, Typography} from "@mui/material";
import {useStyle} from "./index.style";
import {mainTheme} from "../../../theme/main";
import galleyOne from "../../../public/img/gallery_1.png"
import galleyTwo from "../../../public/img/gallery_2.png"
import galleyThree from "../../../public/img/gallery_3.png"
import {useState} from "react";

const images = [
    {url: galleyOne, title: "Global Aki Terfa"},
    {url: galleyTwo, title: "Global Aki Fater"},
    {url: galleyThree, title: "Global Aki Royal"}
]

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(1)
    const {gallery: style} = useStyle(mainTheme)
    return (
        <>
            <Container maxWidth={"xl"}>
                <Divider sx={style.primaryDivider}/>
                <Box sx={style.boxContainer}>
                    <Box>
                        <Typography sx={style.title} variant={"h1"}>Our Works</Typography>
                        <Box sx={style.textGroup}>
                            <Typography sx={style.subtitle} variant={"h2"}>Design and innovative solutions</Typography>
                            <Divider sx={style.secondaryDivider}/>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Box sx={style.imageContainer}>
                {images.map((image, idx) => {
                    const baseStyle: { [key: string]: any } = {
                        ...style.images,
                        ...style.imageBox,
                        backgroundImage: `url(${image.url})`
                    }

                    if (idx === activeIndex) {
                        baseStyle["transform"] = "translate(0px, -50px)"
                    }

                    return <Box key={image.url} sx={baseStyle}>
                        <Typography zIndex={2} sx={{color: "#fff"}} fontWeight={"700"} variant={"h2"}>
                            {image.title}
                        </Typography>
                    </Box>
                })}
            </Box>
        </>
    )
}
