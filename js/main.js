// Bud's Garage — site scripts

document.addEventListener("DOMContentLoaded", function () {
  injectFooter();
  setupNavToggle();
  setupAriBookingResize();
});

function injectFooter() {
  var mount = document.getElementById("site-footer-include");
  if (!mount) return;

  var year = new Date().getFullYear();

  mount.innerHTML =
    '<div class="container">' +
      '<div class="footer-grid">' +
        '<div>' +
          '<a href="index.html" class="brand">' +
            '<span class="logo-mark">' +
              '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>' +
            '</span>' +
            "Bud's <span>Garage</span>" +
          "</a>" +
          "<p>Full-service auto repair and tires on Trinity Street, plus the mobile mechanic service Vancouver already trusts.</p>" +
          '<div class="social-row">' +
            '<a href="tel:+17788193705" aria-label="Call Bud\'s Garage"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>' +
            '<a href="mailto:info@budsgarage.ca" aria-label="Email Bud\'s Garage"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></a>' +
          "</div>" +
        "</div>" +
        '<div class="footer-col">' +
          "<h4>Site</h4>" +
          "<ul>" +
            '<li><a href="index.html">Home</a></li>' +
            '<li><a href="services.html">Services</a></li>' +
            '<li><a href="about.html">About</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
          "</ul>" +
        "</div>" +
        '<div class="footer-col">' +
          "<h4>Services</h4>" +
          "<ul>" +
            '<li><a href="services.html">Tire Sales &amp; Service</a></li>' +
            '<li><a href="services.html">General Repair</a></li>' +
            '<li><a href="services.html">Diagnostics</a></li>' +
            '<li><a href="services.html">Mobile Mechanic</a></li>' +
          "</ul>" +
        "</div>" +
        '<div class="footer-col">' +
          "<h4>Contact</h4>" +
          "<ul>" +
            '<li><a href="https://www.google.com/maps/search/?api=1&query=3689+Trinity+Street+Vancouver+BC" target="_blank" rel="noopener">3689 Trinity Street, Vancouver, BC</a></li>' +
            '<li><a href="tel:+17788193705">(778) 819-3705</a></li>' +
            '<li><a href="mailto:info@budsgarage.ca">info@budsgarage.ca</a></li>' +
          "</ul>" +
        "</div>" +
      "</div>" +
      '<div class="footer-bottom">' +
        "<span>&copy; " + year + " Bud's Garage. All rights reserved.</span>" +
        "<span>3689 Trinity Street, Vancouver, BC</span>" +
      "</div>" +
    "</div>";
}

function setupNavToggle() {
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  });
}

function setupAriBookingResize() {
  var iframe = document.getElementById("ari-booking");
  if (!iframe) return;

  window.addEventListener("message", function (e) {
    if (e.data && e.data.type === "ari-booking-resize") {
      iframe.style.height = e.data.height + "px";
    }
  });
}
