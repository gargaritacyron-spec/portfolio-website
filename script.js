function hamburg(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

function cancel(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
}

const texts = [
    "FIRST YEAR STUDENT",
    "DEVELOPER",
    "STUDENT",
    "PROGRAMMER"
];

let speed = 100;

const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter; 
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const sectionId = link.getAttribute('href').substring(1); // Get the section ID
        injectContent(sectionId); // Load the content

        // Optional: Scroll to the section
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});