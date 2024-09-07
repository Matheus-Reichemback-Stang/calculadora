document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('input[type=button]');

    const display = document.getElementById('display')
    const ac = document.getElementById('all-clear').value;
    const del = document.getElementById('delete').value;
    const resultButton = document.getElementById('result').value;

    console.log()

    buttons.forEach((btn) => {
        btn.addEventListener('click', (element) => {
            const valueOfElement = element.target.value;

            if(display.value == 'undefined' || display.value == '0'){
                display.value = '';
            }

            if(valueOfElement == ac){
                display.value = '';
            } else if(valueOfElement == del){
                display.value = display.value.toString().slice(0, -1);
            } else if(valueOfElement == resultButton){
                try{
                    display.value = eval(display.value);
                } catch(e){
                    alert('A expressão passada é inválida!')
                    display.value = '0';
                }
            } else {
                display.value += valueOfElement;
            }
        })
    })
})
