// This function is responsible for showing and hiding the mobile navigation menu

// I wrapped everything in the mobileNav() function to enable export
const mobileNav = () => {
    // Select the button element with the class 'header__bars'
    const headerBtn = document.querySelector('.header__bars');

    // Select the mobile navigation element with the class 'mobile-nav'
    const mobileNav = document.querySelector('.mobile-nav');

    // Apply js click event to all the links
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    // I Initialize a variable to track whether the mobile navigation is open or closed
    let isMobNavOpen = false;


    // Add a click event listener to the 'header__bars' button
    headerBtn.addEventListener('click', () => {
        isMobNavOpen = !isMobNavOpen;
        if (isMobNavOpen) {
            //When the button is clicked, set the 'display' property of 'mobile-nav' to 'flex'
            mobileNav.style.display = 'flex';

            // To hide everything under the menu when the bar is clicked, I disable vertical scrolling
            document.body.style.overflowY = 'hidden';
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }

    });
    // This loops through the mobileLinks Vars
    mobileLinks.forEach(mlink => {
        mlink.addEventListener('click', () => {
            isMobNavOpen = false;
            mobileNav.style.display ='none';
            document.body.style.overflowY = 'auto';
        })
    })
}

// Export the 'mobileNav' function as a module (for use in the main.js file)
export default mobileNav;