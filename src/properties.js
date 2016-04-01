var CONDITIONS = {
  austria: {
    multipliers: [1, 2, 1, 2, 1, 2, 1],
    regex: /^(AT)U(\d{8})$/
  },
  belgium: {
    regex: /^(BE)(0?\d{9})$/
  },
  bulgaria: {
    multipliers: {
      physical: [2, 4, 8, 5, 10, 9, 7, 3, 6],
      foreigner: [21, 19, 17, 13, 11, 9, 7, 3, 1],
      miscellaneous: [4, 3, 2, 7, 6, 5, 4, 3, 2]
    },
    regex: /^(BG)(\d{9,10})$/
  },
  switzerland: {
    multipliers: [5, 4, 3, 2, 7, 6, 5, 4],
    regex: /^(CHE)(\d{9})(MWST)?$/
  },
  cyprus: {
    regex: /^(CY)([0-59]\d{7}[A-Z])$/
  },
  czech_republic: {
    multipliers: [8, 7, 6, 5, 4, 3, 2],
    lookup: [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10],
    regex: /^(CZ)(\d{8,10})(\d{3})?$/
  },
  germany: {
    regex: /^(DE)([1-9]\d{8})$/
  },
  denmark: {
    multipliers: [2, 7, 6, 5, 4, 3, 2, 1],
    regex: /^(DK)(\d{8})$/
  },
  estonia: {
    multipliers: [3, 7, 1, 3, 7, 1, 3, 7],
    regex: /^(EE)(10\d{7})$/
  },
  greece: {
    multipliers: [256, 128, 64, 32, 16, 8, 4, 2],
    regex: /^(EL)(\d{9})$/
  },
  spain: {
    multipliers: [2, 1, 2, 1, 2, 1, 2],
    regex: [
      /^(ES)([A-Z]\d{8})$/,
      /^(ES)([A-HN-SW]\d{7}[A-J])$/,
      /^(ES)([0-9YZ]\d{7}[A-Z])$/,
      /^(ES)([KLMX]\d{7}[A-Z])$/
    ],
    additional: [
      /^[A-H|J|U|V]\d{8}$/,
      /^[A-H|N-S|W]\d{7}[A-J]$/,
      /^[0-9|Y|Z]\d{7}[A-Z]$/,
      /^[K|L|M|X]\d{7}[A-Z]$/
    ]
  },
  europe: {
    regex: /^(EU)(\d{9})$/
  },
  finland: {
    multipliers: [7, 9, 10, 5, 8, 4, 2],
    regex: /^(FI)(\d{8})$/
  },
  france: {
    regex: [
      /^(FR)(\d{11})$/,
      /^(FR)([A-HJ-NP-Z]\d{10})$/,
      /^(FR)(\d[A-HJ-NP-Z]\d{9})$/,
      /^(FR)([A-HJ-NP-Z]{2}\d{9})$/
    ]

  },
  united_kingdom: {
    multipliers: [8, 7, 6, 5, 4, 3, 2],
    regex: [
      /^(GB)?(\d{9})$/,
      /^(GB)?(\d{12})$/,
      /^(GB)?(GD\d{3})$/,
      /^(GB)?(HA\d{3})$/
    ]

  },
  croatia: {
    regex: /^(HR)(\d{11})$/
  },
  hungary: {
    multipliers: [9, 7, 3, 1, 9, 7, 3],
    regex: /^(HU)(\d{8})$/
  },
  ireland: {
    multipliers: [8, 7, 6, 5, 4, 3, 2],
    regex: [
      /^(IE)(\d{7}[A-W])$/,
      /^(IE)([7-9][A-Z\*\+)]\d{5}[A-W])$/,
      /^(IE)(\d{7}[A-W][AH])$/
    ]

  },
  italy: {
    multipliers: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    regex: /^(IT)(\d{11})$/
  },
  latvia: {
    multipliers: [9, 1, 4, 8, 3, 10, 2, 5, 7, 6],
    regex: /^(LV)(\d{11})$/
  },
  lithunia: {
    multipliers: {
      short: [3, 4, 5, 6, 7, 8, 9, 1],
      med: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2],
      alt: [3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]
    },
    regex: /^(LT)(\d{9}|\d{12})$/
  },
  luxembourg: {
    regex: /^(LU)(\d{8})$/
  },
  malta: {
    multipliers: [3, 4, 6, 7, 8, 9],
    regex: /^(MT)([1-9]\d{7})$/
  },
  netherlands: {
    multipliers: [9, 8, 7, 6, 5, 4, 3, 2],
    regex: /^(NL)(\d{9})B\d{2}$/
  },
  norway: {
    multipliers: [3, 2, 7, 6, 5, 4, 3, 2],
    regex: /^(NO)(\d{9})$/
  },
  poland: {
    multipliers: [6, 5, 7, 2, 3, 4, 5, 6, 7],
    regex: /^(PL)(\d{10})$/
  },
  portugal: {
    multipliers: [9, 8, 7, 6, 5, 4, 3, 2],
    regex: /^(PT)(\d{9})$/
  },
  romania: {
    multipliers: [7, 5, 3, 2, 1, 7, 5, 3, 2],
    regex: /^(RO)([1-9]\d{1,9})$/
  },
  russia: {
    multipliers: {
      m_1: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
      m_2: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
      m_3: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0]
    },
    regex: /^(RU)(\d{10}|\d{12})$/
  },
  serbia: {
    regex: /^(RS)(\d{9})$/
  },
  slovenia: {
    multipliers: [8, 7, 6, 5, 4, 3, 2],
    regex: /^(SI)([1-9]\d{7})$/
  },
  slovakia_republic: {
    regex: /^(SK)([1-9]\d[2346-9]\d{7})$/
  },
  sweden: {
    regex: /^(SE)(\d{10}01)$/
  }
};