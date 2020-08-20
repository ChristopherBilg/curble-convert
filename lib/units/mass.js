const type = 'mass';

module.exports = {
  units: [
    {
      unit: ['kilogram', 'kg'],
      type,
      anchorFrom: 1000,
      anchorTo: 1/ 1000,
    },
    {
      unit: ['gram', 'g'],
      type,
      anchorFrom: 1,
      anchorTo: 1,
    },
    {
      unit: ['milligram', 'mg'],
      type,
      anchorFrom: 1 / 1000,
      anchorTo: 1000,
    }
  ],
};
