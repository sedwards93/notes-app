'use strict';

it('noteController is an instance of NoteController ', function() {
  var noteController = new NoteController();
  expect(noteController instanceof NoteController).toBeTrue();
});

it('Updates html property of element', function() {
  var fakeElement = { innerHTML: "" };
  var fakeNoteListView = { returnNoteListModel: function() {
    return "<ul><li><div>Hello</div></li><li><div>Hi there</div></li></ul>"
    }
  };
  var noteController = new NoteController(fakeNoteListView, fakeElement);
  noteController.updateHTML();
  expect(fakeElement.innerHTML).toEqual("<ul><li><div>Hello</div></li><li><div>Hi there</div></li></ul>")
})




// class NoteController {
//   constructor(noteListView, element) {
//    this.noteListView = noteListView;
//    this.element = element;
//   }

//   updateHTML(){
//    this.element.innerHTML = this.noteListView.returnNoteListModel();
//   }

// }