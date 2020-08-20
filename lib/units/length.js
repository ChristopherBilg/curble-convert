const type = 'length'

module.exports = {
  units: [
    {
      // Anchor unit
      unit: ['meter', 'm'],
      type,
      anchorFrom: 1,
      anchorTo: 1
    },
    {
      unit: ['centimeter', 'cm'],
      type,
      anchorFrom: 0.01,
      anchorTo: 100
    },
    {
      unit: ['foot', 'feet', 'ft'],
      type,
      anchorFrom: 0.30480370641,
      anchorTo: 3.2808
    },
    {
      unit: ['inch', 'inches'],
      type,
      anchorFrom: 0.0254,
      anchorTo: 39.37007874
    },
    {
      unit: ['kilometer', 'km'],
      type,
      anchorFrom: 1000,
      anchorTo: 0.001
    },
    {
      unit: ['mile', 'mi'],
      type,
      anchorFrom: 1609.34708789,
      anchorTo: 0.00062137
    },
    {
      unit: ['millimeter', 'mm'],
      type,
      anchorFrom: 0.001,
      anchorTo: 1000
    },
    {
      unit: ['nautical mile', 'nmi'],
      type,
      anchorFrom: 1851.99932587,
      anchorTo: 0.000539957
    },
    {
      unit: ['yard', 'yd'],
      type,
      anchorFrom: 0.9144,
      anchorTo: 1.0936132983
    }
  ]
}
