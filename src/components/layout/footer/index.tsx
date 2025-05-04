"use client";

import {
  Footer,
  SiteInfo,
  FooterSection,
  SiteLinkGroup,
  SiteLink,
  FooterLogo,
} from "@govtechmy/myds-react/footer";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterXIcon,
  YoutubeIcon,
} from "@govtechmy/myds-react/icon";
import { Link } from "@govtechmy/myds-react/link";
import { Link as RouteLink } from "@/lib/i18n/routing";
import Image from "next/image";
import { Footer as FooterType, SiteInfo as SiteInfoType } from "@/payload-types";
import { Fragment } from "react";

const socialMap: Record<string, React.ElementType> = {
  x: TwitterXIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
};

export default function LayoutFooter({
  footerData,
  siteInfo,
}: {
  footerData: FooterType;
  siteInfo: SiteInfoType;
}) {
  return (
    <Footer>
      <FooterSection className="w-full">
        <SiteInfo>
          <div className="flex items-center gap-x-2.5 text-txt-black-900">
            <FooterLogo
              logo={
                <Image
                  src="/static/images/icons/img-logo-govtech.svg"
                  width={91}
                  height={32}
                  alt="Govtech Logo"
                  className="select-none"
                />
              }
            />
          </div>
          <p className="text-body-sm text-txt-black-700">
            {/* {siteInfo.address} */}
            {siteInfo.address &&
              siteInfo.address.split(",").map((line: string, index: number) => (
                <Fragment key={index}>
                  {line.trim()}
                  {index < siteInfo.address!.split(",").length - 1 && <br />}
                </Fragment>
              ))}
          </p>
          {siteInfo["social-media"] && siteInfo["social-media"]?.length > 0 && (
            <>
              <p className="not-prose text-body-sm font-semibold text-txt-black-900">
                {footerData.social_label}
              </p>
              <div className="flex gap-3">
                {siteInfo["social-media"].map((sm) => {
                  const IconComponent = socialMap[sm.icon || "x"] || "span";
                  return (
                    <Link underline="none" className="hover:text-txt-black-900" asChild key={sm.id}>
                      <RouteLink href={sm.link.url || ""} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="text-txt-black-700" />
                      </RouteLink>
                    </Link>
                  );
                })}
              </div>
            </>
          )}
        </SiteInfo>

        {/* Buffer Group */}
        <SiteLinkGroup groupTitle=""></SiteLinkGroup>
        <SiteLinkGroup groupTitle=""></SiteLinkGroup>
        {/* End of Buffer Group */}

        <SiteLinkGroup groupTitle={footerData.govtech_label}>
          {footerData.govtech_route?.map((route) => (
            <SiteLink key={route.id} asChild className="w-fit">
              <RouteLink
                href={route.link.url || route.link.reference || "#"}
                target={route.link.newTab ? "_blank" : "_self"}
              >
                {route.link.label}
              </RouteLink>
            </SiteLink>
          ))}
        </SiteLinkGroup>
        <SiteLinkGroup groupTitle={footerData.opensource_label}>
          {footerData.open_source?.map((route) => (
            <SiteLink key={route.id} asChild className="w-fit">
              <RouteLink
                href={route.link.url || route.link.reference || "#"}
                target={route.link.newTab ? "_blank" : "_self"}
              >
                {route.link.label}
              </RouteLink>
            </SiteLink>
          ))}
        </SiteLinkGroup>
      </FooterSection>
      <FooterSection className="mx-auto flex w-full max-w-[1280px] flex-col justify-between border-none text-sm text-txt-black-500 max-md:gap-4 md:max-lg:gap-4.5 lg:flex-row lg:gap-6">
        <div className="flex flex-col gap-3 lg:flex-row">
          <p>
            {footerData.copyright} © {new Date().getFullYear()}
          </p>
        </div>
      </FooterSection>
    </Footer>
  );
}
