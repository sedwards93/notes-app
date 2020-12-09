'use strict';

class SingleNoteView {
  constructor(note = new Note) {
    this.note = note;
  }

  returnHTML() {
    return `<div>${this.note.getText()}</div>`;
  }
}