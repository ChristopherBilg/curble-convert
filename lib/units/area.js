const type = 'area'

module.exports = {
  units: [
    {
      // Anchor unit
      unit: ['square meter', 'sqaure m', 'sq meter', 'sq m'],
      type,
      anchorFrom: 1,
      anchorTo: 1
    },
    {
      unit: ['square kilometer', 'sqaure km', 'sq kilometer', 'sq km'],
      type,
      anchorFrom: 1000000,
      anchorTo: 0.000001
    },
    {
      unit: ['square mile', 'sqaure mi', 'sq mile', 'sq mi'],
      type,
      anchorFrom: 2589988.11,
      anchorTo: 0.0000003861021585
    },
    {
      unit: ['square yard', 'sqaure yd', 'sq yard', 'sq yd'],
      type,
      anchorFrom: 0.836120401,
      anchorTo: 1.196
    },
    {
      unit: ['square foot', 'sqaure ft', 'sq foot', 'sq ft'],
      type,
      anchorFrom: 0.0929022668,
      anchorTo: 10.764
    },
    {
      unit: ['square inches', 'sqaure in', 'sq inches', 'sq in'],
      type,
      anchorFrom: 0.00064516129,
      anchorTo: 1550
    },
    {
      unit: ['hectare'],
      type,
      anchorFrom: 10000,
      anchorTo: 0.0001
    },
    {
      unit: ['acre'],
      type,
      anchorFrom: 4046.86267,
      anchorTo: 0.000247105
    }
  ]
}
