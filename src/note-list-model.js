'use strict';

class NoteListModel {
  constructor() {
    this.list = [];
  };

  listNotes() {
    return this.list;
  }

  printNotes() {
    var notesToPrint = ""
    var arrayLength = this.list.length;
    for (var i = 0; i < arrayLength; i++) {
      notesToPrint = notesToPrint + ((this.list[i]).text);
    };
    return notesToPrint;
  };

  addNote(note) {
    this.list.push(note);
  };

  createNote(text){
    var note = new Note(text);
    this.list.push(note);
  };

}

  
  // addNote(note) {
  //   this.list.push(note)
  // }

    // for (var i = 0, i > this.list.length; i++) {
    //   console.log(this.list[i])
    // }

  
  // createNote(new Note(text)){
  //   this.list.push(note)
  // }
