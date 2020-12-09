'use strict';

// notes.js


it('note is an instance of Note', function() {
  var note = new Note();
  expect(note instanceof Note).toBeTrue();
});

it('Note object is instantiated with text', function() {
  var note = new Note('text');
  expect(note.getText()).toEqual('text');
});
