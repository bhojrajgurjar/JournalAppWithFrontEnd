// Function to get the JWT from the cookie
function getJwtFromCookie() {
    const name = "jwt=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// New function to get the CSRF token from the DOM
function getCsrfToken() {
  const tokenInput = document.querySelector('input[name="_csrf"]');
  return tokenInput ? tokenInput.value : '';
}
// openEditModal and closeEditModal functions remain the same
function openEditModal(id, title, content) {
  document.getElementById('editId').value = id;
  document.getElementById('editTitle').value = title;
  document.getElementById('editContent').value = content;
  document.getElementById('editModal').classList.remove('hidden');
}

function closeEditModal() {
  document.getElementById('editModal').classList.add('hidden');
}

// Handle the form submission for editing an entry
document.getElementById('editForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const id = document.getElementById('editId').value;
  const title = document.getElementById('editTitle').value;
  const content = document.getElementById('editContent').value;
  const jwt = getJwtFromCookie(); // Retrieve the JWT
  const csrfToken = getCsrfToken(); // ✅ get CSRF

  fetch(`/user/update/id/${id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`, // ✅ fixed comma
          'X-CSRF-TOKEN': csrfToken        // ✅ defined correctly
      },
      body: JSON.stringify({
          tittle: title,
          content: content
      })
  })
  .then(response => {
    if (response.ok) {
        showToast("Entry updated successfully!", "success");
        setTimeout(() => location.reload(), 2000); // reload after 2 sec
    } else {
        showToast("Failed to update entry.", "error");
    }
})
.catch(error => {
    console.error("Error:", error);
    showToast("An error occurred while updating the entry.", "error");
})

 .finally(() => {
      closeEditModal();
  });
});



  function deleteEntry(id) {
  const jwt = getJwtFromCookie(); // Retrieve the JWT
  const csrfToken = getCsrfToken(); // ✅ get CSRF
    if (confirm("Are you sure you want to delete this entry?")) {
        fetch(`/user/journal/delete/${id}`, {
            method: "DELETE",
            headers: {
             'Authorization': `Bearer ${jwt}`, // ✅ fixed comma
             'X-CSRF-TOKEN': csrfToken        // ✅ defined correctly
         }, // ✅ sends HttpOnly cookie with JWT
        }).then(response => {
            if (response.status === 204) {
                showToast("Deleted successfully!", "success"); // ✅ green toast
                setTimeout(() => {
                    location.reload();
                }, 1500);
            } else {
                showToast("Failed to delete entry.", "error"); // ❌ red toast
            }
        }).catch(err => {
            showToast("Error deleting entry.", "error"); // ❌ red toast
            console.error(err);
        });
    }
}

  function showToast(message, type) {
    const toast = document.getElementById("toast");
    toast.className = "toast " + type + " show";
    toast.textContent = message;

    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000); // 3 sec hide
}

