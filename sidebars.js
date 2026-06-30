const sidebars = {
  tutorialSidebar: [
    'intro',

    {
      type: 'category',
      label: 'Workflow',
      link: {
        type: 'doc',
        id: 'workflow/index',
      },
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'workflow/step-1-platform-registration',
          label: 'Step 1: Platform Account Registration',
        },
        {
          type: 'doc',
          id: 'workflow/step-2-get-agency-account',
          label: 'Step 2: Get TikTok Agency Ad Account',
        },
        {
          type: 'category',
          label: 'Step 3: Add Fund',
          link: {
            type: 'doc',
            id: 'workflow/step-3-add-fund/index',
          },
          collapsed: false,
          items: [
            'workflow/step-3-add-fund/credit-card',
            'workflow/step-3-add-fund/payoneer',
            'workflow/step-3-add-fund/usdt',
          ],
        },
        {
          type: 'doc',
          id: 'workflow/step-4-money-allocation',
          label: 'Step 4: Money Allocation',
        },
      ],
    },

    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'doc',
        id: 'features/index',
      },
      collapsed: false,
      items: [
        'features/auto-top-up',
        'features/account-revocation',
        'features/refund',
        'features/customer-tier',
      ],
    },

    'partnership-program',
    'affiliate-program',
    'policies-terms-of-service',
  {
  type: 'category',
  label: 'FAQ',
  link: {
    type: 'doc',
    id: 'faq/index',
  },
  collapsed: false,
  items: [
    'faq/what-is-exaggerated-content-ads',
    'faq/why-should-we-follow-best-practice',
    'faq/how-can-i-connect-with-support-team',
    'faq/why-tiktok-ads-arent-spending',
  ],
},