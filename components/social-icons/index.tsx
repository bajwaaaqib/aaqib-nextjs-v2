// components/social-icons/index.tsx

import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  whatsapp, // ← ensure this matches your export in ./icons
} from './icons'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  instagram: Instagram,
  whatsapp: whatsapp, // ← map to the capitalized import
}

type SocialIconProps = {
  kind: keyof typeof components
  href?: string
  size?: number
}

export default function SocialIcon({ kind, href, size = 8 }: SocialIconProps) {
  // if no href, or invalid mailto: link, render nothing
  if (!href || (kind === 'mail' && !/^mailto:[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(href))) {
    return null
  }

  const IconComponent = components[kind]
  if (!IconComponent) {
    console.warn(`No icon found for kind="${kind}"`)
    return null
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-700 transition dark:text-gray-200"
      aria-label={kind}
    >
      <span className="sr-only">{kind}</span>
      <IconComponent className={`h-${size} w-${size} fill-current`} />
    </a>
  )
}
