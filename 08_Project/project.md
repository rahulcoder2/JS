# Projects Related to DOM

## Project Link



[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


[project made By hiteshchoudhary](https://github.com/hiteshchoudhary)

# Solution Code

## Project 1(Color Changer)

```javascipt
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = e.target.id;
        break;
    }
  })
);

```

## Project 2 (BMI Calculator)

```Javascipt
const form = document.querySelector('form');

// usecase when need empty value 

//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height === ' ' || height <= 0 || isNaN(height)) {
    result.innerHTML = 'Plz Enter valid Number';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Plz Enter valid Weight';
  } else {
    const bmi = (weight/(height * height/10000)).toFixed(2)
    if(bmi < 18.6){
      result.innerHTML = `<span> Your Bmi Weight is ${bmi} which is Under Weight`
    } else if ( bmi < 24.9){
      result.innerHTML = `<span> Your Bmi Weight is ${bmi} which is Normal Range`
    }else{
      result.innerHTML = `<span> Your Bmi Weight is ${bmi} which is OverWeight`
    }
  }
});

```

## Project 3 (DigitalClock)

```javascript
const clock = document.querySelector("#clock")
setInterval(()=>{
  let time = new Date()
  clock.innerHTML = time.toLocaleTimeString()
}, 1000)

```
