const style = (color) => {
    let body = document.querySelector('body');
    body.style.backgroundColor = color;
    body.style.color = 'white';
}


const DOM = (name)=> {
    console.log(`Hello mr. ${name}`);
}

export {DOM, style};