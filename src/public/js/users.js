document.getElementById("formAdduser").addEventListener("submit", async function (event) {
  event.preventDefault();

  //mendaptkan input form
  const formData = {
    username: document.getElementById("username").value,
    name: document.getElementById("name").value,
    password: document.getElementById("password").value,
    nomor_hp: document.getElementById("nomor_hp").value,
  };

  try {
    const response = await fetch("/users/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      Swal.fire({
        title: "Success",
        text: result.message,
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => location.reload());
    } else {
      Swal.fire({
        title: "Failed",
        text: result.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  } catch (error) {
    Swal.fire({
      title: "error",
      text: result.message,
      icon: "error",
      confirmButtonText: "Try Again",
    });
  }
});

//fetch api deleteUser
async function deleteUser(idUser) {
  const confirmDelete = await Swal.fire({
    title: "Apakah anda Yakin ?",
    text: "Data User akan dihapus!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, Hapus",
    cancelButtonText: "Batal",
  });

  if (confirmDelete.isConfirmed) {
    try {
      const response = await fetch(`/users/delete/${idUser}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire("Delete Data Berhasil", result.message, "success").then(() => location.reload()); // reload halaman setelah delete success
      } else {
        Swal.fire("Delet Data Gagal", result.message, "error");
      }
    } catch (error) {
      Swal.fire("Gagal", "Terjadi Kesalahan pada server", "error");
    }
  }
}

// fetch api updateUser




