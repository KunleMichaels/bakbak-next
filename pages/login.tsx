import { NextSeo } from "next-seo";
import { withApollo } from "../lib/apollo";
import { redirectAuth } from "../lib/redirectAuth";
import { setUserInContext } from "../lib/setAuthInContext";
import { getLayout } from "../web/modules/layout/Layout";
import { MyContext } from "../web/types/MyContext";
import { LoginUserController } from "../web/modules/user/login/LoginUserController";

const LoginPage = ({ loggedUser }: MyContext) => {
  setUserInContext(loggedUser);

  return (
    <>
      <NextSeo
        title="Switch Title: Login"
        description="Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        canonical="https://www.switchtitle.com/login"
        openGraph={{
          url: "https://www.switchtitle.com/login",
          title: "Switch Title: Login",
          description:
            "Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        }}
      />
      <LoginUserController />
    </>
  );
};

LoginPage.getInitialProps = async (context: MyContext) => {
  const { loggedUser } = await redirectAuth(context);
  return { loggedUser };
};

LoginPage.getLayout = getLayout;

export default withApollo(LoginPage);
