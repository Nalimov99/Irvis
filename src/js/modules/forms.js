import numValid from './numValid';

const forms = function(state) {
    const forms = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        userPhone = document.querySelectorAll('input[name="user_phone"');

    numValid(userPhone);

    const message = {
        loading: 'Загрузка...',
        done: 'Спасибо, скоро с вами свяжемся!',
        failure: 'Произошла ошибка'
    };

    async function postData(url = "", json = {}) {
        let status = document.querySelector('.status');
        status.textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: json
        });

        return await res;
    }

    function clearInputs() {
        input.forEach((item) => {
            item.value = "";
        });
    }
    
    forms.forEach((item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const status = document.createElement('div');
            status.classList.add('status');
            status.textContent = message.loading;
            item.appendChild(status);

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') == 'end') {
                for(let key in state) {
                    formData.append(key, state[key]);
                }
            }
            const json = JSON.stringify(Object.fromEntries(formData));

            postData('assets/server.php', json)
            .then(() => {
                status.textContent = message.done;
            })
            .catch(() => {
                status.textContent = message.failure;
            })
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    status.remove();
                }, 10000);
            });
        });
    });
};

export default forms;