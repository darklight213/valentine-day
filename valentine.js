document.addEventListener("DOMContentLoaded", function() {
    showFirstPage();
});

function showFirstPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Will you be my valentine?</h1>
        <img src="cuteshitzu.jpeg" alt="Cute Dog" style="width: 300px; height: auto;">
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
    `;

    document.getElementById('yesBtn').addEventListener('click', showSecondPage);
    document.getElementById('noBtn').addEventListener('click', function() {
        this.innerText = 'Yes';
    });
}

function showSecondPage() {
    const content = document.getElementById('content');
    // Add a span to display the slider value
    content.innerHTML = `
        <h2>How much do you love me?</h2>
        <input type="range" id="loveRange" min="1" max="100" value="50"> <!-- Set a default value -->
        <span id="sliderValue">50</span>% <!-- Display the default value -->
        <button id="nextBtn" disabled>Next</button>
        <p id="notEnoughMsg" class="hidden">Not enough!</p>
    `;

    const loveRange = document.getElementById('loveRange');
    const sliderValue = document.getElementById('sliderValue'); // Get the span for displaying the slider value
    const nextBtn = document.getElementById('nextBtn');
    const notEnoughMsg = document.getElementById('notEnoughMsg');

    // Update the span with the slider's current value
    loveRange.oninput = function() {
        sliderValue.textContent = this.value; // Update the text content of the span with the slider's value
        if(this.value === '100') {
            notEnoughMsg.classList.add('hidden');
            nextBtn.disabled = false;
        } else {
            notEnoughMsg.classList.remove('hidden');
            nextBtn.disabled = true;
        }
    };

    nextBtn.addEventListener('click', showThirdPage);
}


function showThirdPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Choose a movie for us to watch:</h2>
        <div id="movies">
            <img src="inception.jpeg" alt="Inception" class="movie">
            <img src="interstellar.jpeg" alt="Interstellar" class="movie">
            <img src="ted.jpeg" alt="ted" class="movie">
            <img src="barbie.jpeg" alt="barbie" class="movie">
            <img src="wick.jpeg" alt="wick" class="movie">
        </div>
    `;

    document.querySelectorAll('.movie').forEach(movie => {
        movie.addEventListener('click', showLastPage);
    });
}

function showLastPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Thank you for your participation this year, until next year! I love you so much</h1>
        <img src="nini.jpeg" alt="nini" style="width: 300px; height: auto;">
    `;
}
