const type = 'temperature'
const KtoC = 273.15

module.exports = {
  units: [
    {
      // Anchor unit
      unit: ['kelvin', 'K'],
      type,
      anchorFrom: 1,
      anchorTo: 1
    },
    {
      unit: ['celsius', 'c'],
      type,
      anchorFrom: (celsius) => celsius + KtoC,
      anchorTo: (kelvin) => kelvin - KtoC
    },
    {
      unit: ['fahrenheit', 'f'],
      type,
      anchorFrom: (fahrenheit) => ((fahrenheit - 32) * (5 / 9)) + KtoC,
      anchorTo: (kelvin) => ((kelvin - KtoC) * (9 / 5)) + 32
    }
  ]
}
