const countValue = document.querySelector('#counter');

const inc = () => {

    //get value from UI
    let value = parseInt(countValue.innerText);
    //update the value
    value=value+1;

    //set the value
    countValue.innerText = value;
};

const dec = () => {
    //get value from UI
    let value = parseInt(countValue.innerText);
    //update the value
    value = value - 1;

    //set the value
    countValue.innerText = value;
}