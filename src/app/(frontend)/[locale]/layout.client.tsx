"use client";

import { default as Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";
import {
  Masthead,
  MastheadHeader,
  MastheadContent,
  MastheadTitle,
  MastheadTrigger,
  MastheadSection,
} from "@govtechmy/myds-react/masthead";
import { GovtOfficeIcon, Lock2Icon, LockFillIcon } from "@govtechmy/myds-react/icon";

export default function LocaleClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main
        className={
          "box-border flex h-full min-h-screen flex-col bg-bg-white font-body text-body-sm text-txt-black-900"
        }
      >
        <Masthead>
          <MastheadHeader>
            <MastheadTitle>Official Malaysian Government Website</MastheadTitle>
            <MastheadTrigger>Here&apos;s how you know</MastheadTrigger>
          </MastheadHeader>
          <MastheadContent>
            <MastheadSection
              icon={<GovtOfficeIcon />}
              title="Official government websites end with .gov.my"
            >
              If the link does not end with <b>.gov.my</b>, exit the website immediately even if it
              looks similar.
            </MastheadSection>
            <MastheadSection
              icon={<Lock2Icon className="inline-block size-3.5" />}
              title="Secure websites use HTTPS"
            >
              Look for a lock (<LockFillIcon className="inline-block size-3.5" />) or https:// as an
              added precaution. If not present, do not share any sensitive information.
            </MastheadSection>
          </MastheadContent>
        </Masthead>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
