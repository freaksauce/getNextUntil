var getNextUntil = require('./index.js')
document.body.innerHTML = '<ul>' +
                            '<li>Item 1</li>' +
                            '<li class="stop-here">Item 2</li>' +
                            '<li>Item 3</li>' +
                            '<li>Item 4</li>' +
                            '<li id="find-me">Item 5</li>' +
                            '<li>Item 6</li>' +
                            '<li>Item 7</li>' +
                            '<li class="stop-here">Item 8</li>' +
                            '<li>Item 9</li>' +
                          '</ul>';

test('test getNextUntil', function() {
  var findMe = document.querySelector('#find-me');
  var nextStop = getNextUntil(findMe, '.stop-here');
  expect(nextStop[0].innerHTML).toEqual('Item 6');
  expect(nextStop[1].innerHTML).toEqual('Item 7');

  var findUl = document.querySelector('ul > li');
  var nextStop2 = getNextUntil(findUl, '#find-me');
  expect(nextStop2[0].innerHTML).toEqual('Item 2');
  expect(nextStop2[1].innerHTML).toEqual('Item 3');
  expect(nextStop2[2].innerHTML).toEqual('Item 4');
})