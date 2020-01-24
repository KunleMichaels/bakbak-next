// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CreateBlogView } from "../../web/modules/blog/create/CreateBlogView";
import { getLayout } from "../../web/modules/layout/Layout";
import { useCreatePostMutation, CreatePostInput, Post } from "../../controller";
import { withApollo } from "../../lib/apollo";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { NextSeo } from "next-seo";
import { MoreBlogs } from "../../web/modules/blog/create/MoreBlogs";
import { ROUTE_NAMES } from "../../common";
import redirect from "../../lib/redirect";
import { setUserInContext } from "../../lib/setAuthInContext";
import { MyContext } from "../../web/types/MyContext";
// import { redirectAuth } from "../../lib/redirectAuth";

const CreateStoryPage = ({ loggedUser }: MyContext) => {
  setUserInContext(loggedUser);
  const [createPostMutation] = useCreatePostMutation();
  const classes = useStyles();

  const onComplete = (post: Post) => {
    console.log(post);
    if (post) {
      redirect(null, ROUTE_NAMES.BLOG);
    }
  };

  const onSubmit = async (input: CreatePostInput) => {
    console.log(input);
    const { data } = await createPostMutation({ variables: { input } });
    if (data && data.createPost) {
      return data.createPost;
    } else {
      return null;
    }
  };
  return (
    <>
      <NextSeo
        title={`Switch Title: Create Post`}
        description="Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        canonical={`https://www.switchtitle.com/blog/create-blog`}
        openGraph={{
          url: `https://www.switchtitle.com/blog/create-blog`,
          title: `Switch Title: Create Post`,
          description:
            "Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        }}
      />
      <Grid container spacing={10}>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
          <div className={classes.container}>
            <CreateBlogView onComplete={onComplete} onSubmit={onSubmit} />
          </div>
        </Grid>
        <Hidden mdDown>
          <Grid item lg={5} xl={5} style={{ marginTop: 100 }}>
            <MoreBlogs />
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
};

// CreateStoryPage.getInitialProps = async (context: MyContext) => {
//   const { loggedUser, loggedCompany } = await redirectAuth(context);
//   return { loggedUser, loggedCompany };
// };

CreateStoryPage.getLayout = getLayout;

const useStyles = makeStyles((theme: Theme) => ({
  dividerStyle: {
    height: 2,
    backgroundColor: theme.palette.common.black,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "100%"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(10)
  },
  titleText: {
    marginBottom: theme.spacing(3),
    fontWeight: "bolder"
  }
}));

export default withApollo(CreateStoryPage);
