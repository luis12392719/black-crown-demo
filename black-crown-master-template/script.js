const cfg = SITE_CONFIG;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setupTheme() {
  document.documentElement.style.setProperty("--gold", cfg.visual.corPrincipal);
  document.documentElement.style.setProperty("--gold-2", cfg.visual.corPrincipalClara);
}

function setupCompany() {
  document.title = cfg.empresa.nome;
  $("#metaDescription").setAttribute("content", cfg.empresa.descricaoSEO);

  $("#brandMark").textContent = cfg.empresa.iniciais;
  $("#brandName").textContent = cfg.empresa.nomeCurto;
  $("#brandLink").setAttribute("aria-label", `${cfg.empresa.nome} - início`);

  $("#address").textContent = cfg.empresa.endereco;
  $("#hours").textContent = cfg.empresa.horario;
  $("#phone").textContent = cfg.empresa.telefoneExibido;
  $("#instagram").textContent = cfg.empresa.instagram;

  $("#ctaBrand").textContent = cfg.empresa.nomeCurto;
  $("#footerBrand").textContent = cfg.empresa.nome;
  $("#footerText").textContent = cfg.textos.rodape;

  const message = encodeURIComponent(cfg.empresa.mensagemWhatsapp);
  const url = `https://wa.me/${cfg.empresa.whatsapp}?text=${message}`;
  $$(".whatsapp-link").forEach(link => link.href = url);
}

function setupHero() {
  $("#heroEyebrow").textContent = cfg.hero.etiqueta;
  $("#heroTitle").innerHTML =
    `${escapeHtml(cfg.hero.tituloLinha1)}<br><span>${escapeHtml(cfg.hero.tituloDestaque)}</span>`;
  $("#heroText").textContent = cfg.hero.texto;

  $("#statsContainer").innerHTML = cfg.estatisticas.map(item => `
    <div>
      <strong>${escapeHtml(item.valor)}</strong>
      <span>${escapeHtml(item.legenda)}</span>
    </div>
  `).join("");
}

function setupAbout() {
  $("#aboutTitle").innerHTML = cfg.sobre.titulo;
  $("#aboutCopy").innerHTML = cfg.sobre.paragrafos
    .map(p => `<p>${escapeHtml(p)}</p>`)
    .join("");
}

function setupServices() {
  $("#servicesNote").textContent = cfg.textos.notaServicos;

  $("#servicesGrid").innerHTML = cfg.servicos.map((service, index) => `
    <article class="service-card ${service.destaque ? "featured" : ""}">
      ${service.destaque ? `<span class="service-badge">${escapeHtml(service.destaque)}</span>` : ""}
      <span class="service-number">${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(service.nome)}</h3>
      <p>${escapeHtml(service.descricao)}</p>
      <div class="service-price">${escapeHtml(service.preco)}</div>
    </article>
  `).join("");
}

function setupTeam() {
  const section = $("#barbeiros");
  const nav = $("#teamNav");

  if (!cfg.equipe.mostrar || !cfg.equipe.pessoas.length) {
    section.classList.add("hidden-section");
    nav.classList.add("hidden-section");
    return;
  }

  $("#teamNote").textContent = cfg.equipe.observacao;

  const backgrounds = ["photo-one", "photo-two", "photo-three"];

  $("#teamGrid").innerHTML = cfg.equipe.pessoas.map((person, index) => {
    const hasImage = Boolean(person.imagem);
    const bg = backgrounds[index % backgrounds.length];

    return `
      <article class="team-card">
        <div class="team-photo ${bg} ${hasImage ? "has-image" : ""}"
             ${hasImage ? `style="background-image:url('${escapeHtml(person.imagem)}')"` : ""}>
          <span>${escapeHtml(person.iniciais || "?")}</span>
        </div>
        <h3>${escapeHtml(person.nome)}</h3>
        <p>${escapeHtml(person.descricao)}</p>
      </article>
    `;
  }).join("");
}

function setupGallery() {
  const section = $("#galeria");
  const nav = $("#galleryNav");

  if (!cfg.galeria.mostrar || !cfg.galeria.itens.length) {
    section.classList.add("hidden-section");
    nav.classList.add("hidden-section");
    return;
  }

  $("#galleryNote").textContent = cfg.galeria.observacao;

  $("#galleryGrid").innerHTML = cfg.galeria.itens.map((item, index) => {
    const hasImage = Boolean(item.imagem);
    return `
      <div class="gallery-item g${index + 1} ${hasImage ? "has-image" : ""}"
           ${hasImage ? `style="background-image:linear-gradient(145deg,rgba(0,0,0,.05),rgba(0,0,0,.62)),url('${escapeHtml(item.imagem)}')"` : ""}>
        <span>${escapeHtml(item.titulo)}</span>
      </div>
    `;
  }).join("");
}

function setupContact() {
  $("#contactTitle").textContent = cfg.contato.titulo;
  $("#contactText").textContent = cfg.contato.texto;
  $("#ctaTitle").textContent = cfg.contato.ctaTitulo;
}

function setupMenu() {
  const menuBtn = $("#menuBtn");
  const navLinks = $("#navLinks");

  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

function init() {
  setupTheme();
  setupCompany();
  setupHero();
  setupAbout();
  setupServices();
  setupTeam();
  setupGallery();
  setupContact();
  setupMenu();

  $("#year").textContent = new Date().getFullYear();
}

init();
