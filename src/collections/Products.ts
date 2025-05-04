import { Product } from "@/payload-types";
import type { CollectionConfig } from "payload";
import { revalidate } from "@/lib/revalidate"

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "description", "type", "url"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "logo",
          type: "upload",
          relationTo: "product-asset",
          required: true,
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          admin: {
            width: "75%",
          },
          localized: true,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
          admin: {
            width: "75%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "description",
          type: "textarea",
          required: true,
          admin: {
            width: "75%",
          },
          localized: true,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "url",
          type: "text",
          required: false,
          label: "Project URL",
          admin: {
            placeholder: "https://www.tech.gov.my",
            width: "75%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "project_start_date",
          type: "date",
          label: "Project Start Date",
          required: true,
          admin: {
            width: "75%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "type",
          type: "select",
          required: true,
          options: [
            {
              label: "Websites",
              value: "websites",
            },
            {
              label: "Module",
              value: "module",
            },
            {
              label: "Libraries",
              value: "libraries",
            },
            {
              label: "Standard",
              value: "standard",
            },
            {
              label: "Applications",
              value: "applications",
            },
          ],
          admin: {
            width: "75%",
          },
        },
      ],
    },
    {
      type: "array",
      name: "images",
      label: "Product Images",
      minRows: 1,
      required: true,
      admin: {
        description: "To be used in product image carousel",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              type: "upload",
              relationTo: "product-asset",
              name: "image",
              admin: {
                width: "50%",
              },
            },
          ],
        },
      ],
    },
    {
      type: "array",
      name: "status",
      fields: [
        {
          type: "row",
          fields: [
            {
              type: "checkbox",
              name: "isActive",
              label: "Active?",
              defaultValue: false,
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              type: "text",
              name: "status",
              admin: {
                width: "50%",
                placeholder: "Under Development",
              },
              localized: true,
              required: true,
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              type: "date",
              name: "date",
              label: "Date",
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              type: "select",
              name: "phase_index",
              label: "Phase Index",
              required: true,
              admin: {
                width: "50%",
                description:
                  "Used to determine whether the project is still 'under development' or 'completed'. Meaning the status can 'New', but since it is not yet started, it falls under index 0 which signifies that it is 'under development'",
              },
              options: [
                {
                  label: "0 - Under Development Phase",
                  value: "0",
                },
                {
                  label: "1- Completed Phase",
                  value: "1",
                },
              ],
            },
          ],
        },
      ],
      defaultValue: ({ locale }) => [
        { status: locale === "en-GB" ? "New" : "Baru", isActive: true, phase_index: "0" },
        {
          status: locale === "en-GB" ? "Planning & Design" : "Perangkaan & Reka Bentuk",
          phase_index: "0",
        },
        { status: locale === "en-GB" ? "In Development" : "Dalam Pembangunan", phase_index: "0" },
        { status: locale === "en-GB" ? "Ready" : "Sedia Digunakan", phase_index: "1" },
        { status: locale === "en-GB" ? "Active" : "Aktif", phase_index: "1" },
        { status: locale === "en-GB" ? "Terminated" : "Dihentikan", phase_index: "1" },
      ],
      validate: (_features) => {
        if (!Array.isArray(_features)) {
          return true; // skip validation if not an array
        }

        const features = _features as Product["status"];

        if (features) {
          const activeItems = features.filter((item) => item && item.isActive);
          if (activeItems.length !== 1) {
            return "Exactly only one status can be active.";
          }
        }

        return true; // valid
      },
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await revalidate("");
      },
    ]
  }
};
