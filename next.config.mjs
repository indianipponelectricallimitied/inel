/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'flagcdn.com',
      'inelbackend.vercel.app'
    ],
  },
  async redirects() {
    return [
      // Products related redirects
      {
        source: '/products',
        destination: '/Products-Solutions',
        permanent: true,
      },
      {
        source: '/quality-policy',
        destination: '/Products-Solutions',
        permanent: true,
      },
      {
        source: '/pages/contact',
        destination: '/Products-Solutions',
        permanent: true,
      },
      // Contact related redirects
      {
        source: '/testimonials',
        destination: '/contact-us',
        permanent: true,
      },
      // Career related redirects
      {
        source: '/vacancies',
        destination: '/career',
        permanent: true,
      },
      {
        source: '/working-culture',
        destination: '/career',
        permanent: true,
      },
      {
        source: '/employee',
        destination: '/career',
        permanent: true,
      },
      // Technology related redirects
      {
        source: '/research-development',
        destination: '/technology',
        permanent: true,
      },
      {
        source: '/manufacturing',
        destination: '/technology',
        permanent: true,
      },
      // Investors related redirects
      {
        source: '/investors_backup',
        destination: '/investors',
        permanent: true,
      },
      {
        source: '/investor_relations',
        destination: '/investors',
        permanent: true,
      },
      // About us related redirects
      {
        source: '/pages/about-team',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/organization',
        destination: '/about-us',
        permanent: true,
      },
      // Product specific redirect
      {
        source: '/new-product/throttle-position-sensor',
        destination: '/Product/throttle-position-sensor',
        permanent: true,
      },
      // Homepage redirects for various old URLs
      {
        source: '/banner-home2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inel',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fwm12',
        destination: '/',
        permanent: true,
      },
      {
        source: '/i',
        destination: '/',
        permanent: true,
      },
      {
        source: '/1',
        destination: '/',
        permanent: true,
      },
      {
        source: '/img_0917',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cdi1',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

export default nextConfig;
