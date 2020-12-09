'use strict';

console.log("hi")

var noteListView = new NoteListView
var element = document.getElementById("app");
noteListView.viewNoteListModel().createNote("Hello");
noteListView.viewNoteListModel().createNote("Hi");

var noteController = new NoteController(noteListView, element)

noteController.updateHTML();
