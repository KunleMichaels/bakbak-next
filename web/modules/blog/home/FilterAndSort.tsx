import Typography from "@material-ui/core/Typography";
import { ALL_CATEGORY } from "../../../../common";
import { APP_ACTIONS, useAppContext } from "../../../context/AppContext";
import { ChipsInputComponent } from "../../shared/ChipsInputComponent";

const BlogTags = ["Sports", "Politics", "Business", "Technology"];

const CategoryOptions = BlogTags.map((cat) => {
  return {
    name: cat,
    value: cat
  };
});
CategoryOptions && CategoryOptions.unshift(ALL_CATEGORY);
export const FilterAndSort = () => {
  const [appContext, appDispatch] = useAppContext();
  const updateDateOptions = (options: string[]) => {
    appDispatch({
      type: APP_ACTIONS.BLOG_TAG,
      payload: [...options]
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
      <Typography
        variant="body2"
        style={{ marginRight: 10, fontWeight: "bolder" }}
        color="primary"
      >
        TAGS:
      </Typography>
      <ChipsInputComponent
        options={CategoryOptions}
        selectedOptions={appContext.blogTags}
        optionDesignType="tag"
        updateOptions={updateDateOptions}
        multiSelect={true}
      />
    </div>
  );
};
