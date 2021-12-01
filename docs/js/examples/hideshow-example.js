window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    const buttons = document.querySelectorAll('.wjs__button');
    const contents = document.querySelectorAll('.wjs__content');

    // vi döljer innehållet med js för att det ska synas om användaren inte
    // har js påslaget
    contents.forEach((content) => {
        content.classList.toggle('wjs__content--hidden');
    });

    buttons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Button clicked' + index);
            console.log(e);

            /* vi kan använda index för att komma åt rätt content att 
             * visa / dölja det fungerar eftersom innehållet är 
             * strukturerat som en lista och varje del har
             * en knapp och ett content
             */
            //contents[index].classList.toggle('wjs__content--hidden');

            // alternativ är att använda något form av selector på
            // eventet
            e.target.nextElementSibling.classList.toggle('wjs__content--hidden');
            e.target.classList.toggle('wjs__button--active');
        });
    });
});
