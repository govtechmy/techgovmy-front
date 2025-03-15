import React from "react";
import { getTranslations } from "next-intl/server";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@govtechmy/myds-react/breadcrumb";
import { PhoneIcon, EmailIcon, DirectionIcon } from "@govtechmy/myds-react/icon";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function ContactPage({ params }: ServerPageProps) {
  const { locale } = await params;
  const t = await getTranslations("Contact");
  const payload = await getPayload({ config });
  const contact = await payload.findGlobal({
    slug: "contact",
    locale: locale as "en-GB" | "ms-MY",
    depth: 3,
  });

  // const contact = await fetchGlobal(locale, "contact");
  return (
    <div className="w-full border-otl-divider max-w-screen-xl px-10 md:px-[5.25rem] lg:px-[6.8125rem] mx-auto justify-center space-y-8 md:space-y-16 pt-8 md:pt-10 lg:pt-16 pb-9">
      <div className="space-y-6">
        <Breadcrumb className="pl-0 pt-0 pb-0">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("home")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>{t("contact_us")}</BreadcrumbPage>
        </Breadcrumb>

        <h1 className="text-heading-md font-semibold text-txt-black-900">{t("contact_us")}</h1>
      </div>
      <section className="gap-16 lg:gap-0 flex-col lg:flex-row mx-auto flex justify-between">
        <div className="lg:w-[18.875rem] lg:h-[23rem] flex flex-col md:flex-row lg:flex-col w-full gap-12 lg:gap-0 items-start justify-start">
          <div>
            <h1 className="text-txt-black-900 text-body-xl font-semibold">{t("office_name")}</h1>
            <p className="text-txt-black-700 text-body-md font-light pt-2">
              {contact.address &&
                contact.address.split(",").map((line: string, index: number) => (
                  <React.Fragment key={index}>
                    {line.trim()}
                    {index < contact.address!.split(",").length - 1 && <br />}
                  </React.Fragment>
                ))}
            </p>
            <div className="flex gap-4 text-primary-500 text-body-md font-normal mt-4.5 pt-3">
              <a
                href={contact.google_maps_url!}
                target="_blank"
                className="flex gap-2 w-auto items-center"
              >
                <DirectionIcon className="size-8 text-primary-500 rounded-full bg-primary-50 p-1.5" />
                Google Maps
              </a>
              <a
                href={contact.waze_url!}
                target="_blank"
                className="flex gap-2 w-auto items-center"
              >
                <DirectionIcon className="size-8 text-primary-500 rounded-full bg-primary-50 p-1.5" />
                Waze
              </a>
            </div>
          </div>
          <div className="w-[18.875rem] h-[7.75rem] lg:pt-12">
            <h1 className="text-txt-black-900 text-body-xl font-semibold">
              {t("inquiries_feedback")}
            </h1>
            <div className="flex flex-col gap-4 pt-4 text-body-md">
              <a
                href={`mailto:${contact.email}`}
                className="flex gap-2 w-auto items-center text-primary-500"
              >
                <EmailIcon className="size-8 rounded-full bg-primary-50 p-1.5" />
                {contact.email}
              </a>
              <div className="flex gap-2 w-auto items-center text-primary-500">
                <PhoneIcon className="size-8 rounded-full bg-primary-50 p-1.5" />
                {contact.phone}
              </div>
            </div>
          </div>
        </div>
        <iframe
          className="w-full lg:w-[39.25rem] h-[21.875rem] md:h-[25rem] rounded-xl border border-gray-200"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.773879567851!2d101.71582507497114!3d3.154234496821147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37260a3f7caf%3A0xe6b0328a259e547a!2sMOF%20Inc%20Tower%20%7C%20Platinum%20Park!5e0!3m2!1sen!2smy!4v1741581925490!5m2!1sen!2smy"
        />
      </section>
      <div />
    </div>
  );
}
