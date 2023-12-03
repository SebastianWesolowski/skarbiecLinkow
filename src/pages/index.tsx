import React from "react";
import { parseContent } from "@/utils/Parsers/parseContent";
import content from "@assets/content/content";
import { Container } from "@atoms";
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
          <Container>
            <CategorySection contentObject={contentObject} />
            <ContentSection contentObject={contentObject} />
          </Container>
        </main>
      </BasicLayout>
    </>
  );
};

export default Homepage;
