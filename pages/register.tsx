import { NextSeo } from "next-seo";
import { withApollo } from "../lib/apollo";
import { getLayout } from "../web/modules/layout/Layout";
import { MyContext } from "../web/types/MyContext";
import { RegisterUserController } from "../web/modules/user/register/RegisterUserController";

const LoginPage = ({}: MyContext) => {
  return (
    <>
      <NextSeo
        title="Switch Title: Register"
        description="Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        canonical="https://www.switchtitle.com/register"
        openGraph={{
          url: "https://www.switchtitle.com/register",
          title: "Switch Title: Register",
          description:
            "Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        }}
      />
      <RegisterUserController />>
    </>
  );
};

LoginPage.getLayout = getLayout;

export default withApollo(LoginPage);
