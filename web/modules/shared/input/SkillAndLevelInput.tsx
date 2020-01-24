import { FormControl, FormHelperText } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { FieldProps } from "formik";
import React, { useEffect } from "react";
import { ChipsOptionType } from "../../../../common";
import { SkillInput } from "../../../../controller";
import RatingInput from "./RatingInput";
import SkillChipsInput from "../SkillChipsInput";

interface Props {
  initValue: SkillInput[] | [];
  oldSkill: boolean;
}

export default function SkillAndLevelInput(props: FieldProps<any> & Props) {
  const {
    field: { name },
    form: { setFieldValue, errors, touched },
    initValue,
    oldSkill
  } = props;

  const [skillSet, setSkillSet] = React.useState<SkillInput[]>([]);
  useEffect(() => {
    setFieldValue(name, initValue);
    setSkillSet(initValue);
  }, [initValue]);

  const errorMessage = touched[name] && errors[name];

  const updateSelectedValues = (skill: ChipsOptionType) => {
    setLevel(skill.id, skill.name, 1);
  };

  // const updateSelectedValuesCallback = useCallback((skill: string) => {
  //   setLevel(skill, 1);
  // },[]);

  const setLevel = (skillId: string, skillName: string, level: number) => {
    const index = skillSet.findIndex((s) => s.skillName === skillName);
    let newSkillSet = [...skillSet];
    const skill = {
      skillId,
      skillName,
      level,
      oldSkill
    };
    if (index === -1) {
      newSkillSet.push(skill);
      setFieldValue(name, newSkillSet);
    } else {
      newSkillSet[index] = skill;
      setFieldValue(name, newSkillSet);
    }
    setSkillSet(newSkillSet);
  };
  const deleteSkill = (skill: string) => {
    const index = skillSet.findIndex((s) => s.skillName === skill);
    if (index !== -1) {
      const newSkillSet = [
        ...skillSet.slice(0, index),
        ...skillSet.slice(index + 1)
      ];
      setSkillSet(newSkillSet);
      setFieldValue(name, newSkillSet);
    }
  };
  const renderRatings = () => {
    return skillSet.map((skill) => (
      <RatingInput
        skill={skill}
        setLevel={setLevel}
        deleteSkill={deleteSkill}
        key={skill.skillName}
      />
    ));
  };
  const classes = useStyles();

  return (
    <FormControl
      className={classes.formControl}
      error={Boolean(errorMessage)}
      fullWidth={true}
    >
      <SkillChipsInput updateSelectedValues={updateSelectedValues} />
      <FormHelperText id={`${name}-error-text`}>{errorMessage}</FormHelperText>
      <div style={{ marginTop: 10 }}>{renderRatings()}</div>
    </FormControl>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    marginBottom: theme.spacing(1)
  }
}));
