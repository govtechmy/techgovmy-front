import { withi18n } from "@/lib/decorator";
import { Page } from "@/lib/types";
import { GetStaticProps } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

const Home: Page = () => {
  return (
    <>
      <Hero
        title={
          <h1 className="text-center text-[42px]">
            We build digital products to improve
            <br />
            <span className="text-orange">the rakyat's convenience</span>
          </h1>
        }
        description="We want to provide a place in the public sector that Malaysia’s best and brightest can call home"
      />
      <Container>
        <p>hello</p>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = withi18n(["home"], async () => {
  try {
    return {
      notFound: false,
      props: {
        meta: {
          id: "home",
          type: "misc",
        },
      },
    };
  } catch (error: any) {
    console.error(error.message);
    return { notFound: true };
  }
});

export default Home;
