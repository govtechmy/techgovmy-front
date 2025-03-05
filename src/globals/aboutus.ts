import { GlobalConfig } from "payload";

// Globals for About Us Page
export const AboutUsGlobals: GlobalConfig = {
    slug: 'about-us',
    label: 'about us',
    access: {
      read: () => true, // Allow public read access
    //   update: ({ req }) => req.user?.role === 'admin', // Only admins can update
    },
    fields: [
      {
        name: 'header',
        type: 'text',
        label: '',
        localized: true
      },
    //   {
    //     name: 'logo',
    //     type: 'upload',
    //     relationTo: 'media', 
    //     label: 'Site Logo',
    //   },
        // {
        //     name: 'items',
        //     type: 'array',
        //     required: true,
        //     maxRows: 8,
        //     fields: [
        //     {
        //         name: 'page',
        //         type: 'relationship',
        //         relationTo: 'pages', // "pages" is the slug of an existing collection
        //         required: true,
        //     },
        //     ],
        // },
    ],
  };



//   export async function getStaticProps() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/site-settings`);
//     const data = await res.json();
  
//     return {
//       props: {
//         siteSettings: data,
//       },
//       revalidate: 60, // Revalidate every 60 seconds
//     };
//   }
  


// export async function getStaticProps() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/site-settings`);
//     const data = await res.json();
  
//     return {
//       props: {
//         siteSettings: data,
//       },
//       revalidate: 60, // Revalidate every 60 seconds
//     };
//   }
  

// import { GetStaticProps } from 'next';
// import { useTranslations } from 'next-intl';

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/site-settings?locale=${locale}`);
//   const siteSettings = await res.json();

//   return {
//     props: {
//       messages: (await import(`../locales/${locale}.json`)).default, // Load translations
//       siteSettings,
//     },
//     revalidate: 60, // Revalidate every 60 seconds
//   };
// };

// export default function Home({ siteSettings }) {
//   const t = useTranslations(); // next-intl hook

//   return (
//     <div>
//       <h1>{siteSettings.siteName}</h1>
//       <p>{siteSettings.description}</p>
//     </div>
//   );
// }
