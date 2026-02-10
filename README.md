### Live site:
https://insure-landing-page-fem-feelgood.netlify.app/

### Single page App created in nextJS for FEM Challenge.
https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8

I chose nextJs and tailwind simply because this is what I am practising and want to work with as my main framework.

The app is split into 6 main components
- Cta
- DropdownNav
- Features
- Footer
- Header
- Hero

I render Header, children, and Footer in layout.tsx to keep the header and footer consistent across all pages(if more are added in the future).

Header renders a normal nav on md, and it's hidden when smaller for responsiveness.

Header renders a hamburger icon on smaller screens and has a state for isOpen.
This state is toggled when the hamburger is clicked display or hide DropDownNav.

All other components are rendered on page.tsx and have responsive tailwind classes to display them responsively on different size screens.

