import { withi18n } from "@/lib/decorator";
import { Page } from "@/lib/types";
import { GetStaticProps } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

const ContactUs: Page = () => {
  return (
    <>
      <Hero
        title={
          <h1 className="text-center text-[42px]">
            We build digital products to improve
            <br />
            <span className="text-orange">the rakyat&apos;s convenience</span>
          </h1>
        }
        description="We want to provide a place in the public sector that Malaysia’s best and brightest can call home"
      />
      <Container>
        <div className="w-full h-96 flex items-center justify-center">Coming soon...</div>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = withi18n(["contact-us"], async () => {
  try {
    return {
      notFound: false,
      props: {
        meta: {
          id: "contact-us",
          type: "misc",
        },
      },
    };
  } catch (error: any) {
    console.error(error.message);
    return { notFound: true };
  }
});

export default ContactUs;
