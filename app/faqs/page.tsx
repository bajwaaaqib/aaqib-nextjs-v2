'use client'

import React from 'react'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 
      'I provide graphic design, digital marketing, social media strategy, SEO, website development, and product branding services.',
  },
  {
    question: 'Where are you based?',
    answer: 'I am based in the UAE and work with clients globally.',
  },
  {
    question: 'How can I contact you?',
    answer: 'You can email us at info@aaqibbajwa.com or use the contact form on our website.',
  },
  {
    question: 'Do you design custom perfume packaging or Print Material?',
    answer: 'Yes, I specialize in custom packaging and product visualization',
  },
  {
    question: 'What platforms do you develop websites on?',
    answer: 
      'I develop websites using modern stacks like Next.js, React, and also WordPress for content-based sites.',
  },
  {
    question: 'Do you build e-commerce websites?',
    answer: 
      'Yes, I build online stores using WooCommerce, Shopify, and custom React or Next.js e-commerce solutions.',
  },
  {
    question: "Can you help improve my website's SEO?",
    answer: 
      'Absolutely. I offer technical SEO audits, on-page optimization, keyword research, and content strategy.',
  },
  {
    question: 'Do you manage social media accounts?',
    answer: 
      'Yes, I manage Instagram, Facebook, TikTok, and LinkedIn with content creation, posting, and engagement strategies.',
  },
  {
    question: 'How do you measure the success of digital marketing campaigns?',
    answer: 
      'I use KPIs such as reach, engagement, conversion rates, website traffic, and ROI through tools like Google Analytics and Meta Ads Manager.',
  },
  {
    question: 'Can I request a custom branding package?',
    answer: 
      'Yes, I offer branding services including logo design, brand guidelines, color palettes, and complete visual identity systems.',
  },
  {
    question: 'Do you offer WordPress maintenance services?',
    answer: 
      'Yes, I provide regular backups, security updates, plugin maintenance, and performance optimization for WordPress sites.',
  },
  {
    question: 'Can you help migrate my website to WordPress or another platform?',
    answer: 
      'Yes, I can migrate your existing website to WordPress, Next.js, or another modern CMS or framework as per your needs.',
  },
]
export default function FAQPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{faq.question}</h2>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
