export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  category: string;
  thumbnail: string;
  heroImage?: string;
  external?: string;
}

export const articles: Article[] = [
  {
    slug: "the-ultimate-guide-to-saas-product-design",
    title: "The Ultimate Guide to SaaS Product Design",
    excerpt:
      "By focusing on creating an intuitive and user-friendly interface, SaaS companies can enhance the overall user experience and drive customer satisfaction.",
    readTime: "6 min read",
    date: "2023-06-15",
    author: "Adam Shriki",
    category: "Product Design",
    thumbnail: "/images/articles/thumb-saas-guide.svg",
    heroImage: "/images/articles/saas-guide-hero.webp",
  },
  {
    slug: "ux-ui-design-review-template",
    title: "UX UI Design Review — a Must-have Template",
    excerpt:
      "As designers we often need to make sure the developed product looks and behaves as we designed it. This review is a crucial step in any product design process.",
    readTime: "2 min read",
    date: "2022-11-20",
    author: "Adam Shriki",
    category: "UX Research",
    thumbnail: "/images/articles/thumb-design-review.svg",
    heroImage: "/images/articles/design-review-hero.webp",
  },
  {
    slug: "creating-and-updating-icon-fonts",
    title: "Creating and Updating Icon Fonts in 2020",
    excerpt:
      "Icon fonts are a great solution for displaying icons in your web app or website — they're vector, easy to implement and they support old browsers.",
    readTime: "5 min read",
    date: "2020-03-10",
    author: "Adam Shriki",
    category: "Frontend",
    thumbnail: "/images/articles/thumb-icon-fonts.svg",
    heroImage: "/images/articles/icon-fonts-hero.webp",
  },
  {
    slug: "saving-options-ux-guide",
    title:
      'The Different Types of "Saving" Options and How to Choose the Right One',
    excerpt:
      "The process of saving data in complex systems is much more than just a 'Save' button. Review the different options for saving information and how to choose the best one.",
    readTime: "4 min read",
    date: "2022-08-05",
    author: "Adam Shriki",
    category: "UX Research",
    thumbnail: "/images/articles/thumb-saving-options.svg",
    heroImage: "/images/articles/saving-options-hero.webp",
  },
  {
    slug: "the-high-cost-of-interruption",
    title:
      "The High Cost of Interruption: Re-evaluating the Modal Dialog in Modern UX",
    excerpt:
      "Modal dialogs interrupt user flow and demand attention. Are we overusing them? A deep dive into when modals help and when they hurt the user experience.",
    readTime: "7 min read",
    date: "2024-01-15",
    author: "Adam Shriki",
    category: "UX Research",
    thumbnail: "/images/articles/thumb-modal-dialog.svg",
    external:
      "https://medium.com/@adamshriki/the-high-cost-of-interruption-re-evaluating-the-modal-dialog-in-modern-ux-e448fb7559ff",
  },
];
