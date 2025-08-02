'use client'

import React from 'react'

interface Experience {
  company: string
  role: string
  duration: string
  location: string
  description: React.ReactNode
}

const experiences: Experience[] = [
  {
    company: 'ARD Perfumes Factory LLC',
    role: 'Designer & IT Executive',
    duration: '2022 – Present',
    location: 'UAQ, UAE',
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="mb-2 text-sm font-semibold">Product Design & Development</h4>
          <ul className="ml-4 list-disc space-y-1 text-sm">
            <li>Designed perfume bottles and packaging</li>
            <li>Created and maintained product development tracking system</li>
            <li>Product Photography and preparation for digital assets</li>
            <li>Ensured quality standards for all packaging components</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold">Digital Marketing & E-Commerce</h4>
          <ul className="ml-4 list-disc space-y-1 text-sm">
            <li>Managed Amazon, Noon, and company e-commerce platforms</li>
            <li>Created social media content and marketing campaigns</li>
            <li>Developed SEO strategy and managed website content</li>
            <li>Produced brand collateral (catalogs, brochures, uniforms)</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold">IT Systems Management</h4>
          <ul className="ml-4 list-disc space-y-1 text-sm">
            <li>Maintained company IT infrastructure and network systems</li>
            <li>Provided technical support for business applications</li>
            <li>Managed email systems and data security protocols</li>
            <li>Configured security systems (CCTV, biometric access) with Technical team</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    company: 'Upwork (Freelance)',
    role: 'Graphic Design & Digital Marketing Specialist',
    duration: '2018 – 2022',
    location: 'Remote',
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="mb-2 text-sm font-semibold">Graphic Design</h4>
          <ul className="ml-4 list-disc space-y-1 text-sm">
            <li>Created brand identities and visual assets for 50+ clients</li>
            <li>Designed product packaging and marketing collateral</li>
            <li>Produced social media templates and campaign visuals</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Digital Marketing</h4>
          <ul className="ml-4 list-disc space-y-1 text-sm">
            <li>Managed social media accounts and content calendars</li>
            <li>Ran targeted ad campaigns on Meta and Google Ads</li>
            <li>Developed email marketing sequences and newsletters</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    company: 'Freelance Projects',
    role: 'Digital Marketing & Web Developer',
    duration: '2018 – Present',
    location: 'Remote',
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="mb-2 text-sm font-semibold">Website Development</h4>
          <ul className="ml-4 list-disc space-y-1 text-sm">
            <li>Built custom WordPress themes and plugins</li>
            <li>Developed PHP-based web applications</li>
            <li>Created Next.js frontends with headless CMS backends</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Digital Marketing</h4>
          <ul className="ml-4 list-disc space-y-1 text-sm">
            <li>Implemented SEO strategies for client websites</li>
            <li>Set up analytics and conversion tracking</li>
            <li>Optimized websites for performance and maintenance</li>
          </ul>
        </div>
      </div>
    ),
  },
]

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
        Professional Experience
      </h1>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <header className="mb-4 flex flex-col justify-between gap-2 sm:flex-row">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {exp.company}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900 dark:text-gray-100">{exp.duration}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
              </div>
            </header>
            <div className="text-gray-700 dark:text-gray-300">{exp.description}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
