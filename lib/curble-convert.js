const allUnits = require('./units')

const allUnitsArray = [];
Object.entries(allUnits).forEach(([_k, v]) => {
  v.units.forEach((uniqueUnit) => allUnitsArray.push(uniqueUnit));
});

CurbleConvert = function(value) {
  this.value = value;
};

CurbleConvert.prototype.from = function(origin) {
  if (this.destination) throw new Error('CurbleConvert: .from(...) must be called before .to(...)');

  this.origin = getUnit(origin);
  if (!this.origin) throw new Error(`CurbleConvert: unit type '${origin}' is unsupported`);

  return this;
};

CurbleConvert.prototype.to = function(destination) {
  if (!this.origin) throw new Error('CurbleConvert: .to(...) must be called before .from(...)');

  this.destination = getUnit(destination);
  if (!this.destination) throw new Error(`CurbleConvert: unit type '${destination}' is unsupported`);

  if (this.origin === this.destination) return this.value;
  if (this.origin.type !== this.destination.type) {
    throw new Error(`CurbleConvert: unit type '${this.origin.type}' needs to equal '${this.destination.type}'`);
  }

  const result = this.value * this.origin.anchorFrom * this.destination.anchorTo;
  return result;
};

const getUnit = (unit) => {
  const unitObject = allUnitsArray.find((unitType) => (
    unitType.unit.includes(unit)
  ));

  return unitObject;
};

/** List all conversion possibilities */
CurbleConvert.prototype.possibilites = allUnitsArray;

module.exports = CurbleConvert;
