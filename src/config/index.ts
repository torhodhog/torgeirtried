export const PRODUCT_CATEGORIES = [
   {
      label : 'UI Kits',
      value: 'ui_kits' as const,
      featured: [
         {
            name: 'Editor picks',
            href: '#',
            imageSrc: '/ui-kits/mixed.jpg',
         },
         {
            name: 'Nye Drakter',
            href: '#',
            imageSrc: '/ui-kits/blue.jpg',
         },
         {
            name: 'Salg',
            href: '#',
            imageSrc: '/ui-kits/purple.jpg',
         },
      ]
   },
   {
      label : 'Icons',
      value: 'icons' as const,
      featured: [
         {
            name: 'Favorite Icon Picks',
            href: '#',
            imageSrc: '/icons/picks.jpg',
         },
         {
            name: 'Nye Drakter',
            href: '#',
            imageSrc: '/icons/new.jpg',
         },
         {
            name: 'Salg Icons',
            href: '#',
            imageSrc: '/icons/bestsellers.jpg',
         },
      ]
   }
]