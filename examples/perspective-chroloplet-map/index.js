const url = 'data-chroloplet.csv';
fetch(url)
  .then((resp) => resp.text())
  .then(function(data) {
    // Get element from the DOM.
    const elem = document.getElementsByTagName("perspective-viewer")[0];

    // Create a new Perspective WebWorker instance.
    const worker = perspective.worker();

    // Create a new Perspective table
    const table = worker.table(data);

    // Load the `table` in the `<perspective-viewer>` DOM reference.
    elem.load(table);
  })
  .catch(function(error) {
    console.log(error);
  });
