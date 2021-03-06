const path = require('path');
const fs = require('fs').promises;
const { codes } = require('zipcodes');
const { all } = require('@ewarren/unitedstatesofamerica');
const providers = require('../src/email-providers.json');

(async function() {
  console.log('building data file');
  const output = {};

  console.log('building zip ranges');
  const zipcodes = Object
    .keys(codes)
    .map(zipcode => ({ ...codes[zipcode], zipcode, zipInt: parseInt(zipcode) }))
    .filter(item => all[item.state]);

  const ranges = [];

  function findRange(collection, startIndex) {
    const start = collection[startIndex];
    const { zipInt: startValue } = start;

    let end = collection[startIndex];

    for (let index = startIndex; index < collection.length; index++) {
      const pointer = collection[index];
      const { zipInt: pointerValue } = pointer;
      const { zipInt: endValue } = end;

      if (endValue + 1 < pointerValue) {
        ranges.push([start, end]);
        return findRange(collection, index);
      }

      end = pointer;
    }

    ranges.push([start, end]);
  }

  findRange(zipcodes, 0);

  const zipRanges = ranges.map(([a, b]) => [a.zipInt, b.zipInt]);
  console.log('finished building zip ranges');

  console.log('building email provider list');
  const emailProviders = providers
    .map(provider => provider.toLowerCase())
    .filter(provider => ! ['gmai.com'].includes(provider)) // Filter out some...
  console.log('finished building email provider list');

  await fs.writeFile(path.join(process.cwd(), 'src/data.json'), JSON.stringify({
    zipRanges,
    emailProviders,
  }));
})();
