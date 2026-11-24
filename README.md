 FAQ Accordion

A simple, responsive FAQ accordion built with HTML5, CSS3, and plain JavaScript. It contains 20 questions in one clean list: general FAQ questions and internship interview questions with short answers and JavaScript examples.

## Features

- 20 accordion questions in a single FAQ section
- Click a question to expand its answer; click it again to collapse
- Only one answer stays open at a time
- Active state with red/orange highlight and rotating plus/minus icon
- Smooth expand and collapse animation using `max-height`
- Dark theme with dark sky blue, black, red, and orange colors
- Responsive layout for desktop, tablet, and mobile screens
- Accessible buttons with `aria-expanded`, `aria-controls`, and `role="region"`
- No frameworks, libraries, or build tools

## Technologies Used

- HTML5 for the page structure
- CSS3 for styling, gradients, animations, and media queries
- JavaScript for click events and class manipulation

## Project Structure

```text
faq-accordion/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

Each question is a `<button>` inside an accordion item. JavaScript listens for a click with `addEventListener()`, closes all open items, and then uses `classList.toggle("active", ...)` to open the clicked item only if it was closed. The answer height is set with `scrollHeight` so the CSS transition can animate smoothly.

## How to Run

1. Download or clone this project.
2. Open the `faq-accordion` folder.
3. Double-click `index.html` to open it in a browser.

No installation, local server, or internet connection is required.
