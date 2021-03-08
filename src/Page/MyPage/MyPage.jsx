import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainMenu from "../../Component/MainMenu/MainMenu";
import IntroText from "../../Component/IntroText/IntroText";
import styles from "./MyPage.module.scss";
import { SpiralSpinner } from "react-spinners-kit";
import ChangeTitle from "../../Component/Test/ChangeTitle";

function MyPage() {
  return (
    <div>
      <MainMenu />
      <IntroText />
      <ChangeTitle />
    </div>
  );
}

export default MyPage;
