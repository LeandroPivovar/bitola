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

  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
