const type = 'angle'

module.exports = {
  units: [
    {
      // Anchor unit
      unit: ['radian', 'rad'],
      type,
      anchorFrom: 1,
      anchorTo: 1
    },
    {
      unit: ['arcmin', 'arc minute'],
      type,
      anchorFrom: Math.PI / 10800,
      anchorTo: 10800 / Math.PI
    },
    {
      unit: ['arcsec', 'arc second'],
      type,
      anchorFrom: Math.PI / 648000,
      anchorTo: 648000 / Math.PI
    },
    {
      unit: ['degree', 'deg'],
      type,
      anchorFrom: Math.PI / 180,
      anchorTo: 180 / Math.PI
    },
    {
      unit: ['gradian', 'grad'],
      type,
      anchorFrom: Math.PI / 200,
      anchorTo: 200 / Math.PI
    }
  ]
}
