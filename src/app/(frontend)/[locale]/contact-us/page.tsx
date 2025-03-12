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
import { fetchGlobal } from "@/utils/globals";

export default async function ContactPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations("Contact");
  const contact = await fetchGlobal(params.locale, "contact");
  return (
    <div className="w-full border-otl-divider max-w-screen-xl px-[6.8125rem] m-auto justify-center">
      <div className="h-[4.75rem] py-6">
        <div className=" m-auto">
          <Breadcrumb className="pl-0">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>{t("contact_us")}</BreadcrumbPage>
          </Breadcrumb>
          <div className="text-heading-sm pt-1 font-semibold my-2 text-txt-black-900">
            <h1>{t("contact_us")}</h1>
          </div>
        </div>
      </div>
      <section className=" h-[33rem] py-16 gap-16 mx-auto flex justify-between">
        <div className="w-[18.875rem] h-[23rem]">
          <h1 className="text-txt-black-900 text-body-xl font-semibold">{t("office_name")}</h1>
          <p className="text-txt-black-700 text-body-md font-light pt-2">
            {contact.address_line_1}<br />
            {contact.address_line_2}<br />
            {contact.address_line_3}<br />
            {contact.address_line_4}
          </p>
          <div className="flex gap-4 text-primary-500 text-body-md font-normal pt-5">
            <a
              href={contact.google_maps_url}
              target="_blank"
              className="flex gap-2 w-auto items-center"
            >
              <DirectionIcon className="size-8 text-primary-500 rounded-full bg-primary-50 p-1" />
              Google Maps
            </a>
            <a
              href={contact.waze_url}
              target="_blank"
              className="flex gap-2 w-auto items-center"
            >
              <DirectionIcon className="size-8 text-primary-500 rounded-full bg-primary-50 p-1" />
              Waze
            </a>
          </div>
          <div className="w-[18.875rem] h-[7.75rem] pt-12">
            <h1 className="text-txt-black-900 text-body-xl font-semibold">
              {t("inquiries_feedback")}
            </h1>
            <div className="flex flex-col gap-4 pt-4 text-body-md">
              <a
                href={`mailto:${contact.email}`}
                className="flex gap-2 w-auto items-center text-primary-500"
              >
                <EmailIcon className="size-8 rounded-full bg-primary-50 p-1" />
                {contact.email}
              </a>
              <div className="flex gap-2 w-auto items-center text-primary-500">
                <PhoneIcon className="size-8 rounded-full bg-primary-50 p-1" />
                {contact.phone}
              </div>
            </div>
          </div>
        </div>
        <iframe
          className="w-[39.25rem] h-[25rem] rounded-xl border border-gray-200"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.773879567851!2d101.71582507497114!3d3.154234496821147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37260a3f7caf%3A0xe6b0328a259e547a!2sMOF%20Inc%20Tower%20%7C%20Platinum%20Park!5e0!3m2!1sen!2smy!4v1741581925490!5m2!1sen!2smy"
        />
      </section>
    </div>
  );
}
