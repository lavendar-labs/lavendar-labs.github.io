// Create the observer 
const observerFull = new IntersectionObserver(entries => {
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
}, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 1.0, // Trigger when 100% of the element is in view
});


// alternate observer triggers when object is half in view
const observerHalf = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const entryClassList = entry.target.classList;
        if (entry.isIntersecting) {
            switch(true){
                case entryClassList.contains('fade-in'):
                    entryClassList.add('fade-in-activate');
                    break;
                case entryClassList.contains('project-box'):
                    entryClassList.add('emerge');
                    break;
                default:
                    return;
            }
            return;
        }
    });
}, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger when 50% of the element is in view
});



// Add elements to what you want to be animated
const animElemsFull = document.querySelectorAll('.team-block, #team-header, .project-box, .fade-in');
const animElemsHalf = document.querySelectorAll('.project-box, .fade-in')

// Loop over the elements and add each one to the observer
animElemsFull.forEach((element) => observerFull.observe(element));
animElemsHalf.forEach((element) => observerHalf.observe(element));