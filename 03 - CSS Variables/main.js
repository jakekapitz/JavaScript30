const root = document.documentElement;
const inputs = document.querySelectorAll('.controls input');

const handleChange = e => {
    let unit = e.currentTarget.dataset.sizing || '';
    root.style.setProperty(`--${e.currentTarget.name}`, `${e.currentTarget.value}${unit}`);
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));