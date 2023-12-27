// create a function to repeat this, bool for text underneath

const { Renderer, Stave, StaveNote, Voice, Formatter, Annotation } = Vex.Flow;

const div = document.getElementById("output");
const renderer = new Renderer(div, Renderer.Backends.SVG);
renderer.resize(500, 250)
const context = renderer.getContext();

const stave = new Stave(10, 40, 400);
stave.addClef("treble").addTimeSignature("4/4");
stave.setContext(context).draw();

const notes = [
	new StaveNote({ keys: ["c/4"], duration: "q" }),
	new StaveNote({ keys: ["d/4"], duration: "q" }),
	new StaveNote({ keys: ["b/4"], duration: "qr" }),
	new StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
];

notes.forEach(function(note, index) {
	const note_name = note.keys[0].replace(/[0-9]/g, "").replace("/", "").toUpperCase();
	const text = new Annotation(note_name).setFont("Arial", 12).setVerticalJustification(Annotation.VerticalJustify.BOTTOM);
	note.addModifier(text, 0);
});

const chord = new Annotation("Cmaj7").setFont("Arial", 12).setVerticalJustification(Annotation.VerticalJustify.TOP);
notes[0].addModifier(chord, 0);

const voice = new Voice({ num_beats: 4, beat_value: 4 });
voice.addTickables(notes);

new Formatter().joinVoices([voice]).format([voice], 350);

voice.draw(context, stave);