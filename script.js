document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetTabId = link.getAttribute('data-tab');
            const targetTab = document.getElementById(targetTabId);

            tabContents.forEach(content => {
                content.classList.remove('active-tab');
            });

            tabLinks.forEach(tabLink => {
                tabLink.classList.remove('active');
            });

            link.classList.add('active');
            targetTab.classList.add('active-tab');
        });
    });
});


const hiddens = document.querySelectorAll(".hidden");
document.addEventListener("DOMContentLoaded", () => {
  hiddens.forEach((hid) => hid.classList.remove("hidden"));
});
const form = document.getElementById("send-it");
const roket = document.getElementById("roket");
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.style.animationPlayState = "running";
  roket.style.animationPlayState = "running";
msg.style.zIndex = 2;
  msg.style.opacity = 1;
});

