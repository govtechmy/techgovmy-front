"use client";
import {
  Address,
  Footer,
  FooterBottomSection,
  FooterCopyright,
  FooterCopyrightDate,
  FooterCopyrightLinkWrapper,
  FooterMainInfo,
  FooterTopSection,
  ImageWithTitle,
} from "@govtechmy/myds-react/footer";
import { Link } from "@govtechmy/myds-react/link";

export default function LayoutFooter() {
  return (
    <Footer
      background="grid grid-cols-4 gap-4.5 px-4.5 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12 w-full mx-auto border-0"
      className="px-0 max-w-screen-xl col-span-full lg:py-12"
    >
      <FooterTopSection>
        <FooterMainInfo>
          <ImageWithTitle imgSrc="/favicon-color.png" imgAlt="JataNegara">
            Govtech Malaysia
          </ImageWithTitle>
          <Address>
            Level 37, MOF Inc. Tower,{"\n"}Platinum Park,{"\n"}No.9 Persiaran KLCC,{"\n"}50088 Kuala
            Lumpur, Malaysia
            {"\n"}
          </Address>
        </FooterMainInfo>
        {/* <FooterContent>
          <FooterContentColumn title={"Open Source"}>
            <Link
              href="/"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Github Repo
            </Link>
            <Link
              href="/"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Figma
            </Link>
          </FooterContentColumn>
        </FooterContent> */}
      </FooterTopSection>
      <FooterBottomSection>
        <FooterCopyright>
          <FooterCopyrightDate>All right reserved</FooterCopyrightDate>
        </FooterCopyright>
        {/* <FooterTimestamp time="2025-01-15T10:00:00Z">As of</FooterTimestamp> */}
      </FooterBottomSection>
    </Footer>
  );
}
