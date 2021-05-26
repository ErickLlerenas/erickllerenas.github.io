import React from 'react';
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function DarkMode({checked,setChecked}){

    return (
        <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={() => setChecked(!checked)}
            color="primary"
          />
        }
        label="Dark mode"
      />
    );
}