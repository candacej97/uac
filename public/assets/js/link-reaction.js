// this script is for links link to a different part of the pages

function init() {
  var linksAll = document.getElementsByTagName('a');
  var links = [];
  for (var link in linksAll) {
    if (link.getAttribute("href").startsWith("#")) {
      links.append(link);
    }
  }

  links.addEventListener("click", function(){
    var target = document.getElementById(this.getAttribute("href"));
    console.log("TARGET: " + target);
    target.style.background = "yellow";
    wait(5);
    target.style.background = "none";
  });
}

init();