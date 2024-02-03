/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true
    },
    env: {
        NEXT_PUBLIC_NEWT_FORM_ENDPOINT: "https://utakataportfolio.form.newt.so/v1/GRMXHJlGT"
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
