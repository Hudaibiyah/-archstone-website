// ===== Data pulled from the ACE brochure =====
const services = [
  { code: "SVC-01", name: "Structural Audit & Stability Certificate", desc: "Comprehensive visual inspection, defect mapping and stability assessment for RCC, steel and load-bearing structures." },
  { code: "SVC-02", name: "NDT Testing & Structural Health Evaluation", desc: "UPV, rebound hammer, half-cell potential, carbonation test, core test and chemical analysis." },
  { code: "SVC-03", name: "Structural Design (RCC / Steel / Load-Bearing)", desc: "Design of buildings, extensions, mezzanine floors, retaining walls, trusses and more." },
  { code: "SVC-04", name: "Repair & Rehabilitation Consultancy", desc: "Repair methodology reports, BOQs, tendering support and quality supervision." },
  { code: "SVC-05", name: "Retrofitting & Strengthening Design", desc: "Column jacketing, beam strengthening, FRP wrapping, steel bracing and foundation strengthening." },
  { code: "SVC-06", name: "Project Management Consultancy (PMC)", desc: "Supervision, quality control, material checks and progress monitoring for repair projects." },
  { code: "SVC-07", name: "Quantity Surveying & BOQ Preparation", desc: "Accurate estimation, material calculations and tender documentation." },
  { code: "SVC-08", name: "Redevelopment Technical Support", desc: "Feasibility assessment, structural review and guidance for housing societies." },
];

const projects = [
  { img: "manas-kanchan.jpg", name: "Manas Kanchan CHSL", loc: "Sher-e-Punjab, Andheri East" },
  { img: "ganpat-aarti.jpg", name: "Ganpat Aarti CHSL", loc: "Kamothe, Navi Mumbai" },
  { img: "new-raj-mahal.jpg", name: "New Raj Mahal", loc: "84C Nariman Road, Churchgate" },
  { img: "dubash-building.jpg", name: "Dubash Building", loc: "Hains Road, Byculla" },
  { img: "ruby-hill.jpg", name: "Ruby Hill", loc: "Malabar Hills, Walkeshwar" },
  { img: "mistry-industrial.jpg", name: "Mistry Industrial Complex", loc: "MIDC Cross Road, Andheri East" },
  { img: "toscano-house.jpg", name: "Toscano House", loc: "I.C. Colony, Borivali West" },
  { img: "moti-mahal.jpg", name: "134-136 Moti Mahal", loc: "LK Market, Zaveri Bazar" },
];

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = services.map(s => `
    <div class="service-card reveal">
      <span class="service-num">${s.code}</span>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
    </div>
  `).join("");
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projects.map(p => `
    <div class="project-card reveal">
      <figure><img src="${p.img}" alt="${p.name}, ${p.loc}" loading="lazy"></figure>
      <div class="project-caption">
        <span class="p-name">${p.name}</span>
        <span class="p-loc">${p.loc}</span>
      </div>
    </div>
  `).join("");
}

// ===== Mobile nav toggle =====
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

// ===== Scroll reveal =====
function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}

// ===== Contact form — sends via FormSubmit.co (no backend needed) =====
// FIRST-TIME SETUP: FormSubmit requires the destination inbox to confirm one
// activation email the very first time this form is submitted. See README.md.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/archstoneconsultingengineers@gmail.com";

function setupForm() {
  const form = document.getElementById("contactForm");
  const btn = document.getElementById("formSubmitBtn");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    if (!name || !phone) {
      status.textContent = "Please fill in your name and phone number.";
      status.className = "form-status is-error";
      return;
    }

    btn.disabled = true;
    btn.textContent = "Sending…";
    status.textContent = "";
    status.className = "form-status is-sending";
    status.textContent = "Sending your request…";

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (res.ok) {
        status.className = "form-status is-success";
        status.textContent = `Thanks, ${name} — your request has been sent. We'll call you on ${phone} shortly.`;
        form.reset();
      } else {
        throw new Error("Non-OK response");
      }
    } catch (err) {
      status.className = "form-status is-error";
      status.textContent = "Something went wrong sending this. Please call +91 70214 28958 or email us directly instead.";
    } finally {
      btn.disabled = false;
      btn.textContent = "Send Request";
    }
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
renderServices();
renderProjects();
setupNav();
setupReveal();
setupForm();
