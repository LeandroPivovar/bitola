(function () {
  "use strict";

  var WA_NUMBER = "554591382401";
  document.documentElement.classList.add("js");

  // Menu mobile
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      toggle.querySelector("i").className = open ? "ph ph-x" : "ph ph-list";
    };
    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // Entrada suave ao rolar
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Formulário: monta a mensagem e abre no WhatsApp
  var form = document.getElementById("orcamento");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim();
      var erro = document.getElementById("e-nome");
      if (!nome) {
        form.nome.setAttribute("aria-invalid", "true");
        form.nome.setAttribute("aria-describedby", "e-nome");
        erro.hidden = false;
        form.nome.focus();
        return;
      }
      form.nome.removeAttribute("aria-invalid");
      erro.hidden = true;

      var linhas = [
        "Olá, Bitola! Meu nome é " + nome + ".",
        "Serviço: " + form.servico.value
      ];
      var bairro = form.bairro.value.trim();
      var msg = form.mensagem.value.trim();
      if (bairro) linhas.push("Bairro: " + bairro);
      if (msg) linhas.push(msg);

      var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(linhas.join("\n"));
      window.open(url, "_blank", "noopener");
    });
  }

  // Galeria de serviços realizados
  var lb = document.getElementById("lightbox");
  var works = Array.prototype.slice.call(document.querySelectorAll(".work"));
  if (lb && works.length && typeof lb.showModal === "function") {
    var lbImg = lb.querySelector("img");
    var lbCap = lb.querySelector("figcaption");
    var atual = 0;
    var mostrar = function (i) {
      atual = (i + works.length) % works.length;
      var img = works[atual].querySelector("img");
      lbImg.src = img.getAttribute("src");
      lbImg.alt = img.alt;
      lbCap.innerHTML = works[atual].querySelector("figcaption").innerHTML;
    };
    works.forEach(function (w, i) {
      w.querySelector(".work-open").addEventListener("click", function () {
        mostrar(i);
        lb.showModal();
      });
    });
    lb.querySelector(".lb-prev").addEventListener("click", function () { mostrar(atual - 1); });
    lb.querySelector(".lb-next").addEventListener("click", function () { mostrar(atual + 1); });
    lb.querySelector(".lb-close").addEventListener("click", function () { lb.close(); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
    lb.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") mostrar(atual - 1);
      if (e.key === "ArrowRight") mostrar(atual + 1);
    });
    lb.addEventListener("close", function () {
      works[atual].querySelector(".work-open").focus();
    });
  }

  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
