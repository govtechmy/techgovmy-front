import { GlobalConfig } from "payload";
import { AboutUsGlobals as AboutUs } from "./about-us";
import { SiteInfoGlobal as SiteInfo } from "./site-info";
import { FooterGlobals as Footer } from "./footer";
import { NavBarGlobals as Navbar } from "./navbar";
import { HomepageGlobals as Homepage } from "./homepage";

const PayloadGlobals: GlobalConfig[] = [SiteInfo, Homepage, AboutUs, Navbar, Footer];

export { SiteInfo, Homepage, AboutUs, Navbar, Footer };
export default PayloadGlobals;
