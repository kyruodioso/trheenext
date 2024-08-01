/** @type {import('next').NextConfig} */
const nextConfig = {

  
        experimental: {
          forceSwcTransforms: true,
        },
        swcMinify: true,
        compiler: {
          reactRemoveProperties: { properties: ['^data-test$'] },
          styledComponents: true,
        },
      
};

export default nextConfig;
