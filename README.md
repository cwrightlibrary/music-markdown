# Music Markdown

A test using Vexflow's EasyScore.

### Score 1

<script src="https://cdn.jsdelivr.net/npm/vexflow@4.2.2/build/cjs/vexflow.js"></script>

<div id="score1"></div>

Test 1.

### Score 2

<div id="score2"></div>

Test 2.

<script>
const { Renderer, Stave, TextNote } = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
const div1 = document.getElementById("score1");
const renderer1 = new Renderer(div1, Renderer.Backends.SVG);
// Configure the rendering context.
renderer1.resize(500, 150);
const context1 = renderer1.getContext();
// Create a stave of width 400 at position 10, 40 on the canvas.
const stave1 = new Stave(10, 40, 400);
// Add a clef and time signature.
stave1.addClef("treble").addTimeSignature("4/4");
// Connect it to the rendering context and draw!
stave1.setContext(context1).draw();
// Create an SVG renderer and attach it to the DIV element named "boo".

const div2 = document.getElementById("score2");
const renderer2 = new Renderer(div2, Renderer.Backends.SVG);
// Configure the rendering context.
renderer2.resize(500, 150);
const context2 = renderer2.getContext();
// Create a stave of width 400 at position 10, 40 on the canvas.
const stave2 = new Stave(10, 40, 400);
// Add a clef and time signature.
stave2.addClef("treble").addTimeSignature("4/4");
// Connect it to the rendering context and draw!
stave2.setContext(context2).draw();
</script>

*The page must be refreshed to view.*
