const numValid = function(selector) {
    selector.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, "");
        });
    });
};

export default numValid;