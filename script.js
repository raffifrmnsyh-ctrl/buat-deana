window.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const typingEl = document.getElementById("typing");
  const masukBtn = document.getElementById("masukBtn");
  const main = document.getElementById("main");
  const surprise = document.getElementById("surprise");
  const gallery = document.getElementById("gallery");
  const letter = document.getElementById("letter");
  const openLetter = document.getElementById("openLetter");
  const seeGallery = document.getElementById("seeGallery");
  const backBtns = document.querySelectorAll(".backBtn");

  let message = "Hai Deana... 💜 Aku punya sesuatu spesial buat kamu...";
  let surpriseText = "Kamu tahu? Setiap detik bersamamu itu berharga banget. Terima kasih udah jadi alasan aku tersenyum setiap hari 💜";

  // efek ketik intro
  let i = 0;
  function typeEffect() {
    if (i < message.length) {
      typingEl.textContent += message.charAt(i);
      i++;
      setTimeout(typeEffect, 70);
    }
  }
  typeEffect();

  masukBtn.addEventListener("click", () => {
    // fade out intro
    intro.classList.add("hide");
    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
      setTimeout(() => main.classList.add("show"), 50);
    }, 800);

    // tampilkan surprise setelah 2,5 detik
    setTimeout(() => {
      surprise.classList.remove("hidden");
      typeSurprise();
    }, 2500);
  });

  // efek ketik surprise
  let j = 0;
  function typeSurprise() {
    const t = document.querySelector(".typing2");
    if (j < surpriseText.length) {
      t.textContent += surpriseText.charAt(j);
      j++;
      setTimeout(typeSurprise, 50);
    }
  }

  openLetter.addEventListener("click", () => {
    letter.classList.remove("hidden");
    gallery.classList.add("hidden");
  });

  seeGallery.addEventListener("click", () => {
    gallery.classList.remove("hidden");
    letter.classList.add("hidden");
  });

  backBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      gallery.classList.add("hidden");
      letter.classList.add("hidden");
    });
  });
});
// Ambil elemen surat & tombol "Tutup Surat"
const letter = document.getElementById("letter");
const closeBtns = document.querySelectorAll(".backBtn");

// Tutup surat ketika tombol diklik
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    letter.classList.remove("show");
    setTimeout(() => {
      letter.classList.add("hidden");
    }, 500); // durasi animasi 0.5 detik
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const openLetter = document.getElementById("openLetter");
  const closeLetter = document.getElementById("closeLetter");
  const letter = document.getElementById("letter");

  // buka surat
  openLetter.addEventListener("click", () => {
    letter.classList.remove("hidden");
    setTimeout(() => letter.classList.add("show"), 10);
  });

  // tutup surat
  closeLetter.addEventListener("click", () => {
    letter.classList.remove("show");
    setTimeout(() => {
      letter.classList.add("hidden");
    }, 400); // waktu fade out 0.4 detik
  });
});
