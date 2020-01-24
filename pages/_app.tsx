import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { DefaultSeo } from "next-seo";
import App from "next/app";
import React from "react";
import SEO from "../next-seo.config";
import { AppProvider } from "../web/context/AppContext";
import theme from "../web/modules/layout/Theme";
// import { getLayout } from "../web/modules/layout/Layout";

class MyApp extends App<any> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const getLayoutNew = Component.getLayout || ((page: any) => page);

    return (
      <AppProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DefaultSeo {...SEO} />
          {getLayoutNew(<Component {...pageProps} />)}
        </ThemeProvider>
      </AppProvider>
    );
  }
}

export default MyApp;
