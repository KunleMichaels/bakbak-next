import { NextSeo } from "next-seo";
import React from "react";
import { ME, ROUTE_NAMES } from "../../common";
import { SkillInput, useAddSkillMutation } from "../../controller";
import { withApollo } from "../../lib/apollo";
import redirect from "../../lib/redirect";
import { redirectAuth } from "../../lib/redirectAuth";
import { setUserInContext } from "../../lib/setAuthInContext";
import { getLayout } from "../../web/modules/layout/Layout";
import AddSkillsAndExperienceView from "../../web/modules/user/profile/addSkillsAndExperience/AddSkillsAndExperienceView";
import { MyContext } from "../../web/types/MyContext";

const AddSkillsAndExperiencePage = (props: MyContext) => {
  setUserInContext(props.loggedUser);
  const [addSkill] = useAddSkillMutation();

  const onComplete = () => {
    redirect(null, `${ROUTE_NAMES.USER_VIEW_PROFILE}/${ME}`);
  };
  const onSubmit = async (values: SkillInput[]) => {
    const { data } = await addSkill({
      variables: { input: { skillInput: values } }
    });
    if (data && data.addSkill) {
      return data.addSkill;
    } else {
      return null;
    }
  };

  return (
    <>
      <NextSeo
        title="Switch Title: Add Skills and Experience"
        description="Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        canonical="https://www.switchtitle.com/user/add-skills-and-experience"
        openGraph={{
          url: "https://www.switchtitle.com/user/add-skills-and-experience",
          title: "Switch Title: Add Skills and Experience",
          description:
            "Change your career in 3 easy steps | Build your skills, Gain work experience and Apply to the jobs."
        }}
      />
      <AddSkillsAndExperienceView
        formValues={{
          existingSkills: [],
          newSkills: []
        }}
        submit={onSubmit}
        onComplete={onComplete}
      />
    </>
  );
};
AddSkillsAndExperiencePage.getInitialProps = async (context: MyContext) => {
  const { loggedUser, loggedCompany } = await redirectAuth(context);
  return { loggedUser, loggedCompany };
};

AddSkillsAndExperiencePage.getLayout = getLayout;

export default withApollo(AddSkillsAndExperiencePage);
