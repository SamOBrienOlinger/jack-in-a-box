document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const jack = document.getElementById('jack');
    const jackImage = document.getElementById('jackImage');
    const shut = document.getElementById('shut');
    const andy = document.getElementById('andy-box');
    const justin = document.getElementById('justin-box');

    let jackList = [
        'assets/images/jack-one.webp',
        'assets/images/jack-two.webp',
        'assets/images/jack-three.webp',
        'assets/images/jack-four.jpg'
    ];

    let lastBox; // To keep track of the last box shown

    box.addEventListener('click', () => {
        const randomBox = Math.random() < 0.5 ? andy : justin;
        showRandomJack(randomBox);
    });

    const showRandomJack = (selectedBox) => {
        let randomJack = jackList[Math.floor(Math.random() * jackList.length)];
        jackImage.src = randomJack;
        
        if (lastBox) {
            lastBox.classList.add('hidden'); // Hide the last box
        }

        selectedBox.classList.remove('hidden'); // Show the current box
        jack.classList.remove('hidden');
        shut.classList.remove('hidden');

        lastBox = selectedBox; // Update the last box shown
    };

    shut.addEventListener('click', () => {
        jack.classList.add('hidden');
        shut.classList.add('hidden');
        box.classList.remove('opened');
        
        if (lastBox) {
            lastBox.classList.add('hidden'); // Ensure the last box is hidden
        }

        andy.classList.add('hidden');
        justin.classList.add('hidden');
    });

    const refreshPage = document.getElementById("refresh");
    refreshPage.addEventListener("click", (e) => {
        document.location.reload();
    });
});