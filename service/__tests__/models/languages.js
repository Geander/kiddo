const Languages = require('../../src/models/languages');

describe('model/Languages', () => {

  it('Languages', () => {
    expect(Languages.schema.obj).toHaveProperty('name');
    expect(Languages.schema.obj).toHaveProperty('wikipedia_url');
  });

});
