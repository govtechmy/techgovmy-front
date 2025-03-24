import { GlobalConfig } from "payload";
import { AboutUsGlobals as AboutUs } from "./about-us";
import { SiteInfoGlobal as SiteInfo } from "./site-info";
import { FooterGlobals as Footer } from "./footer";
import { NavBarGlobals as Navbar } from "./navbar";

const PayloadGlobals: GlobalConfig[] = [SiteInfo, AboutUs, Navbar, Footer];

export { SiteInfo, AboutUs, Navbar, Footer };
export default PayloadGlobals;
