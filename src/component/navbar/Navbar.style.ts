import {AppTheme} from "../../theme/main";

export const useStyle = (theme: AppTheme) => ({
    items: {
        ...theme.button.navbarBtn,
        fontWeight: "700"
    },
    primary: {
        ...theme.button.primary,
        marginRight: "20px"
    },
    secondary: {
        ...theme.button.secondary
    }
})
