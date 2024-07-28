//script.js

document.getElementById('add-button').addEventListener('click', function () {

    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    const tasks = document.getElementById('todo-list');

    if (task) {
        
        const liElemement = document.createElement('li');
        liElemement.textContent = task;

        const button = document.createElement('button');
        button.classList.add('remove-button');
        button.textContent = 'Remove';

        button.addEventListener('click', () => {
            liElemement.remove();
        });

        liElemement.appendChild(button);

        tasks.appendChild(liElemement);

        input.value = '';
    }

    // … your code … /
}
);