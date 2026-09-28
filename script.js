const botonsFiltre = document.querySelectorAll('.filtre-btn');
const projectes = document.querySelectorAll('.projecte-item');

botonsFiltre.forEach(boto => {
    boto.addEventListener('click', () => {
        botonsFiltre.forEach(b => b.classList.remove('actiu'));
        boto.classList.add('actiu');

        const categoriaSeleccionada = boto.getAttribute('data-filtre');

        projectes.forEach(projecte => {
            const categoriesProjecte = projecte.getAttribute('data-categoria');

            if (categoriaSeleccionada === 'tots' || categoriesProjecte.includes(categoriaSeleccionada)) {
                projecte.style.display = 'block';
            } else {
                projecte.style.display = 'none';
            }
        });
    });
});
