exports.territories = [
  {
    name: 'Peru',
    neighbors: ['Brazil', 'Argentina', 'Chile', 'Colombia'],
  },
  {
    name: 'Chile',
    neighbors: ['Peru', 'Argentina'],
  },
  {
    name: 'Brazil',
    neighbors: ['Peru', 'Argentina', 'Colombia', 'Venezuela'],
  },
  {
    name: 'Argentina',
    neighbors: ['Peru', 'Brazil', 'Chile'],
  },
  {
    name: 'Colombia',
    neighbors: ['Peru', 'Brazil', 'Central America', 'Venezuela'],
  },
  {
    name: 'Venezuela',
    neighbors: ['Brazil', 'Colombia', 'Central America'],
  },
  {
    name: 'Central America',
    neighbors: ['Venezuela', 'Colombia', 'US EAST', 'US WEST'],
  },
  {
    name: 'US EAST',
    neighbors: ['Canada', 'Central America', 'US WEST'],
  },
  {
    name: 'US WEST',
    neighbors: ['Canada', 'Central America', 'US EAST'],
  },
  {
    name: 'Canada',
    neighbors: ['US WEST', 'US EAST', 'Alaska'],
  },
  {
    name: 'Alaska',
    neighbors: ['Canada'],
  },
];

exports.resources = [
  'wheat',
  'wheat',
  'wheat',
  'wheat',
  'wheat',
  'iron',
  'iron',
  'iron',
  'iron',
  'iron',
  'oil',
  'oil',
];

exports.tankStrenght = 5;
exports.trooperStrenght = 1;
exports.initialWheat = 5;
exports.initialIron = 4;
exports.initialOil = 1;