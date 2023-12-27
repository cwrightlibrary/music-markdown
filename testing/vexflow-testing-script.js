// create a function to repeat this, bool for text underneath

function addStave(div, noteinfo, keysig, shownotenames) {
	const { Renderer, Stave, StaveNote, Voice, Formatter, Annotation, Beam } = Vex.Flow;
	const figdiv = document.getElementById(div);
	const renderer = new Renderer(figdiv, Renderer.Backends.SVG);
	renderer.resize(500, 250);
	const context = renderer.getContext();
	const stave = new Stave(10, 40, 400);
	stave.addClef("treble").addKeySignature(keysig).addTimeSignature("4/4");
	stave.setContext(context).draw();

	const notes = []
	for (let i = 0; i < noteinfo.length; i++) {
		const notename = noteinfo[i][0];
		const stavenote = new StaveNote({ keys: notename, duration: noteinfo[i][1] });
		notes.push(stavenote);
	}

	if (shownotenames) {
		notes.forEach(function(note, index) {
			if (note.isRest() == undefined) {
				if (note.keys.length < 2) {
					var note_name = note.keys[0].substring(0, 1).replace(/[0-9]/g, "").replace("/", "").toUpperCase();
					if (note.keys[0].substring(1, 2) == "b") {
						note_name += "♭";
					}
					if (note.keys[0].substring(1, 2) == "#") {
						note_name += "♯";
					}
					const text = new Annotation(note_name).setFont("Noto Sans", 12).setVerticalJustification(Annotation.VerticalJustify.BOTTOM);
					note.addModifier(text, 0);
				}
			}
		});
	}

	for (let i = 0; i < noteinfo.length; i++) {
		if (noteinfo[i].length == 3) {
			chordname = noteinfo[i][2];
			if (chordname[1] == "b") {
				nchordname = chordname.substring(0, 1) + "♭" + chordname.substring(2);
				chordname = nchordname;
			}
			chordname = chordname.replace("#", "♯");
			const chord = new Annotation(chordname).setFont("Noto Sans", 14).setJustification(Annotation.HorizontalJustify.CENTER).setVerticalJustification(Annotation.VerticalJustify.TOP);
			notes[i].addModifier(chord, 0);
		}
	}

	const voice = new Voice({ num_beats: 4, beat_value: 4 });
	voice.addTickables(notes);

	new Formatter().joinVoices([voice]).format([voice], 350);
	voice.draw(context, stave);
}

const fig1_notes = [
	[["c/4"], "q", "Cmaj7"],
	[["d/4"], "q"],
	[["b/4"], "qr"],
	[["c/4", "e/4", "g/4"], "q"]
];

addStave("fig1", fig1_notes, "C", true);

const fig2_notes = [
	[["bb/3"], "q", "BbMaj7"],
	[["c/4"], "q"],
	[["a/4"], "qr"],
	[["b/3", "d/4", "f/4"], "q"]
];

addStave("fig2", fig2_notes, "Bb", true);