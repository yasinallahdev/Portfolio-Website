const learnMoreButtons = document.querySelectorAll(".learnMore");

learnMoreButtons.forEach((button) => {

    button.addEventListener('click', () => {
        window.location.href = "aboutme.html";
    });

});
