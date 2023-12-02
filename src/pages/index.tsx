import React from "react";
import { parseContent } from "@/utils/Parsers/parseContent";
import content from "@assets/content/content";
import { Seo } from "@molecules";
import { BasicLayout } from "@organisms";
import { CategorySection } from "@organisms/CategorySection";
import { ContentSection } from "@organisms/ContentSection";

const Homepage = () => {
  const contentObject: any = parseContent(content);
  return (
    <>
      <BasicLayout>
        <Seo />
        <main>
          <CategorySection contentObject={contentObject} />
          <ContentSection contentObject={contentObject} />
        </main>
      </BasicLayout>
    </>
  );
};

export default Homepage;
