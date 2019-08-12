const data = require('./data.json');
const leven = require('leven');

export function checkEmailDomain(email) {
  const { emailProviders } = data;

  if (! email || ! email.length || email.indexOf('@') === -1) {
    return null;
  }

  const [front, domain] = email.toLowerCase().split('@');
  if (! domain) {
    return null;
  }

  if (emailProviders.indexOf(domain) > -1) {
    return null;
  }

  const recommendedations = emailProviders
    .map((provider) => [provider, leven(domain, provider)])
    .sort((a, b) => a[1] - b[1]);

  const recommendedation = recommendedations[0];

  if (! recommendedation) {
    return null;
  }

  return recommendedation[0];
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
