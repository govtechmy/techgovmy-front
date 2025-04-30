import link from "@/lib/fields/link";
import { routes } from "@/lib/routes";
import { GlobalConfig } from "payload";
import { revalidate } from "@/lib/revalidate"

// Globals for Homepage Page
export const HomepageGlobals: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
  access: {
    read: () => true, // Allow public read access
    //   update: ({ req }) => req.user?.role === 'admin', // Only admins can update
  },
  fields: [
    {
      name: "hero-title",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "hero-typewriter-text",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          localized: true,
        },
      ],
    },
    {
      name: "hero-description",
      type: "textarea",
      localized: true,
      required: true,
    },
    {
      name: "statistics-section",
      type: "group",
      fields: [
        {
          name: "headline",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "description",
          type: "textarea",
          localized: true,
          required: true,
        },
      ],
    },
    {
      name: "pages-section",
      type: "group",
      fields: [
        {
          name: "list",
          type: "array",
          maxRows: 3,
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "site-asset",
              required: true,
            },
            {
              name: "headline",
              type: "text",
              localized: true,
              required: true,
            },
            {
              name: "title",
              type: "text",
              localized: true,
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              localized: true,
              required: true,
            },
            link({
              labelPlaceholder: "To hide the Button, select 'None'",
              localizedLabel: true,
              linkOption: Object.entries({ ...{ NONE: "null" }, ...routes }).map(([key, value]) => {
                const _key = "".concat(...key.split("_").join(" "));
                return {
                  label: _key,
                  value: value,
                };
              }),
            }),
          ],
        },
      ],
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
