const panels = document.querySelectorAll('.panel');

function handleClick(e) {
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', handleClick));

