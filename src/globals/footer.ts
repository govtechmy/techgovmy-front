import { GlobalConfig } from "payload";
import type { Field } from 'payload'

// Globals for About Us Page
export const FooterGlobals: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  access: {
    read: () => true, // Allow public read access
    //   update: ({ req }) => req.user?.role === 'admin', // Only admins can update
  },
  fields: [
    {
      name: "address",
      type: "text",
      label: {
        en: "Address",
        ms: "Alamat",
      },
      localized: true,
    },
    {
      name: "last-updated",
      type: "text",
      label: {
        en: "Last Updated",
        ms: "Kemaskini Terakhir",
      },
      localized: true,
    },
    {
      name: "copyright",
      type: "text",
      label: {
        en: "Copyright",
        ms: "Hak Cipta",
      },
      localized: true,
    },
    {
      name: 'follow-us',
      type: 'array',
      label: {
        en: "Follow Us",
        ms: "Ikuti Kami"
      },
      localized: true,
      fields: [
        {
            name: 'icon',
            type: 'select',
            label: {
              en: "Icon name",
              ms: "Nama Ikon"
            },
            localized: true,
            options: [
              'facebook',
              'x',
              'linkedin',
              'instagram',
              'youtube'
            ]
        },
        {
          name: 'link',
          type: 'text',
          label: {
            en: "Link",
            ms: "Pautan"
          },
          localized: true
        },
      ],
    },
    {
        name: 'right-column-title',
        type: 'text',
        label: {
            en: "Right Column Title",
            ms: "Tajuk Ruangan Kanan"
        },
        localized: true,
    },
    {
        name: 'left-column-title',
        type: 'text',
        label: {
            en: "Left Column Title",
            ms: "Tajuk Ruangan Kiri"
        },
        localized: true,
    },
    {
        name: 'right-column-items',
        type: 'array',
        label: {
            en: "Right Column Items",
            ms: "Perkara Ruangan Kanan"
        },
        localized: true,
        fields: [
            {
                name: 'text',
                type: 'text',
                label: {
                    en: "Text",
                    ms: "Tulisan"
                },
                localized: true,
            },
            {
                name: 'href',
                type: 'text',
                label: {
                    en: "Link",
                    ms: "Pautan"
                },
                localized: true,
            },
        ],
    },
    {
        name: 'left-column-items',
        type: 'array',
        label: {
            en: "Left Column Items",
            ms: "Perkara Ruangan Kiri"
        },
        localized: true,
        fields: [
            {
                name: 'text',
                type: 'text',
                label: {
                    en: "Text",
                    ms: "Tulisan"
                },
                localized: true,
            },
            {
                name: 'href',
                type: 'text',
                label: {
                    en: "Link",
                    ms: "Pautan"
                },
                localized: true,
            },
        ],
    }

  ],
};
