const checkbox = (selector) => {
    selector.forEach((item) => {
        item.addEventListener('click', () => {
            selector.forEach((value) => {
                value.checked = false;
                item.checked = true;
            });
        });
    });
};

export default checkbox;