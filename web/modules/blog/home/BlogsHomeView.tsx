import { Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ROUTE_NAMES } from "../../../../common";
import { FilterAndSort } from "./FilterAndSort";
import NextLink from "../../shared/NextLink";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) => ({
  mainText: {
    textTransform: "capitalize",
    fontWeight: "bolder"
  },
  backgroundImage: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url(/images/blog/painter.jpg)",
    backgroundPosition: "center center",
    height: 400,
    backgroundColor: "rgba(0,0,0,.8)",
    color: theme.palette.common.white
  },
  overlay: {
    height: "100%",
    backgroundColor: "rgba(0,0,0,.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  primaryButton: {
    marginTop: theme.spacing(20)
  }
}));

export const BlogsHomeView = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <FilterAndSort />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
        <div className={classes.backgroundImage}>
          <div className={classes.overlay}>
            <Typography variant="subtitle2" gutterBottom>
              Sucess or failures - let's help each other
            </Typography>
            <Typography variant="h3" gutterBottom className={classes.mainText}>
              YOUR JOURNEY
            </Typography>
            <Button
              component={NextLink as any}
              variant="contained"
              color="primary"
              className={classes.primaryButton}
              href={ROUTE_NAMES.CREATE_BLOG}
            >
              Create Story
            </Button>
          </div>
        </div>
      </Grid>
    </>
  );
};
