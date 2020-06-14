const calcScrollWidth = function() {
        const div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);

        const scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
};

export default calcScrollWidth;