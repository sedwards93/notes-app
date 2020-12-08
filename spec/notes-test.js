'use strict';

// notes.js

(function() {
  function instantiatedNoteObject() {
    var note = new Note();
    console.log('instantiatedNoteObject')
    assert.isTrue(typeof note == "object")
  };
  instantiatedNoteObject();
})();

(function() {
  function instantiatedWithText() {
    var note = new Note("text");
    console.log('instantiatedWithText')
    assert.toEqual("text", note.getText())
  };
  instantiatedWithText();
})();

// note-list-model.js

(function() {
  function instantiatedNoteListObject() {
    var noteList = new NoteList();
    console.log('instantiatedNoteListObject')
    assert.isTrue(typeof noteList === "object")
  };
  instantiatedNoteListObject();
})();

(function() {
  function instantiatedWithEmptyArray() {
    var noteList = new NoteList();
    console.log('instantiatedWithEmptyArray')
    assert.isTrue(noteList.listNotes() == Array.isArray())
  };
  instantiatedWithEmptyArray();
})();
