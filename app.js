/*
 LORS que l'on clique sur l'onglet on retire la classe active de l'onglet
 j'acjoute la classe active à l'onglet actif

 On retire la classe active sur le contenu actif
 j'ajoute la classe active sur le contenu correspondant à mon clique
 */
//fonction pour afficher les liens
(function () {
  var afficherOnglet = function (a, animations) {
    if (animations === undefined) {
      animation = true;
    }
    var li = a.parentNode;
    var div = a.parentNode.parentNode.parentNode;
    var activeTab = div.querySelector(".tab-content.active"); //contenu actif
    var aAfficher = div.querySelector(a.getAttribute("href")); //contenu à afficher

    if (li.classList.contains("active")) {
      return false;
    }
    //retire la classe active de l'onglet actif
    div.querySelector(".tabs .active").classList.remove("active");

    //j'ajoute la classe à l'onglet actuel
    li.classList.add("active");

    //on retire la classe active sur le contenu atif
    //div.querySelector(".tab-content.active").classList.remove("active");

    // j'ajoute la classe active sur le contenu correspondant à mon clique
    //div.querySelector(a.getAttribute("href")).classList.add("active");

    if (animations) {
      activeTab.classList.add("fade");
      activeTab.classList.remove("in");
      var transitionend = function () {
        this.classList.remove("fade");
        this.classList.remove("active");
        aAfficher.classList.add("active");
        aAfficher.classList.add("fade");
        aAfficher.offsetwidth;
        aAfficher.classList.add("in");
        activeTab.removeEventListener("transionend", transitionend);
      };
      activeTab.addEventListener("transitionend", transitionend);
      activeTab.addEventListener("webkiTransionEnd", transitionend);
      activeTab.addEventListener("oTansitionEnd", transitionend);
    } else {
      aAfficher.classList.add("active");
      activeTab.classList.remove("active");
    }
  };
  //la selection de tous les lien dans la classe tabs
  var tabs = document.querySelectorAll(".tabs  a");

  //une boucle pour parcourir les liens
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (event) {
      afficherOnglet(this);
    });
  }
  /*
JE recupère le hash
Ajouter la class active sur le lien href = hash
Afficher / masquer les contenus
*/
  var hashchange = function (e) {
    var hash = window.location.hash;
    var a = document.querySelector('a[href ="' + hash + '"]');
    if (a != null && a.classList.contains("active")) {
      afficherOnglet(a, e !== undefined);
    }
  };
  window.addEventListener("hashchange", hashchange);
  hashchange();
})();
