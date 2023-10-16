const lazyLoading = () => {
    const lazyImages = document.querySelectorAll('.lazy');
// to make the image visble on scrolling to the browser, i used the 'Intersection Observer API'

const observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove('loading');
            image.classList.add('loaded');
            observer.unobserve(image);
        }
    });
}, {
    // root: null, // leaving it at null will make the entire page be observed
    // rootMargin: '0px', // This adds additional space to be observerd on the root, but since the root = null, i left it at it dfault.
    // threshold: 0, // This dfines how much of the image needs to be visible before observing it
});

// loop through all the images
lazyImages.forEach( image => {
    observer.observe(image); // here, the observe() method is used to observe the images
});
};

export default lazyLoading;
