// Create the observer 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const entryClassList = entry.target.classList;
        if (entry.isIntersecting) {
            switch(true){
                case entryClassList.contains('left'):
                    entryClassList.add('slide-left');
                    break;
                case entryClassList.contains('right'):
                    entryClassList.add('slide-right');
                    break;
                case entry.target.getAttribute('id', 'team-header') == 'team-header':
                    entryClassList.add('slide-right-title');
                    break;
                default:
                    return;
            }
            return;
        }
    });
});
// Add elements to what you want to be animated
const animElems = document.querySelectorAll('.team-block, #team-header');

// Loop over the elements and add each one to the observer
animElems.forEach((element) => observer.observe(element));
console.log(animElems);