import './slider';
import WOW from 'wow.js';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";


window.addEventListener('DOMContentLoaded', () => {
    'uses strict';
    new WOW().init();
    let modalState = {};
    const deadline = '2020-06-13:18:42';

    changeModalState(modalState);
    modal();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
    forms(modalState);
    timer(deadline);
    images();
    
});