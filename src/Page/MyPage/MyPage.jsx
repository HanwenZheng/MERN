import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainMenu from "../../Component/MainMenu/MainMenu";
import { SpiralSpinner } from "react-spinners-kit";
import IntroText from "../../Component/IntroText/IntroText";
import styles from "./MyPage.module.scss";

function MyPage() {
  return (
    <div>
      <MainMenu />
      <IntroText />
    </div>
  );
}

export default MyPage;
