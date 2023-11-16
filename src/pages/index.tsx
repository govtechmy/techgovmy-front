import { withi18n } from "@/lib/decorator";
import { Page } from "@/lib/types";
import { GetStaticProps } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Image from "next/image";

const Home: Page = () => {
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
        <Section className="max-w-[800px] mx-auto py-16">
          <div className="gap-16 pb-5 flex flex-col">
            {/* Title */}
            <div className="flex flex-col gap-6 px-[50px]">
              <p className="text-orange dark:text-orange font-semibold uppercase">About Us</p>
              <h2 className="font-semibold">GovTech Solutions</h2>
            </div>
            {/* Image */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-full">
                <Image
                  className=" object-fill"
                  // layout="fill"
                  width={800}
                  height={500}
                  src={"/static/images/unit-govtech.png"}
                  alt="Govtech unit with PM"
                />
              </div>
              <p className="text-sm text-dim text-center">Image caption</p>
            </div>
            {/* Our story */}
            <div className="flex flex-col gap-3 px-[50px]">
              <h3 className="font-semibold text-black">Our story</h3>
              <p className="text-outline-hover-dark dark:text-dim">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p className="text-outline-hover-dark dark:text-dim">
                We are currently set up as a unit under the Prime Minister&apos;s Office, with a
                long-term goal of being incorporated as GovTech Malaysia. Formally, we report
                directly to the Prime Minister. Operationally, we function as the implementation arm
                for MAMPU, who holds the mandate for digital policymaking within government.
              </p>
            </div>
            {/* Our vision */}
            <div className="flex flex-col gap-3 px-[50px]">
              <h3 className="font-semibold text-black">Our vision</h3>
              <ul className="text-outline-hover-dark dark:text-dim">
                Everything we do is dedicated to improving:
              </ul>
              <li className="text-outline-hover-dark dark:text-dim">
                The rakyat&apos;s convenience
              </li>
              <li className="text-outline-hover-dark dark:text-dim">Civil service efficiency</li>
              <li className="text-outline-hover-dark dark:text-dim">Government transparency</li>
              <p className="text-outline-hover-dark dark:text-dim">
                The rest is details. We pursue these goals with a passion, collaborating with
                stakeholders across the public, private, and civil sectors as required.
              </p>
            </div>
            {/* Our mission */}
            <div className="flex flex-col gap-3 px-[50px]">
              <h3 className="font-semibold text-black">Our mission</h3>
              <ul className="text-outline-hover-dark dark:text-dim">
                Everything we do is dedicated to improving:
              </ul>
              <li className="text-outline-hover-dark dark:text-dim">
                The rakyat&apos;s convenience
              </li>
              <li className="text-outline-hover-dark dark:text-dim">Civil service efficiency</li>
              <li className="text-outline-hover-dark dark:text-dim">Government transparency</li>
              <p className="text-outline-hover-dark dark:text-dim">
                The rest is details. We pursue these goals with a passion, collaborating with
                stakeholders across the public, private, and civil sectors as required.
              </p>
            </div>
          </div>
        </Section>
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
