// app/page.tsx or pages/index.tsx depending on your project structure

import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Hi, I'm Aaqib Bajwa
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          I'm a Graphic Designer and Digital Marketer based in the UAE, blending creativity with strategy to deliver impactful designs and results across branding, social media, SEO, and websites.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/about"
            className="inline-block rounded-lg bg-primary-500 px-6 py-2 text-white hover:bg-primary-600 transition"
          >
            About Me
          </a>
          <a
            href="mailto:info@aaqibbajwa.com"
            className="inline-block rounded-lg border border-primary-500 px-6 py-2 text-primary-500 hover:bg-primary-50 dark:hover:bg-gray-800 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

