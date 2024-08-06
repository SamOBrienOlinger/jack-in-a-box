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

    // box.addEventListener('click', () => {
    //     let randomJack = jackList[Math.floor(Math.random() * jackList.length)];
    //     jackImage.src = randomJack;
    //     box.classList.add('opened');
    //     jack.classList.remove('hidden');
    //     shut.classList.remove('hidden');
    // });

    box.addEventListener('click', () => {
        const randomBox = Math.random() < 0.5 ? andy : justin;
        showRandomJack(randomBox);
    });

    const showRandomJack = (box) => {
        let randomJack = jackList[Math.floor(Math.random() * jackList.length)];
        jackImage.src = randomJack;
        box.classList.remove('hidden');
        jack.classList.remove('hidden');
        shut.classList.remove('hidden');
    };

    shut.addEventListener('click', () => {
        jack.classList.add('hidden');
        shut.classList.add('hidden');
        box.classList.remove('opened');
        
        andy.classList.add('hidden');
        justin.classList.add('hidden');
    });

    // let andyBox = [
    //     'assets/images/jack-one.webp',
    //     'assets/images/jack-two.webp',
    //     'assets/images/jack-three.webp',
    //     'assets/images/jack-four.jpg'
    // ]

    // let justinBox = [
    //     'assets/images/jack-one.webp',
    //     'assets/images/jack-two.webp',
    //     'assets/images/jack-three.webp',
    //     'assets/images/jack-four.jpg'

    // ]
});

