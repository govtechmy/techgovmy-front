import { withi18n } from "@/lib/decorator";
import { Page } from "@/lib/types";
import { GetStaticProps } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

const JoinUs: Page = () => {
  return (
    <>
      <Hero
        title={"Join the GovTech Nucleus Unit!"}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      />
      <Container>
        <p>Join us</p>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = withi18n(["join-us"], async () => {
  try {
    return {
      notFound: false,
      props: {
        meta: {
          id: "join-us",
          type: "misc",
        },
      },
    };
  } catch (error: any) {
    console.error(error.message);
    return { notFound: true };
  }
});

export default JoinUs;
