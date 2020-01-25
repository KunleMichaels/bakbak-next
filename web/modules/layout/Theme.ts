import { grey, pink } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: grey
  }
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 360,
  //     md: 600,
  //     lg: 900,
  //     xl: 1280
  //   }
  // }
});

export default theme;
