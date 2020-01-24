import { NextSeo } from "next-seo";
import { ROUTE_NAMES } from "../../common";
import {
  PersonalDetailsInput,
  useAddPersonalDetailsMutation
} from "../../controller";
import { withApollo } from "../../lib/apollo";
import redirect from "../../lib/redirect";
import { redirectAuth } from "../../lib/redirectAuth";
import { setUserInContext } from "../../lib/setAuthInContext";
import { getLayout } from "../../web/modules/layout/Layout";
import AddPersonalDetailsView from "../../web/modules/user/profile/addPersonalDetails/AddPersonalDetailsView";
import { MyContext } from "../../web/types/MyContext";

const PersonalDetailsPage = (props: MyContext) => {
  setUserInContext(props.loggedUser);
  const [addPersonalDetailsMutation] = useAddPersonalDetailsMutation();

  const onComplete = () => {
    redirect(null, ROUTE_NAMES.USER_ADD_SKILLS_AND_EXPERIENCE);
  };

  const onSubmit = async (input: PersonalDetailsInput) => {
    const { data } = await addPersonalDetailsMutation({ variables: { input } });
    if (data && data.addPersonalDetails) {
      return data.addPersonalDetails;
    } else {
      return null;
    }
  };

  return (
    <>
      <NextSeo
        title="Switch Title: Add Personal Details"
        description="Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        canonical="https://www.switchtitle.com/user/add-personal-details"
        openGraph={{
          url: "https://www.switchtitle.com/user/add-personal-details",
          title: "Switch Title: Add Personal Details",
          description:
            "Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        }}
      />
      <AddPersonalDetailsView
        submit={onSubmit}
        onComplete={onComplete}
        formValues={{
          fullName: "",
          linkedinUrl: "",
          picture: undefined
        }}
      />
    </>
  );
};

PersonalDetailsPage.getInitialProps = async (context: MyContext) => {
  const { loggedUser } = await redirectAuth(context);
  return { loggedUser };
};

PersonalDetailsPage.getLayout = getLayout;

export default withApollo(PersonalDetailsPage);
