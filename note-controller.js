function changeGreeting(text) {
  var tag = (document.getElementById("app").innerHTML = text);
  console.log(tag)
}

changeGreeting("Howdy");