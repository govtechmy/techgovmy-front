import { withi18n } from "@/lib/decorator";
import { Page } from "@/lib/types";
import { GetStaticProps } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

const OurWork: Page = () => {
  return (
    <>
      <Hero title={"Our Work"} description="List of projects GovTech team have done in the past." />
      <Container>
        <p>our work</p>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = withi18n(["our-work"], async () => {
  try {
    return {
      notFound: false,
      props: {
        meta: {
          id: "our-work",
          type: "misc",
        },
      },
    };
  } catch (error: any) {
    console.error(error.message);
    return { notFound: true };
  }
});

export default OurWork;
