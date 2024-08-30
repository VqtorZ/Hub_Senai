document.addEventListener('DOMContentLoaded', function() {
    const coursesTitle = document.querySelector('.courses-title');
    const coursesList = document.querySelector('.courses-list');
    
    coursesTitle.addEventListener('click', function() {
        if (coursesList.style.display === 'none' || coursesList.style.display === '') {
            coursesList.style.display = 'block';
        } else {
            coursesList.style.display = 'none';
        }
    });
});