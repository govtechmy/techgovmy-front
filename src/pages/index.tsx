import { withi18n } from "@/lib/decorator";
import { Page } from "@/lib/types";
import { GetStaticProps } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Image from "next/image";
import { useTranslation } from "@/lib/hooks/useTranslation";
import Typewriter from "typewriter-effect";
import Metadata from "@/components/Metadata";

const Home: Page = () => {
  const { t } = useTranslation(["home"]);
  return (
    <>
      <Metadata title={t("common:site.name")} />
      <Hero
        title={
          <div>
            <h1 className="text-center text-[42px]">{t("hero.title")}</h1>
            <Typewriter
              component={"h1"}
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 2,
              }}
              onInit={typewriter => {
                typewriter
                  .typeString(t("hero.typewriter", { context: 1 }))
                  .pauseFor(1000)
                  .deleteAll(10)
                  .typeString(t("hero.typewriter", { context: 2 }))
                  .pauseFor(1000)
                  .deleteAll(10)
                  .typeString(t("hero.typewriter", { context: 3 }))
                  .pauseFor(1000)
                  .start();
              }}
            />
          </div>
        }
        description={t("hero.description")}
      />
      <Container>
        <Section className="max-w-[800px] mx-auto py-16">
          <div className="gap-16 pb-5 flex flex-col">
            {/* Title */}
            <div className="flex flex-col gap-6 px-0 md:px-[50px]">
              <p className="text-orange dark:text-orange font-semibold uppercase">
                {t("section.about_us")}
              </p>
              <h2 className="font-semibold">{t("common:site.name")}</h2>
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
              <p className="text-sm text-dim text-center">{t("section.image_caption")}</p>
            </div>
            {/* Our story */}
            <div className="flex flex-col gap-3 px-0 md:px-[50px]">
              <h3 className="font-semibold text-black">{t("section.story.title")}</h3>
              <p className="text-outline-hover-dark dark:text-dim">
                {t("section.story.paragraph", { context: 1 })}
              </p>
              <p className="text-outline-hover-dark dark:text-dim">
                {t("section.story.paragraph", { context: 2 })}
              </p>
            </div>
            {/* Our vision */}
            <div className="flex flex-col gap-3 px-0 md:px-[50px]">
              <h3 className="font-semibold text-black">{t("section.vision.title")}</h3>
              <ul className="text-outline-hover-dark dark:text-dim">
                {t("section.vision.paragraph", { context: 1 })}
              </ul>
              <li className="text-outline-hover-dark dark:text-dim">
                {t("section.vision.list_item", { context: 1 })}
              </li>
              <li className="text-outline-hover-dark dark:text-dim">
                {" "}
                {t("section.vision.list_item", { context: 2 })}
              </li>
              <li className="text-outline-hover-dark dark:text-dim">
                {" "}
                {t("section.vision.list_item", { context: 3 })}
              </li>
              <p className="text-outline-hover-dark dark:text-dim">
                {t("section.vision.paragraph", { context: 2 })}
              </p>
            </div>
            {/* Our mission */}
            <div className="flex flex-col gap-3 px-0 md:px-[50px]">
              <h3 className="font-semibold text-black">{t("section.mission.title")}</h3>
              <ul className="text-outline-hover-dark dark:text-dim">
                {t("section.mission.paragraph", { context: 1 })}
              </ul>
              <li className="text-outline-hover-dark dark:text-dim">
                {t("section.mission.list_item", { context: 1 })}
              </li>
              <li className="text-outline-hover-dark dark:text-dim">
                {" "}
                {t("section.mission.list_item", { context: 2 })}
              </li>
              <li className="text-outline-hover-dark dark:text-dim">
                {" "}
                {t("section.mission.list_item", { context: 3 })}
              </li>
              <p className="text-outline-hover-dark dark:text-dim">
                {t("section.mission.paragraph", { context: 2 })}
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
