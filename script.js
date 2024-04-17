document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("welcomeText").style.display = "none";
    document.getElementById("loadingText").classList.remove("hidden");
    document.getElementById("loadingGif").classList.remove("hidden");
    setTimeout(function() {
      window.location.href = "https://matthbe1922.github.io/Hub/";
    }, 3000); // Tempo in millisecondi prima del reindirizzamento (3000 = 3 secondi)
  }, 2000); // Tempo in millisecondi prima che "Bentornato" scompaia (2000 = 2 secondi)
});
