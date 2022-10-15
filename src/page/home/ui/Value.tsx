import {Box, Container, Divider, Typography} from "@mui/material";
import {mainTheme} from "../../../theme/main";
import {useStyle} from "./index.style";
import furniture from "../../../public/img/furniture.svg"
import compass from "../../../public/img/compass.svg"
import home from "../../../public/img/home.svg"

const cards = [
    {
        icon: furniture,
        title: "Architectural Design",
        body: "We work closely with clients to gain an understanding of your desires both philoso phical and practical."
    },
    {
        icon: compass,
        title: "Building Construction",
        body: "We work closely with clients to gain an understanding of your desires both philoso phical and practical."
    },
    {
        icon: home,
        title: "Interior Design",
        body: "We work closely with clients to gain an understanding of your desires both philoso phical and practical."
    },
]

function Card({title, body, icon}: { title: string, body: string, icon: string }) {
    const {value: style} = useStyle(mainTheme)
    return (
        <Box sx={style.card}>
            <div>
                <img src={icon} alt={"card icon"}/>
            </div>
            <Typography marginTop={3} variant={"h2"}>{title}</Typography>
            <Typography marginTop={3} fontWeight={700}>{body}</Typography>
        </Box>
    )
}

export default function Value() {
    const {value: style} = useStyle(mainTheme)
    return (
        <Container maxWidth={"xl"}>
            <Divider sx={style.divider}/>
            <Box sx={style.textContainer}>
                <Typography sx={{...style.textItems, ...style.textTitle}} variant={"h2"}>
                    Architecture is about <br/>experience, not only visual
                </Typography>
                <Typography sx={style.textItems}>
                    Arki Architecture is a New-York-based studio practice focused on modern design, interiors and
                    landscapes. From our inception in 2007, we have delivered exceptional public and private
                    environments
                    that are stimulating to occupy and fundamental to their surroundings. As a full-service firm, Aiki
                    is
                    present on projects from start to finish.
                </Typography>
            </Box>
            <Divider sx={style.divider}/>
            <Box sx={style.cardContainer}>
                {cards.map((card) => (<Card title={card.title} body={card.body} icon={card.icon}/>))}
            </Box>
        </Container>
    )
}
