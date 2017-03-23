// Saves options to browser.storage
function save_options() {
  var link = document.getElementById('link').value;
   browser.storage.local.set({
    link: link,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in browser.storage.
function restore_options() {
  // Use default value link = ''
   browser.storage.local.get({
    link: '',
  }, function(items) {
    document.getElementById('link').value = items.link;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);