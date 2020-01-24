import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import React from "react";

interface Props {
  label: string;
  deleteData?: (label: string) => void;
  size?: string;
}

export function ChipsComponent(props: Props) {
  const { label, deleteData, size = "medium" } = props;

  const handleDelete = () => {
    if (deleteData) {
      deleteData(label);
    }
  };

  return (
    <Box component="fieldset" mb={1} borderColor="transparent">
      {deleteData && (
        <Chip
          label={label}
          onDelete={handleDelete}
          color="secondary"
          style={{ marginLeft: -10 }}
          size={size as any}
        />
      )}
      {!deleteData && (
        <Chip
          label={label}
          color="secondary"
          style={{ marginLeft: -10 }}
          size={size as any}
        />
      )}
    </Box>
  );
}
