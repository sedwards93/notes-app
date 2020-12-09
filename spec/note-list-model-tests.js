// // note-list-model.js


it('noteListModel is an instance of NoteListModel', function() {
  var noteListModel = new NoteListModel();
  expect(noteListModel instanceof NoteListModel).toBeTrue();
});

it('noteListModel is instantiated with an empty array', function() {
  var noteListModel = new NoteListModel();
  expect(noteListModel.listNotes() == Array.isArray()).toBeTrue();
});

it('Pushes new note to an empty array', function() {
  var noteListModel = new NoteListModel();
  var note = new Note('🎅');
  noteListModel.addNote(note);
  expect(noteListModel.listNotes().length).toEqual(1);
});

it('noteListModel printNotes returns note pushed to array', function() {
  var noteListModel = new NoteListModel();
  var note = new Note('🎅');
  noteListModel.addNote(note);
  expect(noteListModel.printNotes()).toEqual('🎅');
});

it('noteListModel can create Notes', function() {
  var noteListModel = new NoteListModel();
  noteListModel.createNote("Shell");
  expect(noteListModel.printNotes()).toEqual("Shell");
});

