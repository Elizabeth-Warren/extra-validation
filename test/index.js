const { assert } = require('chai');
const { isRealZipcode } = require('../dist');

describe('valdiate zipcode', function() {
  it('should validate a NY zipcode', function() {
    assert.isTrue(isRealZipcode('10301'));
  });

  it('should validate a numerical zipcode argument', function() {
    assert.isTrue(isRealZipcode(10010));
  });

  it('should validate an MA zipcode', function() {
    assert.isTrue(isRealZipcode('02129'));
  });

  it('should validate a PR zipcode', function() {
    assert.isTrue(isRealZipcode('00901'));
  });

  it('should validate an AF zipcode', function() {
    assert.isTrue(isRealZipcode('09789'));
  });

  it('should validate a zipcode at the start of a range', function() {
    assert.isTrue(isRealZipcode('10001'));
  });

  it('should validate a zipcode at the end of a range', function() {
    assert.isTrue(isRealZipcode('10043'));
  });

  it('should not validate a fake zipcode', function() {
    assert.isFalse(isRealZipcode('10042'));
  })
});
