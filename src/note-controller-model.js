'use strict';

class NoteController {
  constructor(noteListView, element) {
   this.noteListView = noteListView;
   this.element = element;
  }

  updateHTML(){
   this.element.innerHTML = this.noteListView.returnNoteListModel();
  }

}


