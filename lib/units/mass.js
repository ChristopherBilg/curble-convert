const type = 'mass'

module.exports = {
  units: [
    {
      unit: ['kilogram', 'kg'],
      type,
      anchorFrom: 1000,
      anchorTo: 1 / 1000
    },
    {
      unit: ['gram', 'g'],
      type,
      anchorFrom: 1,
      anchorTo: 1
    },
    {
      unit: ['milligram', 'mg'],
      type,
      anchorFrom: 1 / 1000,
      anchorTo: 1000
    },
    {
      unit: ['microgram'],
      type,
      anchorFrom: 1 / 1000000,
      anchorTo: 1000000
    },
    {
      unit: ['tonne'],
      type,
      anchorFrom: 1000000,
      anchorTo: 1 / 1000000
    },
    {
      unit: ['ton'],
      type,
      anchorFrom: 1 / 0.0000011023,
      anchorTo: 0.0000011023
    },
    {
      unit: ['ounce', 'oz'],
      type,
      anchorFrom: 1 / 0.03527396195,
      anchorTo: 0.03527396195
    },
    {
      unit: ['pound', 'lb'],
      type,
      anchorFrom: 453.59237,
      anchorTo: 1 / 453.59237
    }
  ]
}
