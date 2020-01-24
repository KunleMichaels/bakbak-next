import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { MdPerson, MdBusiness } from "react-icons/md";

import { REGISTER_OPTION } from "../../constants";
import { APP_ACTIONS, useAppContext } from "../../context/AppContext";

const useStyles = makeStyles((theme) => ({
  toggleContainer: {
    margin: theme.spacing(2, 0)
  },
  toggleButton: {
    width: theme.spacing(14)
  },
  iconStyle: {
    marginLeft: theme.spacing(1)
  }
}));

interface Props {
  title: string;
}

export function AuthButtonOptions({ title }: Props) {
  const [appContext, appDispatch] = useAppContext();

  const handleUserClick = (_: React.MouseEvent<HTMLElement>) => {
    if (appContext.registerOption !== REGISTER_OPTION.USER) {
      // setAlignment(REGISTER_OPTION.USER);
      appDispatch({
        type: APP_ACTIONS.REGISTER_OPTION,
        payload: REGISTER_OPTION.USER
      });
    }
  };
  const handleCompanyClick = (_: React.MouseEvent<HTMLElement>) => {
    if (appContext.registerOption !== REGISTER_OPTION.COMPANY) {
      // setAlignment(REGISTER_OPTION.COMPANY);
      appDispatch({
        type: APP_ACTIONS.REGISTER_OPTION,
        payload: REGISTER_OPTION.COMPANY
      });
    }
  };

  const classes = useStyles({});
  const primaryToolTipLabel = `${title} as User`;
  const SecondaryToolTipLabel = `${title} as Company`;

  return (
    <div className={classes.toggleContainer}>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Tooltip title={primaryToolTipLabel} aria-label="user" arrow>
          <Button
            onClick={handleUserClick}
            color={
              appContext.registerOption === REGISTER_OPTION.USER
                ? "primary"
                : "default"
            }
            variant="contained"
            className={classes.toggleButton}
          >
            USER <MdPerson className={classes.iconStyle} />
          </Button>
        </Tooltip>
        <Tooltip title={SecondaryToolTipLabel} aria-label="company" arrow>
          <Button
            onClick={handleCompanyClick}
            variant="contained"
            color={
              appContext.registerOption === REGISTER_OPTION.COMPANY
                ? "primary"
                : "default"
            }
            className={classes.toggleButton}
          >
            COMPANY <MdBusiness className={classes.iconStyle} />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}
