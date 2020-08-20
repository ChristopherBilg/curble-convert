const type = 'length'

module.exports = {
  units: [
    {
      unit: ['kilometer', 'km'],
      type,
      anchorFrom: 1000,
      anchorTo: 1 / 1000
    },
    {
      unit: ['meter', 'm'],
      type,
      anchorFrom: 1,
      anchorTo: 1
    },
    {
      unit: ['millimeter', 'mm'],
      type,
      anchorFrom: 1 / 1000,
      anchorTo: 1000
    },
    {
      unit: ['centimeter', 'cm'],
      type,
      anchorFrom: 1 / 100,
      anchorTo: 100
    },
    {
      unit: ['inch', 'inches'],
      type,
      anchorFrom: 1 / 39.37007874,
      anchorTo: 39.37007874
    },
    {
      unit: ['yard', 'yd'],
      type,
      anchorFrom: 1 / 1.0936132983,
      anchorTo: 1.0936132983
    },
    {
      unit: ['foot', 'feet', 'ft'],
      type,
      anchorFrom: 1 / 3.2808,
      anchorTo: 3.2808
    },
    {
      unit: ['mile', 'mi'],
      type,
      anchorFrom: 1 / 0.00062137,
      anchorTo: 0.00062137
    },
    {
      unit: ['nautical mile', 'nmi'],
      type,
      anchorFrom: 1 / 0.000539957,
      anchorTo: 0.000539957
    }
  ]
}
