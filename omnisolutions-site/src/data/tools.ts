// The tools directory reads from this list. To add a tool:
//   1) add an entry here
//   2) create the matching page at src/pages/contractor/tools/<slug>.astro
// The index page and contractor hub update automatically.

export type Tool = {
  slug: string;          // URL segment + page filename
  title: string;         // card + page title
  tagline: string;       // one line under the title
  description: string;   // card body + meta description
  audience: string;      // who it's for (shown as a tag)
  status: 'live' | 'coming-soon';
};

export const tools: Tool[] = [
  {
    slug: 'cash-flow-forecaster',
    title: 'Cash Flow Forecaster',
    tagline: 'See the weeks you run out of cash before they happen.',
    description:
      'Map your jobs, draws, and costs and watch your bank balance week by week. The weeks that go tight or negative light up — so you can move a draw or line up credit before it bites.',
    audience: 'Contractors',
    status: 'live',
  },
  // Example of a placeholder you can flesh out later:
  // {
  //   slug: 'change-order-recovery',
  //   title: 'Change Order Profit Recovery',
  //   tagline: 'Find the work you did but never billed.',
  //   description: 'Log change orders and see how much unbilled or unsigned work you are carrying.',
  //   audience: 'Contractors',
  //   status: 'coming-soon',
  // },
];

export const liveTools = () => tools.filter((t) => t.status === 'live');
