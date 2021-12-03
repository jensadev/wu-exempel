window.addEventListener('load', (event) => {
    const countButton = document.querySelector('#count-button');
    const saveButton = document.querySelector('#save-button');
    const resetButton = document.querySelector('#reset-button');

    let count = localStorage.getItem('count') || 0;

    const showCount = (countValue) => {
        const counterElement = document.querySelector('.playground > h2');
        counterElement.textContent = `Click count: ${countValue}`;
    };

    showCount(count);

    countButton.addEventListener('click', (event) => {
        event.preventDefault();
        count++;
        showCount(count);
    });
    saveButton.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.setItem('count', count);
    });
    resetButton.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.removeItem('count');
        count = 0;
        showCount(count);
    });

    const objectExample = {
        name: 'Bamse',
        description: 'När Bamse äter Farmors dunder-honung blir han världens starkaste björn. Han är också världens snällaste björn och hjälper alla som behöver hjälp – vänner som ovänner.',
        web: 'https://www.bamse.se/bamseskoj/bamse/',
        age: 55,
        friends: [
            'Lille Skutt',
            'Skalman'
        ]
    }
    localStorage.setItem('exempel', JSON.stringify(objectExample));
});