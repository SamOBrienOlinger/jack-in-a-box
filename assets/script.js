document.addEventListener('DOMContentLoaded', () => {

    const box = document.getElementById('box');
    const jack = document.getElementById('jack');
    const shut = document.getElementById('shut');

    box.addEventListener('click', () => {
    
      jack.style.display='block';
      shut.style.display='block';

    })

    const refreshPage = document.getElementById("shut");
    refreshPage.addEventListener("click", (e) => {
      document.location.reload();

  })
})

let jackList = [
    "Jack Hammer",
    "Jackfruit",
    "Jack-o-lantern",
    "Jack-daw",
    "Jack Johnson",
    "Jack Grealish",
    "Jumping Jacks",
    "Black Jack",
    "Jack Black",
    "Jack(ie) Chan",
    "Jackson 5",
    " ",      
];

box.addEventListener('click', () => {
    let randomJack = jackList[Math.floor(Math.random() * jackList.length)];
    jack.textContent = randomJack;
    jack.style.display = 'block';
    shut.style.display = 'block';
});

shut.addEventListener('click', () => {
    jack.style.display = 'none';
    shut.style.display = 'none';
});