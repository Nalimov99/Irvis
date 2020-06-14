const images = function () {
    const section = document.querySelector('.works'),
        imgPopup = document.createElement('div'),
        bigImg = document.createElement('img');

    imgPopup.style.display = "none";
    imgPopup.classList.add('popup');
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    section.appendChild(imgPopup);
    imgPopup.appendChild(bigImg);
    bigImg.style.maxWidth = '90%';
    bigImg.style.maxHeight = '90%';


    section.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target && target.classList.contains('preview')) {
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            imgPopup.style.display = "flex";
            document.body.style.overflow = "hidden";
        }

        if (target && target.classList.contains('popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";
        }
    });
};

export default images;