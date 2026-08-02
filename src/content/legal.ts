export type LegalPageContent = {
  slug: string
  title: string
  updated: string
  intro: string
  sections: { title: string; body: string[] }[]
}

export const legalPages: LegalPageContent[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    updated: 'August 2, 2026',
    intro:
      'This policy explains how Nimbus VFX handles information from website visitors, prospective clients, collaborators, and businesses that request an audit or consultation.',
    sections: [
      {
        title: 'Information We Collect',
        body: [
          'We may collect contact details, company information, project context, files or links you choose to share, usage data, and communications related to audits, proposals, production, marketing, sales systems, and AI workflow work.',
          'We do not ask for sensitive personal information unless it is necessary for a specific engagement and you choose to provide it.',
        ],
      },
      {
        title: 'How We Use Information',
        body: [
          'We use information to respond to inquiries, prepare audits, scope projects, deliver creative and technical services, improve the website, maintain security, and manage client relationships.',
          'We may use aggregated, non-identifying information to understand performance and improve Nimbus offerings.',
        ],
      },
      {
        title: 'Service Providers',
        body: [
          'Nimbus may use trusted providers for hosting, analytics, email, scheduling, production tooling, file storage, payment administration, automation, and AI-enabled workflows.',
          'Providers are used only where they support legitimate business operations and are expected to protect information appropriately.',
        ],
      },
      {
        title: 'Your Choices',
        body: [
          'You may request access, correction, deletion, or restriction of personal information by contacting Daniel@NimbusVFX.com.',
          'Some records may be retained where needed for legal, security, accounting, contractual, or legitimate operational reasons.',
        ],
      },
    ],
  },
  {
    slug: 'terms-of-use',
    title: 'Terms of Use',
    updated: 'August 2, 2026',
    intro:
      'These terms govern use of the Nimbus VFX website and any public materials, previews, audit prompts, or portfolio content made available through it.',
    sections: [
      {
        title: 'Website Use',
        body: [
          'You may use the website to learn about Nimbus VFX, review public portfolio work, contact the studio, and request an audit or consultation.',
          'You may not misuse the site, interfere with its operation, scrape content at scale, attempt unauthorized access, or use the site to infringe the rights of Nimbus, clients, or third parties.',
        ],
      },
      {
        title: 'Portfolio And Client Work',
        body: [
          'Portfolio items, images, videos, logos, copy, and case study materials are shown for informational and promotional purposes.',
          'Nothing on the website grants ownership or reuse rights in Nimbus work, client marks, third-party materials, or project assets.',
        ],
      },
      {
        title: 'No Guaranteed Results',
        body: [
          'Nimbus provides strategy, creative, production, AI workflow, marketing, outreach, and sales-support services. Business outcomes depend on many factors outside the website and outside any single deliverable.',
          'Audit content and website examples are not a guarantee of revenue, leads, platform performance, or campaign results.',
        ],
      },
      {
        title: 'Contact',
        body: ['Questions about these terms can be sent to Daniel@NimbusVFX.com.'],
      },
    ],
  },
  {
    slug: 'security',
    title: 'Security',
    updated: 'August 2, 2026',
    intro:
      'Nimbus treats security as part of client trust. The website and client workflows should protect confidential strategy, creative assets, business context, and production material.',
    sections: [
      {
        title: 'Operational Security',
        body: [
          'Nimbus uses access controls, managed hosting, reputable software services, and project-specific sharing practices to reduce unnecessary exposure of client materials.',
          'Access to client information is limited to people and providers who need it for the work.',
        ],
      },
      {
        title: 'Client Materials',
        body: [
          'Clients should avoid sending credentials, payment information, sensitive personal data, or regulated information unless Nimbus has explicitly requested it through an appropriate channel.',
          'Project files, brand assets, production notes, strategy documents, and audit materials are treated as confidential unless already public or agreed otherwise.',
        ],
      },
      {
        title: 'Reporting A Concern',
        body: [
          'If you believe you have found a security issue involving NimbusVFX.com or a Nimbus workflow, contact Daniel@NimbusVFX.com with enough detail for us to investigate.',
        ],
      },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    updated: 'August 2, 2026',
    intro:
      'This policy explains how cookies and similar technologies may be used on NimbusVFX.com to operate the site, understand performance, and improve the visitor experience.',
    sections: [
      {
        title: 'How Cookies May Be Used',
        body: [
          'Cookies or similar technologies may support core site behavior, analytics, performance measurement, embedded media, form handling, security, and remembering basic preferences.',
          'Third-party embeds, such as video players or analytics tools, may set their own cookies according to their policies.',
        ],
      },
      {
        title: 'Managing Cookies',
        body: [
          'You can manage cookies through your browser settings. Blocking some cookies may affect embedded video, analytics accuracy, or interactive website features.',
        ],
      },
      {
        title: 'Updates',
        body: [
          'Nimbus may update this policy as the website, analytics, hosting, or embedded services change.',
        ],
      },
    ],
  },
]

export function getLegalPage(slug: string) {
  return legalPages.find((page) => page.slug === slug)
}
