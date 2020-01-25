import { NextSeo } from "next-seo";
import { MyContext } from "../../web/types/MyContext";
import { checkAuth } from "../../lib/checkAuth";
import { postDetailsQuery, Post } from "../../controller";
import { getLayout } from "../../web/modules/layout/Layout";
import { withApollo } from "../../lib/apollo";
import { setAuthInContext } from "../../lib/setAuthInContext";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { BlogDetailsView } from "../../web/modules/blog/view/BlogDetailsView";
import { TagContainer } from "../../web/modules/blog/view/TagContainer";
import { CommentListView } from "../../web/modules/comment/list/CommentListView";
import { MoreStories } from "../../web/modules/blog/view/MoreBlogs";
import { StoryBreadCrumbs } from "../../web/modules/blog/view/BlogBreadCrumbs";

interface IProps {
  postDetails: Post;
}

const PostDetailsPage = (props: MyContext & IProps) => {
  const { postDetails, loggedUser } = props;
  setAuthInContext(loggedUser);
  const classes = useStyles();
  if (postDetails) {
    return (
      <>
        <NextSeo
          title={`Switch Title: ${postDetails.title}`}
          description="Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
          canonical={`https://www.switchtitle.com/blog/${postDetails.slug}`}
          openGraph={{
            url: `https://www.switchtitle.com/blog/${postDetails.slug}`,
            title: `Switch Title: ${postDetails.title}`,
            description: postDetails.details
          }}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className={classes.container}>
              <Typography
                variant="h4"
                gutterBottom
                className={classes.titleText}
              >
                {postDetails.title}
              </Typography>
              <StoryBreadCrumbs />
              <img
                src={`/images/blog/3-easy-steps-to-change-career.jpg`}
                width="100%"
                style={{ marginBottom: 40 }}
              />
              <BlogDetailsView details={postDetails.details} />
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item md={4} lg={4} xl={4}>
              <TagContainer tags={postDetails.tags} />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <CommentListView />
          </Grid>
          <Grid item container xs={12} sm={12} md={8} lg={8} xl={8} spacing={2}>
            <MoreStories />
          </Grid>
        </Grid>
      </>
    );
  }
  // FIXME: better message here
  return <>could not find the post</>;
};
PostDetailsPage.getLayout = getLayout;

PostDetailsPage.getInitialProps = async (context: MyContext) => {
  const {
    query: { query },
    apolloClient
  } = context;

  const { authPayload } = await checkAuth(apolloClient);
  const { postDetails } = await apolloClient
    .query({
      query: postDetailsQuery,
      variables: {
        slug: query
      }
    })
    .then(({ data }) => {
      if (data && data.postDetails) {
        return { postDetails: data.postDetails };
      }
      return { postDetails: null };
    })
    .catch(() => {
      return { postDetails: null };
    });

  return { postDetails, ...authPayload };
};

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

export default withApollo(PostDetailsPage);
