import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import deburr from "lodash.deburr";
import React, { useCallback, useEffect } from "react";
import Autosuggest, { SuggestionSelectedEventData } from "react-autosuggest";
import { ChipsOptionType, NEW } from "../../../../common";

const customDebounce = (fn: any, delay: any) => {
  let timeoutId: any;
  return function(...args: any) {
    clearInterval(timeoutId);
    //@ts-ignore
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
};

function renderInputComponent(inputProps: any) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <Input
      fullWidth
      inputRef={(node: any) => {
        ref(node);
        inputRef(node);
      }}
      {...other}
    />
  );
}

function renderParts(
  parts: {
    text: string;
    highlight: boolean;
  }[]
) {
  return parts.map((part) => (
    <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 400 }}>
      {part.text}
    </span>
  ));
}

function renderSuggestion(
  suggestion: ChipsOptionType,
  { query, isHighlighted }: Autosuggest.RenderSuggestionParams
) {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);
  return (
    <MenuItem selected={isHighlighted} component="div" key={suggestion.name}>
      <div>
        {suggestion.id === NEW ? (
          <span>
            [+] Add new Tag: <strong>{suggestion.name}</strong>
          </span>
        ) : (
          renderParts(parts)
        )}
      </div>
    </MenuItem>
  );
}

function getSuggestionValue(suggestion: any) {
  return suggestion.name;
}

interface Props {
  updateSelectedValues: (value: ChipsOptionType) => void;
  searchData: any;
  callTagSearch: (name: string) => any;
}

function AutoSearchInputView(props: Props) {
  const classes = useStyles();
  const [state, setState] = React.useState("");
  const [suggestions, setSuggestions] = React.useState<ChipsOptionType[]>([]);

  const { callTagSearch, searchData, updateSelectedValues } = props;

  const debounceCallback = useCallback(
    customDebounce((value: any) => {
      callTagSearch(value);
    }, 400),
    []
  );

  const handleSuggestionsFetchRequested = ({ value }: any) => {
    const searchTerm = deburr(value)
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "");
    debounceCallback(searchTerm);
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = (
    _: React.ChangeEvent<{}>,
    { newValue }: Autosuggest.ChangeEvent
  ) => {
    const searchTerm = deburr(newValue);
    setState(searchTerm);
  };

  const onSuggestionSelected = (
    _: React.ChangeEvent<{}>,
    data: SuggestionSelectedEventData<ChipsOptionType>
  ) => {
    setState("");
    updateSelectedValues(data.suggestion);
  };

  useEffect(() => {
    if (searchData && searchData.length !== 0) {
      setSuggestions(searchData);
    } else {
      setSuggestions([{ id: NEW, name: state }]);
    }
  }, [searchData]);

  const autosuggestProps = {
    renderInputComponent,
    suggestions: suggestions as any,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
    onSuggestionSelected
  };

  return (
    <Autosuggest
      {...autosuggestProps}
      inputProps={{
        id: "react-autosuggest-simple",
        placeholder: "Search Tags",
        value: state,
        onChange: handleChange
      }}
      theme={{
        container: classes.container,
        suggestionsContainerOpen: classes.suggestionsContainerOpen,
        suggestionsList: classes.suggestionsList,
        suggestion: classes.suggestion
      }}
      renderSuggestionsContainer={(options: any) => (
        <Paper {...options.containerProps} square>
          {options.children}
        </Paper>
      )}
    />
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 250,
      flexGrow: 1
    },
    container: {
      position: "relative"
    },
    suggestionsContainerOpen: {
      position: "absolute",
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0
    },
    suggestion: {
      display: "block"
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: "none"
    }
  })
);

export default React.memo(AutoSearchInputView);
