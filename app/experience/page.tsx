'use client'

import React from 'react'

interface Experience {
  company: string
  role: string
  duration: string
  description: string[]
}

const experiences: Experience[] = [
  {
    company: 'ARD Perfumes Factory LLC',
    role: 'Graphic Designer & Digital Marketer with IT Support',
    duration: '2022 – Present | UAE',
    description: [
      // New Product Development
      'Developed product designs for bottles and packaging according to management briefs',
      'Created and maintained NPD tracker sheets for all development projects',
      'Coordinated with purchase department and suppliers for packaging samples',
      'Conducted quality checks and ensured standards for all packaging materials',
      'Managed timelines for packaging material delivery for NPD projects',
      
      // E-commerce and Digital Marketing
      'Managed e-commerce platforms including Amazon, Noon, and company website',
      'Created social media content (graphics, banners, promo campaigns, reels, stories)',
      'Developed product launch marketing plans and activation strategies',
      'Managed website hosting, security, updates, and domain administration',
      'Implemented SEO optimization and published regular blog content',
      'Designed brand promotion materials (catalogs, brochures, business cards, uniforms)',
      'Coordinated with purchase department for marketing material procurement',
      
      // IT and Systems
      'Managed complete IT infrastructure including servers and networking',
      'Provided technical support for ERP and other business applications',
      'Set up and managed company email systems for all employees',
      'Ensured data, application, and server security against breaches',
      'Maintained landline phone systems and resolved connectivity issues',
      'Configured and maintained biometric access control systems',
      'Managed security camera systems and IP configurations',
    ],
  },
  {
    company: 'Upwork (Freelance)',
    role: 'Freelance Graphic Designer & Social Media Specialist',
    duration: '2018 – 2022 | Remote',
    description: [
      'Provided graphic design services to international clients in perfume, beauty, and fashion industries.',
      'Built brand identities, packaging mockups, and visual guidelines for e-commerce businesses.',
      'Consulted startups on digital marketing strategies, SEO, and social media management.',
    ],
  },
  {
    company: 'Freelance Projects – Web & SEO',
    role: 'Web Developer & SEO Consultant',
    duration: '2018 – Present',
    description: [
      'Developed websites using WordPress and React (Next.js) for local businesses.',
      'Optimized sites for SEO using on-page, off-page, and technical techniques.',
      'Helped brands rank on Google and drive traffic through blogging and keyword strategies.',
    ],
  },
]

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-12 text-center text-4xl font-bold">Experience</h1>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="rounded-2xl border bg-white p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">{exp.company}</h2>
            <p className="mb-1 text-sm text-gray-500 italic">{exp.role}</p>
            <p className="mb-4 text-sm text-gray-400">{exp.duration}</p>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
