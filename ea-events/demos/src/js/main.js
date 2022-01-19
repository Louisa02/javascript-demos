export function demo() {

let counter = 0;

const ButtonClickHandler = () => {
    counter++;
    let message = document.querySelector('p#p1');
    message.innerHTML = `Button was clicked a ${counter} time.`;
}
let button = document.querySelector('button');
button.addEventListener('click', ButtonClickHandler);

// Event listener functions will be passed the
// event object for the event. This object can be
// used to get information about the event and to 
// call methods/functions on the event as well 
// e.g. preventDefault()
const LinkHandler = (evt) => {
    if( confirm('Ok to stay on this page, Cancel to leave and go to nait') ) {
        //preventDefault stops the normal operation of the href.
        evt.preventDefault();
        
    }    
}
let naitLink = document.querySelector('a#a1');
naitLink.addEventListener('click', LinkHandler);

// In the above example, the explicit variable and 
// function are not required as they are not referenced
// more than once. So, we can rewrite the example all in one statement
// using an anonymous function.

document.querySelector('a#a2')
.addEventListener('click', (evt) => {
    if( confirm('Ok to stay on this page, Cancel to leave and go to nhl') ) {
        evt.preventDefault();
    }    
});

const ClickHandler = (evt) => {
    let clickMessage = document.querySelector('p#p2');
    evt.preventDefault();
    if (evt.target.id === 'a3') 
        clickMessage.innerHTML = `you clicked the NAIT link`;
    else if (evt.target.id === 'a4')
        clickMessage.innerHTML = `you clicked the NHL link`;
    else if (evt.target.id === 'h1')
        clickMessage.innerHTML = `you clicked the h1`;
}
let refUl = document.querySelector('ul.links');
console.log(refUl.outerHTML);
console.log(refUl.innerHTML);
refUl.addEventListener('click', ClickHandler);

const reportEvent = (evt) => { 
    let bubbles = document.querySelector('#evtBubbles');
    let tag = document.querySelector('#evtTag');
    let type = document.querySelector('#evtType');
    bubbles.innerHTML = evt.bubbles;
    tag.innerHTML = evt.target.tagName;
    type.innerHTML= evt.type;
}
let refSection = document.querySelector('section.mouse-tricks'); 
refSection.addEventListener('mouseover', reportEvent); 
refSection.addEventListener('mouseout', reportEvent);
refSection.addEventListener('mousedown', reportEvent);
refSection.addEventListener('mouseup', reportEvent);
refSection.addEventListener('click', reportEvent);
refSection.addEventListener('dblclick', reportEvent);

}