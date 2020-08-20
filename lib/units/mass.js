const type = 'mass'

module.exports = {
  units: [
    {
      // Anchor unit
      unit: ['gram', 'g'],
      type,
      anchorFrom: 1,
      anchorTo: 1
    },
    {
      unit: ['microgram'],
      type,
      anchorFrom: 0.000001,
      anchorTo: 1000000
    },
    {
      unit: ['milligram', 'mg'],
      type,
      anchorFrom: 0.001,
      anchorTo: 1000
    },
    {
      unit: ['kilogram', 'kg'],
      type,
      anchorFrom: 1000,
      anchorTo: 0.001
    },
    {
      unit: ['ounce', 'oz'],
      type,
      anchorFrom: 28.3495231247,
      anchorTo: 0.03527396195
    },
    {
      unit: ['pound', 'lb'],
      type,
      anchorFrom: 453.59237,
      anchorTo: 0.00220462262
    },
    {
      unit: ['ton'],
      type,
      anchorFrom: 907194.048807,
      anchorTo: 0.0000011023
    },
    {
      unit: ['tonne'],
      type,
      anchorFrom: 1000000,
      anchorTo: 0.000001
    }
  ]
}
