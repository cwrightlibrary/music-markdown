# Overview
*The page must be refreshed to view.*

## Introduction
Before we can start playing and improvising Jazz, we need to know some basic music theory. In the next few lessons, we will start with the basic building blocks of music and develop from there to cover some elementary musical concepts. In this way I hope to show how music (in general) works and is constructed.

## Notes
A note is the smallest element of music. It is a pitched sound. In Western Music, there are 12 notes in an octave – labelled A through G (with sharps and flats). Each key on the piano denotes a single note (see below). Different note names which represent the same note (for example C♯ and D♭) are called enharmonic.

<div id="fig1" style="margin-top:-20px"></div>

<script src="https://cdn.jsdelivr.net/npm/vexflow@4.2.2/build/cjs/vexflow.js"></script>

<script>
const fig1_notes = [
	[["c/4"], "4"],
	[["c#/4"], "4"],
	[["d/4"], "4"],
	[["eb/4"], "4"]
];

addStave("fig1", fig1_notes, "C", true);

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
</script>
