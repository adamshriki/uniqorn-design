export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "link"; text: string; url: string }
  | { type: "tip"; text: string };

export const articleContent: Record<string, ContentBlock[]> = {
  "the-ultimate-guide-to-saas-product-design": [
    {
      type: "heading",
      level: 2,
      text: "What is SaaS?",
    },
    {
      type: "paragraph",
      text: "SaaS, or Software as a Service, is a cloud-based software delivery model where applications are hosted by a provider and made available to customers over the internet. Instead of installing and maintaining software locally, users access it through a web browser, paying a subscription fee for the service. This model has transformed how businesses operate, offering scalability, accessibility, and cost-effectiveness.",
    },
    {
      type: "heading",
      level: 2,
      text: "Exploring the Importance of SaaS UI/UX Design",
    },
    {
      type: "paragraph",
      text: "In the competitive SaaS landscape, UI/UX design is not just a nice-to-have — it's a critical differentiator. A well-designed interface can be the difference between a user who stays for years and one who churns after the first session. The best SaaS products feel invisible: they let users accomplish their goals without friction, confusion, or unnecessary complexity.",
    },
    {
      type: "paragraph",
      text: "Great SaaS design reduces support costs, increases adoption rates, and drives organic growth through word-of-mouth. When users genuinely enjoy using your product, they become advocates. When they struggle, they leave — often silently.",
    },
    {
      type: "heading",
      level: 2,
      text: "The Key Principles of Effective SaaS UI/UX Design",
    },
    {
      type: "heading",
      level: 3,
      text: "1. Simplicity and Clarity",
    },
    {
      type: "paragraph",
      text: "The best SaaS interfaces strip away unnecessary complexity. Every element on the screen should serve a purpose. If it doesn't help the user accomplish their goal, it's visual noise. Slack exemplifies this principle — despite being a powerful communication platform, its interface remains clean and intuitive.",
    },
    {
      type: "heading",
      level: 3,
      text: "2. Consistency Across the Experience",
    },
    {
      type: "paragraph",
      text: "Consistent design patterns reduce cognitive load. When buttons, forms, navigation, and feedback mechanisms behave the same way throughout the product, users can transfer their learning from one area to another. Zoom achieves this remarkably well — whether you're scheduling a meeting, joining a call, or adjusting settings, the interaction patterns feel familiar.",
    },
    {
      type: "heading",
      level: 3,
      text: "3. Progressive Disclosure",
    },
    {
      type: "paragraph",
      text: "Don't overwhelm users with every feature at once. Show them what they need when they need it. Asana masters this by presenting a simple task view by default while making advanced features like custom fields, automations, and portfolios discoverable as users grow more comfortable.",
    },
    {
      type: "heading",
      level: 3,
      text: "4. Seamless Onboarding",
    },
    {
      type: "paragraph",
      text: "First impressions matter enormously in SaaS. Google Workspace provides an excellent example of gradual onboarding — new users can start with familiar tools like Docs and Sheets, then discover more advanced collaboration features as their needs evolve.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why User-Centric Design and User Research Are So Important",
    },
    {
      type: "paragraph",
      text: "User-centric design isn't a phase — it's a mindset that should permeate every decision. This means conducting regular user research through interviews, usability testing, analytics review, and feedback collection. The insights gained from real users are invaluable and often surprising.",
    },
    {
      type: "paragraph",
      text: "Teams that skip user research often build features based on assumptions. These assumptions, no matter how well-intentioned, frequently miss the mark. Investing in understanding your users' workflows, pain points, and mental models pays dividends in product quality and user satisfaction.",
    },
    {
      type: "heading",
      level: 2,
      text: "Optimizing Your SaaS Product Design for User Engagement and Retention",
    },
    {
      type: "list",
      items: [
        "Design intuitive navigation that matches users' mental models",
        "Create meaningful empty states that guide users toward value",
        "Implement smart defaults that work for the majority of use cases",
        "Build feedback loops — show users the impact of their actions",
        "Reduce time-to-value by streamlining critical workflows",
        "Use data visualization to make complex information digestible",
        "Design for both power users and beginners simultaneously",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "How Top SaaS Companies Achieved Success Through Design",
    },
    {
      type: "heading",
      level: 3,
      text: "1. Slack",
    },
    {
      type: "paragraph",
      text: "Slack transformed workplace communication by making it feel less like email and more like a conversation. Their design prioritizes real-time interaction, searchability, and integration with other tools. The playful personality — from loading messages to emoji reactions — makes a productivity tool feel enjoyable.",
    },
    {
      type: "heading",
      level: 3,
      text: "2. Zoom",
    },
    {
      type: "paragraph",
      text: "Zoom's explosive growth wasn't just about timing — it was about design simplicity. While competitors loaded their products with features, Zoom focused on making video calls work reliably with minimal friction. One click to join, consistent controls, and a clean interface made it accessible to everyone from tech-savvy professionals to grandparents.",
    },
    {
      type: "heading",
      level: 3,
      text: "3. Canva",
    },
    {
      type: "paragraph",
      text: "Canva democratized design by creating an interface that felt approachable rather than intimidating. Unlike professional tools with steep learning curves, Canva's template-first approach and drag-and-drop simplicity enabled anyone to create professional-looking designs. Their success proves that powerful doesn't have to mean complicated.",
    },
    {
      type: "heading",
      level: 2,
      text: "SaaS Products We've Worked On",
    },
    {
      type: "paragraph",
      text: "At Uniqorn Design, we've had the privilege of working with some incredible SaaS companies to elevate their product design:",
    },
    {
      type: "link",
      text: "Pendo — Product analytics and user guidance platform",
      url: "https://www.pendo.io",
    },
    {
      type: "link",
      text: "Atera — All-in-one IT management platform",
      url: "https://www.atera.com",
    },
    {
      type: "link",
      text: "Optitex — 3D fashion design and pattern making",
      url: "https://optitex.com",
    },
    {
      type: "paragraph",
      text: "Each of these projects reinforced our belief that great SaaS design starts with deep empathy for the user and a commitment to continuous iteration.",
    },
  ],

  "ux-ui-design-review-template": [
    {
      type: "paragraph",
      text: "As designers, we often need to make sure the developed product looks and behaves as we designed it. This design review is a crucial step in any product design process — it ensures quality, catches issues early, and creates a clear communication channel between design and development teams.",
    },
    {
      type: "paragraph",
      text: "Over the years, I've developed a simple but effective template that helps structure this review process. Whether you're a solo designer or part of a large team, having a standardized approach to design reviews saves time and prevents things from falling through the cracks.",
    },
    {
      type: "heading",
      level: 2,
      text: "Let's Break It Down",
    },
    {
      type: "paragraph",
      text: "The template includes the following fields for each review item:",
    },
    {
      type: "list",
      items: [
        "Date — When the review was conducted",
        "Epic/Story — The relevant Jira ticket or user story",
        "Mockups — Link to the original design files (Figma, Sketch, etc.)",
        "PM Owners — The product manager(s) responsible",
        "Designers — The designer(s) who created the mockups",
        "Reviewer — Who is conducting the review",
        "Image — Screenshot of the current implementation",
        "Severity: Low — Minor visual inconsistencies (spacing, colors slightly off)",
        "Severity: Medium — Functional or interaction issues that affect usability",
        "Severity: High — Critical issues that block the user or break the experience",
        "What's Wrong — Clear description of the discrepancy between design and implementation",
        "Screenshots — Visual evidence showing the issue",
      ],
    },
    {
      type: "tip",
      text: "Prioritize issues by severity. High-severity items should be fixed before launch, medium items in the next sprint, and low items can be batched for a polish sprint.",
    },
    {
      type: "heading",
      level: 2,
      text: "Get the Template",
    },
    {
      type: "paragraph",
      text: "I've created a Google Doc template that you can copy and adapt for your own team's workflow. It's designed to be simple enough to actually use — because the best process is one that people follow consistently.",
    },
    {
      type: "link",
      text: "Download the UX/UI Design Review Template (Google Doc)",
      url: "https://docs.google.com/document/d/1GYFKMnS0BWZ_KBV8jLAsVPqDH-mKaOmSpmX6ZCCfsIo/edit",
    },
    {
      type: "paragraph",
      text: "Feel free to modify it to fit your team's needs. The key is consistency — use it for every feature release, and you'll catch issues before they reach your users.",
    },
  ],

  "creating-and-updating-icon-fonts": [
    {
      type: "paragraph",
      text: "Icon fonts are a great solution for displaying icons in your web app or website — they're vector-based, easy to implement, lightweight, and they support older browsers. While SVG icons have gained popularity, icon fonts remain a solid choice for many projects, especially when you need broad compatibility and easy CSS styling.",
    },
    {
      type: "paragraph",
      text: "In this guide, I'll walk through the complete process of creating, generating, and maintaining your own custom icon font — from designing the icons in Sketch or Figma to generating the font files and integrating them into your project.",
    },
    {
      type: "heading",
      level: 2,
      text: "Icon Size and Padding",
    },
    {
      type: "paragraph",
      text: "Before you start designing, establish consistent artboard specifications:",
    },
    {
      type: "list",
      items: [
        "Use a consistent artboard size (e.g., 24×24px or 32×32px)",
        "Leave 1-2px padding on all sides to prevent clipping",
        "Align icons to a pixel grid for sharp rendering",
        "Keep stroke widths consistent across all icons (e.g., 2px)",
        "Design at the largest size you'll need, then scale down",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Naming Convention",
    },
    {
      type: "paragraph",
      text: "Establish a clear naming convention early. I recommend using a prefix followed by a descriptive name: icon-arrow-left, icon-settings, icon-user-profile. This makes icons easy to find, sort, and reference in code. Avoid abbreviations — clarity beats brevity.",
    },
    {
      type: "heading",
      level: 2,
      text: "One Combined Shape",
    },
    {
      type: "paragraph",
      text: "Each icon must be a single combined shape (compound path). If your icon has multiple overlapping shapes, use boolean operations (Union/Subtract) to merge them into one. Font generators can't handle multiple separate shapes within a single glyph — they'll either merge them incorrectly or drop parts of the icon.",
    },
    {
      type: "heading",
      level: 2,
      text: "Flatten Your Shape",
    },
    {
      type: "paragraph",
      text: "After combining, flatten all shapes. This converts strokes to outlines and removes any transformations. In Sketch, use Layer → Paths → Flatten. In Figma, use Flatten Selection (Ctrl+E). This step ensures the SVG output is clean and predictable.",
    },
    {
      type: "heading",
      level: 2,
      text: "Install SVGO Compressor Plugin",
    },
    {
      type: "paragraph",
      text: "Before exporting, install the SVGO Compressor plugin for Sketch (or use SVGO as a standalone tool). This optimizes your SVG output by removing unnecessary metadata, comments, and hidden elements. Cleaner SVGs mean fewer issues during font generation.",
    },
    {
      type: "heading",
      level: 2,
      text: "Export Icons as SVG",
    },
    {
      type: "paragraph",
      text: "Export each icon as an individual SVG file. Make sure to export just the icon shape, not the entire artboard. Check each exported SVG — open them in a text editor and verify they contain a single clean path without embedded styles or transforms.",
    },
    {
      type: "heading",
      level: 2,
      text: "Make the Icons Responsive",
    },
    {
      type: "paragraph",
      text: "Open your exported SVGs in a text editor (Sublime Text, VS Code) and remove any fixed width and height attributes from the root SVG element. Keep only the viewBox attribute. This makes the icons responsive and scalable via CSS.",
    },
    {
      type: "tip",
      text: "In Sublime Text, you can use Find & Replace with regex to batch-remove width/height attributes across all SVG files at once.",
    },
    {
      type: "heading",
      level: 2,
      text: "IcoMoon",
    },
    {
      type: "paragraph",
      text: "IcoMoon (icomoon.io) is a free web-based tool for generating icon fonts from SVG files. It's reliable, well-maintained, and gives you full control over the output. Upload your SVGs, assign Unicode values, and configure the font settings.",
    },
    {
      type: "heading",
      level: 2,
      text: "Generating the Icon Font",
    },
    {
      type: "paragraph",
      text: "In IcoMoon, select all your imported icons and click 'Generate Font.' Configure the font name, class prefix, and encoding settings. Download the generated package — it includes the font files (WOFF, WOFF2, TTF, EOT), a CSS file with all the icon classes, and a demo HTML page.",
    },
    {
      type: "heading",
      level: 2,
      text: "Using the Icon Font",
    },
    {
      type: "paragraph",
      text: "Add the font files to your project and include the CSS file. Then use icons in your HTML with simple class names: <i class=\"icon-arrow-left\"></i>. You can style them with CSS just like text — change color, size, add transitions, and apply hover effects.",
    },
    {
      type: "heading",
      level: 2,
      text: "Updating Your Icon Set",
    },
    {
      type: "paragraph",
      text: "When you need to add new icons to an existing font, don't start from scratch. IcoMoon lets you import your existing project and add new icons incrementally. This preserves the Unicode assignments of existing icons, so your existing code won't break.",
    },
    {
      type: "heading",
      level: 2,
      text: "Reimporting the Whole IcoMoon Project",
    },
    {
      type: "paragraph",
      text: "Always save your IcoMoon project file (selection.json). When you need to update the font, import this file back into IcoMoon to restore your full icon set. Then add or modify icons as needed and regenerate. This workflow ensures consistency and prevents accidental changes to existing icons.",
    },
    {
      type: "tip",
      text: "Keep the IcoMoon selection.json file in your project's version control. It's the single source of truth for your icon font configuration.",
    },
  ],

  "saving-options-ux-guide": [
    {
      type: "paragraph",
      text: "The process of saving data in complex systems is much more than just a 'Save' button. As products grow in complexity, the way users create, edit, and preserve their work needs careful design consideration. The wrong saving pattern can lead to data loss, user frustration, and a lack of confidence in the product.",
    },
    {
      type: "paragraph",
      text: "In this article, I'll review the different options for saving information and help you choose the best approach for your specific use case.",
    },
    {
      type: "heading",
      level: 2,
      text: "View Save",
    },
    {
      type: "paragraph",
      text: "The View Save pattern presents a dedicated 'Save' button within the current view. The user makes changes and explicitly clicks Save to persist them. This is the most familiar pattern and works well when users need to review their changes before committing.",
    },
    {
      type: "heading",
      level: 3,
      text: "When to Use",
    },
    {
      type: "list",
      items: [
        "Settings pages with multiple related fields",
        "Profile or account information editing",
        "Configuration screens where changes should be intentional",
        "Forms where users might want to abandon changes",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Single View Tab Save",
    },
    {
      type: "paragraph",
      text: "When a view has tabbed navigation, the Single View Tab Save pattern scopes the save action to the currently active tab. Changes in one tab don't affect or require saving other tabs.",
    },
    {
      type: "heading",
      level: 3,
      text: "When to Use",
    },
    {
      type: "list",
      items: [
        "Settings organized by category (General, Notifications, Security)",
        "When tabs contain independent data sets",
        "When saving one section shouldn't require completing others",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Multiple View Tabs Save",
    },
    {
      type: "paragraph",
      text: "Unlike Single View Tab Save, this pattern requires all tabs to be saved together with a single action. The save button persists changes across all tabs simultaneously. This is appropriate when tabs represent different facets of the same entity.",
    },
    {
      type: "heading",
      level: 3,
      text: "When to Use",
    },
    {
      type: "list",
      items: [
        "Entity editing where tabs represent related aspects (e.g., Product → Details, Pricing, Images)",
        "When data across tabs has dependencies or validation rules",
        "When partial saves could leave data in an inconsistent state",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Creation Save",
    },
    {
      type: "paragraph",
      text: "The Creation Save pattern is used when users are creating a new entity. It typically involves a form with a clear 'Create' or 'Save' call-to-action. The key difference from editing is the user's mental model — they're bringing something new into existence.",
    },
    {
      type: "heading",
      level: 3,
      text: "When to Use",
    },
    {
      type: "list",
      items: [
        "New item creation flows (create project, new user, add product)",
        "Wizard or multi-step creation processes",
        "When the entity doesn't exist until explicitly saved",
      ],
    },
    {
      type: "tip",
      text: "Pay attention to microcopy. 'Create Project' is clearer than 'Save' in a creation context. The button label should reflect the action's outcome.",
    },
    {
      type: "heading",
      level: 2,
      text: "Side Panel Save (Creation)",
    },
    {
      type: "paragraph",
      text: "Side panels (or drawers) that slide in from the edge of the screen are excellent for creation flows that don't warrant a full page. They keep the user in context while providing a focused space for the new entity's form.",
    },
    {
      type: "heading",
      level: 3,
      text: "When to Use",
    },
    {
      type: "list",
      items: [
        "Quick-add flows (add a comment, create a tag, new list item)",
        "When context from the main view is important during creation",
        "Secondary creation flows that shouldn't interrupt the primary workflow",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Side Panel Save (Edit)",
    },
    {
      type: "paragraph",
      text: "Similar to the creation variant, but for editing existing entities. The side panel shows the current values and allows inline modification. This pattern is ideal when users need to quickly edit an item from a list without losing their place.",
    },
    {
      type: "heading",
      level: 3,
      text: "When to Use",
    },
    {
      type: "list",
      items: [
        "Editing items from a list or table view",
        "Quick property changes that don't need a full page",
        "When users need to reference the list while editing",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Autosave",
    },
    {
      type: "paragraph",
      text: "Autosave eliminates the need for an explicit save action. Changes are persisted automatically as the user makes them, either immediately or after a short debounce period. This creates a fluid, worry-free editing experience — but it's not appropriate for every situation.",
    },
    {
      type: "tip",
      text: "Always provide clear feedback when autosaving. A subtle 'Saving...' → 'Saved' indicator gives users confidence that their work is preserved. Without this feedback, users will constantly wonder if their changes were captured.",
    },
    {
      type: "heading",
      level: 3,
      text: "When to Use",
    },
    {
      type: "list",
      items: [
        "Document and content editing (like Google Docs)",
        "Form fields that can be validated independently",
        "When the cost of losing changes is high",
        "Collaborative editing environments",
        "NOT suitable when changes have significant consequences or need review",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Confirmation / Save Dialog",
    },
    {
      type: "paragraph",
      text: "The Confirmation Dialog appears when a user attempts to navigate away from unsaved changes. It typically offers three options: Save, Don't Save (Discard), and Cancel (stay on page). This pattern acts as a safety net, preventing accidental data loss.",
    },
    {
      type: "heading",
      level: 3,
      text: "When to Use",
    },
    {
      type: "list",
      items: [
        "Any view with explicit save where navigation would discard changes",
        "Long forms where re-entering data would be painful",
        "When the user might not realize they have unsaved changes",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "List Item Save & Discard",
    },
    {
      type: "paragraph",
      text: "This pattern provides inline save and discard actions on individual list items. When a user edits an item in a list, small Save and Cancel buttons appear on that specific item. This keeps the scope of changes clear and allows batch workflows where users edit multiple items independently.",
    },
    {
      type: "heading",
      level: 3,
      text: "When to Use",
    },
    {
      type: "list",
      items: [
        "Editable lists or tables with inline editing",
        "When users may edit multiple items in sequence",
        "When each item's changes are independent",
        "Admin panels and data management interfaces",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Conclusion",
    },
    {
      type: "paragraph",
      text: "There's no one-size-fits-all saving pattern. The right choice depends on your specific context: the type of data, the consequences of losing changes, the user's workflow, and the complexity of the form. Often, a single product will use multiple saving patterns across different areas.",
    },
    {
      type: "paragraph",
      text: "The key is to be intentional and consistent. Choose patterns that match your users' expectations, provide clear feedback about save state, and always protect against accidental data loss. Your users will thank you — even if they never consciously notice.",
    },
  ],

  "choosing-the-right-ui-component": [
    {
      type: "paragraph",
      text: "In this article, I'll explain how to choose the right UI component for the type of message you want to deliver to your users. For this purpose, I created a friction scale which rates UI components according to the level of friction they create for users.",
    },
    {
      type: "image",
      src: "/images/articles/ui-components/friction-scale.webp",
      alt: "UI components friction scale from 1 to 10",
      caption: "UI components friction scale — from 1 (lowest) to 10 (highest friction)",
    },
    {
      type: "heading",
      level: 2,
      text: "Why Do We Need This?",
    },
    {
      type: "paragraph",
      text: "Communicating with users is crucial. Messages can be delivered in many ways and by different mediums. Different stakeholders in the company want to deliver different kinds of messages — product owners might want to let users know about new features, marketing managers want to upsell or advertise, and support agents want to help users complete certain tasks or flows.",
    },
    {
      type: "paragraph",
      text: "Creating a structured scale for different types of messages will help us organize and prioritize our messages. This will help our users understand us better and hopefully, even love us.",
    },
    {
      type: "heading",
      level: 2,
      text: "Push Notifications — (10) Highest Friction",
    },
    {
      type: "image",
      src: "/images/articles/ui-components/push-notification.png",
      alt: "Push notification example",
    },
    {
      type: "paragraph",
      text: "When allowed, push notifications deliver high friction messages on mobile and web applications. They show up on top of everything else, usually accompanied by a sound, even if the user isn't currently using the app.",
    },
    {
      type: "list",
      items: [
        "Deliver high priority call-to-action messages",
        "Let users know of something valuable for them",
      ],
    },
    {
      type: "tip",
      text: "Ask users for permissions at the exact moment they might benefit from granting it. Use notifications wisely and cautiously so users will develop empathy towards your messages, rather than resentment.",
    },
    {
      type: "heading",
      level: 2,
      text: "View — (9) High Friction",
    },
    {
      type: "image",
      src: "/images/articles/ui-components/view.gif",
      alt: "Full-screen view example",
    },
    {
      type: "paragraph",
      text: "Some content is best experienced in a separated, dedicated view, allowing users to focus on one individual object and its related actions at a time. It is the highest friction inducing form of showing content inside the app, so its use should be justified.",
    },
    {
      type: "list",
      items: [
        "Focus and engage users more deeply with specific content and its related actions",
        "Show complicated data that requires a lot of on-screen real estate",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Dialog / Modal — (8) High Friction",
    },
    {
      type: "image",
      src: "/images/articles/ui-components/dialog.gif",
      alt: "Dialog modal example",
    },
    {
      type: "paragraph",
      text: "Dialogs appear without warning, requiring users to stop whatever it is they're currently doing. Use them sparingly, since not every choice or setting change justifies such an interruption.",
    },
    {
      type: "list",
      items: [
        "Keep users in a certain flow — allow users to perform a particular action without exiting the screen they're currently on",
        "Capture users' focus and remove secondary distractions",
        "Bring attention to a choice users need to make or to specific information they need to know before moving forward",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Banner — (7) High Friction",
    },
    {
      type: "image",
      src: "/images/articles/ui-components/banner.gif",
      alt: "Banner notification example",
    },
    {
      type: "paragraph",
      text: "Banners display important, succinct messages and provide optional actions for users. They should be displayed at the top of the screen, below a top app bar. Since their location is consistent and they're non-modal, they allow users to either ignore them or interact with them at any time.",
    },
    {
      type: "list",
      items: [
        "Inform users of site-wide issues",
        "Display warnings or errors that will directly impact users' ability to complete certain tasks",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Growl — (6) Medium Friction",
    },
    {
      type: "image",
      src: "/images/articles/ui-components/growl.gif",
      alt: "Growl notification example",
    },
    {
      type: "paragraph",
      text: "A Growl displays a promoted message without interrupting the ongoing use of the app. In addition to text, it usually shows an image or an icon, as well as a CTA that contains a deep link or an external link. It floats on top of all other elements at the bottom left or right corner of the screen and needs to be explicitly dismissed.",
    },
    {
      type: "list",
      items: [
        "Promote certain communications without disrupting users",
        "Show warnings or alerts triggered in the background that don't have an immediate effect on users",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Snackbar / Toast — (5) Medium Friction",
    },
    {
      type: "image",
      src: "/images/articles/ui-components/snackbar.gif",
      alt: "Snackbar toast notification example",
    },
    {
      type: "paragraph",
      text: "Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, at the bottom part of the interface. They shouldn't interrupt the user experience and don't require any user input to disappear. Snackbars automatically disappear after four to ten seconds.",
    },
    {
      type: "heading",
      level: 2,
      text: "Popover — (4) Low-Medium Friction",
    },
    {
      type: "image",
      src: "/images/articles/ui-components/popover.gif",
      alt: "Popover component example",
    },
    {
      type: "paragraph",
      text: "Popovers contain helpful information like explanation of context. They appear next to the relevant element and may contain actions related to it. They can be triggered independently or by a certain action.",
    },
    {
      type: "list",
      items: [
        "Provide extra information that might be useful, combined with the question mark icon",
        "Provide direction for filling out a form",
        "Offer more actions related to a certain element in the interface",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Callout — (3) Low Friction",
    },
    {
      type: "image",
      src: "/images/articles/ui-components/callout.gif",
      alt: "Callout component example",
    },
    {
      type: "paragraph",
      text: "Callouts are text excerpts, used as a visual cue to draw attention to the text. They're used to help direct users towards important pieces of information. They should appear on top of the element they refer to, without blocking any other part of the interface.",
    },
    {
      type: "list",
      items: [
        "Warn users before asking them to take action, in anticipation of a significant change",
        "Let users know something has gone wrong — as an error message",
        "Let users know they have successfully completed an action — as a success message",
        "Alert users about additional information without requiring an action — as an informative message",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Tooltip — (2) Low Friction",
    },
    {
      type: "image",
      src: "/images/articles/ui-components/tooltip.gif",
      alt: "Tooltip component example",
    },
    {
      type: "paragraph",
      text: "A tooltip is a brief, informative message that appears when a user interacts with an element within a GUI. Tooltips are usually triggered through a mouse-hover or keyboard-hover gesture. They are highly contextual and specific — don't use tooltips for information that is vital to task completion.",
    },
    {
      type: "list",
      items: [
        "Provide information for unlabeled icons",
        "Provide descriptions or explanations for their paired element",
        "Provide brief and helpful content inside the tooltip",
        "Position the tooltip so it doesn't block related content",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Email — (1) Lowest Friction",
    },
    {
      type: "image",
      src: "/images/articles/ui-components/email.gif",
      alt: "Email notification example",
    },
    {
      type: "paragraph",
      text: "Email messages are relayed through email servers provided by all Internet Service Providers. While emails are low-friction, they should be fully customizable so each user can tailor them to their own interests.",
    },
    {
      type: "list",
      items: [
        "Activate user accounts",
        "Deliver welcome or onboarding messages",
        "Invite or share content with other users",
        "Notify about activity",
        "Send reports and dashboards",
        "Reset password or perform two-factor authentication",
        "Notify users regarding security issues or changes in their account",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Conclusion",
    },
    {
      type: "image",
      src: "/images/articles/ui-components/conclusion.gif",
      alt: "UI components overview",
    },
    {
      type: "paragraph",
      text: "We've seen many different types of messages used for different purposes. Choosing the right element depends both on the content and the context of the message. Have fun in the world of non-disruptive messages!",
    },
  ],
};
