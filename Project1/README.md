# The Dinosaur Guide

* **Student:** Joel Bueno
* **Course:** CIM 343 / 643 - Front End Fundamentals (Section EF)
* **Instructor:** Zevensuy Rodriguez
* **Live Website:** [https://josriel123.github.io/FFFall26/Project1/index.html](https://josriel123.github.io/FFFall26/Project1/index.html)

---

## AI Tool & Prompt Disclosure

* **AI Tool Utilized:** Google Gemini
* **Purpose:** Brainstorming the creative website topic/worldbuilding (prehistoric Mesozoic field guide and paleontological archive) and generating high-resolution illustration assets for dinosaur species.
* **Brainstorming Prompts:**
  > "Brainstorm a creative concept for a prehistoric dinosaur field guide and Mesozoic expedition website. Include ideas for paleontological tools, geological era overviews, dinosaur species cards, comparative biometric scale calculations, and acoustic roar simulations that can be built into a responsive front-end website."
* **Image Generation Prompts:**
  > "Vibrant colorful digital illustration of a mighty Tyrannosaurus Rex dinosaur in a lush prehistoric Cretaceous jungle with giant ferns, ancient cycad trees, sunbeams filtering through mist..."
  > "Vibrant colorful digital illustration of a mighty horned Triceratops dinosaur grazing peacefully in a lush prehistoric river valley with giant ferns..."
  > "Vibrant colorful digital illustration of agile feathered Velociraptor dinosaurs stalking across a prehistoric rocky canyon ridge..."
  > "Vibrant colorful digital illustration of a gigantic long-necked Brachiosaurus dinosaur reaching into the high canopy of giant prehistoric conifer trees in a lush Jurassic floodplain..."
  > "Vibrant colorful digital illustration of a Spinosaurus dinosaur with a large colorful back sail, standing along a prehistoric muddy river bank..."
  > "Vibrant colorful digital illustration of a majestic Pteranodon Pterodactyl flying over towering prehistoric coastal cliffs and ancient blue ocean..."
* **Process & Implementation:**
  Gemini was used for topic ideas and illustrations. The site uses semantic HTML, CSS grids, and JavaScript event handlers.

---

## Structure and Styling

- The page includes a doctype, language, title, description, and viewport settings.
- Semantic elements include `header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption`, and `footer`.
- The gallery contains six dinosaur illustrations with alt text and captions. The T-Rex image is also used in the introduction.
- CSS styles native tags including `body`, `header`, `h1`, `h2`, `h3`, `p`, `button`, `label`, `input`, `select`, and `footer`.
- Classes such as `.tagline`, `.period-date`, `.climate-label`, `.action-btn`, `.filter-btn`, `.dino-type`, and `.result-message` style elements separately from the grids.
- The field-guide layout uses a forest masthead, flat images, plain period dates, and a light/dark theme switch.

## Grids and Responsive Layout

- Navigation uses five columns on desktop.
- The period summaries use three text columns.
- The species gallery uses two image-led columns.
- The introduction and tools also use two-column layouts.
- At 860px, navigation changes to three columns and the introduction, period summaries, and tools stack.
- At 600px, navigation changes to two columns and the gallery stacks. All grid columns are written explicitly without `repeat()`.

## JavaScript Controls

- The gallery filter shows all creatures, carnivores, herbivores, or flying reptiles.
- The calculator compares the entered weight with the selected dinosaur and shows an error for an empty, zero, or negative weight.
- The roar guide changes the displayed name and description when a dinosaur is selected. It does not play audio.
- The theme button switches between light and dark styles and updates its label.
