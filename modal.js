const openModalBtn = document.getElementById('openmodal');
const modal = document.getElementById('NITmodal');
const closeModalBtn = document.getElementById('closemodal');

openmodal.addEventListener('click', () => {
    modal.style.display = 'block';
});

closmodal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});