import { CollectionConfig } from "payload";
import { Users } from "./Users";
import { Media } from "./Media";
import { Jobs } from "./Jobs";
import { People } from "./People";
import { ProductAsset } from "./ProductAsset";
import { Products } from "./Products";
import { Roles } from "./Roles";
import { SiteAsset } from "./SiteAsset";
import { Unit } from "./Unit";

const PayloadCollections: CollectionConfig[] = [
  Users,
  Media,
  ProductAsset,
  SiteAsset,
  Jobs,
  People,
  Products,
  Roles,
  Unit,
];

export { Users, Media, Jobs, People, ProductAsset, Products, Roles, SiteAsset, Unit };
export default PayloadCollections;
