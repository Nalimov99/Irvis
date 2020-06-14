const timer = function(deadline) { 

    function addZero(num) {
        if(num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function getTimeRemaining() {
        const t = Date.parse(deadline) - Date.parse(new Date());
        const obj = {
            'total': t,
            'seconds': Math.floor((t / 1000) % 60),
            'min': Math.floor((t / 1000 / 60) % 60),
            'hour': Math.floor((t / (1000 * 60 * 60)) % 24),
            'day': Math.floor((t/(1000 * 60 * 60 * 24)))
        };

        return obj;

    }

    (function setClock() {
        
        const seconds = document.getElementById('seconds'),
            min = document.getElementById('minutes'),
            hour = document.getElementById('hours'),
            day = document.getElementById('days'),
            interval = setInterval(updateClock, 1000);
            updateClock();

        function updateClock() {
            const t = getTimeRemaining();

            seconds.textContent = addZero(t.seconds);
            min.textContent = addZero(t.min);
            hour.textContent = addZero(t.hour);
            day.textContent = addZero(t.day);

            if(t.total <= 0) {
                seconds.textContent = '00';
                min.textContent = '00';
                hour.textContent = '00';
                day.textContent = '00';
                clearInterval(interval);
            }
        }
    }) ();


};

export default timer;