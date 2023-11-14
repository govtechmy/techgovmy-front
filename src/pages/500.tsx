import { GetStaticProps, InferGetStaticPropsType } from "next";
import { withi18n } from "@/lib/decorator";
import { Page } from "@/lib/types";
import Container from "@/components/Container";
import { useTranslation } from "@/lib/hooks/useTranslation";
import Metadata from "@/components/Metadata";
import ErrorStatus from "@/components/ErrorStatus";

const Error500: Page = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common");
  return (
    <>
      <Metadata title={t("common:error.500.title")} keywords={""} />
      <Container className="min-h-[76vh] pt-7 text-black">
        <ErrorStatus
          title={t("common:error.500.title")}
          description={t("common:error.500.description")}
          code={500}
          reason={t("common:error.500.reason")}
        />
      </Container>
    </>
  );
};

export default Error500;

export const getStaticProps: GetStaticProps = withi18n(null, async () => {
  return {
    props: {
      meta: {
        id: "error-500",
        type: "misc",
        category: null,
        agency: null,
      },
    },
  };
});
