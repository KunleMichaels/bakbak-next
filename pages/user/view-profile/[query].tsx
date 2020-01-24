import { NextSeo } from "next-seo";
import { ME } from "../../../common";
import { Error, User } from "../../../controller";
import { withApollo } from "../../../lib/apollo";
import { checkUserLoggedIn } from "../../../lib/checkUserLoggedIn";
import { redirectAuth } from "../../../lib/redirectAuth";
import { setUserInContext } from "../../../lib/setAuthInContext";
import { getLayout } from "../../../web/modules/layout/Layout";
import { ViewProfile } from "../../../web/modules/user/viewProfile/ViewProfile";
import { viewProfileController } from "../../../web/modules/user/viewProfile/ViewProfileController";
import { MyContext } from "../../../web/types/MyContext";

interface IProps {
  user: User | null;
  errors: Error[] | null;
  query: string;
}

const ViewProfilePage = (props: MyContext & IProps) => {
  const { loggedUser, query, user, errors } = props;
  setUserInContext(loggedUser);

  //TODO: make sure that we are showing the profile based on whether it is ME or another user
  const profile = () => {
    if (errors) {
      return <div>{errors[0].message}</div>;
    } else if (user) {
      return <ViewProfile user={user} loggedUser={loggedUser} />;
    } else if (loggedUser) {
      return <ViewProfile user={loggedUser} loggedUser={loggedUser} />;
    } else {
      return "Something went wrong";
    }
  };
  let userName = "";
  if (query === ME) {
    userName;
  }
  return (
    <>
      <NextSeo
        title={`Switch Title: View Profile ${userName}`}
        description="Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        canonical="https://www.switchtitle.com/user/login"
        openGraph={{
          url: `https://www.switchtitle.com/view-profile/${userName}`,
          title: `Switch Title: View Profile ${userName}`,
          description:
            "Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        }}
      />
      <div style={{ marginBottom: 125 }}>{profile()}</div>
    </>
  );
};
ViewProfilePage.getLayout = getLayout;

ViewProfilePage.getInitialProps = async (context: MyContext) => {
  const {
    query: { query }
  } = context;

  if (query === ME) {
    const { loggedUser } = await redirectAuth(context);
    return { loggedUser, query, user: null, errors: null };
  } else {
    const { user, errors } = await viewProfileController(
      context.apolloClient,
      query as string
    );
    const { loggedUser } = await checkUserLoggedIn(context.apolloClient);
    return { loggedUser, query, user, errors };
  }
};

export default withApollo(ViewProfilePage);
