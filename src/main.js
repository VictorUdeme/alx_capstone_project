import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css'
import '../styles/components/about.css'
import '../styles/components/project.css'
import '../styles/components/work.css'
import '../styles/components/contact.css'
import '../styles/components/footer.css'
import '../styles/components/mobile_nav.css'
import '../styles/utility.css';

// Importing the mobileNav file from toggle-nav.js

import mobileNav from './utilities/toggle-nav';
import darkMode from './utilities/dark-mode';
import lazyLoading from './utilities/lazy-loading';

// invokes the function
mobileNav();
darkMode();
lazyLoading();