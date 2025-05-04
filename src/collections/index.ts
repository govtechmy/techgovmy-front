import { CollectionConfig } from "payload";
import { Users } from "./Users";
import { Media } from "./Media";
import { ProductAsset } from "./ProductAsset";
import { Products } from "./Products";
import { SiteAsset } from "./SiteAsset";

const PayloadCollections: CollectionConfig[] = [Users, Media, ProductAsset, SiteAsset, Products];

export { Users, Media, ProductAsset, Products, SiteAsset };
export default PayloadCollections;
