/** @type {import('next').NextConfig} */
const nextConfig = {

    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
  
  images: {
    domains: [
      'flagcdn.com',
      'inelbackend-fccmbmfjbhewhbhh.centralindia-01.azurewebsites.net'
    ],
  },
}



export default nextConfig;
