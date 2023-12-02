import React from "react";
import { Seo } from "@molecules";
import { BasicLayout } from "@organisms";

const Homepage = () => {
  return (
    <>
      <BasicLayout>
        <Seo />
        <main>content</main>
      </BasicLayout>
    </>
  );
};

export default Homepage;
