var url = 'data-points.csv';
var xhr = new XMLHttpRequest();

xhr.open('GET', url, true);
xhr.onload = function () {
  // Get element from the DOM.
  var elem = document.getElementsByTagName("perspective-viewer")[0];

  // Create a new Perspective WebWorker instance.
  var worker = perspective.worker();

  // Create a new Perspective table
  var table = worker.table(xhr.response);

  // Load the `table` in the `<perspective-viewer>` DOM reference.
  elem.load(table);
}

xhr.send(null);
