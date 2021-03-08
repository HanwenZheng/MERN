import React, { useEffect, useState } from "react";
import Cool from "../../helper/CoolEmoji";

function ChangeTitle() {
  const [originalTitle, setOriginalTitle] = useState();

  const handleTabChange = () => {
    if (document.hidden) {
      document.title = `Come back~~ ${Cool()}`;
    } else {
      document.title = originalTitle;
    }
  };

  useEffect(() => {
    if (!originalTitle) {
      setOriginalTitle(document.title);
    }

    window.addEventListener("visibilitychange", handleTabChange);
    return () => window.removeEventListener("visibilitychange", handleTabChange);
  });

  return <div />;
}

export default ChangeTitle;
