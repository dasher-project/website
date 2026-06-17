/**
 * Navigation item interface
 */
export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

/**
 * Documentation navigation structure
 * Only includes pages that actually exist
 */
export const docsNav: NavItem[] = [
  {
    title: 'Documentation',
    href: '/docs/',
  },
  {
    title: 'Developers',
    href: '/developers/',
    children: [
      { title: 'Architecture', href: '/developers/architecture/' },
      { title: 'Contributing', href: '/developers/contributing/' },
      { title: 'Feature parity', href: '/developers/feature-parity/' },
      { title: 'RFCs', href: '/developers/rfcs/' },
      { title: 'Design tokens', href: '/developers/design/' },
      { title: 'Build: DasherCore', href: '/developers/build-guides/core/' },
      { title: 'Build: Apple', href: '/developers/build-guides/apple/' },
      { title: 'Build: Windows', href: '/developers/build-guides/windows/' },
      { title: 'Build: GTK', href: '/developers/build-guides/gtk/' },
    ],
  },
  {
    title: 'Getting Started',
    href: '/docs/getting-started/',
    children: [
      { title: 'Install', href: '/docs/getting-started/install/' },
      { title: 'Windows', href: '/docs/getting-started/install/windows/' },
      { title: 'Linux', href: '/docs/getting-started/install/linux/' },
      { title: 'Mac', href: '/docs/getting-started/install/mac/' },
      { title: 'Android', href: '/docs/getting-started/install/android/' },
      { title: 'Tips for Novices', href: '/docs/getting-started/how-to/tips/' },
      { title: 'Dasher Manual', href: '/docs/getting-started/how-to/manual/' },
    ],
  },
  {
    title: 'Concepts',
    href: '/docs/concepts/',
    children: [{ title: 'How Dasher Works', href: '/docs/concepts/how-dasher-works/' }],
  },
  {
    title: 'Special Needs',
    href: '/docs/special-needs/',
  },
  {
    title: 'Languages',
    href: '/docs/languages/',
    children: [{ title: 'Creating Alphabets', href: '/docs/languages/creating-alphabets/' }],
  },
  {
    title: 'History',
    href: '/docs/history/',
  },
  {
    title: 'Tutorials',
    href: '/docs/tutorials/',
    children: [{ title: 'Advanced Tutorial', href: '/docs/tutorials/advanced/' }],
  },
  {
    title: 'Reference',
    href: '/docs/reference/',
    children: [{ title: 'Parameter Reference', href: '/docs/reference/parameters/' }],
  },
  {
    title: 'Research',
    href: '/docs/research/',
    children: [
      { title: 'Publications', href: '/docs/research/publications/' },
      { title: 'Presentations', href: '/docs/research/presentations/' },
      { title: 'Press', href: '/docs/research/press/' },
    ],
  },
];

/**
 * Get current section and page from navigation
 */
export function getCurrentSection(pathname: string): { section?: NavItem; page?: NavItem } {
  for (const section of docsNav) {
    if (pathname.startsWith(section.href)) {
      if (section.href === pathname) {
        return { section, page: section };
      }
      if (section.children) {
        for (const page of section.children) {
          if (pathname.startsWith(page.href)) {
            return { section, page };
          }
        }
      }
    }
  }
  return {};
}

/**
 * Get previous and next pages
 */
export function getPrevNext(pathname: string): { prev?: NavItem; next?: NavItem } {
  const flat: NavItem[] = [];
  for (const section of docsNav) {
    flat.push(section);
    if (section.children) {
      flat.push(...section.children);
    }
  }

  const index = flat.findIndex((item) => pathname.startsWith(item.href));
  return {
    prev: index > 0 ? flat[index - 1] : undefined,
    next: index < flat.length - 1 ? flat[index + 1] : undefined,
  };
}
