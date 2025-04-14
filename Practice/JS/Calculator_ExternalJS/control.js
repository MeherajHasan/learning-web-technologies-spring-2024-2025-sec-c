let string = "";
let memory = 0; // memory storage
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === '=') {
      try {
        string = eval(string).toString();
      } catch (error) {
        string = "Error";
      }
      document.querySelector('input').value = string;
    }

    else if (value === 'C') {
      string = "";
      document.querySelector('input').value = string;
    }

    else if (value === 'M+') {
      try {
        memory = eval(string); // store evaluated value to memory
      } catch (error) {
        memory = 0;
      }
    }

    else if (value === 'M-') {
      string += memory.toString(); // append memory value to current input
      document.querySelector('input').value = string;
    }

    else {
      string += value;
      document.querySelector('input').value = string;
    }
  });
});
