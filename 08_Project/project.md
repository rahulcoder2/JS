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


