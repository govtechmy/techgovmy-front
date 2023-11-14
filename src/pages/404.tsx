import { GetStaticProps, InferGetStaticPropsType } from "next";
import { withi18n } from "@/lib/decorator";
import { Page } from "@/lib/types";
import Container from "@/components/Container";
import { useTranslation } from "@/lib/hooks/useTranslation";
import Metadata from "@/components/Metadata";
import ErrorStatus from "@/components/ErrorStatus";

const Error404: Page = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Metadata title={t("error.404.title") as string} keywords={""} />

      <Container className="min-h-[76vh] pt-7 text-black">
        <ErrorStatus
          title={t("error.404.title") as string}
          description={<>{`${t("error.404.description")} ${t("error.404.legacy")}`}</>}
          code={404}
          reason={t("error.404.reason")}
        />
      </Container>
    </>
  );
};

export default Error404;

export const getStaticProps: GetStaticProps = withi18n(null, async () => {
  return {
    props: {
      meta: {
        id: "error-400",
        type: "misc",
        category: null,
        agency: null,
      },
    },
  };
});
