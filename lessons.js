const WEEKS = [
  "See in 3D", "Tinkercad foundations", "Build with precision", "Useful everyday objects",
  "Design for people", "Moving parts", "Prototype thinking", "Print-ready design",
  "Better products", "Create a product", "Test and improve", "Share your invention"
];

// Each lesson: title | idea | guided build | challenge | quiz question | correct answer | wrong answer.
const RAW = `2D and 3D|A drawing has width and height. A model adds depth, so you can view it from every side.|Draw a square, circle and triangle on paper. Turn them into a box, ball and pyramid with clay or folded paper. Point out width, height and depth.|Find five things at home and sketch their front and side views.|Which measurement makes a shape 3D?|Depth|Color
The three directions|X goes left and right, Y goes forward and back, Z goes up and down.|Make three paper arrows labelled X, Y and Z. Move a toy along each arrow, then draw its path.|Describe a chair using one movement in each direction.|Which direction goes up and down?|Z|X
Shapes in our world|Most products are combinations of simple solids such as boxes, cylinders and spheres.|Inspect a cup, pencil and lamp. Draw each as only simple solids, then build a paper version of one.|Invent a robot using at least four solids.|What solid looks like a can?|Cylinder|Sphere
Views and silhouettes|A front view and a top view reveal different information about the same object.|Trace the outline of a small object from the front, side and top. Label every view.|Ask someone to guess the object from your three views.|Can one view show every hidden side?|No|Yes
Measure before making|A size is a promise about how big something will be. Millimeters help us make accurate small objects.|Use a ruler to measure a pencil, eraser and toy. Record width, depth and height in millimeters.|Sketch a box that would fit your eraser with a little extra space.|How many millimeters are in one centimeter?|10|100
Design notebook|Designers save sketches and questions so ideas are easy to improve.|Make a notebook page with a title, three sketches, measurements and one question about a product you use.|Choose one annoying daily problem and sketch two possible fixes.|What should you record beside a product sketch?|Measurements|Only a color
Week 1 maker challenge|A prototype is a quick model used to learn, not a perfect final product.|Build a cardboard desk organizer using a sketch, three measured parts and tape. Test it with real pencils.|Improve one part after the test and note why.|Why test a prototype?|To learn what to improve|To prove it is perfect
Enter Tinkercad|The workplane is your digital table. You can place shapes on it and see them from different angles.|With an adult's help, open Tinkercad and try its starter lessons. Orbit, pan and zoom around an empty workplane.|Place a box and view it from top, front and side.|What is the workplane like?|A table for shapes|A paint brush
Place and move|Drag shapes onto the workplane and move selected shapes across it.|Place a box, cylinder and sphere. Move each to a different place and change the camera angle.|Arrange the solids into a tiny playground.|What changes when you move a shape?|Its position|Its material
Resize with handles|A shape's handles change its width, depth or height.|Create a box. Set three different sizes, writing down each measurement. Undo and redo once.|Make a box exactly 40 by 30 by 20 mm.|Which handle changes how tall a box is?|Height handle|Color menu
Lift and lower|The black cone lifts an object above the workplane; height is different from its footprint.|Lift a sphere above a box. Lower it until it rests on top. Check from the side.|Build a three-level tower that looks balanced.|Why check the side view?|To see height and gaps|To change colors
Rotate carefully|Rotation changes direction without changing a shape's basic dimensions.|Rotate a roof shape by 90 degrees, then try a small angle. Compare from front and top.|Build a tilted sign or ramp with a rotated solid.|Does rotation change a box's width setting?|No|Yes
Duplicate and repeat|Duplicating saves time and helps make matching parts.|Make one wheel, duplicate it three times and arrange four wheels around a box body.|Create a vehicle using two pairs of equal wheels.|Why duplicate matching parts?|To keep their sizes equal|To erase the original
Week 2 mini build|Several simple solids can become one recognizable object.|Design a tiny playground with a platform, slide, stairs and two decorations. Save your Tinkercad design with a clear name.|Add one feature that makes the playground safer.|What should a useful file name tell you?|What the design is|Only today's weather
Align objects|Align puts shapes on the same center or edge so a model looks intentional.|Make three cylinders of different heights. Select them and use Align to place their centers in a row.|Build a row of evenly aligned fence posts.|What does Align help control?|Relative position|File size
Group solids|Grouping joins selected solids into one editable object.|Build a simple house from a box and roof. Group them, move the group, then ungroup it.|Make a two-piece icon and group it.|What happens when grouped shapes move?|They move together|They disappear
Make a hole|A hole shape removes material from a solid when you group them.|Put a smaller hole box inside a solid box. Group them and inspect the opening from above.|Create a tray with walls and an empty center.|Does a hole add or remove material?|Remove|Add
Tunnels and openings|A cylinder hole can cut a round tunnel through a solid.|Make a thick box and pass a cylinder hole all the way through. Group and rotate to inspect it.|Design a pencil stand with one round opening.|Why must the hole pass through the solid?|So the opening goes through|So it changes color
Use the ruler|The ruler tool gives you precise positions and dimensions.|Place the ruler. Make two posts the same height and 30 mm apart. Check the measurements.|Draw and model a small bridge with measured supports.|What tool shows exact dimensions?|Ruler|Color picker
Mirror and symmetry|Symmetry means matching parts sit on opposite sides of a center line.|Build half a butterfly or robot. Duplicate and mirror its matching part around the center.|Make a symmetrical badge with one detail on each side.|What does symmetry help create?|Matching sides|Random sizes
Week 3 precision build|A good digital model combines measurements, alignment, grouping and holes.|Build a phone stand for a cardboard pretend phone. Measure its width first, then create a slot and stable base.|Test the cardboard phone in your stand and revise one measurement.|Why measure the phone before modeling?|To fit the slot|To choose a color
Sketch a product brief|A design brief states who a product helps and what it needs to do.|Write: My product helps __ do __. Sketch a desk nameplate from front and side, with three requirements.|Create a second nameplate idea that uses fewer pieces.|What does a brief describe?|A user and a need|Only a color
Build a nameplate|A nameplate needs a readable face and a base that will not tip.|Use boxes and text in Tinkercad to build a nameplate with a wide base. View it at desk height.|Make the name visible from one meter away.|Why make the base wide?|For stability|For a longer name
Pencil holder|Wall thickness is the material left around an opening.|Measure a pencil. Make a cylinder holder with a centered cylinder hole, leaving visible walls.|Design space for at least three pencils; test with paper circles.|What is wall thickness?|Material around a hole|The color of a wall
Key tag|A key tag needs a hole large enough for a ring and a label easy to recognize.|Create a rounded tag with a circular hole and raised initials. Check that the hole is not too close to the edge.|Create two versions for different users.|Why leave material around a hole?|To prevent a weak edge|To make it heavier
Cable keeper|Small products can solve irritating daily problems.|Sketch a cable keeper, then build a flat base and a smooth channel that a cable could sit in.|Ask someone to point out where the cable might slip; improve that spot.|What problem does a cable keeper solve?|A loose cable|A dark room
Cookie cutter model|A cutter is an outline with a hollow center and a safe gripping edge.|Draw a simple star or heart outline. Model a thick handle rim and an inner hole; do not use it with food unless made safely for food use.|Simplify sharp corners to make your model easier to build.|Why simplify tiny sharp corners?|They can be hard to make|They add color
Week 4 useful object|A product is judged by how well it helps someone, not only how it looks.|Choose one of this week's objects. Make a better version, naming the user, purpose and three dimensions.|Show it to a family member and record one useful suggestion.|What makes a product useful?|It meets a need|It has many colors
Meet the user|People have different hand sizes, routines and needs.|Observe someone using a pencil case or desk item. Ask permission, then note one easy part and one difficult part.|Sketch a change that would help that person.|Who is the user?|The person using the product|Only the designer
Ask good questions|Open questions invite more helpful answers than yes or no questions.|Ask a family member: What is hard about keeping your desk tidy? Write their answer exactly, then ask one follow-up.|Turn the answer into a short design goal.|Which question gives more detail?|What is difficult about it?|Is it fine?
Map a task|A task map shows the steps a user takes before, during and after using a product.|Draw the steps for packing a school bag. Circle one slow or frustrating step.|Sketch a product to improve the circled step.|Why map steps?|To spot a problem|To count colors
Ideas without judging|Many quick ideas give you more choices than one early favorite.|Set a five-minute timer and sketch eight ways to hold a book open. Label the most unusual one.|Combine two sketches into a new idea.|Why sketch several ideas?|To explore choices|To avoid testing
Choose with reasons|A simple scorecard can compare ideas for usefulness, ease and safety.|Score three book-holder ideas from 1 to 3 for usefulness, ease to make and safety. Add the totals.|Pick one idea and explain your reason in two sentences.|What should guide your choice?|User needs and evidence|Favorite color alone
Make for comfortable hands|A handle should fit a hand and avoid painful edges.|Measure your hand width. Model a chunky handle for a pretend tool, with rounded corners and room for fingers.|Ask someone to hold a cardboard version and describe the grip.|Why round a handle's edges?|For comfort|To make it invisible
Week 5 user challenge|Feedback is a clue that helps a design change.|Build a paper or digital book holder for someone else. Let them try it and record what worked and what did not.|Change one feature because of their feedback.|What should happen after useful feedback?|Revise and test again|Ignore it
Parts that move|Some products need separate parts with space between them.|Inspect a door hinge or clip. Sketch its moving parts and mark where they touch.|Model two separate pieces that could pivot around a rod.|Why leave a gap between moving parts?|So they can move|So they have the same color
Hinges in paper|A hinge lets one part rotate around an axis.|Make a cardboard flap hinge with tape. Mark its axis and test how far it rotates.|Sketch a box lid that uses the same movement.|What motion does a hinge allow?|Rotation|Only stretching
Wheels and axles|An axle passes through the center of a wheel so it can spin.|Build a cardboard wheel and straw axle. Model a wheel with a centered axle hole.|Make a two-wheel vehicle that rolls straight.|Where should the axle hole be?|At the wheel's center|At the outer edge
Sliding parts|A slider moves along a track; its shape and clearance guide it.|Fold a paper slider in a cardboard track. Model a track and a slightly smaller sliding block.|Design a drawer pull that is easy to grip.|Why is the slider slightly smaller?|To leave moving space|To make it disappear
Snap ideas|A snap uses a flexible shape to hold parts together; material choice matters.|Examine a safe plastic lid or clip. Sketch its bend, hook and release. Model a simple clip idea without expecting it to work in every material.|Identify where your clip might break and make that area thicker.|What lets a snap engage?|A small controlled bend|A painted line
Design for assembly|Parts should be easy to put together in the right order.|Sketch a two-piece pencil holder. Number the assembly steps, then model the parts separately.|Ask someone to assemble paper versions using only your numbered steps.|Why number assembly steps?|To make order clear|To change the size
Week 6 moving build|A moving prototype teaches you about friction and fit.|Build a cardboard vehicle or sliding box. Model its main pieces and test the physical version three times.|Change one gap or axle position and compare the result.|What does repeated testing reveal?|Whether a change helps|Only its color
Prototype levels|A sketch, paper model and 3D model answer different questions.|Sketch a desk hook, build it in folded paper, then model it in Tinkercad. Write what each version teaches you.|Find one question that only a real-use test can answer.|Which prototype is fastest to change?|A sketch|A printed model
Test with a question|A useful test begins with one clear question.|Choose a product and write: Will it fit? Will it stand? or Can someone use it? Build a quick test for one question.|Record the result with a number or observation.|What should you decide before a test?|The question to answer|The final color
Failure is information|When a prototype fails, describe what happened before changing it.|Make a tall paper tower. Test whether it tips when gently pushed. Record where and how it tips.|Widen or weight its base, then retest the same way.|What is a helpful failure note?|It tipped at the base|It was bad
One change at a time|Changing one thing makes it easier to tell what helped.|Model two versions of a stand with the same height but different base widths. Compare stability with paper versions.|Pick a third width and predict the result.|Why change one feature at a time?|To understand its effect|To save all files
Keep versions|Version names and notes let you compare old and new ideas.|Duplicate a design as v1 and v2. Change one dimension in v2 and write a short note explaining it.|Make a v3 after a new test and keep all three.|What should a version note explain?|What changed and why|Only the date
Feedback without fear|Criticism of a prototype is information about the object, not the maker.|Show a paper model to someone and ask: What was confusing? Listen without defending it. Write one observation.|Choose one change and explain how it serves the user.|What should you do while someone tests?|Observe and listen|Tell them every step
Week 7 test lab|Design is a loop: imagine, build, test and improve.|Choose a small desk product. Make v1, test it against one question, make v2 and compare the results.|Present one photo or sketch of each version and the evidence for your change.|What comes after testing?|Improve the design|Stop forever
What 3D printing does|A 3D printer builds an object in many thin layers from a digital model.|Watch a supervised printer demonstration or draw a stack of layer shapes. Identify bottom, layers and top.|Draw how a simple cylinder could be built layer by layer.|How does a typical printer build height?|In layers|In one flat sheet
Check a solid model|An export should represent a complete solid, not floating pieces that cannot print together.|Inspect a design from all sides. Look for disconnected parts and accidental holes. Group only parts meant to be one object.|Repair a model with one floating decoration.|Why inspect every side?|To find hidden problems|To change the screen
Flat bases and support|A flat base often helps an object sit securely while printing.|Compare a sphere, cone and box as first layers. Give a small model a stable flat base.|Redesign a toy shape so it starts on a stable base.|Which base is easier to start on?|A flat one|A single tiny point
Overhangs|An overhang sticks out with little beneath it and may need support.|Make two paper bridges: one short overhang and one long overhang. Notice which droops. Sketch support options.|Change a digital shelf bracket to reduce an unsupported overhang.|What is an overhang?|A part extending without enough below|A solid color
Size and tolerance|A digital fit may need a little real-world space; printers and materials vary.|Measure a pen. Model two trial holes, one exact and one slightly wider. Predict which will fit better.|Write a test plan for three hole sizes before printing.|Why test a few sizes?|Real fits can vary|Rulers change color
Export safely|STL and 3MF are common model files; an exported file can be checked before printing.|With an adult, export a simple model from Tinkercad. Reopen or preview it and confirm size and orientation. Never operate a printer unsupervised.|Create a clear filename with product and version.|What should you check after export?|Size and shape|Only the filename
Week 8 print-ready challenge|Preparing to print means checking shape, base, scale and safety.|Design a small desk token with a flat bottom, readable top and no loose pieces. Write a four-point print checklist.|Ask an adult to review the checklist and model before any print.|Who should supervise printer use?|An adult|Nobody
Materials have jobs|Paper, cardboard, wood and plastic differ in strength, feel and cost.|Compare three safe household materials for a phone stand. Bend or press samples gently and record what happens.|Choose a material for a lightweight stand and explain why.|Should material match the job?|Yes|No
Strong shapes|Triangles and ribs can strengthen a part without filling every space.|Build a paper bridge with and without folded ribs. Add a triangular brace to a digital shelf idea.|Test each paper bridge using the same small weight.|What can a rib add?|Strength|A new color
Reduce wasted material|Less material can mean a lighter and more thoughtful product.|Model a solid block and a tray with a hollow center. Compare their estimated volumes by reasoning about removed material.|Redesign one thick part so it uses less material but keeps its job.|Which design uses less material?|The hollow tray|The solid block
Easy to clean|Products collect dust and dirt; shapes can make cleaning easier.|Examine a cup or organizer. Identify corners that are hard to reach. Model a smoother version.|Ask someone how they would clean your design.|Why avoid tiny unreachable corners?|They trap dirt|They make it faster
Easy to repair|A product lasts longer when broken parts can be replaced.|Sketch a toy with a replaceable wheel. Model the body and wheel as separate labelled parts.|Draw the steps for replacing the wheel.|What helps repair a wheel?|A separate replaceable part|Glue everywhere
Safety review|Small parts, sharp edges and hot tools need care, especially around younger children.|Review a model for sharp points, tiny loose pieces and pinch spots. Round or enlarge one risky feature.|Make a safety note for the product's intended user.|Which edge is usually gentler to touch?|Rounded|Sharp
Week 9 redesign|A better product balances usefulness, strength, comfort and care for resources.|Choose an earlier model. Redesign it using one stronger shape, less wasted material and a safer edge.|Explain each change with a sketch or note.|What is a redesign?|An improved version|The same file name
Find a problem worth solving|A strong project starts with a real person and a specific need.|Walk through your study area. List five small annoyances. Choose one that you can safely solve in four weeks.|Write a one-sentence problem statement.|Which problem is easiest to design for?|A specific observed one|A vague huge one
Set project requirements|Requirements describe how you will know whether the product works.|Write three measurable requirements for your product, such as holds four pencils or fits a 70 mm shelf.|Ask the user which requirement matters most.|Which is measurable?|Holds four pencils|Looks awesome
Research existing objects|Looking at existing products reveals useful features and gaps.|Inspect two objects solving a similar problem. Sketch them and note one helpful and one annoying feature in each.|Combine the best feature with a new idea of your own.|Why inspect existing objects?|To learn what works|To copy blindly
Sketch three solutions|Different ideas help you avoid committing too early.|Draw three clearly different solutions. Add front and side views and label likely materials.|Ask a family member which idea seems easiest to use and why.|How many solutions should you compare today?|Three|One
Select and explain|A decision is stronger when connected to requirements and feedback.|Score your three ideas against your requirements. Select one and write a short reason.|Show the chosen sketch to the user and note one concern.|What should your choice connect to?|Requirements|Only your favorite color
Plan the model|A part list and dimensions make digital building easier.|Break your chosen idea into basic solids. Draw a labelled part list and measure the space where it will be used.|Set tentative width, depth and height for the model.|What should a part list name?|Main pieces|Only colors
Week 10 design review|A design review checks the plan before making a detailed model.|Present the problem, user, requirements, three ideas and selected plan to someone. Write down two questions they ask.|Revise one measurement or feature from the review.|Why review before building?|To catch issues early|To avoid all feedback
Model the main body|Start with the largest shape so other features have a clear reference.|In Tinkercad, model the main body of your chosen project at the planned dimensions. Save as v1.|Compare its size to a paper outline at real scale.|What should you model first?|The main body|The tiniest decoration
Add functional details|Functional features help the user complete the task.|Add slots, holes, walls or handles as needed. Check each against a written requirement.|Remove any feature that has no clear purpose.|What is a functional detail?|A feature that helps the task|A random ornament
Check fit|Fit is easier to fix before investing in decoration.|Make paper templates or measured stand-ins for items that go in your product. Compare them with the digital dimensions.|Adjust a gap or opening and record the change.|When should fit be checked?|Before final decoration|Only after printing
Build a physical mockup|A quick physical mockup reveals size and comfort that a screen may hide.|Build a cardboard or paper version at roughly real size. Place it where it would actually be used.|Ask the intended user to try one task with it.|Why make a physical mockup?|To test real size and use|To replace all digital work
Watch a user test|Watching what someone does can reveal surprises beyond what they say.|Give the user a task without explaining the product. Observe where they pause and ask a neutral follow-up.|Write three observations without judging the person.|What is a neutral observation?|They paused at the handle|They used it wrong
Revise with evidence|A revision should address a test result or requirement.|Duplicate v1 as v2. Make two changes based on observed problems and write a reason for each.|Retest the same task and compare v1 with v2.|Why keep v1?|To compare versions|To hide mistakes
Week 11 working prototype|A working prototype shows the main idea clearly enough to test.|Finish a usable mockup of your project. Test all three requirements and record pass, partial or needs work.|Choose the most important remaining improvement.|What counts as progress?|Learning from a test|Being perfect first time
Improve the weak point|The biggest failure often gives the clearest next step.|Find your lowest scoring requirement. Sketch two fixes, choose one and update the model.|Run the original test again after the change.|What should you retest?|The weak requirement|An unrelated color
Polish for the user|Clear labels, comfortable edges and simple use can matter more than decoration.|Review grip, visibility and storage. Add one helpful label or rounded edge.|Ask the user whether the product is easy to understand without instructions.|What is useful polish?|A clearer grip or label|Extra parts without purpose
Prepare a presentation|A good presentation explains the problem, process and evidence.|Make four slides or paper panels: problem, ideas, prototype and improvement. Use your own sketches or photos.|Practice explaining the design in two minutes.|What belongs in a design story?|Problem, tests and changes|Only the final image
Tell the design story|Explaining decisions helps others understand the product.|Tell a family member who the product is for, what it does, what failed and how you fixed it.|Invite one question and answer using your test notes.|What makes a design story convincing?|Evidence from testing|Saying it is perfect
Create a final checklist|A checklist makes finishing careful rather than rushed.|Check dimensions, saved files, clear name, safety, requirement results and presentation panels. Fix missing items.|Have another person use the checklist to review your project.|Why use a checklist?|To catch missed details|To avoid showing work
Celebrate and reflect|Reflection helps you carry skills into your next invention.|Write three skills you learned, two things you enjoyed and one thing you would do differently. Compare Day 1 and today.|Draw your next product idea and write its user and need.|What should come after this course?|Keep designing and testing|Stop asking questions
Academy showcase|A designer shares a tested idea and explains what changed along the way.|Give a five-minute showcase of your product, sketches, model, tests and final version. Invite kind, specific feedback.|Set one next project goal and celebrate completing 84 days.|What makes a strong showcase?|Showing the process and learning|Only saying finished`;

const LESSONS = RAW.split("\n").map((row, index) => {
  const [title, idea, guided, challenge, question, correct, wrong] = row.split("|");
  return { day: index + 1, week: Math.floor(index / 7) + 1, title, idea, guided, challenge, question, correct, wrong };
});

const VIDEOS = [
  { title: "2D vs 3D shapes for kids", id: "qiQDKBlpC2g", creator: "KIDZOKI" },
  { title: "Tinkercad for beginners", id: "gOs6Mdj7y_4", creator: "Skills Factory" },
  { title: "Group, hole and align in Tinkercad", id: "hbQww7pWGt4", creator: "Tinkercad Tutorial" },
  { title: "Design a pencil holder", id: "4hgfl5E3eig", creator: "Tinkercad tutorial" },
  { title: "The Engineering Design Process: An Eggstronaut Mission", id: "fuwGvZ-eOrc", creator: "Science Buddies" },
  { title: "Design a working hinge", id: "bOY0LQlNKrc", creator: "Tinkercad tutorial" },
  { title: "The Engineering Design Process: An Eggstronaut Mission", id: "fuwGvZ-eOrc", creator: "Science Buddies" },
  { title: "How 3D printing works", id: "YopnifbUFPE", creator: "Paisley's Corner" },
  { title: "From model to 3D print", id: "9qRnjoADexI", creator: "Tinkercad tutorial" },
  { title: "The Engineering Design Process: An Eggstronaut Mission", id: "fuwGvZ-eOrc", creator: "Science Buddies" },
  { title: "Cardboard prototyping", id: "UtQTIZSf8Mo", creator: "Tested" },
  { title: "Tinkercad for beginners: review your skills", id: "gOs6Mdj7y_4", creator: "Skills Factory" }
];

const WEEK_COACHING = [
  "Draw the same object from the front, side and top. A flat view hides one direction, so compare your sketches before building.",
  "In Tinkercad, use the ViewCube to look around your model. Drag a shape from Basic Shapes, then click it to reveal its handles.",
  "Select two shapes before using Align or Group. Turn a shape into Hole first, then group it with a solid to subtract material.",
  "Make the object at a useful size. Write its width, depth and height in millimeters, then compare those numbers with the real item.",
  "Begin with a person and a need. Ask what feels awkward, watch what actually happens, and sketch more than one possible fix.",
  "Draw every moving piece separately. Mark its direction of travel and leave a little space where pieces meet.",
  "Pick one question for a test. Keep the test conditions the same before and after your change so the comparison is fair.",
  "Think about the first layer touching the print bed. Check for loose pieces, thin walls and parts hanging in the air.",
  "Compare materials and shapes against the job. A product that is strong, comfortable, repairable and economical is easier to keep using.",
  "Use a design brief as your map: who needs this, what must it do, and how will you measure whether it works?",
  "Build the largest body first, then add one functional detail at a time. Test size and fit with paper before polishing the appearance.",
  "Show your evidence: early sketch, first prototype, test result and revision. Explain what you learned in your own words."
];

const DAILY_COACHING = `Fold the edges of a paper square upward to suggest an open tray; use clay for a closed box.|Can you point to width, height and depth on your box?
Stand at a table: move a pencil left-right, toward-away and up-down. Those are X, Y and Z.|Can you name all three directions without looking?
Sketch a mug as a cylinder plus a curved handle. Decide which parts are separate solids.|Can another person recognize your object from the solids?
Place a toy on paper and trace its top shadow. Then draw its front outline; compare what each view hides.|Do your three drawings show the same object?
Measure the same eraser twice in millimeters. If numbers differ, hold the ruler at zero and try again.|Can your drawn container fit the measured eraser?
Make one notebook page you would understand next month: title, labels, sizes and a question.|Could someone else build from your notes?
Put pencils into your cardboard organizer. If it tips, widen the base before decorating it.|Does your second version work better than the first?
Use the ViewCube to switch between top and front, then orbit freely to see a hidden side.|Can you return to the top view on purpose?
Move one shape only along the workplane. Lift another and notice that its shadow stays below it.|Can you explain position versus height?
Type 40, 30 and 20 into a box's size fields. Compare the result with a ruler on paper.|Do all three numbers match your plan?
Lift a sphere until it touches a box without floating. Check from a side view for a gap.|Does the sphere rest on the box?
Rotate a roof by exactly a quarter-turn. A quarter of 360 degrees is 90 degrees.|Does the roof face the direction you intended?
Duplicate one wheel and keep the copies equal. Place each wheel at the same height.|Do all four wheels line up?
Build a platform, slide and stairs with simple solids. Name the file so you can find it again.|Can a visitor point to the safe way up and down?
Align three posts by their centers. Undo and try aligning by their lower edges to see the difference.|Can you say which alignment you chose?
Group a box and roof, move them together, then ungroup and move only the roof.|Can you explain when to group and ungroup?
Center a smaller hole box inside a solid box. Group them and look into the open center.|Is the tray actually hollow?
Push a cylinder hole fully through a block. If it stops inside, the tunnel will have a closed end.|Can you see through your tunnel?
Use the ruler to set two posts exactly 30 mm apart. Record where you measured from.|Can you reproduce the spacing?
Draw a center line before copying the second half. Check that both halves are equally far from it.|Do both sides match in size and position?
Check the stand's slot against the cardboard phone, then make the base broad enough to resist tipping.|Does the phone fit and stay upright?
Write the brief in one sentence. A nameplate is successful only if its owner can read it easily.|Can you name the user and the need?
View the nameplate from where someone sits. Letters that look fine from above may be hidden.|Can you read it from normal desk height?
Measure a real pencil and draw its circle. Leave room around it so it can go in and out.|Can three pencils enter without forcing them?
Keep the ring hole away from the tag's outer edge. Imagine the weak strip breaking if it is too thin.|Can you see a strong border around the hole?
Make a paper cable stand-in. Move it through the keeper's channel to look for a slipping point.|Does the cable stay where you wanted?
Draw a thick outer outline and a smaller inner outline. The material between them is the cutter wall.|Are there any tiny fragile corners?
Test the chosen object with the thing it is meant to hold. Ask for one specific improvement.|Can you explain your change using feedback?
Ask permission before watching someone work. Note what they do, not what you think they should do.|Did you record one easy and one hard step?
Compare “Is this good?” with “What is hard about this?” The second gives a designer a clue.|Did your follow-up reveal a new detail?
Draw boxes and arrows for packing a bag. Circle the step where searching or reaching takes time.|Can you name the exact frustrating step?
Set a timer and keep the pencil moving. Wild ideas count because they may inspire a practical feature.|Did you sketch eight different ideas?
Score each idea against the same three criteria. A total is a guide, not a replacement for thought.|Can you explain your winning idea?
Wrap paper around a pretend handle and hold it. If fingers squeeze painfully, make the grip broader.|Can another person hold it comfortably?
Let the user try the book holder without instructions. Notice where they pause or adjust it.|Did one observation lead to a change?
Draw two leaves and a pin for a hinge. Mark the line that stays still while the leaf rotates.|Can you identify the rotation axis?
Fold tape over a cardboard flap to create a hinge. Leave the bend line free to move.|Does the lid open without tearing?
Put a dot at each cardboard wheel's center before making the axle opening.|Do the wheels turn without wobbling badly?
Slide a paper tab in a channel. If it jams, widen the channel slightly rather than forcing it.|Can it move smoothly without falling out?
Look at a snap lid: one part bends a little, then catches. Sketch where bending happens.|Can you point to the hook and release?
Lay out two parts in the order they are assembled. Try swapping the order and note what fails.|Could a friend follow your numbered steps?
Roll the vehicle three times from the same starting line. Record distance or straightness each time.|Did your adjustment improve a repeated test?
Sketches are fast to change, paper shows size, and digital models show precise shape. Use all three.|Can you say what each prototype teaches?
Write one test question on paper before building. Keep the result beside it so your answer is clear.|Did the test answer that question?
Mark exactly where a tower bends or tips. “It failed” is less useful than “the narrow base tipped.”|Did the second tower stay up longer?
Keep height and material equal while changing base width. Then width is the likely reason for a difference.|Can you identify the one changed variable?
Name three versions and put one sentence beside each. A saved older version lets you undo a poor change.|Can you tell which version performed best?
Ask “What was confusing?” and stay quiet while the user tries it. Avoid giving hints unless safety requires it.|Did you capture what they actually did?
Put v1 and v2 beside the same test result. Explain whether the change helped, hurt or made no difference.|Can your evidence support the claim?
Stack paper strips to imagine printed layers. Every new layer must be placed on something below or supported.|Can you point to the bottom layer?
Orbit your model and look underneath it. A floating decoration may not join the printed part.|Is every intended piece connected?
Place paper shapes on a table. A box has more first-layer contact than a ball.|Does your model sit on a stable flat face?
Hold a long paper strip out from a desk edge. Notice how a longer unsupported section droops.|Can you identify the unsupported section?
Draw two circles: one exact fit and one a little wider. Physical materials rarely match digital measurements perfectly.|Did you plan at least two trial sizes?
After export, open the file in a viewer or slicer with an adult. Confirm that it is the intended object and size.|Does the exported shape match your model?
Use the four-point checklist: connected, flat base, sensible size, and no unsafe details.|Could an adult follow your checklist?
Bend paper and cardboard of the same size gently. Record which resists bending better for your intended job.|Can you justify your material choice?
Fold a paper strip into a rib and repeat the same bridge test. Compare with the flat strip.|Did the rib improve strength?
Draw a solid block and a hollow tray with equal outside sizes. The empty middle removes material.|Can you show what material was saved?
Pretend to clean every inside corner with a cloth. A corner you cannot reach may collect dirt.|Can you reach all important surfaces?
Sketch how a worn wheel could be removed and replaced. Permanent glue may make repair harder.|Can you list the replacement steps?
Use a finger to trace safe edges on a cardboard mockup. Check tiny parts and pinch points too.|Did you remove at least one hazard?
Compare before and after drawings side by side. Put a reason next to every changed feature.|Does each change help strength, comfort or resources?
List annoyances in your study area, then choose one you can observe and test safely.|Can you state the problem without naming a solution?
Turn “good holder” into “holds four pencils while standing upright.” Measurable goals are easier to test.|Are all three requirements testable?
Look at two existing products and list one advantage and one problem for each. Borrow principles, not entire designs.|Did you notice a gap your idea can fill?
Make three silhouettes before adding detail. Different silhouettes force different solutions.|Are your three ideas genuinely different?
Score each concept with the same requirements, then ask whether the top score makes sense for the user.|Can you defend your choice with two reasons?
Label body, opening, support and handle on your chosen sketch. Measure the space where it must sit.|Do your planned dimensions fit that space?
Present the brief and sketches in under three minutes, then listen for confusing or missing details.|Did the review change your plan?
Model the largest shape at real size first. A paper rectangle of the same dimensions helps you judge scale.|Does its footprint fit the intended place?
For each added slot or handle, write the requirement it serves. Remove a detail that has no job.|Does each feature have a purpose?
Hold a paper item template against your planned opening. Add a little room if it must slide in easily.|Does the item fit without forcing it?
Build a rough cardboard body at real size. Put it in its intended location, not just on your desk.|Can the user reach and use it there?
Give the user a simple task and observe silently. Write down pauses, slips and unexpected movements.|Did you record three neutral observations?
Duplicate v1 before changing it. Match each v2 change to a note from the test.|Can you explain why each change was made?
Mark each requirement pass, partial or needs work. Do not hide a weak result; it tells you what to fix.|Which requirement needs attention first?
Sketch two fixes for the weakest result. Predict which is more likely to help before making it.|Did the repeated test improve?
Read labels from normal use distance and touch a cardboard edge gently. Polish should improve use.|Can someone understand the product without instructions?
Arrange four panels so a viewer can follow the story without you speaking. Use large labels and one image per panel.|Can another person retell the process?
Practice a two-minute story: who, problem, first idea, test, change and result. Cut anything unrelated.|Did your listener understand the evidence?
Run through your checklist with another person. Fix a missing file, label or measurement before showcase day.|Is everything ready and clearly named?
Look at your Day 1 sketch. Name a skill you could not do then but can do now.|Can you name three specific improvements?
Show the first and final versions together. Explain one failure and how it led to a better idea.|Can your audience see what you learned?`;

DAILY_COACHING.split("\n").forEach((row, index) => {
  const [example, success] = row.split("|");
  LESSONS[index].example = example;
  LESSONS[index].success = success;
  LESSONS[index].video = VIDEOS[Math.floor(index / 7)];
});

for (const day of [7, 57, 60, 61, 62, 63, 78, 79, 80, 81, 82, 83, 84]) {
  LESSONS[day - 1].video = VIDEOS[4];
}
