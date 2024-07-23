// const screen = document.getElementById('screen');
// const redBtn = document.getElementById('red');
// const greenBtn = document.getElementById('green');
// const blueBtn = document.getElementById('blue');


// redBtn.addEventListener('click', (e) => {
//     screen.style.backgroundColor = 'red';
// });

// greenBtn.addEventListener('click', (e) => {
//     screen.style.backgroundColor = 'green';
// });

// blueBtn.addEventListener('click', () => {
//     screen.style.backgroundColor = 'blue';
// });

// const buttons = document.querySelectorAll('button');

// whit a forEach loop

// buttons.forEach((i) => {
//     i.addEventListener('click', (e) => {
//         screen.style.backgroundColor = e.target.id;
//     });
// });

const form = document.getElementById('form');

function handleSubmit(e) {
    e.preventDefault() // prevent the default behaviour

    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData);
    // const data = {};
    // const fields = e.target.querySelectorAll("input, select, textarea");
    const data = Object.fromEntries(new FormData(e.target));

    // for (const field of fields) {
    //     data[field.name] = field.value;
    // }

    for (const dat in data) {
        if (data[dat].length > 0) {
            switch (dat) {
                case "name":
                    console.log(typeof data[dat])

            }
        } else {
            alert(dat + ": Campo requerido");
        }
    }

    console.log(data);
    //console.log(formData);
    // console.log(fields);
}

form.addEventListener('submit', handleSubmit);

