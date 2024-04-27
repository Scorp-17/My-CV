window.addEventListener('DOMContentLoaded', (event) => {
    // Получаем все вкладки и соответствующие разделы
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // Функция для переключения вкладок
    const switchTab = (tabIndex) => {
        // Скрываем все вкладки и отображаем только выбранную
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('active');
        });
        tabs[tabIndex].classList.add('active');
        tabContents[tabIndex].classList.add('active');
    };

    // Обрабатываем клик на вкладку и вызываем функцию переключения
    const tabLinks = document.querySelectorAll('nav ul li a');
    tabLinks.forEach((tabLink, index) => {
        tabLink.addEventListener('click', (event) => {
            event.preventDefault();
            switchTab(index);
        });
    });
});
