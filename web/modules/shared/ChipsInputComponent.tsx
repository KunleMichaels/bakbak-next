import Chip from "@material-ui/core/Chip";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { OptionType } from "../../../common";

interface Props {
  options: OptionType[] | undefined;
  updateOptions: (options: string[]) => void;
  selectedOptions: string[] | null;
  optionDesignType: string;
  multiSelect: boolean;
}

export const ChipsInputComponent = (props: Props) => {
  const classes = useStyles();

  const updateOptions = (option: string) => {
    let updatedOptions = props.selectedOptions;
    if (updatedOptions === null) {
      updatedOptions = [option];
    } else {
      const foundIndex = updatedOptions.findIndex(
        (stateOption: string) => stateOption === option
      );

      if (
        option === "All" ||
        updatedOptions.findIndex(stateOption => stateOption === "All") !== -1
      ) {
        updatedOptions = [option];
      }
      // Option value exists and if there is more than 1 selected element -> remove that value from the list
      else if (foundIndex !== -1 && updatedOptions.length > 1) {
        // updatedOptions.slice(foundIndex, 1);
        updatedOptions = [
          ...updatedOptions.slice(0, foundIndex),
          ...updatedOptions.slice(foundIndex + 1)
        ];
      } else {
        // Option name does not exist. Just add the name and value into the list.
        if (props.multiSelect) {
          updatedOptions = [...updatedOptions, option];
        }
        // Option name does not exist. Replace the value with whole list.
        else {
          updatedOptions = [option];
        }
      }
    }
    props.updateOptions([...updatedOptions]);
  };

  const { options, optionDesignType } = props;
  return (
    <div className={classes.root}>
      {options &&
        options.map((option: OptionType) => {
          const { selectedOptions } = props;
          let checked = false;
          if (
            selectedOptions &&
            selectedOptions.find(
              (stateOption: string) => stateOption === option.value
            )
          ) {
            checked = true;
          }

          if (optionDesignType === "tag") {
            return (
              <Chip
                key={option.name}
                label={option.name}
                clickable
                className={checked ? classes.chipSelected : classes.chip}
                color={checked ? "primary" : "secondary"}
                variant="outlined"
                onClick={() => updateOptions(option.value)}
              />
            );
          } else {
            return (
              <Chip
                key={option.name}
                label={option.name}
                clickable
                className={checked ? classes.chipSelected : classes.chip}
                color={checked ? "primary" : "secondary"}
                variant="outlined"
                onClick={() => updateOptions(option.value)}
              />
            );
          }
        })}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    marginLeft: theme.spacing(1) / 2,
    marginRight: theme.spacing(1) / 2,
    marginBottom: theme.spacing(1) / 2,

    fontSize: 12,
    borderRadius: 5,
    height: 22
  },
  chipSelected: {
    marginLeft: theme.spacing(1) / 2,
    marginRight: theme.spacing(1) / 2,
    marginBottom: theme.spacing(1) / 2,
    fontSize: 12,
    borderRadius: 5,
    height: 22
  }
}));
