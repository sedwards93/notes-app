'use strict';

it('singleNoteView is an instance of SingleNoteView ', function() {
  var singleNoteView = new SingleNoteView();
  expect(singleNoteView instanceof SingleNoteView).toBeTrue();
});

it('Returns a string of HTML when returnHTML function called', function() {
  var fakeNote = { getText: function () {
    return 'Hi';
  }}
  var singleNoteView = new SingleNoteView(fakeNote);
  expect(singleNoteView.returnHTML()).toEqual('<div>Hi</div>');
});