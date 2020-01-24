import Divider from "@material-ui/core/Divider";
import { useEffect } from "react";
import { withApollo } from "../lib/apollo";
import { redirectAuth } from "../lib/redirectAuth";
import { APP_ACTIONS, useAppContext } from "../web/context/AppContext";
import { getLayout } from "../web/modules/layout/Layout";
import { MyContext } from "../web/types/MyContext";
import { PostListController } from "../web/modules/post/postList/PostListController";

const IndexPage = ({ loggedUser }: MyContext) => {
  const [, appDispatch] = useAppContext();
  useEffect(() => {
    appDispatch({
      type: APP_ACTIONS.LOGGED_COMPANY,
      payload: loggedUser
    });
  }, []);

  return (
    <>
      <PostListController />
      <Divider variant="middle" style={{ marginTop: 40 }} />
    </>
  );
};

IndexPage.getInitialProps = async (context: MyContext) => {
  const { loggedUser } = await redirectAuth(context);
  return { loggedUser };
};

IndexPage.getLayout = getLayout;

export default withApollo(IndexPage);
