"use client";

import {
  Footer,
  SiteInfo,
  FooterSection,
  SiteLinkGroup,
  SiteLink,
  FooterLogo,
} from "@govtechmy/myds-react/footer";
import { FacebookIcon, InstagramIcon, TwitterXIcon, YoutubeIcon } from "@govtechmy/myds-react/icon";
import { Link } from "@govtechmy/myds-react/link";
import Image from "next/image";

export default function LayoutFooter() {
  return (
    <Footer>
      <FooterSection className="">
        <SiteInfo>
          <div className="text-txt-black-900 flex items-center gap-x-2.5">
            <FooterLogo
              logo={
                <Image
                  src="/static/images/icons/img-logo-govtech.png"
                  width={91}
                  height={32}
                  alt="Govtech Logo"
                  className="select-none"
                />
              }
            />
          </div>
          <p className="text-txt-black-700 text-body-sm not-prose">
            Level 37, MOF Inc. Tower Platinum Park, No.9 Persiaran KLCC,
            <br />
            50088 Kuala Lumpur, Malaysia
          </p>
          <p className="text-txt-black-900 text-body-sm font-semibold not-prose">Follow us</p>
          <div className="flex gap-3">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <FacebookIcon className="text-txt-black-700" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <TwitterXIcon className="text-txt-black-700" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <InstagramIcon className="text-txt-black-700" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <YoutubeIcon className="text-txt-black-700" />
            </Link>
          </div>
        </SiteInfo>

        <SiteLinkGroup groupTitle=""></SiteLinkGroup>
        <SiteLinkGroup groupTitle=""></SiteLinkGroup>
        <SiteLinkGroup groupTitle="Govtech Malaysia">
          <SiteLink href="#">About Us</SiteLink>
          <SiteLink href="#">Product</SiteLink>
          <SiteLink href="#">Join Our Team</SiteLink>
          <SiteLink href="#">Contact us</SiteLink>
        </SiteLinkGroup>
        <SiteLinkGroup groupTitle="Open Source">
          <SiteLink href="#">Frontend Repo: NextJS</SiteLink>
          <SiteLink href="#">Web Design: Figma</SiteLink>
        </SiteLinkGroup>
      </FooterSection>
      <FooterSection className="text-txt-black-500 md:max-lg:gap-4.5 mx-auto flex w-full max-w-[1280px] flex-col justify-between border-none text-sm max-md:gap-4 lg:flex-row lg:gap-6">
        <div className="flex flex-col gap-3 lg:flex-row">
          <p>All Rights Reserved © 2025</p>
        </div>
        <p>Last updated: 14th March 2025</p>
      </FooterSection>
    </Footer>
  );
}
