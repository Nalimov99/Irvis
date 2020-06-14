const tabs = function(headerSelector, tabsSelector, contentSelector, activeClass, display = 'block') {
   const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector);
    
    function toggleActiveClass(i = 0) {
        tabs.forEach((value, index) => {
            value.classList.remove(activeClass);
            if(i === index) {
                value.classList.add(activeClass);
            }
        });
    }
    
    function hideTabContnet() {
        content.forEach((value, index) => {
            value.style.display = "none";
        });
    }

    function showTabContent(i = 0) {
        content.forEach((value, index) => {
            if(index === i) {
                value.style.display = display;
            }
        });
    }

    hideTabContnet();
    showTabContent();
    toggleActiveClass();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if(target.parentNode.classList.contains(tabsSelector.replace(/\./, ""))) {
            tabs.forEach((value, i) => {
                if(value == target.parentNode || value == target) {
                    hideTabContnet();
                    showTabContent(i);
                    toggleActiveClass(i);
                }
            });
        }
    });
};

export default tabs;