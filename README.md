# Rock Paper Scissors

A browser game built with HTML, CSS, and vanilla JavaScript. Play rounds against a randomly selected computer move.

## Features

- Clickable rock, paper, and scissors choices.
- Separate player and computer scores.
- Win, loss, and draw messages with visual feedback.
- Score reset and light/dark mode toggle.

## Run locally

Clone or download the repository and open `index.html` in a browser. No package installation, API key, or backend is required.

Choose an image to play a round. **Reset Game** clears both scores; **Switch Mode** changes the theme. Scores are held in memory and reset when the page reloads.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Game interface and controls |
| `style.css` | Layout, colors, and themes |
| `java.js` | Computer moves, result logic, scores, and event handlers |
| `rock.png`, `paper.png`, `scissors.png` | Choice images |

The site can be served by any static file host. Keep the images, stylesheet, and script alongside `index.html`.
