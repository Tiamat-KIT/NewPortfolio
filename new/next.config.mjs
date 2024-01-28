/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        svgo: false
                    }
                }
            ]
        })
        return config
    },
    images: {
        disableStaticImages: true
    }
};

export default nextConfig;
