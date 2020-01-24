import { Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ME, ROUTE_NAMES } from "../../../common";
import { useConfirmEmailMutation } from "../../../controller";
import { withApollo } from "../../../lib/apollo";
import redirect from "../../../lib/redirect";
import { getLayout } from "../../../web/modules/layout/Layout";

const confirmEmail = () => {
  const router = useRouter();
  const token = router.query.token as string;
  const [confirmEmailMutation] = useConfirmEmailMutation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (token) {
      const runMutation = async () => {
        const { data } = await confirmEmailMutation({ variables: { token } });
        if (data && data.confirmEmail) {
          const { error } = data.confirmEmail;
          if (error) {
            setMessage(error[0].message);
          } else {
            redirect(null, `${ROUTE_NAMES.USER_VIEW_PROFILE}/${ME}`);
          }
        }
      };
      runMutation();
    }
  }, []);
  return (
    <>
      <NextSeo
        title="Switch Title: Confirm Email"
        description="Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        canonical="https://www.switchtitle.com/user/login"
        openGraph={{
          url: "https://www.switchtitle.com/confirm-email",
          title: "Switch Title: Confirm email",
          description:
            "Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        }}
      />
      <Typography component="h4" variant="h6" align="center">
        {message}
      </Typography>
    </>
  );
};

confirmEmail.getLayout = getLayout;

export default withApollo(confirmEmail);
