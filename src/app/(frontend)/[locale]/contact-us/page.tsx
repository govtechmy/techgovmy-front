import React from "react";
import { getTranslations } from "next-intl/server";
import { PhoneIcon, EmailIcon, DirectionIcon } from "@govtechmy/myds-react/icon";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function ContactPage({ params }: ServerPageProps) {
  const { locale } = await params;
  const t = await getTranslations("Contact");
  const payload = await getPayload({ config });
  const contact = await payload.findGlobal({
    slug: "site-info",
    locale: locale as "en-GB" | "ms-MY",
    depth: 3,
  });

  return (
    <div className="w-full bg-gradient-to-b from-white to-[#EFF6FF]">
      <div className="mx-auto w-full max-w-screen-xl justify-center space-y-8 border-otl-divider px-4 pt-4 md:space-y-16 md:px-[5.25rem] md:pt-16 lg:px-[6.8125rem] lg:py-[5.25rem]">
        <section className="mx-auto flex flex-col justify-between gap-16 rounded-xl border border-otl-divider bg-white lg:h-[32.75rem] lg:w-[70.375rem] lg:flex-row lg:gap-0">
          <div className="flex w-full flex-col items-start justify-start gap-12 md:flex-row lg:h-[23rem] lg:w-fit lg:flex-col lg:gap-0">
            <div className="w-full px-4 pt-4 md:px-8 md:pt-8">
              <h1 className="pb-8 text-heading-md font-semibold text-txt-black-900">
                {t("contact_us")}
              </h1>
              <div className="flex flex-col gap-12 md:flex-row lg:flex-col lg:gap-0">
                <div className="flex-1">
                  <h1 className="text-body-xl font-semibold text-txt-black-900">
                    {t("office_name")}
                  </h1>
                  <p className="pt-2 text-body-md font-light text-txt-black-700">
                    {contact.address &&
                      contact.address.split(",").map((line: string, index: number) => (
                        <React.Fragment key={index}>
                          {line.trim()}
                          {index < contact.address!.split(",").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                  </p>
                  <div className="mt-4.5 flex gap-4 pt-3 text-body-md font-normal text-primary-500">
                    <a
                      href={contact.google_maps_url!}
                      target="_blank"
                      className="flex w-auto items-center gap-2"
                    >
                      <DirectionIcon className="size-8 rounded-full bg-primary-50 p-1.5 text-primary-500" />
                      Google Maps
                    </a>
                    <a
                      href={contact.waze_url!}
                      target="_blank"
                      className="flex w-auto items-center gap-2"
                    >
                      <DirectionIcon className="size-8 rounded-full bg-primary-50 p-1.5 text-primary-500" />
                      Waze
                    </a>
                  </div>
                </div>
                <div className="h-[7.75rem] flex-1 lg:pt-12">
                  <h1 className="text-body-xl font-semibold text-txt-black-900">
                    {t("inquiries_feedback")}
                  </h1>
                  <div className="flex flex-col gap-4 pt-4 text-body-md">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex w-auto items-center gap-2 text-primary-500"
                    >
                      <EmailIcon className="size-8 rounded-full bg-primary-50 p-1.5" />
                      {contact.email}
                    </a>
                    <div className="flex w-auto items-center gap-2 text-primary-500">
                      <PhoneIcon className="size-8 rounded-full bg-primary-50 p-1.5" />
                      {contact.phone}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <iframe
            className="h-[21.875rem] w-full rounded-xl border border-gray-200 md:h-[25rem] lg:h-[32.75rem] lg:w-[41.25rem]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={contact.google_embed_url || ""}
          />
        </section>
        <div />
      </div>
    </div>
  );
}
