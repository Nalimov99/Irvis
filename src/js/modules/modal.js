//TODO: uncomment popup
import calcScrollWidth from './calcScrollWidth';
const modal = function () {
    function bindModal(triggerSelector, modalSelector, closeSelector, overlayClose = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            closeElement = document.querySelector(closeSelector),
            allModals = document.querySelectorAll('[data-modal]');
        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                closeAllActiveModals();
                let scroll = calcScrollWidth();
                modal.style.display = "block";
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        
        function close(closeTarget) {
            closeTarget.addEventListener('click', (e) => {
                if (e.target === modal && overlayClose) {
                    modal.style.display = "none";
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';
                } else if (e.target === closeElement.firstChild) {
                    modal.style.display = "none";
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';
                }
            });
        }

        function closeAllActiveModals() {
            allModals.forEach((item) => {
                item.style.display = 'none';
            })
        }
        close(modal);
        close(closeElement);

    }

    function popupTimeOut(targetSelector, time = 60000) {
        const target = document.querySelector(targetSelector);
        setTimeout(() => {
            target.style.display = 'block';
        }, time);
    }



    // popupTimeOut('.popup');
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};

export default modal;