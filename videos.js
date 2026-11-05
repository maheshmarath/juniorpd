// Curated videos are paired with a specific observation for each day's task.
// A repeated video is a deliberate return to a different technique or design step.
const VIDEO_LIBRARY = {
  shapes: { title: "2D vs 3D shapes for kids", creator: "KIDZOKI", id: "qiQDKBlpC2g" },
  views: { title: "Draw front, top and side views", creator: "Engineering drawing lesson", id: "ISLN-sYKGCk" },
  measure: { title: "Use a ruler: centimeters and millimeters", creator: "Measurement lesson", id: "dIO_lGQFeu8" },
  basics: { title: "Tinkercad: first 3D design", creator: "Tinkercad beginner tutorial", id: "csvBRWfgf1I" },
  full: { title: "Tinkercad from model to print", creator: "Teacher's Tech", id: "XL1XVV6gQ9E" },
  tools: { title: "Group, align, mirror and ruler", creator: "Make Create Innovate", id: "uz4MKCLJXBo" },
  name: { title: "Create a nameplate in Tinkercad", creator: "Tinkercad introduction", id: "hQ6OU2m0rwY" },
  pencil: { title: "Design a pencil holder step by step", creator: "Tinkercad project tutorial", id: "jaUYBTgZoCU" },
  desk: { title: "Make a desk organizer in Tinkercad", creator: "Tinkercad project tutorial", id: "3bDtwYwifbc" },
  key: { title: "Design a keychain in Tinkercad", creator: "Tinkercad project tutorial", id: "Th9ff_UJSX8" },
  phone: { title: "Make a phone stand in Tinkercad", creator: "Jamertron", id: "5zufVQGaES0" },
  hinge: { title: "Design a hinge in Tinkercad", creator: "Tinkercad hinge tutorial", id: "bOY0LQlNKrc" },
  paperhinge: { title: "Make a hinge from corrugated cardboard", creator: "Itoshige Studio", id: "dciE0sqWrUQ" },
  wheel: { title: "Simple machines: wheel and axle", creator: "Little School", id: "ymvSy5vniCM" },
  design: { title: "The Engineering Design Process: An Eggstronaut Mission", creator: "Science Buddies", id: "fuwGvZ-eOrc" },
  iterate: { title: "Jessi and Squeaks build a better back scratcher", creator: "SciShow Kids", id: "zrAl6JQ3sb4" },
  cardboard: { title: "Prototyping in cardboard and foamcore", creator: "Jen Schachter / Tested", id: "UtQTIZSf8Mo" },
  strong: { title: "Strong newspaper structures", creator: "Design Squad", id: "VF0hz29HSas" },
  print: { title: "3D printing for kids: how printers work", creator: "Paisley's Corner", id: "YopnifbUFPE" }
};

// key | watch-for prompt | optional starting second in a longer tutorial
const VIDEO_MATCHES = `shapes|Notice which shapes have depth as well as width and height.
basics|Watch a shape move left-right, forward-back and up-down on the workplane.
shapes|Look for boxes, cylinders and spheres in everyday objects.
views|Draw the same object from three directions along with the presenter.
measure|Start at zero on your ruler and record centimeters and millimeters.
design|Notice when the designer records the problem and possible ideas.
cardboard|Watch how a quick cardboard model helps test a design before polishing it.
basics|Find the workplane and practice changing the camera view.
basics|Pause when a basic shape is placed; move your own shape before continuing.
full|Watch shape properties and type in your own width, depth and height.|212
basics|Watch how a shape is lifted above the workplane; check it from the side.
basics|Find the rotation handles and rotate your own roof shape.
basics|Watch how the model is copied or moved; make equal parts in your design.
basics|Copy the basic shapes, then make a new arrangement for your playground.
tools|Start at Align and line up your own three posts by their centers.|82
tools|Start at Group; join two shapes and then separate them again.|49
tools|Watch a solid and hole being used together to remove material.|35
full|Start at subtraction; send a cylinder hole all the way through your block.|712
tools|Start at the ruler demo and record a real distance in millimeters.|199
tools|Start at Mirror and compare the two sides across a center line.|183
phone|Look for the slot and stable base; compare both with your cardboard phone.
design|Listen for the user's problem and the requirements before building.
name|Build the base and text; check whether it reads from desk height.
pencil|Watch how the holder is hollowed; measure its walls and openings.
key|Find the ring hole and check that enough material surrounds it.
tools|Use the hole technique shown to make your own hollow cutter outline.|35
desk|Compare the organizer's openings with the real items it must hold.
iterate|Notice who needs the product and what goes wrong in the first attempt.
iterate|Watch the maker notice what a real user cannot reach or hold easily.
design|Listen for the questions that define a problem before ideas are made.
design|Follow the user's task and identify the step that needs improvement.
design|Count how many ideas are considered before a prototype is chosen.
design|Notice the criteria used to pick a promising design.
iterate|See how a physical mockup exposes what is uncomfortable to use.
iterate|Watch the test and name one change made because of the result.
hinge|Identify the separate pieces and the gap that lets them rotate.
paperhinge|Watch where the cardboard bends, then make a simpler tape hinge.
wheel|Find the axle at the wheel's center, then test your straw axle.
hinge|Look at how space between parts allows movement; test your own slider gap.
hinge|Notice where a moving part could flex or break; thicken your sketch there.
hinge|List the pieces in the order they would be assembled.
iterate|Compare an early attempt with the improved version after testing.
cardboard|Watch how a rough physical model answers a question quickly.
design|Notice which single question a test tries to answer.
iterate|Name exactly what failed before watching the improvement.
iterate|Look for the one change that made the second prototype work better.
full|Watch how the design is named on the dashboard; save a v1 and v2.|751
iterate|Notice how the maker uses a failed test as feedback, not a final verdict.
design|Follow the cycle from problem to prototype, test and improvement.
print|Look closely at how many thin layers form one solid object.
full|Orbit the model and look for any piece that floats away from the body.|92
print|Watch the first layers and explain why a flat base is helpful.
print|Watch the layers grow and point out any part with little below it.
full|Use the ruler segment to compare an exact hole with a slightly larger trial hole.|491
full|Start at STL export; check the file's name and size with an adult.|934
full|Review the model-to-print steps and make your four-point checklist.|795
strong|Compare paper and cardboard as materials for the same load.
strong|Spot a fold, tube or brace that makes a structure stronger.
pencil|Notice the hollow center; compare it with a solid block of the same outer size.
desk|Look inside the organizer and notice any hard-to-reach corners.
hinge|Notice whether parts can be separated and replaced if one breaks.
hinge|Look for pinch points and sharp edges before making a moving part.
strong|See how a second build improves strength with less material.
design|Start with the person's need before choosing a product shape.
design|Listen for the requirements that tell the team whether it worked.
desk|Compare an existing organizer's useful parts with your own product brief.
design|Notice that several ideas are sketched before one is built.
design|Follow the reasons for choosing one idea to prototype.
full|Set dimensions for the main body before adding decoration.|212
design|Use the team's plan-and-build discussion to review your own sketch.
full|Start at the shape section and build your largest body first.|92
name|Watch how text is placed on a base; add only features with a job.
phone|Compare the slot width with the object it needs to hold.
cardboard|Make a rough full-size mockup before changing the digital model.
iterate|Watch how a tester's difficulty reveals a design problem.
iterate|Compare before and after; write down which observation led to the change.
phone|Test whether the stand stays upright with the real object.
iterate|Focus on the weak point found by testing and change one thing.
name|Check readability from the user's normal viewing distance.
design|Notice how the team explains the problem, test and final change.
design|Use the test-result sequence to plan your own presentation.
full|Review file naming, export and the final model check.|751
iterate|Compare your first attempt with what the designer learned later.
design|Show the first idea, test evidence and final improvement in that order.`;

const videoRows = VIDEO_MATCHES.split("\n");
if (videoRows.length !== LESSONS.length) throw new Error("Every lesson needs a video match.");
videoRows.forEach((row, index) => {
  const [key, focus, start] = row.split("|");
  const source = VIDEO_LIBRARY[key];
  if (!source || !focus) throw new Error(`Bad video match on day ${index + 1}`);
  LESSONS[index].video = { ...source, focus, start: Number(start || 0) };
});
