import React, { useEffect, useState } from "react";
import moment from "moment";
import Typography from "@material-ui/core/Typography";

export default function Age() {
    const [age, setAge] = useState(moment().year() - 2000);

    useEffect(() => {
        if (moment().month() >= 8) {
          if (moment().date() >= 9) {
            setAge(age + 1);
          }
        }
      }, [age]);

  return (
    <Typography
      
    >
      Hi I am {age.toString()} years old.
    </Typography>
  );
}
