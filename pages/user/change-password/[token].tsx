import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";
import { ME, ROUTE_NAMES } from "../../../common";
import { useChangePasswordMutation } from "../../../controller";
import { withApollo } from "../../../lib/apollo";
import redirect from "../../../lib/redirect";
import { getLayout } from "../../../web/modules/layout/Layout";
import { ChangePasswordView } from "../../../web/modules/user/ChangePassword";

const ChangePasswordPage = () => {
  const router = useRouter();

  const token = router.query.token as string;
  const [changePasswordMutation] = useChangePasswordMutation();

  const onComplete = () => {
    redirect(null, `${ROUTE_NAMES.USER_VIEW_PROFILE}/${ME}`);
  };

  const onSubmit = async (password: string) => {
    const { data } = await changePasswordMutation({
      variables: { input: { token, password } }
    });
    if (data && data.changePassword) {
      return data.changePassword;
    } else {
      return false;
    }
  };

  return (
    <>
      <NextSeo
        title="Switch Title: Change Password"
        description="Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        canonical="https://www.switchtitle.com/change-password"
        openGraph={{
          url: "https://www.switchtitle.com/user/change-password",
          title: "Switch Title: Change Password",
          description:
            "Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        }}
      />
      <ChangePasswordView submit={onSubmit} onComplete={onComplete} />
    </>
  );
};

ChangePasswordPage.getLayout = getLayout;

export default withApollo(ChangePasswordPage);
