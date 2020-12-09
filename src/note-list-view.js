'use strict';

class NoteListView {
  constructor(noteListModel = new NoteListModel) {
    this.noteListModel = noteListModel;
  };

  viewNoteListModel() {
    return this.noteListModel;
  };

  returnNoteListModel() {
    var returnValue = "";
    this.noteListModel.list.forEach ((element) => {
      returnValue = returnValue + "<li><div>" + (element.text) + "</div></li>";
    });
    return "<ul>" + returnValue + "</ul>"
  };
  }

