/** @type {import('next').NextConfig} */
export default {
    // ...other configuration
    experimental: {
        typedRoutes: true,
        optimizePackageImports: [
            '@mantine/core',
            '@mantine/hooks',
        ],
    },
    images : {
        domains: ['images.microcms-assets.io'],

    },
    transpilePackages: [
        "microcms-js-sdk"
    ],
    webpack: (config) => {
        // https://blog.photosynthesic.jp/2022/04/next-svgr-a11y/
        config.module.rules.push({
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                   svgo: false, // 圧縮無効
              },
            },
          ],
        });
        return config;
      },
      images: {
        disableStaticImages: true, // importした画像の型定義設定を無効にする
    },
};
