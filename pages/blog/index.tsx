import Divider from "@material-ui/core/Divider";
import { getLayout } from "../../web/modules/layout/Layout";
import { BlogHomeController } from "../../web/modules/blog/home/BlogHomeController";
import { withApollo } from "../../lib/apollo";
import { MyContext } from "../../web/types/MyContext";
import { checkAuth } from "../../lib/checkAuth";
import { setAuthInContext } from "../../lib/setAuthInContext";

const StoriesPage = ({ loggedUser }: MyContext) => {
  setAuthInContext(loggedUser);
  return (
    <>
      <BlogHomeController />
      <Divider variant="middle" style={{ marginTop: 40, marginBottom: 100 }} />
    </>
  );
};

StoriesPage.getInitialProps = async (context: MyContext) => {
  const { apolloClient } = context;
  const { authPayload } = await checkAuth(apolloClient);
  if (authPayload) {
    return {
      ...authPayload
    };
  }
  return {
    loggedUser: null,
    loggedCompany: null
  };
};

StoriesPage.getLayout = getLayout;

export default withApollo(StoriesPage);
