import {AppTheme} from "../../theme/main";

export const useStyle = (theme: AppTheme) => ({
    linkContainer: {
        margin: "25px 0px"
    },
    itemTitle: {
        fontSize: "2rem",
        fontWeight: "700",
        marginBottom: "30px"
    },
    iconContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
