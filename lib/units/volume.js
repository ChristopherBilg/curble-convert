const type = 'volume'

module.exports = {
  units: [
    {
      // Anchor unit
      unit: ['liter', 'l'],
      type,
      anchorFrom: 1,
      anchorTo: 1
    },
    {
      unit: ['gallon', 'gal'],
      type,
      anchorFrom: 3.785,
      anchorTo: 0.2641720524
    },
    {
      unit: ['quart'],
      type,
      anchorFrom: 0.946073794,
      anchorTo: 1.057
    },
    {
      unit: ['pint'],
      type,
      anchorFrom: 0.473260767,
      anchorTo: 2.113
    },
    {
      unit: ['cup'],
      type,
      anchorFrom: 0.23998080153,
      anchorTo: 4.167
    },
    {
      unit: ['fluid oz', 'fl oz'],
      type,
      anchorFrom: 0.0295735494,
      anchorTo: 33.814
    },
    {
      unit: ['tablespoon', 'tbsp'],
      type,
      anchorFrom: 0.0147867747,
      anchorTo: 67.628
    },
    {
      unit: ['teaspoon', 'tsp'],
      type,
      anchorFrom: 0.00492610837,
      anchorTo: 203
    },
    {
      unit: ['cubic meter', 'cubic m'],
      type,
      anchorFrom: 1000,
      anchorTo: 0.001
    },
    {
      unit: ['cubic foot', 'cubic feet', 'cubic ft'],
      type,
      anchorFrom: 28.317,
      anchorTo: 0.0353144754
    },
    {
      unit: ['cubic inches', 'cubic inch', 'cubic in'],
      type,
      anchorFrom: 0.0163869953,
      anchorTo: 61.024
    }
  ]
}
