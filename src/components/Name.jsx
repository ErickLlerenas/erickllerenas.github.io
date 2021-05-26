import React from "react";
import Typewriter from "typewriter-effect";

export default function Name() {

  return (
    <div className="typewriter">
        <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("<span class='name'><span style='color:#14A2B8;'>I</span>'m <span style='color:#14A2B8;'>E</span>rick <span style='color:#14A2B8;'>L</span>lerenas </span>").start();
      }}
      options={{
          delay:50,
      }}
    />
    </div>
  );
}
