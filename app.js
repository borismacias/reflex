function setMinDateToToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const formattedToday = `${year}-${month}-${day}`;

  const dateInput = document.querySelector('[name="extra[deadline]"]');
  if (dateInput) {
    dateInput.setAttribute('min', formattedToday);
  }
}

function checkForMessageSent() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('message') === 'sent') {
    new bootstrap.Modal('#message-sent').show();
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar.style.opacity === 1) {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  document.getElementById("mySidebar").style.opacity = 1;
  document.getElementById("mySidebar").style.height = "100%";
  document.getElementById("mySidebar").style.zIndex = 3;
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  document.getElementById("mySidebar").style.opacity = 0;
  document.getElementById("mySidebar").style.height = "0";
  document.getElementById("mySidebar").style.zIndex = 1;
  document.body.style.overflow = 'auto';
}

function onDomContentLoaded() {
  setMinDateToToday();
  checkForMessageSent();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onDomContentLoaded);
} else {
  onDomContentLoaded();
}