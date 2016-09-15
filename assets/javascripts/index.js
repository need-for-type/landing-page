var chars_completed = 0;
var failed = false;

$(window).keypress(function(event) {
  var character = String.fromCharCode(event.keyCode);
  worker(character);
});

function worker(character) {
  var done = "";
  var current = "";
  var left = "";
  var text = $(".try-text").text();

  if (character == text[chars_completed]) {
    chars_completed++;
    failed = false;
  } else {
    failed = true;
  }

  for (var i = 0; i < chars_completed; i++) {
    done += text[i];
  }


  current = text[i];

  for (var j = i+1; j < text.length; j++) {
    left += text[j];
  }

  renderColors(done, current, left);
}

function renderColors(done, current, left) {
  $(".try-text").html("");

  $("<span>").text(done).css({
    color: "#a9d3ab"
  }).appendTo(".try-text");

  current_color = failed ? "#f58972" : "#ffcc66";

  $("<span>").text(current).css({
    color: current_color
  }).appendTo(".try-text");

  $("<span>").text(left).css({
    color: "#fff"
  }).appendTo(".try-text");
}
