import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import { SkillInput } from "../../../../controller";

const labels: any = {
  1: "Beginner",
  2: "Intermediate",
  3: "Expert"
};
const useStyles = makeStyles({
  rating1: {
    marginLeft: 15,
    display: "flex",
    alignItems: "center"
  }
});

interface Props {
  skill: SkillInput;
  deleteSkill: (skill: string) => void;
  setLevel?: (skillId: string, skillName: string, level: number) => void;
}

export default function RatingInput(props: Props) {
  const {
    skill: { level, skillName, skillId }
  } = props;

  const [value, setValue] = React.useState(level);
  const [hover, setHover] = React.useState(level);
  const classes = useStyles({});
  const handleDelete = () => {
    props.deleteSkill(skillName);
  };
  return (
    <Box component="fieldset" mb={1} borderColor="transparent">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Chip
          label={skillName}
          onDelete={handleDelete}
          color="primary"
          style={{ marginLeft: -10 }}
        />
        <div className={classes.rating1}>
          <Rating
            name={skillName}
            value={value}
            precision={1}
            max={3}
            onChangeActive={(_: any, newHover: any) => {
              setHover(newHover);
            }}
            onChange={(_: any, newValue: any) => {
              // setLevel can be empty - just to display the skills on the SkillsAndExpereince View page
              if (props.setLevel) {
                setValue(newValue);
                props.setLevel(skillId, skillName, newValue);
              }
            }}
          />
          <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
        </div>
      </div>
    </Box>
  );
}
