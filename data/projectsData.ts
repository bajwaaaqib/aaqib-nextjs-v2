interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Graphic Design',
    description: `I am a passionate Graphic Designer who brings ideas to life through visually 
    compelling and thoughtful design. I focus on creating impactful branding, 
    logos, packaging, and digital content that tell a story and engage audiences 
    at a deeper level. My goal is to make every design not just beautiful but meaningful and memorable.`,
    imgSrc: '/static/images/graphic-design.jpg',
    href: 'https://www.linkedin.com/in/aaqibbajwa',
  },
  {
    title: 'Digital Marketing',
    description: `I am also a strategic Digital Marketer. I leverage digital platforms, SEO, and social 
    media campaigns to connect brands with their target audiences effectively. By combining creativity 
    with data-driven marketing strategies, I help businesses increase their online presence,
    drive engagement, and achieve measurable growth.`,
    imgSrc: '/static/images/digital-marketing.jpg',
    href: 'https://www.linkedin.com/in/aaqibbajwa',
  },
]

export default projectsData
