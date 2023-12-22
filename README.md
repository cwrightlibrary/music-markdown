# Overview
*The page must be refreshed to view.*

## Introduction
Before we can start playing and improvising Jazz, we need to know some basic music theory. In the next few lessons, we will start with the basic building blocks of music and develop from there to cover some elementary musical concepts. In this way I hope to show how music (in general) works and is constructed.

## Notes
A note is the smallest element of music. It is a pitched sound. In Western Music, there are 12 notes in an octave – labelled A through G (with sharps and flats). Each key on the piano denotes a single note (see below). Different note names which represent the same note (for example C# and D♭) are called enharmonic.

<div id="fig1" style="margin-top:-20px"></div>

<script src="https://cdn.jsdelivr.net/npm/vexflow@4.2.2/build/cjs/vexflow.js"></script>

<script>
const { Factory, EasyScore, System } = Vex.Flow;

const fig1 = new Factory({
	renderer: { elementId: "fig1", width: 800, height: 200 },
});

const fig1_score = fig1.EasyScore();
const fig1_system = fig1.System();

fig1_system
.addStave({
	voices: [
		fig1_score.voice(fig1_score.notes("C4/q, (C#4 Db4), D4, (D#4 Eb4)", { stem: "up" }), fig1_score.notes("C4/q, (C#4 Db4), D4, (D#4 Eb4)", { stem: "up" })),
	],
})
.addClef("treble")
.addTimeSignature("4/4");

fig1.draw();
</script>
