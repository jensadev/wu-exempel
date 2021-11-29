/*
 * Vänta på att sidan har laddats.
 * Läs mer, https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
 */
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    // Hitta knappen i DOM-trädet och spara den i variabeln button.
    // Ett tips är att kunna och känna till vilka olika selectors vi kan använda.
    // Vad är en selector?
    // https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
    let button = document.querySelector('#js-button');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Button clicked');
        console.log(e);
    });

    let aBtn = document.querySelector('#a-button');

    aBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Link clicked');
    });

    let counterBtn = document.querySelector('#counter-button');
    let counter = 0;
    counterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        counter += 1;
        counterBtn.textContent = `Clicked: ${counter}`;
        console.log('Link clicked');
    });
});
