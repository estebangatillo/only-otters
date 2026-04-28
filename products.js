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
        name: 'Cardinal',
        swatch: '#9B2335',
        image: 'https://files.cdn.printful.com/files/5e5/5e5e396de7a86d3ee05942747901d481_preview.png',
        variants: { S: 5270164594, M: 5270164595, L: 5270164596, XL: 5270164597 }
      },
      {
        name: 'Kelly',
        swatch: '#4F7942',
        image: 'https://files.cdn.printful.com/files/a8c/a8c1b4a11309c74fcdf1e547f0e1d208_preview.png',
        variants: { S: 5270164620, M: 5270164621, L: 5270164622, XL: 5270164623 }
      },
      {
        name: 'White',
        swatch: '#FFFFFF',
        image: 'https://files.cdn.printful.com/files/b2a/b2a52b1fbfabca44397df70afff4ee8e_preview.png',
        variants: { S: 5270164651, M: 5270164652, L: 5270164653, XL: 5270164654 }
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