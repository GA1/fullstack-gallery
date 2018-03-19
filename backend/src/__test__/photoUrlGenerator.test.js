var { generateSmallUrl, generateBigUrl } = require('../http/photoUrlGenerator');


test('test generate small url', () => {
  var expected = "http://farm1.staticflickr.com/2/3_4_m.jpg"
  expect(generateSmallUrl("1", "2", "3", "4")).toEqual(expected);
});

test('test generate big url', () => {
  var expected = "http://farm1.staticflickr.com/2/3_4_z.jpg"
  expect(generateBigUrl("1", "2", "3", "4")).toEqual(expected);
})