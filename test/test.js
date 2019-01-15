var nx = require('next-js-core2');
require('../src/next-is-numeric');


test('nx.isNumeric', function () {
  var obj1 = {name: 'fei'};
  var obj2 = {email: '1290657123@qq.com'};

  var result = {};

  nx.isNumeric(result, obj1, obj2);

  expect(result.name, obj1.name).toBe(null);
});

