// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import PayloadGlobals from "./globals";
import PayloadCollections, { Users } from "./collections";
import { s3Storage } from '@payloadcms/storage-s3'

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
  globals: PayloadGlobals,
  collections: PayloadCollections,

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
    s3Storage({
      collections: {
        media: true,
        "product-asset": true,
        "site-asset": true,
      },
      bucket: process.env.S3_BUCKET || "",
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
        region: process.env.S3_REGION || "",
      },
    }),
  ],
  localization: {
    locales: [
      {
        label: "Bahasa Melayu",
        code: "ms-MY",
      },
      {
        label: "English",
        code: "en-GB",
      },
    ],
    defaultLocale: "en-GB",
  },
});
