$(document).ready(function () {
  // Event Handler 1: click() pada tombol 'Ubah Warna Judul' (css)
  $("#btn-mode").click(function () {
    // Mengecek warna teks judul
    var warnaJudulSaatIni = $("#judul-halaman").css("color");

    if (warnaJudulSaatIni === "rgb(118, 75, 162)") { 
      $("#judul-halaman").css("color", "#2c3e50");     // Warna asli adalah hitam 
    } else {
      // Jika warnanya asli, ubah menjadi warna ungu
      $("#judul-halaman").css("color", "#764ba2"); 
    }
  });

  // Event Handler 2: hover() pada elemen Foto Profil
  // Metode jQuery yang digunakan: html(), css()
  $("#foto").hover(
    function () {
      // Dijalankan saat kursor mengarah ke foto (mouse enter)
      $(this).css("border", "5px solid #ff9a9e"); // Menambahkan border pink
      $(this).css("font-size", "22px");
      $(this).html("<b>Halo! 👋</b>");
    },
    function () {
      // Dijalankan saat kursor meninggalkan foto (mouse leave)
      $(this).css("border", "none");
      $(this).css("font-size", "32px"); // Kembalikan ukuran font
      $(this).text("IT"); // Kembalikan ke teks inisial
    },
  );

  // Event Handler 3: click() pada tombol Toggle Bio
  $("#btn-toggle-bio").click(function () {
    // Menampilkan atau menyembunyikan box biodata dengan efek geser
    $("#box-biodata").slideToggle("fast");
  });

  // Event Handler 4: click() untuk Efek Animasi Foto Profil
  $("#btn-animasi").click(function () {
    // Menjalankan animasi perbesaran lalu mengecil kembali
    $("#foto")
      .animate(
        {
          width: "160px",
          height: "160px",
          opacity: 0.7,
        },
        400,
      )
      .animate(
        {
          width: "130px",
          height: "130px",
          opacity: 1.0,
        },
        400,
      );
  });
});
