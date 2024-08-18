function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const isOpen = menu.classList.contains('translate-x-0');
    menu.classList.toggle('translate-x-full', isOpen);
    menu.classList.toggle('translate-x-0', !isOpen);
}