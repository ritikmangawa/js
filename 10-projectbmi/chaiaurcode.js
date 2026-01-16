const form = document.querySelector('form')

form.addEventListener('submit' , function(e) {
    e.preventDefault()

    //now we want value heiight and weight

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#weight')

    if(height === '' || height <0 || isNaN(height)) {
        result.innerHtML = 'please give a valid height ${height} '
    } else if(weight === '' || weight <0 || isNaN(weight)) {
        result.innerHtML = 'please give a valid height ${height} '
    } else {
        const bmi = (weight / ((height*height)/1000)).toFixed(2);

        results.innerHTML =  `<span>${bmi}</span>`
    }


    
});