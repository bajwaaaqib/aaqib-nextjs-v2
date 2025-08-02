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
          <h4 className="mb-2 text-sm font-semibold">Product Design and development</h4>
          <ul className="ml-4 space-y-1">
            <li className="truncate text-sm">Designed perfume bottles and packaging</li>
            <li className="truncate text-sm">Created product development tracking system</li>
            <li className="truncate text-sm">Coordinated with suppliers for brand consistency</li>
            <li className="truncate text-sm">Ensured packaging quality standards</li>
            <li className="truncate text-sm">Product Photography and preparation for Ecommerce</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold">Digital Marketing</h4>
          <ul className="ml-4 space-y-1">
            <li className="truncate text-sm">Managed Amazon/Noon e-commerce platforms</li>
            <li className="truncate text-sm">Created social media campaigns</li>
            <li className="truncate text-sm">Developed SEO strategy</li>
            <li className="truncate text-sm">Produced brand collateral</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold">IT Management</h4>
          <ul className="ml-4 space-y-1">
            <li className="truncate text-sm">Maintained IT infrastructure</li>
            <li className="truncate text-sm">Provided technical support</li>
            <li className="truncate text-sm">Managed data security</li>
            <li className="truncate text-sm">Configured security systems</li>
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
          <ul className="ml-4 space-y-1">
            <li className="truncate text-sm">Created brand identities for 50+ clients</li>
            <li className="truncate text-sm">Designed product packaging</li>
            <li className="truncate text-sm">Produced social media visuals</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Digital Marketing</h4>
          <ul className="ml-4 space-y-1">
            <li className="truncate text-sm">Managed social media accounts</li>
            <li className="truncate text-sm">Ran targeted ad campaigns</li>
            <li className="truncate text-sm">Developed email marketing</li>
            <li className="truncate text-sm">Optimized website and maintenance</li>
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
          <ul className="ml-4 space-y-1">
            <li className="truncate text-sm">WordPress development</li>
            <li className="truncate text-sm">Developed PHP applications</li>
            <li className="truncate text-sm">Created Next.js frontends</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Digital Marketing</h4>
          <ul className="ml-4 space-y-1">
            <li className="truncate text-sm">Implemented SEO strategies</li>
            <li className="truncate text-sm">Set up analytics tracking</li>
            <li className="truncate text-sm">Optimized website and maintenance</li>
            <li className="truncate text-sm">Social Media Marketing</li>
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
              <div className="text-left">
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
