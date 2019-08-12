const data = require('./data.json');

export function checkEmailDomain(email) {

}

export function isRealZipcode(zip) {
  const { zipRanges } = data;
  const compare = parseInt(zip);

  for (const [start, end] of zipRanges) {
    if (compare >= start && compare <= end) {
      return true;
    }
  }

  return false;
}
