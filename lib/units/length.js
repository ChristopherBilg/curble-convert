const type = 'length';

module.exports = {
  units: [
    {
      unit: ['kilometer', 'km'],
      type,
      anchorFrom: 1000,
      anchorTo: 1 / 1000,
    },
    {
      unit: ['meter', 'm'],
      type,
      anchorFrom: 1,
      anchorTo: 1,
    },
    {
      unit: ['millimeter', 'mm'],
      type,
      anchorFrom: 1 / 1000,
      anchorTo: 1000,
    }
  ],
};
