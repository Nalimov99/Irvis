import checkbox from "./checkbox";
import numValid from "./numValid";

const changeModalState = function(state) {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowView = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');
    
    checkbox(windowProfile);
    numValid(windowWidth);
    numValid(windowHeight);

    function bindActionToElems(elem, event, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'INPUT': 
                        if(item.getAttribute('type') === 'checkbox') {
                            state[prop] = item.getAttribute('name');
                        } else if(item.getAttribute('type') === 'text') {
                            state[prop] = item.value;
                        }
                    break;
                    case 'SPAN':
                        state[prop] = i;
                    break;
                    case 'SELECT':
                        state[prop] = item.value;
                }
            });
        });
    }

    bindActionToElems(windowProfile, 'change', 'profile');
    bindActionToElems(windowWidth, 'input', 'width');
    bindActionToElems(windowHeight, 'input', 'height');
    bindActionToElems(windowView, 'change', 'type');
    bindActionToElems(windowForm, 'click', 'windowForm');

};

export default changeModalState;