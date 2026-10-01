# Age Checker (Verificador de Idade)

A small front-end web project built with plain HTML, CSS and JavaScript. The user enters their birth year and selects a gender, and the page calculates their age and displays an illustrated portrait that matches their age group.

> The interface is in Brazilian Portuguese (`pt-BR`).

## Live Demo

🔗 **[Open the website](https://miguellsouza.github.io/Age-Checker/)**

## Features

- Calculates age from the birth year, using the current year from the user's browser.
- Validates input: empty values and birth years in the future show an error alert.
- Displays a portrait matching the selected gender and age group.
- Responsive-friendly layout with a gradient background and a centered card.
- No dependencies, frameworks or build steps.

## Age Groups

| Age range   | Group  | Male image    | Female image   |
|-------------|--------|---------------|----------------|
| 0 – 9       | Child  | `menino.jpg`  | `menina.jpg`   |
| 10 – 20     | Teen   | `rapaz.jpg`   | `moça.jpg`     |
| 21 – 49     | Adult  | `homem.jpg`   | `mulher.jpg`   |
| 50+         | Senior | `senhor.jpg`  | `senhora.jpg`  |

## Project Structure

```
.
├── index.html        # Main page (entry point): form + result area
├── cssex001.css      # Styles
├── script.js         # Age calculation and image selection logic
├── menino.jpg
├── menina.jpg
├── rapaz.jpg
├── moça.jpg
├── homem.jpg
├── mulher.jpg
├── senhor.jpg
└── senhora.jpg
```

The file that opens the site is **`index.html`** (rename `agechecker.html` to `index.html` and keep the `<link>` and `<script>` paths as they are). All files must live in the same folder, since the HTML and JavaScript reference them with relative paths.

## Getting Started

1. Clone or download this repository.
2. Make sure the eight image files are in the same folder as the HTML file.
3. Open `index.html` in any modern web browser.

No server is required.

## How It Works

1. The user types their birth year into the number field and picks **Masculino** (male) or **Feminino** (female).
2. Clicking **Verificar** calls `verificar()` in `script.js`.
3. The function:
   - gets the current year with `new Date().getFullYear()`;
   - validates the input (non-empty and not greater than the current year);
   - computes `age = currentYear - birthYear`;
   - picks an image based on gender and age group;
   - writes the result text and appends a circular `<img>` to the `#res` container.

## Known Limitations

- Age is calculated from the year only, so it can be off by one year depending on the exact birthday.
- Very old or implausible birth years (for example, year `0`) are accepted.
- Gender is limited to two options.

## Possible Improvements

- Use the full birth date for an exact age.
- Add an upper limit on the birth year.
- Add `value` attributes to the radio buttons and refactor the repeated `if/else` logic into a lookup object.
- Add `alt` text to the generated image for accessibility.
- Make the card width fluid (for example, `max-width: 500px`) for small screens.

## Author

Miguel Souza
