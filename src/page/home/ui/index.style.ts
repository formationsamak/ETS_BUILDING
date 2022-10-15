import {AppTheme} from "../../../theme/main";
import BannerImg from "../../../public/img/main_bg.png"

export const useStyle = (theme: AppTheme) => ({
    banner: {
        container: {
            backgroundImage: `url(${BannerImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "91vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        text: {
            color: theme.color.white
        },
        btn: {
            ...theme.button.secondary,
            marginTop: "40px",
            "&:hover": {
                backgroundColor: "transparent",
                color: theme.color.white,
                borderColor: theme.color.white
            }
        },
        divider: {
            maxWidth: "75px",
            borderColor: theme.color.white,
            margin: "40px 0px"
        }
    },
    gallery: {
        primaryDivider: {
            margin: "50px 0px",
            borderColor: theme.color.black,
            maxWidth: "75px"
        },
        title: {
            marginBottom: "25px"
        },
        textGroup: {
            display: "flex",
            flexDirection: "row"
        },
        secondaryDivider: {
            borderColor: theme.color.black,
            maxWidth: "175px",
            width: "175px",
            transform: "translate(20px, -6px)",
        },
        subtitle: {
            color: theme.color.textGrey
        },
        boxContainer: {
            marginBottom: "100px"
        },
        images: {
            width: "33.3%",
            height: "743px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            cursor: "pointer",
        },
        imageContainer: {
            display: "flex",
            flexDirection: "row",
            width: "100%"
        },
        imageBox: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            "&:before": {
                content: '""',
                width: "100%",
                height: "743px",
                backgroundColor: theme.color.black,
                opacity: 0.4,
                position: "absolute",
            }
        }
    },
    value: {
        textContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "space-between",
            justifyContent: "center"
        },
        textItems: {
            width: "50%",
        },
        textTitle: {
            fontWeight: "700",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        divider: {
            maxWidth: "75px",
            borderColor: theme.color.black,
            margin: "40px 0px"
        },
        card: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.color.grey,
            padding: "50px",
            width: "33%",
            justifyContent: "center"
        },
        cardContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }
    },
    clients: {
        container: {
            display: "flex",
            flexDirection: "row",
            padding: "75px 0px"
        },
        textContainer: {
            marginLeft: "15px"
        },
        bg: {
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: -1,
            width: "54%",
            maxHeight: "648px"
        }
    },
    review: {
        divider: {
            maxWidth: "75px",
            borderColor: theme.color.black,
            margin: "10px 0px 40px 0px",
            marginLeft: "50%",
            transform: "translate(-50%, 0px)"
        },
        textContainer: {
            display: "flex",
            flexDirection: "column",
            textAlign: "center"
        }
    }
})
