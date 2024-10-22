function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
