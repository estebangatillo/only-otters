const PRODUCTS = [
  {
    id: 'the-gathering',
    name: 'The Gathering',
    tagline: 'Two otters. One heart. No shoulds.',
    price: 27,
    priceId: 'price_1TNjPBRywbMDnJmpzx2UmLse',
    blank: 'Bella + Canvas 3001 · 100% combed ring-spun cotton · Made in USA',
    colors: [
      {
        name: 'Heather Grass Green',
        swatch: '#7B9E5A',
        image: 'https://files.cdn.printful.com/files/e3a/e3a9c6eb4203f4f9c114e8ff5f68f367_preview.png',
        variants: { S: 5286714686, M: 5286714688, L: 5286714689, XL: 5286714690 }
      },
      {
        name: 'Orange',
        swatch: '#E8621A',
        image: 'https://files.cdn.printful.com/files/ea0/ea01da7b25781f289dffa1dd69717fc5_preview.png',
        variants: { S: 5286714692, M: 5286714693, L: 5286714695, XL: 5286714696 }
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        image: 'https://files.cdn.printful.com/files/cd1/cd165709da2c2a5145b390f4d3bda8ee_preview.png',
        variants: { S: 5286714697, M: 5286714698, L: 5286714700, XL: 5286714701 }
      }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'the-declaration',
    name: 'The Declaration',
    tagline: 'Bigger logo. Same eternal truth.',
    price: 27,
    priceId: 'price_1TNjPBRywbMDnJmpzx2UmLse',
    blank: 'Bella + Canvas 3001 · 100% combed ring-spun cotton · Made in USA',
    colors: [
      {
        name: 'Heather Prism Mint',
        swatch: '#B2D8D8',
        image: 'https://files.cdn.printful.com/files/1a1/1a199df86400fdb7292d746a4a8561e9_preview.png',
        variants: { S: 5285172486, M: 5285172487, L: 5285172488, XL: 5285172489 }
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        image: 'https://files.cdn.printful.com/files/71c/71c4cb61395df80b89e701100f2cadef_preview.png',
        variants: { S: 5285172491, M: 5285172493, L: 5285172495, XL: 5285172497 }
      }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'the-orbit',
    name: 'The Orbit',
    tagline: 'Two otters. Infinite loop. 100% organic.',
    price: 29,
    priceId: 'price_1TRHzkRywbMDnJmpfWdLqWwv',
    blank: 'Stanley/Stella STTU169 · 100% organic cotton · GOTS certified',
    colors: [
      {
        name: 'Heather Grey',
        swatch: '#9E9E9E',
        image: 'https://files.cdn.printful.com/files/32a/32a095cb46c9f6f97e4a2a4c25927ffe_preview.png',
        variants: { S: 5285165451, M: 5285165452, L: 5285165453, XL: 5285165454 }
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        image: 'https://files.cdn.printful.com/files/0db/0db22e01ade69612f3b8b0019e1aaf88_preview.png',
        variants: { S: 5285165455, M: 5285165456, L: 5285165457, XL: 5285165458 }
      }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'the-soloist',
    name: 'The Soloist',
    tagline: 'One otter. Fully enlightened.',
    price: 27,
    priceId: 'price_1TNjPBRywbMDnJmpzx2UmLse',
    blank: 'Bella + Canvas 3001 · 100% combed ring-spun cotton · Made in USA',
    colors: [
      {
        name: 'White',
        swatch: '#FFFFFF',
        image: 'https://files.cdn.printful.com/files/f56/f56bf8017cca5047fcbb52cf24e80072_preview.png',
        variants: { S: 5285148900, M: 5285148901, L: 5285148902, XL: 5285148903 }
      }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'the-gathering-her',
    name: 'The Gathering — Her',
    tagline: 'The original. Cut for women.',
    price: 27,
    priceId: 'price_1TNjPBRywbMDnJmpzx2UmLse',
    blank: 'Stanley/Stella SATW002 · 100% organic cotton · Women\'s ribbed neck',
    colors: [
      {
        name: 'White',
        swatch: '#FFFFFF',
        image: 'https://files.cdn.printful.com/files/1d2/1d29865d79756381535b7462a33ef568_preview.png',
        variants: { S: 5285220683, M: 5285220684, L: 5285220685, XL: 5285220686 }
      }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'the-drift',
    name: 'The Drift',
    tagline: 'Effortless. Like an otter on a river.',
    price: 27,
    priceId: 'price_1TNjPBRywbMDnJmpzx2UmLse',
    blank: 'Bella + Canvas 3480 · Unisex jersey tank · Made in USA',
    colors: [
      {
        name: 'Athletic Heather',
        swatch: '#B0AEA8',
        image: 'https://files.cdn.printful.com/files/1f5/1f5e94ab778fa5c025a7efc6f7893df8_preview.png',
        variants: { S: 5285793482, M: 5285793483, L: 5285793484, XL: 5285793485 }
      }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'the-current',
    name: 'The Current',
    tagline: 'Flow with it. There are only otters.',
    price: 27,
    priceId: 'price_1TNjPBRywbMDnJmpzx2UmLse',
    blank: 'Next Level 6733 · Ladies\' triblend racerback tank',
    colors: [
      {
        name: 'Vintage Turquoise',
        swatch: '#4AACB0',
        image: 'https://files.cdn.printful.com/files/6df/6df1e095af0b9aa3991eba0d64419f00_preview.png',
        variants: { XS: 5286710949, S: 5286710950, M: 5286710951, L: 5286710952 }
      },
      {
        name: 'Heather White',
        swatch: '#F0EEE9',
        image: 'https://files.cdn.printful.com/files/4d4/4d43d025500131c2f8144f8aa7d7ddde_preview.png',
        variants: { XS: 5286710953, S: 5286710954, M: 5286710955, L: 5286710956 }
      }
    ],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'otter-tote',
    name: 'The Vessel',
    tagline: 'Carry your things. And the truth.',
    price: 25,
    priceId: 'price_1TNlT8RywbMDnJmpJ4fHKHOs',
    blank: 'Econscious EC8000 · Organic cotton · One size',
    colors: [
      {
        name: 'Oyster',
        swatch: '#D4C5A9',
        image: 'https://files.cdn.printful.com/files/fa4/fa4a5e0282ef8fe2f5692d36b40e4590_preview.png',
        variants: { 'One Size': 5270158937 }
      }
    ],
    sizes: ['One Size']
  }
];