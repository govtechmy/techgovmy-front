import React from "react";
import { PhoneIcon, EmailIcon, DirectionIcon } from "@govtechmy/myds-react/icon";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function ContactPage({ params }: ServerPageProps) {
  const { locale } = await params;
  const payload = await getPayload({ config });
  const contact = await payload.findGlobal({
    slug: "site-info",
    locale: locale as "en-GB" | "ms-MY",
    depth: 3,
  });

  return (
    <div className="mx-auto w-full bg-gradient-to-b from-white to-[#EFF6FF] py-8 md:py-16 lg:px-4.5 lg:py-[84px] xl:px-0">
      <section className="mx-auto mb-9 flex w-full max-w-[350px] flex-col gap-12 rounded-xl border border-otl-divider bg-white md:max-w-[602px] lg:w-fit lg:max-w-screen-xl lg:flex-row lg:gap-6">
        <div className="space-y-12 p-6 pb-0 md:p-8 md:pb-0 lg:py-8 lg:pl-4 xl:pl-8">
          <h1 className="text-heading-md font-semibold text-txt-black-900">
            {contact["contact-us"].title}
          </h1>
          <div className="flex flex-col gap-12 md:flex-row lg:flex-col">
            <div className="md:flex-1 xl:min-w-[410px]">
              <h1 className="text-body-xl font-semibold text-txt-black-900">
                {contact["contact-us"].office_name_label}
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
            <div className="md:flex-1 xl:min-w-[410px]">
              <h1 className="text-body-xl font-semibold text-txt-black-900">
                {contact["contact-us"].inquiries_label}
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
        <iframe
          className="h-[350px] w-full rounded-xl border border-gray-200 md:h-[400px] lg:h-[initial] lg:w-[41.25rem] lg:flex-1"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={contact.google_embed_url || ""}
        />
      </section>
      <div />
    </div>
  );
}
