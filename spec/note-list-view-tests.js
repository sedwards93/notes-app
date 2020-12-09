'use strict';

it('noteListView is an instance of NoteListView', function() {
  var noteListView = new NoteListView();
  expect(noteListView instanceof NoteListView).toBeTrue();
});

it('Takes a noteListModel upon instantiation', function() {
  var noteListView = new NoteListView();
    expect(noteListView.viewNoteListModel() instanceof NoteListModel).toBeTrue();
});

it('Returns noteListModel with no notes when returnNoteListModel is called', function() {
  var noteListView = new NoteListView();
  expect(noteListView.returnNoteListModel()).toEqual('<ul></ul>')
});

it('Returns noteListModel with one note when returnNoteListModel is called', function() {
  var noteListModel = new NoteListModel();
  noteListModel.createNote("Hi");
  var noteListView = new NoteListView(noteListModel);
  expect(noteListView.returnNoteListModel()).toEqual('<ul><li><div>Hi</div></li></ul>')
});

it('Returns noteListModel with multiple notes when returnNoteListModel is called', function() {
  var noteListModel = new NoteListModel();
  noteListModel.createNote("Hello");
  noteListModel.createNote("Hi there");
  var noteListView = new NoteListView(noteListModel);
  expect(noteListView.returnNoteListModel()).toEqual('<ul><li><div>Hello</div></li><li><div>Hi there</div></li></ul>')
});
