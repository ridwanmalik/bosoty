// import createEmotionCache from "@/Configs/createEmotionCache";
import theme from "@/Configs/theme";
// import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const RootLayout = ({ children }) => {
    // <CacheProvider value={createEmotionCache}>
    {
        /* </CacheProvider> */
    }
    return (
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
export default RootLayout;
