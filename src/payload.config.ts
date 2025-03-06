// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { GlobalConfig } from "payload";
import { AboutUsGlobals } from "./globals/aboutus";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Unit } from "./collections/Unit";
import { People } from "./collections/People";
import { Products } from "./collections/Products";
import { en } from '@payloadcms/translations/languages/en'
import { my } from '@payloadcms/translations/languages/my'
import { Roles } from "./collections/Roles";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    ...(process.env.APP_ENV !== "production" && {
      autoLogin: {
        email: "dev@payloadcms.com",
        password: "abc123",
        prefillOnly: true,
      },
    }),
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: "users",
      limit: 1,
    });

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: "users",
        data: {
          email: "dev@payloadcms.com",
          password: "abc123",
        },
      });
    }
  },
  globals: [AboutUsGlobals],
  collections: [Users, Media, Products, Unit, People, Roles],

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  i18n: {
    fallbackLanguage: 'my',
    supportedLanguages: { en, my },
  },
  localization: {
    locales: ['en-GB', 'ms-MY'],
    defaultLocale: 'en-GB'
  }
});
