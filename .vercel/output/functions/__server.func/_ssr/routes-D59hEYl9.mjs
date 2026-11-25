import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as RotateCcw, r as Shuffle, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D59hEYl9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LECTURES = [
	{
		id: "19",
		label: "Respiratory",
		kicker: "Lecture 19"
	},
	{
		id: "20",
		label: "Urinary",
		kicker: "Lecture 20"
	},
	{
		id: "21",
		label: "Digestive",
		kicker: "Lecture 21"
	},
	{
		id: "22",
		label: "Male repro",
		kicker: "Lecture 22"
	},
	{
		id: "23",
		label: "Female & pregnancy",
		kicker: "Lecture 23"
	}
];
var CARDS = [
	{
		id: "r01",
		lecture: "19",
		topic: "Shared job",
		prompt: "How do the cardiovascular and respiratory systems split gas exchange?",
		choices: [
			"Cardiovascular moves gases between blood and body cells; respiratory moves gases between blood and the environment",
			"Both systems exchange gases only with the outside air",
			"Respiratory moves gases between blood and body cells; cardiovascular exchanges them with the air",
			"Only the lungs move oxygen; carbon dioxide stays in the blood"
		],
		answer: 0,
		explain: "The cardiovascular system handles blood-to-body exchange. The respiratory system handles blood-to-environment exchange, every time you breathe."
	},
	{
		id: "r02",
		lecture: "19",
		topic: "The tracts",
		prompt: "Which list is the upper respiratory tract?",
		choices: [
			"Bronchi and alveoli",
			"Nose, pharynx, larynx, and trachea",
			"Trachea, bronchi, and alveoli",
			"Lungs, pleura, and diaphragm"
		],
		answer: 1,
		explain: "Nose through trachea is the upper tract. Bronchi and alveoli are the lower tract, inside the lungs. Alveoli are the only sites of gas exchange."
	},
	{
		id: "r03",
		lecture: "19",
		topic: "Nasal mucosa",
		prompt: "What does a mucosa have in common with skin, and how is it different?",
		choices: [
			"Both are wet; mucosa adds keratin to waterproof the airway",
			"Both are epithelial barriers; mucosa lacks keratin, so it stays wet",
			"Mucosa is connective tissue; skin is muscle",
			"Mucosa only lines the inside of the heart"
		],
		answer: 1,
		explain: "A mucosa is any wet epithelial lining that meets the outside world. It is like skin without waterproof keratin. Nasal mucosa warms and moistens air, traps particles, and its enzymes destroy bacteria."
	},
	{
		id: "r04",
		lecture: "19",
		topic: "Nasal cavity",
		prompt: "What are the conchae for?",
		choices: [
			"They smooth airflow so particles sail straight into the lungs",
			"They close the trachea during swallowing",
			"They create air turbulence so the nose has more time to condition air and sense smell",
			"They produce surfactant"
		],
		answer: 2,
		explain: "Conchae are ridge-like projections on the lateral nasal walls. Turbulence here is useful: it warms air, traps particles, kills bacteria, and stimulates scent nerves."
	},
	{
		id: "r05",
		lecture: "19",
		topic: "Palate and uvula",
		prompt: "Which statement matches the lecture?",
		choices: [
			"The hard palate is posterior and muscular; the uvula opens the nasal cavity while you swallow",
			"The hard palate is the bony anterior roof, the soft palate is the posterior roof, and the uvula helps close off the nasal cavity during swallowing",
			"A cleft palate is a sinus infection that creates a vacuum",
			"The uvula is a vocal fold"
		],
		answer: 1,
		explain: "Hard palate is anterior and bone-supported. Soft palate is posterior soft tissue. The uvula is a projection of the soft palate. Cleft palate is failure of those bones to fuse, so the nose and mouth are not separated."
	},
	{
		id: "r06",
		lecture: "19",
		topic: "Sinuses",
		prompt: "Why does a blocked sinus hurt?",
		choices: [
			"Trapped air is absorbed, leaving a vacuum that feels like pressure",
			"The sinus fills with arterial blood",
			"The conchae spasm",
			"The epiglottis sticks shut"
		],
		answer: 0,
		explain: "Sinuses lighten the skull, resonate the voice, and make mucus. If the tiny passage to the nasal cavity is blocked, trapped air is absorbed and the vacuum causes sinus pressure."
	},
	{
		id: "r07",
		lecture: "19",
		topic: "Pharynx",
		prompt: "The pharynx is different from the nose because it…",
		choices: [
			"Exchanges gas with pulmonary capillaries",
			"Carries only food, never air",
			"Is a common passageway for both air and food",
			"Is made of C-shaped cartilage rings"
		],
		answer: 2,
		explain: "The throat runs from the nasal cavity to the larynx in three regions: nasopharynx, oropharynx, and laryngopharynx. It also houses the auditory tube and the tonsils."
	},
	{
		id: "r08",
		lecture: "19",
		topic: "Larynx",
		prompt: "What keeps swallowed food out of the trachea?",
		choices: [
			"The uvula covering the esophagus",
			"The epiglottis tipping down over the glottis",
			"The vocal folds locking during inhalation",
			"C-shaped tracheal rings pinching shut"
		],
		answer: 1,
		explain: "Vocal folds vibrate with exhaled air so we can speak. The glottis is the opening between them into the trachea. The epiglottis closes that opening during swallowing and sends food to the esophagus."
	},
	{
		id: "r09",
		lecture: "19",
		topic: "Trachea",
		prompt: "Why are tracheal cartilages C-shaped instead of complete rings?",
		choices: [
			"So the esophagus behind the trachea can expand when you swallow",
			"So the trachea can collapse during expiration",
			"So cilia can beat toward the lungs",
			"So the right bronchus stays wider than the left"
		],
		answer: 0,
		explain: "Rings hold the airway open at all times, but the open part of the C faces the esophagus. Cilia on the mucosa beat upward, opposite incoming air, to sweep debris out of the lungs."
	},
	{
		id: "r10",
		lecture: "19",
		topic: "Bronchi",
		prompt: "Aspiration pneumonia most often lands in the right middle lobe because…",
		choices: [
			"The left bronchus is wider, shorter, and straighter",
			"The right bronchus is wider, shorter, and straighter",
			"Only the right lung has alveoli",
			"The heart blocks the right lung"
		],
		answer: 1,
		explain: "The trachea splits into primary bronchi. The right bronchus is wider, shorter, and straighter, so inhaled material prefers that path. Bronchi keep branching into bronchioles on the way to alveoli."
	},
	{
		id: "r11",
		lecture: "19",
		topic: "Alveoli",
		prompt: "Why is simple squamous epithelium the right lining for an alveolus?",
		choices: [
			"Thick stratified cells store extra oxygen",
			"The thin wall lets oxygen and carbon dioxide cross into pulmonary capillaries",
			"Cilia in the alveoli sweep air inward",
			"Keratin waterproofs the air sac"
		],
		answer: 1,
		explain: "Gas exchange happens only at alveoli. Their simple squamous cells are fused to the simple squamous endothelium of pulmonary capillaries, so O2 and CO2 have almost no distance to travel."
	},
	{
		id: "r12",
		lecture: "19",
		topic: "Lungs and pleura",
		prompt: "Which pairing is correct?",
		choices: [
			"Right lung 2 lobes, left lung 3 lobes; visceral pleura lines the chest wall",
			"Right lung 3 lobes, left lung 2 lobes; visceral pleura covers the lung and parietal pleura lines the thoracic wall",
			"Both lungs have 3 lobes; pleura is the same membrane as the pericardium",
			"The base of each lung sits near the clavicle"
		],
		answer: 1,
		explain: "The apex is near the clavicle and the base rests on the diaphragm. Fissures separate the lobes. Pleura reduces friction the way pericardium and the abdominal peritoneum do."
	},
	{
		id: "r13",
		lecture: "19",
		topic: "Two events",
		prompt: "Ventilation and pulmonary respiration differ because…",
		choices: [
			"Ventilation is moving air by changing thoracic volume; pulmonary respiration is gas exchange between alveoli and blood",
			"They are two names for the same mechanical process",
			"Pulmonary respiration is breathing; ventilation is oxygen loading only",
			"Ventilation does not depend on pressure"
		],
		answer: 0,
		explain: "Ventilation is mechanical breathing and follows Boyle’s law: volume changes change pressure, and gases move. Pulmonary respiration is the chemical flip of O2 into blood and CO2 out, between inspiration and expiration."
	},
	{
		id: "r14",
		lecture: "19",
		topic: "Inspiration",
		prompt: "During inspiration, what happens first?",
		choices: [
			"Air flows into the alveoli",
			"Oxygen enters the blood",
			"The chest and lungs expand",
			"Intrapulmonary pressure rises above atmospheric pressure"
		],
		answer: 2,
		explain: "External intercostals elevate the ribs and the diaphragm moves inferiorly. Chest volume rises, pressure falls, and air flows in until intrapulmonary pressure equals atmospheric pressure."
	},
	{
		id: "r15",
		lecture: "19",
		topic: "Expiration",
		prompt: "During expiration, what happens first?",
		choices: [
			"Thoracic and lung volumes decrease",
			"Air flows out of the alveoli",
			"Carbon dioxide is exhaled into the room",
			"The diaphragm flattens downward"
		],
		answer: 0,
		explain: "The diaphragm moves superiorly and the ribs drop as external intercostals relax. Volume falls, pressure rises, and air flows out until pressures match again."
	},
	{
		id: "r16",
		lecture: "19",
		topic: "Lung volumes",
		prompt: "Which volumes match the lecture?",
		choices: [
			"Tidal volume about 500 ml; inspiratory reserve up to 3,100 ml; expiratory reserve up to 1,200 ml",
			"Tidal volume 1,200 ml; residual volume 500 ml",
			"Vital capacity is residual volume plus dead space",
			"Dead space is about 3,100 ml of air that never reaches alveoli"
		],
		answer: 0,
		explain: "Quiet breathing moves about 500 ml. Vital capacity (exchangeable air) = TV + IRV + ERV, up to 4,800 ml. Residual volume is about 1,200 ml you cannot exhale, and it keeps alveoli open. Dead space is about 150 ml. Total lung capacity is about 6,000 ml."
	},
	{
		id: "r17",
		lecture: "19",
		topic: "Control of breathing",
		prompt: "Where is unconscious breathing rhythm set, and where is conscious control?",
		choices: [
			"Medulla sets the basic rhythm, the pons finalizes the rate, and the primary motor cortex can override it on purpose",
			"The pons sets the rhythm and the cerebellum handles speech breathing",
			"Only the primary motor cortex breathes for you, even in sleep",
			"Chemoreceptors in the nose set the rate directly"
		],
		answer: 0,
		explain: "If you hold your breath until you pass out, the brainstem takes back over. SIDS is linked to underdeveloped centers in the pons and medulla. Back-to-sleep keeps infants from sleeping as deeply, so they lean on conscious control."
	},
	{
		id: "r18",
		lecture: "19",
		topic: "Order of events",
		prompt: "What is the correct order?",
		choices: [
			"Inspiration, then expiration, then respiration",
			"Respiration, then inspiration, then expiration",
			"Inspiration, then respiration, then expiration",
			"Expiration, then respiration, then inspiration"
		],
		answer: 2,
		explain: "You inhale oxygen-rich air, gases exchange at the alveoli, then you exhale the carbon dioxide that just unloaded from blood."
	},
	{
		id: "r19",
		lecture: "19",
		topic: "Chemical control",
		prompt: "Why is ventilation more sensitive to carbon dioxide than to oxygen?",
		choices: [
			"CO2 is also an acid, so it stimulates both CO2 and pH chemoreceptors",
			"Oxygen cannot be detected by chemoreceptors",
			"Low oxygen always stops breathing",
			"CO2 binds hemoglobin so tightly it never leaves the blood"
		],
		answer: 0,
		explain: "Low O2, high CO2, or a more acidic pH all trigger hyperventilation. High CO2 double-stimulates chemoreceptors because it is the gas and an acid."
	},
	{
		id: "r20",
		lecture: "19",
		topic: "Acid and base",
		prompt: "A patient in metabolic acidosis is hyperventilating. Why does that help?",
		choices: [
			"Exhaling CO2 makes the blood less acidic",
			"Exhaling CO2 makes the blood more acidic",
			"Inhaling extra O2 directly neutralizes ketones",
			"Slow breathing keeps CO2 so the pH falls"
		],
		answer: 0,
		explain: "Hyperventilation blows off CO2 and raises pH. Hypoventilation does the opposite: slow, shallow breathing keeps CO2 around so an alkaline blood pH can fall."
	},
	{
		id: "r21",
		lecture: "19",
		topic: "When alveoli fail",
		prompt: "Acute respiratory distress syndrome (ARDS) is best described as…",
		choices: [
			"A vacuum inside a blocked sinus",
			"Complete pneumonia of both lungs",
			"Air left in the trachea that never reaches alveoli",
			"A cleft between the nasal and oral cavities"
		],
		answer: 1,
		explain: "Pneumonia is inflamed alveoli: thicker epithelium, edema around the sac, and fluid inside it. ARDS is that picture in both lungs, seen with COVID-19, influenza, and RSV, and may follow a cytokine storm. Positive-pressure ventilators push in oxygen-rich air; iron lungs were negative-pressure machines."
	},
	{
		id: "u01",
		lecture: "20",
		topic: "The four organs",
		prompt: "Which job belongs to the ureters?",
		choices: [
			"Filter blood plasma into urine",
			"Store urine without a big rise in pressure",
			"Carry urine from each kidney to the urinary bladder",
			"Carry urine from the bladder to the outside"
		],
		answer: 2,
		explain: "Kidneys make urine. Ureters transport it to the bladder. The bladder stores it. The urethra carries it out. Kidney stones are concretions that form in the ureters. Hydronephrosis is backed-up fluid in the kidney and usually means a ureter problem."
	},
	{
		id: "u02",
		lecture: "20",
		topic: "Bladder and urethra",
		prompt: "Which numbers match bladder filling?",
		choices: [
			"Urge around 200 ml, a moderately full bladder about 500 ml, capacity about 1 L",
			"Urge at 500 ml and rupture at 600 ml",
			"The bladder cannot expand without a sharp rise in pressure",
			"Females have longer urethras, so they get fewer UTIs"
		],
		answer: 0,
		explain: "The bladder expands a great deal without raising internal pressure. Need-to-go contractions start near 200 ml. A shorter female urethra is why urinary tract infections are more common."
	},
	{
		id: "u03",
		lecture: "20",
		topic: "Kidney geography",
		prompt: "Why is the right kidney slightly lower than the left, and what is the renal hilum?",
		choices: [
			"The spleen pushes the right kidney down; the hilum is the outer capsule",
			"The liver occupies space above the right kidney; the hilum is the medial indentation where structures enter and leave",
			"Both kidneys sit in the peritoneal cavity at the same height; the hilum is a pyramid",
			"The right kidney is pelvic; the hilum is the urethra"
		],
		answer: 1,
		explain: "Kidneys lie against the posterior body wall under the inferior ribs. Cortex is outer (with renal columns), medulla is middle (with pyramids), and the pelvis is the inner funnel. Calyces drain pyramids into the pelvis, then urine goes pelvis to ureter to bladder."
	},
	{
		id: "u04",
		lecture: "20",
		topic: "Renal vessels",
		prompt: "The afferent arteriole brings blood to which capillary?",
		choices: [
			"Peritubular capillary",
			"Glomerulus",
			"Renal capillary of the pelvis",
			"Vasa recta of the urethra"
		],
		answer: 1,
		explain: "About 25% of the blood passes through the kidneys each minute. Arterial order runs renal, segmental, interlobar, arcuate, cortical radiate, afferent arteriole, glomerulus. Efferent arterioles lead toward peritubular capillaries; veins return through cortical radiate, arcuate, and interlobar veins to the renal vein and inferior vena cava."
	},
	{
		id: "u05",
		lecture: "20",
		topic: "Where urine comes from",
		prompt: "What is the path of liquid you drink before it can become urine?",
		choices: [
			"Digestive tract, then blood, then kidney, then urine",
			"Stomach directly into the ureter",
			"Lymph, then glomerulus, then feces",
			"Bladder, then kidney, then blood"
		],
		answer: 0,
		explain: "The kidneys filter blood plasma and remove nitrogen waste from protein metabolism, acid waste, drugs, toxins, and excess ions. Filtrate is plasma minus cells and proteins. Urine is what remains after that filtrate is modified."
	},
	{
		id: "u06",
		lecture: "20",
		topic: "The nephron",
		prompt: "Which renal structure performs the initial bulk filtration of blood?",
		choices: [
			"Afferent arteriole",
			"Efferent arteriole",
			"Renal tubule",
			"Renal corpuscle"
		],
		answer: 3,
		explain: "The corpuscle is a leaky glomerulus plus the glomerular capsule that catches filtrate, filtered by size only. The tubule fine-tunes that filtrate. The collecting duct saves water. Many nephrons can share one collecting duct."
	},
	{
		id: "u07",
		lecture: "20",
		topic: "Fine-tuning",
		prompt: "Which structure saves, or reabsorbs, molecules the body still needs?",
		choices: [
			"Renal corpuscle",
			"Renal tubule",
			"Glomerulus alone",
			"Ureter"
		],
		answer: 1,
		explain: "The tubule is the proximal convoluted tubule, the nephron loop, and the distal convoluted tubule. Reabsorption runs lumen to tubule cell to extracellular space to peritubular capillaries, usually with ATP, and it is selective."
	},
	{
		id: "u08",
		lecture: "20",
		topic: "What is saved",
		prompt: "A glucose molecule in the filtrate is normally ____. A nitrogen waste molecule is normally ____.",
		choices: [
			"Saved; excreted",
			"Excreted; saved",
			"Both always excreted",
			"Both always saved"
		],
		answer: 0,
		explain: "Valuable molecules such as glucose are always reabsorbed. Sodium is saved only when the body needs it. Nitrogenous waste has no reason to be saved and is excreted. Anything that reaches peritubular capillaries is not lost in urine."
	},
	{
		id: "u09",
		lecture: "20",
		topic: "No transporter",
		prompt: "What would happen if a red blood cell entered the tubule?",
		choices: [
			"It would re-enter the blood through a dedicated transporter",
			"It would be stored in the renal pelvis",
			"It would pass out with the urine",
			"It would be converted into urea"
		],
		answer: 2,
		explain: "Reabsorption is selective. No transporter means no ride back to the blood. Red cells are not normally in filtrate; if the glomerular holes get too big, they can be lost in urine."
	},
	{
		id: "u10",
		lecture: "20",
		topic: "Collecting duct",
		prompt: "What does antidiuretic hormone (ADH) do at the collecting duct?",
		choices: [
			"Decreases water reabsorption and suppresses thirst",
			"Increases water reabsorption and is tied to thirst",
			"Widens the holes of the glomerulus",
			"Secretes glucose into the urine"
		],
		answer: 1,
		explain: "The collecting duct’s job is water reabsorption, then delivery of urine to the renal pelvis. The lecture summarizes urine formation as two processes: glomerular filtration and tubular reabsorption."
	},
	{
		id: "u11",
		lecture: "20",
		topic: "Normal urine",
		prompt: "Which substance is normally found in urine?",
		choices: [
			"Glucose",
			"Blood proteins",
			"Red blood cells",
			"Urea and creatinine"
		],
		answer: 3,
		explain: "Normal urine contains nitrogenous waste (urea and creatinine), extra water, and extra sodium and potassium. Glucose, blood proteins, RBCs, and WBCs do not belong there."
	},
	{
		id: "u12",
		lecture: "20",
		topic: "Glomerulonephritis",
		prompt: "A dipstick shows high protein. Which condition is most likely?",
		choices: [
			"Glomerulonephritis",
			"Acute kidney failure from shock",
			"Diabetes mellitus alone, with a normal glomerulus",
			"A blocked urethra with no kidney change"
		],
		answer: 0,
		explain: "Inflammation widens glomerular holes, so proteins and blood cells leak into the filtrate. Age-related glomerular change can also drive high blood pressure. High glucose on a dipstick points to diabetes instead."
	},
	{
		id: "u13",
		lecture: "20",
		topic: "Kidney failure",
		prompt: "What urine output do you expect in acute kidney failure? In chronic kidney failure?",
		choices: [
			"Little or none; excessive",
			"Excessive; little or none",
			"Normal volume in both",
			"Blood instead of urine in both"
		],
		answer: 0,
		explain: "Acute failure means blood pressure is too low to filter, as in shock. Chronic failure means waste is no longer handled correctly: too much escapes the glomerulus or too little is saved by the tubule, so water and nutrients are lost. Increased thirst fits the chronic picture."
	},
	{
		id: "u14",
		lecture: "20",
		topic: "Diabetes and nitrogen",
		prompt: "Why do uncontrolled diabetics urinate so much?",
		choices: [
			"Glucose left in the tubule osmotically holds water in the urine",
			"ADH closes the glomerulus",
			"Protein plugs the urethra",
			"The bladder can only hold 50 ml"
		],
		answer: 0,
		explain: "Glucose that is not reabsorbed pulls water with it, so urination and thirst both rise. Separately, nitrogen in the blood (BUN / urea and creatinine) means the kidney is not clearing protein waste. Dialysis stands in for that filter: typically 3 sessions a week, 4 to 8 hours each."
	},
	{
		id: "u15",
		lecture: "20",
		topic: "Acids",
		prompt: "Volatile acids versus non-volatile acids are excreted by…",
		choices: [
			"The lungs (CO2) and the urinary system, respectively",
			"The liver and the skin",
			"Only the kidneys, in both cases",
			"The stomach and the colon"
		],
		answer: 0,
		explain: "Lungs remove gaseous CO2. Kidneys remove liquid acid waste. When cells burn fat instead of glucose they make ketones, which are acids, and the result can be metabolic acidosis. Blowing off CO2 is how hyperventilation compensates."
	},
	{
		id: "d01",
		lecture: "21",
		topic: "Two jobs",
		prompt: "Mechanical digestion, chemical digestion, and absorption — which end result is which?",
		choices: [
			"Mechanical leaves smaller pieces still too big for blood; chemical finishes molecules small enough to enter blood; absorption is the move into blood",
			"Absorption is chewing; chemical digestion is the move into blood",
			"Mechanical digestion uses enzymes; chemical digestion is churning",
			"Only the stomach absorbs nutrients"
		],
		answer: 0,
		explain: "Mechanical digestion (chewing, churning) prepares food for enzymes. Carbohydrates become glucose, proteins become amino acids, and fats become fatty acids and glycerol. Those building blocks then cross the small-intestine epithelium into blood."
	},
	{
		id: "d02",
		lecture: "21",
		topic: "Two groups of organs",
		prompt: "Which organs are part of the alimentary canal?",
		choices: [
			"Pharynx only",
			"Stomach only",
			"Rectum only",
			"Pharynx, stomach, and rectum"
		],
		answer: 3,
		explain: "The alimentary canal is one continuous tube: mouth, pharynx, esophagus, stomach, small intestine, large intestine, and anus. It performs digestion and absorption. Accessory organs assist but food does not travel through them."
	},
	{
		id: "d03",
		lecture: "21",
		topic: "Accessory organs",
		prompt: "Which of these is an accessory digestive organ?",
		choices: [
			"Mouth",
			"Larynx",
			"Pancreas",
			"Appendix"
		],
		answer: 2,
		explain: "The accessory list in this lecture is teeth, pancreas, liver, and gallbladder. The mouth is canal. The larynx is an airway gate. The appendix is lymphatic tissue on the large intestine and does not digest food."
	},
	{
		id: "d04",
		lecture: "21",
		topic: "Four layers",
		prompt: "Match the layer to the job.",
		choices: [
			"Mucosa moves food; serosa absorbs nutrients; submucosa is the visceral peritoneum",
			"Mucosa contacts digesta and is the site of digestion and absorption; submucosa carries vessels and lymphoid tissue; muscularis externa moves food; serosa is the visceral peritoneum",
			"All four layers are skeletal muscle",
			"The serosa lines the lumen"
		],
		answer: 1,
		explain: "Mucosa is the inner simple columnar lining of the lumen. Submucosa is loose connective tissue with blood vessels, nerves, lymphatics, and Peyer’s patches. Muscularis externa is an inner circular and outer longitudinal smooth-muscle pair. Serosa reduces friction."
	},
	{
		id: "d05",
		lecture: "21",
		topic: "Peritoneum",
		prompt: "Which organs are retroperitoneal?",
		choices: [
			"Stomach, jejunum, and transverse colon",
			"Kidneys, pancreas, and aorta",
			"Liver, gallbladder, and duodenum only",
			"Every abdominal organ, including the bladder lining"
		],
		answer: 1,
		explain: "Visceral peritoneum hugs organs (that is the serosa). Parietal peritoneum is closer to the body wall. Kidneys, pancreas, and aorta sit behind the parietal layer. Mesenteries stabilize vessels. The greater omentum is the fat-filled sheet that helps healing."
	},
	{
		id: "d06",
		lecture: "21",
		topic: "Mouth",
		prompt: "What does the mouth digest, and what does it absorb?",
		choices: [
			"Chemical digestion of everything; absorption of glucose",
			"Mechanical digestion of everything by chewing, chemical digestion of carbohydrates only, and no absorption",
			"Proteins only, via pepsin",
			"Nothing mechanical; fats via bile"
		],
		answer: 1,
		explain: "Saliva begins carbohydrate digestion. No absorption occurs in the mouth. The tongue starts swallowing, and the bolus goes next to the oropharynx. The vestibule is the space between lips or cheeks and the teeth."
	},
	{
		id: "d07",
		lecture: "21",
		topic: "Pharynx and esophagus",
		prompt: "Ileus is which problem, and what do the pharynx and esophagus actually digest?",
		choices: [
			"Peristalsis has stopped; neither organ digests or absorbs anything",
			"The pyloric sphincter is too loose; both organs digest protein",
			"Bile cannot enter the duodenum; the esophagus absorbs water",
			"The mucosa has become keratinized; the pharynx exchanges gas"
		],
		answer: 0,
		explain: "Peristalsis is alternating contraction of an inner circular layer and an outer longitudinal layer. The pharynx uses skeletal muscle and passes food to the esophagus. The esophagus crosses the thorax and diaphragm and is a passageway for food only. The larynx keeps that food out of the airway."
	},
	{
		id: "d08",
		lecture: "21",
		topic: "Stomach regions",
		prompt: "The fundus and the pylorus are…",
		choices: [
			"The pouch-like superior lateral part of the stomach, and the end that meets the small intestine through the pyloric sphincter",
			"Regions of the colon",
			"The first and last parts of the small intestine",
			"Folds of the esophageal mucosa"
		],
		answer: 0,
		explain: "Four regions: cardia where the esophagus enters, fundus lateral to that, body as the midportion, pylorus as the funnel into the duodenum. The greater curvature is the convex surface; the lesser curvature is concave."
	},
	{
		id: "d09",
		lecture: "21",
		topic: "Stomach work",
		prompt: "Chemical digestion in the stomach is aimed at which nutrient, and what is actually absorbed there?",
		choices: [
			"Carbohydrates; glucose and amino acids",
			"Proteins, via pepsin; basically nothing except alcohol and aspirin",
			"Fats, via bile; all lipids",
			"No chemical digestion; all water"
		],
		answer: 1,
		explain: "The stomach is the main site of mechanical digestion: propulsion, grinding about 3 ml of chyme at a time, and retropulsion. It empties in about 4 to 6 hours. Chief cells make pepsinogen, parietal cells make HCl, and HCl activates pepsinogen to pepsin in the lumen, which alkaline mucus protects."
	},
	{
		id: "d10",
		lecture: "21",
		topic: "Small intestine map",
		prompt: "Duodenum, jejunum, and ileum are specialized for…",
		choices: [
			"Water storage, bile storage, and defecation",
			"Digestion, absorption, and immune function",
			"Only mechanical digestion of fiber",
			"Acid secretion, mucus, and pepsin"
		],
		answer: 1,
		explain: "The small intestine is the longest part of the canal (about 2–4 m) and the primary site of chemical digestion and absorption. Most chemical digestion is in the duodenum. Most absorption of the finished nutrients is in the jejunum. Peyer’s patches are concentrated in the ileum."
	},
	{
		id: "d11",
		lecture: "21",
		topic: "Surface area",
		prompt: "Put plicae, villi, and microvilli in order from smallest to largest.",
		choices: [
			"Plicae, villi, microvilli",
			"Microvilli, villi, plicae",
			"Villi, plicae, microvilli",
			"They are three names for the brush border"
		],
		answer: 1,
		explain: "Plicae are visible folds of mucosa and submucosa. Villi are fingerlike mucosal projections made of many cells. Microvilli are tiny plasma-membrane projections of single cells and form the brush border."
	},
	{
		id: "d12",
		lecture: "21",
		topic: "Brush border",
		prompt: "Lactose intolerance is a failure of…",
		choices: [
			"Parietal cells to secrete HCl",
			"The brush border to make enough lactase",
			"The gallbladder to make bile",
			"The ileum to absorb water only"
		],
		answer: 1,
		explain: "Brush-border enzymes and pancreatic enzymes finish chemical digestion in the duodenum: sugars to glucose, small proteins to amino acids, triglycerides to fatty acids. Undigested lactose leads to bloat, gas, and diarrhea. Segmentation mixes food with those enzymes."
	},
	{
		id: "d13",
		lecture: "21",
		topic: "Fat and the liver",
		prompt: "Which molecule has both a hydrophobic and a hydrophilic region, and why does fat need bile?",
		choices: [
			"Glycerol; bile digests protein",
			"Phospholipid; bile emulsifies fat so it can be handled in a watery gut",
			"Fatty acid alone; bile is an enzyme that cuts lactose",
			"Glycoprotein; bile replaces the brush border"
		],
		answer: 1,
		explain: "The lecture’s answer is phospholipid, the same idea as a plasma membrane. Fat cannot mix with the watery digesta, so bile from the liver hides it long enough to be digested and absorbed. Absorbed nutrients go to the liver in the hepatic portal vein."
	},
	{
		id: "d14",
		lecture: "21",
		topic: "Healing",
		prompt: "A 24-hour stomach flu versus parvovirus: which cells are hit?",
		choices: [
			"Flu hits crypt cells; parvo hits enamel",
			"Most intestinal infections hit absorptive cells, which are replaced quickly; the worst diseases hit crypt cells and heal slowly",
			"Both only affect the serosa",
			"Parvo destroys Peyer’s patches and nothing else"
		],
		answer: 1,
		explain: "Absorptive cells turn over fast, so damage there heals fast. Crypt cells are the source of new lining. If they are destroyed, healing is impaired."
	},
	{
		id: "d15",
		lecture: "21",
		topic: "Large intestine",
		prompt: "The five subdivisions of the large intestine, in order, are…",
		choices: [
			"Duodenum, jejunum, ileum, cecum, rectum",
			"Ascending colon, transverse colon, descending colon, sigmoid colon, rectum",
			"Cardia, fundus, body, pylorus, anus",
			"Cecum, appendix, ileum, sigmoid, anus"
		],
		answer: 1,
		explain: "Ascending colon is first, on the right, continuous with the ileum. Transverse is second. Descending is third, on the left. Sigmoid follows. Rectum is last. The organ is wider but shorter than the small intestine, and it has no villi."
	},
	{
		id: "d16",
		lecture: "21",
		topic: "Water and fiber",
		prompt: "What does the large intestine itself digest, and what is its main absorption job?",
		choices: [
			"It chemically digests all nutrients; it absorbs glucose",
			"It does no mechanical or chemical digestion; bacteria make some B vitamins and vitamin K, and the organ absorbs water, vitamins, and ions",
			"It digests fiber into ATP for human cells",
			"It absorbs fat using bile"
		],
		answer: 1,
		explain: "This is the last call for water, compared in lecture to the collecting duct. Fiber is not digested or absorbed but keeps material moving. Feces are undigested food, mucus, bacteria, and extra water."
	},
	{
		id: "d17",
		lecture: "21",
		topic: "Case study",
		prompt: "Two weeks of small-volume, urgent diarrhea with occasional fresh blood and no weight loss points to…",
		choices: [
			"The large intestine",
			"The stomach, because of weight loss from lost pepsin",
			"The duodenum, because all absorption is lost",
			"The esophagus"
		],
		answer: 0,
		explain: "Most nutrient absorption has already happened, so volume is small and weight holds. Rectal spasms create urgency. Fresh blood means the damage is late in the canal. Think IBD, polyps, or a viral infection of large-intestinal cells."
	},
	{
		id: "d18",
		lecture: "21",
		topic: "Appendix",
		prompt: "The appendix…",
		choices: [
			"Is the main site of water absorption",
			"Is an offshoot of the cecum and is lymphatic, with no role in digestion",
			"Stores bile",
			"Is the third region of the small intestine"
		],
		answer: 1,
		explain: "It sits on the cecum and ascending colon. Do not treat it as a digestive segment when you are naming the five regions of the large intestine."
	},
	{
		id: "d19",
		lecture: "21",
		topic: "Teeth",
		prompt: "Incisors, canines, premolars, and molars are for…",
		choices: [
			"Cutting, tearing, grinding, and grinding",
			"Grinding, grinding, cutting, and tearing",
			"Only speech",
			"Making saliva, bile, pepsin, and lipase"
		],
		answer: 0,
		explain: "Deciduous teeth: 20 by about age 2. Permanent teeth replace them between about 6 and 12 years, 32 with wisdom teeth. The crown is above the gum, the root is in the jaw, and the neck is the transition at the gum. Seeing the neck suggests gingivitis."
	},
	{
		id: "d20",
		lecture: "21",
		topic: "Inside a tooth",
		prompt: "Enamel, dentin, and the pulp cavity are…",
		choices: [
			"Brown root cement; white pulp; empty crown",
			"White covering of the crown; brown bulk of the tooth; the space with vessels and nerves",
			"Three names for the periodontal ligament",
			"Layers of the stomach wall"
		],
		answer: 1,
		explain: "The root canal is the pulp cavity continuing into the root. Cement attaches the tooth to the periodontal membrane, which holds it in the jaw and must be broken to extract a tooth. A root-canal procedure removes diseased pulp, then cleans and seals the space so the tooth can stay."
	},
	{
		id: "d21",
		lecture: "21",
		topic: "Pancreas, liver, gallbladder",
		prompt: "Which statement is true?",
		choices: [
			"The pancreas secretes amylase, protease, and lipase into the duodenum; insulin and glucagon are not digestive enzymes",
			"The gallbladder makes bile and the liver only stores it",
			"Bile chemically cuts fat into glucose",
			"Pancreatic enzymes are released into the blood on purpose"
		],
		answer: 0,
		explain: "The liver makes bile, which emulsifies fat, and screens newly absorbed nutrients. Bile can leave through the common hepatic duct and the bile duct. The gallbladder only stores bile and releases it when fatty food hits the duodenum. You can digest fat without a gallbladder; the bladder just makes it more efficient."
	},
	{
		id: "m01",
		lecture: "22",
		topic: "Overview",
		prompt: "In this lecture, the male gonad, gamete, and hormone are…",
		choices: [
			"Ovary, oocyte, estrogen",
			"Testis, sperm, testosterone",
			"Prostate, semen, PSA only",
			"Epididymis, spermatid, progesterone"
		],
		answer: 1,
		explain: "The primary job of the reproductive system is offspring. Sex characteristics are secondary. Female counterparts are ovary, oocyte, and estrogen plus progesterone."
	},
	{
		id: "m02",
		lecture: "22",
		topic: "Penis",
		prompt: "Erectile tissue is arranged as…",
		choices: [
			"One corpus cavernosum and two corpora spongiosa, both around the urethra",
			"Two corpora cavernosa superolaterally and one corpus spongiosum inferomedially around the urethra, expanding into the glans",
			"Only veins in the scrotal raphe",
			"A bone and a single artery"
		],
		answer: 1,
		explain: "Those bodies are venous spaces filled from a central artery. Erection is parasympathetic. Ejaculation, the rhythmic smooth-muscle expulsion of semen, is sympathetic. High blood pressure can cause erectile dysfunction. The prepuce is the foreskin."
	},
	{
		id: "m03",
		lecture: "22",
		topic: "Scrotum",
		prompt: "Sperm develop best at about 93–95°F. What does the dartos muscle do?",
		choices: [
			"Contracts to warm the testes and relaxes to cool them",
			"Pumps sperm into the urethra",
			"Only elevates the ribs",
			"Secretes fructose"
		],
		answer: 0,
		explain: "The scrotum is a skin-covered sac cooler than body temperature. The raphe is the midline ridge. A hot tub can temporarily decrease male fertility because it warms the testes. Cryptorchid means an undescended testis."
	},
	{
		id: "m04",
		lecture: "22",
		topic: "Inside the testis",
		prompt: "Seminiferous tubules, epididymis, and vas deferens…",
		choices: [
			"Store urine, make testosterone, and empty the bladder",
			"Produce sperm, store and mature sperm, and transport sperm",
			"All three produce testosterone only",
			"Are the three glands of semen"
		],
		answer: 1,
		explain: "Spermatogonia are the diploid stem cells. Meiosis produces haploid spermatids, and spermiogenesis reshapes them into motile sperm. The lecture puts the whole production at about two months. Sustentacular cells support the developing cells. Interstitial cells are the testosterone source shown on the tubule diagram."
	},
	{
		id: "m05",
		lecture: "22",
		topic: "Embryonic ducts",
		prompt: "Anti-Müllerian hormone (AMH) from the Y chromosome…",
		choices: [
			"Stops paramesonephric (female) duct development; without that signal the default internal phenotype is female",
			"Builds the uterus in an XY embryo",
			"Is the same hormone as testosterone",
			"Fuses the labioscrotal swellings"
		],
		answer: 0,
		explain: "Mesonephric ducts become male internal ducts. Paramesonephric ducts become female internal ducts (uterine tubes, uterus, and part of the vagina)."
	},
	{
		id: "m06",
		lecture: "22",
		topic: "Spermatic cord",
		prompt: "Which four structures travel in the spermatic cord?",
		choices: [
			"Cremaster muscle, testicular artery, pampiniform plexus, and vas deferens",
			"Ureter, urethra, prostate, and bladder",
			"Seminiferous tubules, raphe, dartos, and glans",
			"Seminal vesicle, bulbourethral gland, ampulla, and rectum"
		],
		answer: 0,
		explain: "The cord passes through the inguinal canal, the passageway between abdomen and scrotum. The pampiniform plexus is a venous network that pre-cools arterial blood. An inguinal hernia is abdominal content entering that canal and the scrotum."
	},
	{
		id: "m07",
		lecture: "22",
		topic: "The duct sequence",
		prompt: "Sperm leave the testis in which order?",
		choices: [
			"Urethra, ejaculatory duct, vas deferens, epididymis, seminiferous tubules",
			"Seminiferous tubules, epididymis, vas deferens, ejaculatory duct, urethra",
			"Epididymis, seminiferous tubules, urethra, prostate, penis",
			"Vas deferens, seminiferous tubules, seminal vesicle, bladder, ureter"
		],
		answer: 1,
		explain: "The epididymis (head, body, tail) stores sperm and helps them mature; unused sperm are reabsorbed. The vas deferens propels them through the abdomen. Its ampulla, near the prostate, behaves like a gland. A vasectomy ligates the vas deferens."
	},
	{
		id: "m08",
		lecture: "22",
		topic: "Urethra",
		prompt: "The three regions of the male urethra are…",
		choices: [
			"Prostatic, membranous, and spongy",
			"Spongy, cystic, and hepatic",
			"Afferent, efferent, and peritubular",
			"Prostatic, spongy, and ureteric"
		],
		answer: 0,
		explain: "The prostatic urethra is inside the prostate, where the reproductive and urinary tracts merge. The membranous urethra crosses the pelvic floor. The spongy urethra runs through the corpus spongiosum. The ejaculatory duct is where the ampulla meets the seminal vesicle, and it delivers sperm plus the first secretions to the prostate."
	},
	{
		id: "m09",
		lecture: "22",
		topic: "Glands",
		prompt: "Fructose, prostaglandins, and bicarbonate in semen come mainly from…",
		choices: [
			"The bulbourethral glands",
			"The seminal vesicles",
			"The dartos muscle",
			"The epididymal tail only"
		],
		answer: 1,
		explain: "Semen is sperm plus glandular secretion. Seminal vesicles sit behind the bladder and join the vas deferens to form the ejaculatory duct. Fructose feeds sperm ATP, prostaglandins help dilate the cervix, and bicarbonate holds the pH."
	},
	{
		id: "m10",
		lecture: "22",
		topic: "Prostate and bulbourethral glands",
		prompt: "An enlarged prostate causes trouble urinating because it…",
		choices: [
			"Occludes the urethra",
			"Stops spermatogenesis inside the glomerulus",
			"Empties the seminal vesicles",
			"Blocks the ureters only"
		],
		answer: 0,
		explain: "The prostate sits under the bladder and adds citric acid, seminalplasmin (antimicrobial), and PSA, which thins semen. Bulbourethral glands sit beside the membranous urethra and add mucin that protects sperm and lubricates the urethra."
	},
	{
		id: "m11",
		lecture: "22",
		topic: "Pelvic floor",
		prompt: "Bulbocavernosus, ischiocavernosus, and levator ani…",
		choices: [
			"Support pelvic organs, take part in sexual function, and help urinary and fecal continence",
			"Are the three layers of the uterus",
			"Replace the diaphragm during expiration",
			"Produce semen"
		],
		answer: 0,
		explain: "They form a dome in the inferior pelvis. Levator ani includes pubococcygeus. The same muscle set is taught again with the female perineum."
	},
	{
		id: "m12",
		lecture: "22",
		topic: "Male infertility",
		prompt: "Most male infertility is related to problems with…",
		choices: [
			"The prostate capsule",
			"Sperm",
			"The dartos raphe",
			"The inguinal skin"
		],
		answer: 1,
		explain: "The usual problems are too few sperm, abnormal anatomy, or poor movement. About 40% of infertility cases are male-related, 50% female-related, and 10% unexplained."
	},
	{
		id: "f01",
		lecture: "23",
		topic: "Vulva",
		prompt: "The vulva is…",
		choices: [
			"Only the vaginal canal",
			"All of the female external genitalia",
			"The uterus and ovaries together",
			"Another name for the broad ligament"
		],
		answer: 1,
		explain: "Seven structures in this lecture: mons pubis, labia majora, labia minora, clitoris, vestibule, urethral opening, and vaginal opening. Greater vestibular glands sit in the posterolateral walls of the vestibule."
	},
	{
		id: "f02",
		lecture: "23",
		topic: "External structures",
		prompt: "Which job is paired correctly?",
		choices: [
			"Labia majora protect other vulvar structures and are the counterpart of the scrotum; the clitoris has no known role except sexual pleasure",
			"The clitoris produces oocytes",
			"Labia minora are lateral to the labia majora and contain the testes",
			"The mons pubis is the space between the labia minora"
		],
		answer: 0,
		explain: "Mons pubis is the fatty pad over the pubic symphysis. Labia minora are medial, protect the vestibule, and form the clitoral prepuce. The vestibule is the space between the labia minora."
	},
	{
		id: "f03",
		lecture: "23",
		topic: "Homologous structures",
		prompt: "Without testosterone, an embryo develops…",
		choices: [
			"Male external genitalia even if no other hormones are present",
			"Female external genitalia",
			"No external genitalia until puberty",
			"A scrotum but no penis"
		],
		answer: 1,
		explain: "Genital tubercle becomes penis or clitoris. Labioscrotal swelling becomes scrotum or labia majora. Urogenital fold becomes the male urethra or the labia minora. The Y chromosome’s testosterone is what masculinizes the outside."
	},
	{
		id: "f04",
		lecture: "23",
		topic: "A hormone gap",
		prompt: "An XY embryo makes AMH, but testosterone production fails. What develops?",
		choices: [
			"Male internal and male external genitalia",
			"Male internal genitalia and female external genitalia",
			"Female internal genitalia and male external genitalia",
			"Female internal and female external genitalia"
		],
		answer: 1,
		explain: "AMH suppresses the paramesonephric ducts, so internal development proceeds along the male path. External masculinization still needs testosterone, so the outside develops female."
	},
	{
		id: "f05",
		lecture: "23",
		topic: "Ovary",
		prompt: "Where do oocytes actually develop, and why is “germinal epithelium” a misleading name?",
		choices: [
			"They develop in the germinal epithelium, which is simple squamous",
			"They develop in the cortex; the germinal epithelium is just visceral peritoneum and is not the source of germ cells",
			"They develop in the medulla among the large vessels",
			"They develop in the tunica albuginea"
		],
		answer: 1,
		explain: "Four layers: germinal epithelium (simple cuboidal visceral peritoneum), tunica albuginea, cortex with oocytes, and medulla of areolar connective tissue for vessels and nerves. The ovary also makes estrogen and progesterone."
	},
	{
		id: "f06",
		lecture: "23",
		topic: "Ovarian ligaments",
		prompt: "The suspensory ligament and the ovarian ligament attach the ovary…",
		choices: [
			"Superiorly to the abdominal wall, and inferiorly to the lateral uterus",
			"Both to the rectum",
			"To the labia majora and the clitoris",
			"Only to the round ligament of the liver"
		],
		answer: 0,
		explain: "The suspensory ligament carries the ovarian artery and vein. The broad ligament is peritoneum draped over the uterus that also stabilizes vessels. The round ligament is a separate uterine support shown on the diagrams."
	},
	{
		id: "f07",
		lecture: "23",
		topic: "Uterine tube",
		prompt: "Fertilization occurs in which region of the uterine tube?",
		choices: [
			"Isthmus, the longest part",
			"Ampulla",
			"Uterine part, inside the wall",
			"Infundibulum, which has no fimbriae"
		],
		answer: 1,
		explain: "Infundibulum is the funnel next to the ovary and ends in fimbriae. Ampulla is the expanded region just medial to it. Isthmus is medial to the ampulla and, in this lecture, the longest part. The uterine part joins the uterus."
	},
	{
		id: "f08",
		lecture: "23",
		topic: "Uterus",
		prompt: "The cervix is…",
		choices: [
			"The superior dome between the uterine tubes",
			"The most inferior region, the “door” of the uterus",
			"A layer of the endometrium",
			"The tube where fertilization occurs"
		],
		answer: 1,
		explain: "Fundus is superior, between the tubes. Body is the large muscular middle. Isthmus is the narrowed region above the cervix. A Pap smear looks for cervical cells transformed by HPV. Endometrium is shed and feeds an embryo, myometrium contracts, and perimetrium is the serosa."
	},
	{
		id: "f09",
		lecture: "23",
		topic: "Vagina",
		prompt: "The vaginal lining and the hymen are…",
		choices: [
			"Simple columnar epithelium, and a gland that makes progesterone",
			"Stratified squamous epithelium, and a mucosal fold near the vaginal orifice",
			"Ciliated epithelium like the trachea, and a bone",
			"The same tissue as the germinal epithelium"
		],
		answer: 1,
		explain: "The vagina is the fibromuscular tube from the uterus to the outside. Its opening is the vaginal orifice."
	},
	{
		id: "f10",
		lecture: "23",
		topic: "Cycle timing",
		prompt: "Using this lecture’s day count, estrogen is rising and the endometrium is rebuilding during…",
		choices: [
			"Days 1–5, the menstrual phase",
			"Days 6–14, the follicular phase",
			"Days 15–28, the luteal phase",
			"Only after menopause"
		],
		answer: 1,
		explain: "The cycle is about 24–32 days, average 28, run by estrogen and progesterone. Days 1–5 shed the endometrium and hormones are at their lowest. Ovulation is day 14. Days 15–28 are luteal."
	},
	{
		id: "f11",
		lecture: "23",
		topic: "Fertile window",
		prompt: "The oocyte can be fertilized for about 24 hours. When is a person most fertile?",
		choices: [
			"Only during those 24 hours",
			"Three to five days before ovulation, because sperm can wait",
			"The entire luteal phase",
			"During menstruation only"
		],
		answer: 1,
		explain: "Sperm can live in the tract for days. Timing intercourse only on ovulation day misses the days when sperm are already waiting for the egg."
	},
	{
		id: "f12",
		lecture: "23",
		topic: "Luteal phase",
		prompt: "After ovulation the corpus luteum mainly secretes progesterone, which…",
		choices: [
			"Raises body temperature about one degree Fahrenheit, increases endometrial blood supply, lowers immune activity, and brings sleepiness",
			"Starts a new menstrual bleed the same day",
			"Is the hormone a pregnancy test measures",
			"Empties the follicle of all remaining oocytes for that year"
		],
		answer: 0,
		explain: "The estrogen-making follicle is gone, so the corpus luteum takes over. If there is no pregnancy it degenerates and the cycle repeats. Birth-control pills use high estrogen and progesterone so the body does not ovulate."
	},
	{
		id: "f13",
		lecture: "23",
		topic: "HCG",
		prompt: "A pregnancy test is detecting…",
		choices: [
			"Estrogen from the adrenal gland",
			"Human chorionic gonadotropin from the embryo, which keeps the corpus luteum making progesterone",
			"FSH from the pituitary",
			"Prolactin from the myometrium"
		],
		answer: 1,
		explain: "No HCG means the corpus luteum degenerates and menstruation returns. HCG is what sustains early pregnancy and prevents that bleed."
	},
	{
		id: "f14",
		lecture: "23",
		topic: "The egg supply",
		prompt: "When are oocytes made?",
		choices: [
			"Every cycle, from the germinal epithelium",
			"The lifetime supply is present at birth; release starts at puberty and ends at menopause",
			"Only during the luteal phase",
			"Continuously from menopause onward"
		],
		answer: 1,
		explain: "No new eggs are made after birth. Menopause is the end of follicles and therefore of their estrogen."
	},
	{
		id: "f15",
		lecture: "23",
		topic: "Infertility",
		prompt: "Fibroids, PCOS, and endometriosis are problems of…",
		choices: [
			"Uterus, ovary, and endometrial tissue in the wrong place",
			"Only the uterine tube",
			"The penis, testis, and prostate",
			"The kidney, ureter, and bladder"
		],
		answer: 0,
		explain: "Fibroids are benign uterine growths that can block implantation. PCOS is an ovarian problem: cysts and abnormal hormones, failed ovulation, weight gain, and masculinizing features. Endometriosis is endometrial tissue outside the uterus and can block ovulation, fertilization, or implantation. About half of infertility cases involve the female tract. IVF bypasses ovulation, fertilization, and implantation."
	},
	{
		id: "f16",
		lecture: "23",
		topic: "Starting a pregnancy",
		prompt: "Fertilization should occur in the ____. Implantation should occur in the ____.",
		choices: [
			"Uterus; ovary",
			"Uterine tube; uterus",
			"Vagina; uterine tube",
			"Ovary; peritoneal cavity"
		],
		answer: 1,
		explain: "Sperm meet the egg in the uterine tube, the nuclei fuse into a zygote, the zygote divides on the way to the uterus, and the embryo implants. An ectopic pregnancy is implantation in the wrong place, often the tube. A tubal ligation interrupts that path."
	},
	{
		id: "f17",
		lecture: "23",
		topic: "Names",
		prompt: "Zygote, embryo, and fetus mean…",
		choices: [
			"A single fertilized cell; an early offspring not yet recognizably human; an unborn offspring whose form is recognizably human",
			"Three names for the placenta",
			"The corpus luteum, the follicle, and the egg",
			"Stages that all look human from day 1"
		],
		answer: 0,
		explain: "Use the lecture’s wording: zygote is one fertilized cell, embryo is too early to look human, fetus is recognizably human."
	},
	{
		id: "f18",
		lecture: "23",
		topic: "Placenta and amnion",
		prompt: "By about 8 weeks the placenta…",
		choices: [
			"Has no endocrine role and the corpus luteum works until birth",
			"Takes over as an endocrine organ, making estrogen, progesterone, and other hormones that maintain pregnancy",
			"Is the same structure as the hymen",
			"Stops delivering oxygen so the lungs can practice"
		],
		answer: 1,
		explain: "The placenta feeds the embryo, brings oxygen, and removes wastes. The amnion is protection. “Water breaking” is rupture of the amnion. All organ systems are formed by the end of the 8th week. Viability in this lecture is 24 weeks, when systems are fully formed."
	},
	{
		id: "f19",
		lecture: "23",
		topic: "Loss and maternal changes",
		prompt: "Which pregnancy facts match the lecture?",
		choices: [
			"Miscarriage is usually caused by something the parents did; blood volume stays at 6 L",
			"About 30% of known pregnancies miscarry, usually from chromosomal errors; blood volume can rise from about 6 L to 9 L",
			"Morning sickness is low progesterone; the bladder empties less often",
			"Viability is week 8 and organ formation waits until week 24"
		],
		answer: 1,
		explain: "Up to about 75% of all fertilizations never continue. Digestive changes include hormone-driven nausea, crowding heartburn, and slowed motility. Kidneys filter more blood and the uterus presses the bladder, so urination is frequent. Nasal mucosa swells, the diaphragm is crowded, and the extra blood volume shows up as a faster pulse and edema."
	},
	{
		id: "f20",
		lecture: "23",
		topic: "Complications",
		prompt: "Gestational diabetes and pre-eclampsia are…",
		choices: [
			"Insulin resistance of pregnancy, and high blood pressure with protein in the urine",
			"A tubal pregnancy, and a breech birth",
			"Low blood volume, and a failed placenta at week 2",
			"Fibroids and a Pap-smear finding"
		],
		answer: 0,
		explain: "Pregnancy already raises insulin resistance. Diabetes shows up if the person was already somewhat resistant or the placenta is driving the change hard. Pre-eclampsia comes out of the huge cardiovascular load."
	},
	{
		id: "f21",
		lecture: "23",
		topic: "Labor",
		prompt: "Contractions in stage 1 of labor…",
		choices: [
			"Push the baby out of the uterus",
			"Dilate and efface the cervix; they do not themselves expel the baby",
			"Deliver the placenta",
			"Close the cervix to 1 cm"
		],
		answer: 1,
		explain: "Dilation is opening; effacement is thinning. Full dilation is about 10 cm. Stage 1 is the longest, about 6 to 12 hours. Stage 2 is expulsion and requires the mother to push; a normal birth is head-first, and breech is buttocks-first. Stage 3 delivers the placenta, usually within about 15 minutes. Fragments left behind risk bleeding and infection."
	}
];
var GRADES = [
	"again",
	"hard",
	"good",
	"easy"
];
var GRADE_NAME = {
	again: "Again",
	hard: "Hard",
	good: "Good",
	easy: "Easy"
};
var INITIAL_EASE = 2.5;
var MIN_EASE = 1.3;
var LEARNING_MS = 6e5;
var QUALITY = {
	again: 1,
	hard: 3,
	good: 4,
	easy: 5
};
function startOfLocalDay(ms) {
	const date = new Date(ms);
	date.setHours(0, 0, 0, 0);
	return date.getTime();
}
function addLocalDays(ms, days) {
	const date = new Date(startOfLocalDay(ms));
	date.setDate(date.getDate() + days);
	return date.getTime();
}
function localDayIndex(due, now) {
	const diff = startOfLocalDay(due) - startOfLocalDay(now);
	return Math.round(diff / 864e5);
}
function easeAfter(ease, grade) {
	const gap = 5 - QUALITY[grade];
	const delta = .1 - gap * (.08 + gap * .02);
	const next = Math.max(MIN_EASE, ease + delta);
	return Math.round(next * 100) / 100;
}
function nextInterval(prev, grade, ease) {
	const reps = prev?.reps ?? 0;
	const interval = prev?.intervalDays ?? 0;
	if (!(prev?.state === "review" && reps > 0)) return grade === "easy" ? 4 : 1;
	if (reps === 1) {
		if (grade === "easy") return 8;
		if (grade === "hard") return 4;
		return 6;
	}
	if (grade === "hard") return Math.max(interval + 1, Math.round(interval * 1.2));
	if (grade === "easy") return Math.max(1, Math.round(interval * ease * 1.3));
	return Math.max(1, Math.round(interval * ease));
}
function schedule(prev, grade, now) {
	const ease = easeAfter(prev?.ease ?? 2.5, grade);
	if (grade === "again") return {
		ease,
		intervalDays: 0,
		reps: 0,
		lapses: prev?.state === "review" ? (prev.lapses ?? 0) + 1 : prev?.lapses ?? 0,
		due: now + LEARNING_MS,
		state: "learning"
	};
	const intervalDays = nextInterval(prev, grade, ease);
	return {
		ease,
		intervalDays,
		reps: (prev?.reps ?? 0) + 1,
		lapses: prev?.lapses ?? 0,
		due: addLocalDays(now, intervalDays),
		state: "review"
	};
}
function scheduleLabel(memory) {
	if (memory.state === "learning" || memory.intervalDays <= 0) return "10 min";
	if (memory.intervalDays === 1) return "1 day";
	if (memory.intervalDays < 90) return `${memory.intervalDays} days`;
	const months = Math.max(1, Math.round(memory.intervalDays / 30));
	return months === 1 ? "1 month" : `${months} months`;
}
function previews(memory, now) {
	return {
		again: scheduleLabel(schedule(memory, "again", now)),
		hard: scheduleLabel(schedule(memory, "hard", now)),
		good: scheduleLabel(schedule(memory, "good", now)),
		easy: scheduleLabel(schedule(memory, "easy", now))
	};
}
function memoryStatus(memory) {
	if (!memory) return "New card. The first grade starts the schedule.";
	const ease = memory.ease.toFixed(2);
	if (memory.state === "learning") return memory.lapses > 0 ? `Learning again · ease ${ease} · ${memory.lapses} lapse${memory.lapses === 1 ? "" : "s"}` : `Learning · ease ${ease}`;
	return `Review · last gap ${memory.intervalDays === 1 ? "1 day" : `${memory.intervalDays} days`} · ease ${ease} · ${memory.reps} in a row`;
}
function formatDue(due, now) {
	if (due <= now) return "now";
	const delta = due - now;
	if (delta < 36e5) {
		const mins = Math.max(1, Math.ceil(delta / 6e4));
		return mins === 1 ? "in 1 minute" : `in ${mins} minutes`;
	}
	const day = localDayIndex(due, now);
	if (day <= 0) return new Date(due).toLocaleTimeString(void 0, {
		hour: "numeric",
		minute: "2-digit"
	});
	if (day === 1) return "tomorrow";
	if (day < 7) return new Date(due).toLocaleDateString(void 0, { weekday: "long" });
	return new Date(due).toLocaleDateString(void 0, {
		month: "short",
		day: "numeric"
	});
}
function classify(memory, now) {
	if (!memory) return "new";
	if (memory.due > now) return "ahead";
	if (memory.state === "learning") return "learning";
	return "review";
}
function orderDue(ids, memories, now, pullLearning = false) {
	const learning = [];
	const review = [];
	const fresh = [];
	for (const id of ids) {
		const memory = memories[id];
		const bucket = classify(memory, now);
		if (bucket === "learning" || pullLearning && memory?.state === "learning") learning.push(id);
		else if (bucket === "review") review.push(id);
		else if (bucket === "new") fresh.push(id);
	}
	const byDue = (a, b) => (memories[a]?.due ?? 0) - (memories[b]?.due ?? 0);
	learning.sort(byDue);
	review.sort(byDue);
	return [
		...learning,
		...review,
		...fresh
	];
}
function orderAhead(ids, memories, now) {
	return ids.filter((id) => {
		const memory = memories[id];
		return memory?.state === "review" && memory.due > now;
	}).sort((a, b) => (memories[a]?.due ?? 0) - (memories[b]?.due ?? 0));
}
function weekLoad(ids, memories, now) {
	const buckets = [
		0,
		0,
		0,
		0,
		0,
		0,
		0
	];
	for (const id of ids) {
		const memory = memories[id];
		if (!memory) continue;
		let index = memory.due <= now ? 0 : localDayIndex(memory.due, now);
		if (index < 0) index = 0;
		if (index < 7) buckets[index] += 1;
	}
	return buckets;
}
function seedFromTag(tag, now) {
	if (tag === "known") return {
		ease: easeAfter(INITIAL_EASE, "easy"),
		intervalDays: 4,
		reps: 1,
		lapses: 0,
		due: addLocalDays(now, 4),
		state: "review"
	};
	return {
		ease: easeAfter(INITIAL_EASE, "again"),
		intervalDays: 0,
		reps: 0,
		lapses: 0,
		due: now,
		state: "learning"
	};
}
function summarize(ids, memories, now) {
	const counts = {
		due: 0,
		learning: 0,
		review: 0,
		fresh: 0,
		ahead: 0,
		resting: 0,
		nextDue: null
	};
	for (const id of ids) {
		const memory = memories[id];
		if (!memory) {
			counts.fresh += 1;
			counts.due += 1;
			continue;
		}
		if (memory.state === "learning") counts.learning += 1;
		else counts.review += 1;
		if (memory.due <= now) counts.due += 1;
		else {
			if (memory.state === "learning") counts.resting += 1;
			else counts.ahead += 1;
			if (counts.nextDue === null || memory.due < counts.nextDue) counts.nextDue = memory.due;
		}
	}
	return counts;
}
var SRS_KEY = "tract-srs-v1";
var TAG_KEY = "tract-tags-v1";
function shuffleIds(ids) {
	const next = [...ids];
	for (let i = next.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const swap = next[i];
		next[i] = next[j] ?? swap;
		next[j] = swap;
	}
	return next;
}
function idsFor(filter) {
	return CARDS.filter((card) => filter === "all" || card.lecture === filter).map((card) => card.id);
}
function isMemory(value) {
	if (!value || typeof value !== "object") return false;
	const row = value;
	return typeof row.ease === "number" && Number.isFinite(row.ease) && typeof row.intervalDays === "number" && typeof row.reps === "number" && typeof row.lapses === "number" && typeof row.due === "number" && (row.state === "learning" || row.state === "review");
}
function sanitize(value) {
	const source = value && typeof value === "object" && "cards" in value ? value.cards : value;
	if (!source || typeof source !== "object") return {};
	const memories = {};
	for (const [id, row] of Object.entries(source)) {
		if (!isMemory(row)) continue;
		memories[id] = {
			ease: Math.max(1.3, row.ease),
			intervalDays: Math.max(0, Math.round(row.intervalDays)),
			reps: Math.max(0, Math.round(row.reps)),
			lapses: Math.max(0, Math.round(row.lapses)),
			due: row.due,
			state: row.state
		};
	}
	return memories;
}
function readTags() {
	try {
		const raw = localStorage.getItem(TAG_KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed !== "object") return {};
		const tags = {};
		for (const [id, value] of Object.entries(parsed)) if (value === "known" || value === "needs-work") tags[id] = value;
		return tags;
	} catch {
		return {};
	}
}
function loadMemories(now) {
	try {
		const raw = localStorage.getItem(SRS_KEY);
		if (raw) return sanitize(JSON.parse(raw));
	} catch {
		return {};
	}
	const seeded = {};
	for (const [id, tag] of Object.entries(readTags())) if (CARDS.some((card) => card.id === id)) seeded[id] = seedFromTag(tag, now);
	localStorage.setItem(SRS_KEY, JSON.stringify({
		migrated: true,
		cards: seeded
	}));
	return seeded;
}
function queueFor(filter, mode, memories, now, pullLearning) {
	const ids = idsFor(filter);
	if (mode === "ahead") return orderAhead(ids, memories, now);
	const ordered = orderDue(ids, memories, now, pullLearning);
	const fresh = ordered.filter((id) => !memories[id]);
	return [...ordered.filter((id) => memories[id]), ...shuffleIds(fresh)];
}
function lectureOf(id) {
	return LECTURES.find((lecture) => lecture.id === id);
}
var DAY_LETTERS = [
	"S",
	"M",
	"T",
	"W",
	"T",
	"F",
	"S"
];
function TractApp() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [now, setNow] = (0, import_react.useState)(0);
	const [memories, setMemories] = (0, import_react.useState)({});
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [mode, setMode] = (0, import_react.useState)("due");
	const [queue, setQueue] = (0, import_react.useState)([]);
	const [cursor, setCursor] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [graded, setGraded] = (0, import_react.useState)(null);
	const [tally, setTally] = (0, import_react.useState)({
		correct: 0,
		wrong: 0
	});
	const [done, setDone] = (0, import_react.useState)(false);
	const baselineRef = (0, import_react.useRef)(void 0);
	const seenCard = (0, import_react.useRef)(void 0);
	const byId = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const card of CARDS) map.set(card.id, card);
		return map;
	}, []);
	const deal = (0, import_react.useCallback)((nextFilter, nextMode, nextMemories, at, pullLearning = false) => {
		seenCard.current = void 0;
		const ids = queueFor(nextFilter, nextMode, nextMemories, at, pullLearning);
		setQueue(ids);
		setCursor(0);
		setPicked(null);
		setGraded(null);
		setTally({
			correct: 0,
			wrong: 0
		});
		setDone(ids.length === 0);
		setNow(at);
	}, []);
	(0, import_react.useEffect)(() => {
		const at = Date.now();
		const stored = loadMemories(at);
		setMemories(stored);
		setFilter("all");
		setMode("due");
		deal("all", "due", stored, at);
		setReady(true);
	}, [deal]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(SRS_KEY, JSON.stringify({
			migrated: true,
			cards: memories
		}));
	}, [memories, ready]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		const id = window.setInterval(() => setNow(Date.now()), 3e4);
		return () => window.clearInterval(id);
	}, [ready]);
	const filterIds = (0, import_react.useMemo)(() => idsFor(filter), [filter]);
	const counts = (0, import_react.useMemo)(() => now ? summarize(filterIds, memories, now) : {
		due: 0,
		learning: 0,
		review: 0,
		fresh: 0,
		ahead: 0,
		resting: 0,
		nextDue: null
	}, [
		filterIds,
		memories,
		now
	]);
	const load = (0, import_react.useMemo)(() => now ? weekLoad(filterIds, memories, now) : [
		0,
		0,
		0,
		0,
		0,
		0,
		0
	], [
		filterIds,
		memories,
		now
	]);
	const scheduledCount = load.reduce((sum, count) => sum + count, 0);
	const card = done ? void 0 : byId.get(queue[cursor] ?? "");
	if (card && seenCard.current !== card.id) {
		seenCard.current = card.id;
		baselineRef.current = memories[card.id];
	}
	const looks = previews(card ? baselineRef.current : void 0, now || 1);
	const scheduled = card && graded ? schedule(baselineRef.current, graded, now || 1) : void 0;
	const lecture = card ? lectureOf(card.lecture) : void 0;
	const suggested = card && picked !== null ? picked === card.answer ? "good" : "again" : null;
	function choose(index) {
		if (!card || picked !== null) return;
		setPicked(index);
		setTally((tally) => index === card.answer ? {
			...tally,
			correct: tally.correct + 1
		} : {
			...tally,
			wrong: tally.wrong + 1
		});
	}
	function applyGrade(grade) {
		if (!card || picked === null) return;
		const at = Date.now();
		const next = schedule(baselineRef.current, grade, at);
		setNow(at);
		setMemories((current) => ({
			...current,
			[card.id]: next
		}));
		setGraded(grade);
	}
	function goNext() {
		if (!card) return;
		const memory = memories[card.id];
		const shouldRequeue = graded !== null && memory?.state === "learning";
		let nextQueue = queue;
		if (shouldRequeue) {
			nextQueue = queue.filter((item, index) => index <= cursor || item !== card.id);
			const at = Math.min(nextQueue.length, cursor + 3);
			nextQueue = [
				...nextQueue.slice(0, at),
				card.id,
				...nextQueue.slice(at)
			];
			setQueue(nextQueue);
		}
		const start = cursor + 1;
		if (start >= nextQueue.length) {
			seenCard.current = void 0;
			setDone(true);
			setPicked(null);
			setGraded(null);
			return;
		}
		seenCard.current = void 0;
		setCursor(start);
		setPicked(null);
		setGraded(null);
	}
	function reshuffle() {
		deal(filter, mode, memories, Date.now());
	}
	function switchMode(next) {
		setMode(next);
		deal(filter, next, memories, Date.now());
	}
	function switchFilter(next) {
		setFilter(next);
		deal(next, mode, memories, Date.now());
	}
	function resetSchedule() {
		const at = Date.now();
		setMemories({});
		setMode("due");
		deal(filter, "due", {}, at);
	}
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		function onKey(event) {
			const target = event.target;
			if (target instanceof HTMLElement && target.closest("input, textarea")) return;
			if (!card || done) {
				if (event.key === "s") reshuffle();
				return;
			}
			if (event.key === "Enter" && target instanceof HTMLElement) {
				const button = target.closest("button");
				if (button instanceof HTMLButtonElement && !button.disabled) return;
			}
			if (picked === null && [
				"1",
				"2",
				"3",
				"4"
			].includes(event.key)) {
				const index = Number(event.key) - 1;
				if (index < card.choices.length) choose(index);
			} else if (picked !== null && [
				"1",
				"2",
				"3",
				"4"
			].includes(event.key)) {
				const grade = GRADES[Number(event.key) - 1];
				if (grade) applyGrade(grade);
			} else if (event.key === "Enter" && picked !== null) {
				event.preventDefault();
				if (graded) goNext();
				else if (suggested) applyGrade(suggested);
			} else if (event.key === "n" && picked !== null) goNext();
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	const answered = tally.correct + tally.wrong;
	const dayMarks = Array.from({ length: 7 }, (_, index) => {
		if (!now) return "";
		if (index === 0) return "Now";
		return DAY_LETTERS[new Date(addLocalDays(now, index)).getDay()] ?? "";
	});
	const peak = Math.max(1, ...load);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen border-l-2 border-oxblood bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 py-5 sm:px-8 sm:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs font-semibold tracking-widest text-oxblood uppercase",
							children: "Unit V · Visceral body"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl leading-none font-semibold text-ink sm:text-5xl",
							children: "Tract"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-md text-sm text-muted",
							children: "Answer, then grade the card. A miss comes back in this sitting. A good answer waits a day, then six, then stretches with your ease."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: reshuffle,
							className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Reshuffle"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => switchMode(mode === "due" ? "ahead" : "due"),
							className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-card px-4 text-sm font-medium text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
								className: "size-4",
								"aria-hidden": "true"
							}), mode === "due" ? "Study ahead" : "Back to due"]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex gap-2 overflow-x-auto pb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: filter === "all",
						onClick: () => switchFilter("all"),
						label: "All lectures"
					}), LECTURES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: filter === item.id,
						onClick: () => switchFilter(item.id),
						label: item.label
					}, item.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 grid grid-cols-4 gap-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Due",
							value: ready ? counts.due : 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Learning",
							value: ready ? counts.learning : 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Review",
							value: ready ? counts.review : 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "New",
							value: ready ? counts.fresh : 0
						})
					]
				}),
				ready && scheduledCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-muted uppercase",
						children: "Coming due"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-7 gap-1.5",
						children: load.map((count, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative h-12 rounded-md bg-paper-deep",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-x-0 bottom-0 rounded-md " + (index === 0 ? "bg-oxblood" : "bg-pine"),
										style: { height: count === 0 ? "0%" : `${Math.max(16, Math.round(count / peak * 100))}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: dayMarks[index]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tabular-nums text-ink",
									children: count
								})
							]
						}, index))
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "mt-5 flex flex-1 flex-col",
					children: !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "rounded-2xl border border-line bg-card px-6 py-16 text-center text-muted",
						children: "Opening today’s desk…"
					}) : !card || done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						mode,
						tally,
						counts,
						now,
						onResume: () => deal(filter, "due", memories, Date.now()),
						onResting: () => {
							setMode("due");
							deal(filter, "due", memories, Date.now(), true);
						},
						onAhead: () => switchMode("ahead"),
						onDue: () => switchMode("due")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-1 flex-col rounded-2xl border border-line bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3 border-b border-line px-5 py-4 sm:px-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-semibold tracking-widest text-brass uppercase",
								children: [
									lecture?.kicker,
									" · ",
									lecture?.label
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: card.topic
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-sm text-muted tabular-nums",
								children: [
									Math.min(cursor + 1, queue.length),
									" / ",
									queue.length,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-0.5 block text-right text-xs",
										children: [
											queue.length - cursor,
											" left",
											answered > 0 ? ` · ${tally.correct}/${answered} right` : ""
										]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl leading-snug font-semibold text-balance text-ink sm:text-3xl",
									children: card.prompt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: memoryStatus(baselineRef.current)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 grid gap-2.5",
									role: "group",
									"aria-label": "Answers",
									children: card.choices.map((choice, index) => {
										const revealed = picked !== null;
										const isAnswer = index === card.answer;
										const isPick = index === picked;
										const correct = revealed && isAnswer;
										const wrong = revealed && isPick && !isAnswer;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: revealed,
											onClick: () => choose(index),
											className: "flex min-h-12 items-start gap-3 rounded-xl border px-3 py-3 text-left text-base leading-snug transition-colors " + (correct ? "border-pine bg-pine-soft text-ink" : wrong ? "border-oxblood bg-oxblood-soft text-ink" : revealed ? "border-line bg-paper text-muted" : "border-line bg-paper text-ink hover:border-ink"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold " + (correct ? "bg-pine text-paper" : wrong ? "bg-oxblood text-paper" : "bg-paper-deep text-ink"),
												"aria-hidden": "true",
												children: correct ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : wrong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }) : index + 1
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex-1",
												children: choice
											})]
										}, choice);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-live": "polite",
									className: "mt-4 min-h-16",
									children: picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl px-4 py-3 " + (picked === card.answer ? "bg-pine-soft text-pine" : "bg-oxblood-soft text-oxblood"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: picked === card.answer ? "Correct" : "Incorrect"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-ink",
											children: card.explain
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted",
										children: [
											"Keys 1–4 answer. Then grade: Again ",
											looks.again,
											", Hard ",
											looks.hard,
											", Good ",
											looks.good,
											", Easy",
											" ",
											looks.easy,
											"."
										]
									})
								}),
								picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",
									role: "group",
									"aria-label": "Schedule this card",
									children: GRADES.map((grade, index) => {
										const selected = graded === grade;
										const hint = graded === null && suggested === grade;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-pressed": selected,
											onClick: () => applyGrade(grade),
											className: "min-h-14 rounded-xl border px-2 py-2 text-center " + gradeTone(grade, selected || hint),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block text-sm font-semibold",
												children: [
													index + 1,
													" ",
													GRADE_NAME[grade]
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs " + (selected || hint ? "text-ink" : "text-muted"),
												children: looks[grade]
											})]
										}, grade);
									})
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-brass",
										"aria-live": "polite",
										children: gradeNote(scheduled, graded, picked)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: goNext,
										className: "inline-flex min-h-12 items-center justify-center rounded-full bg-pine px-5 text-sm font-semibold text-paper",
										children: picked === null ? "Skip for now" : graded ? "Next card" : "Skip without grading"
									})]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [CARDS.length, " cards from lectures 19–23. The schedule stays on this device."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 underline decoration-line underline-offset-4",
						onClick: resetSchedule,
						children: "Reset schedule"
					})]
				})
			]
		})
	});
}
function gradeNote(scheduled, graded, picked) {
	if (scheduled && graded === "again") return "Back in a few cards. If you stop, it stays due in 10 minutes.";
	if (scheduled) return `Next look in ${scheduleLabel(scheduled)}. Ease ${scheduled.ease.toFixed(2)}.`;
	if (picked !== null) return "Enter uses the suggested grade. N moves on.";
	return "";
}
function gradeTone(grade, active) {
	if (!active) return "border-line bg-paper text-ink";
	if (grade === "again") return "border-oxblood bg-oxblood-soft text-ink";
	if (grade === "hard") return "border-brass bg-brass-soft text-ink";
	return "border-pine bg-pine-soft text-ink";
}
function FilterChip({ active, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-pressed": active,
		className: "min-h-11 shrink-0 rounded-full px-3.5 text-sm font-medium " + (active ? "bg-ink text-paper" : "border border-line bg-card text-ink"),
		children: label
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-card px-2 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-display text-2xl leading-none tabular-nums",
			children: value
		})]
	});
}
function EmptyState({ mode, tally, counts, now, onResume, onResting, onAhead, onDue }) {
	const answered = tally.correct + tally.wrong;
	let title = "This pass is finished.";
	let body = "Skipped cards are still due. Graded ones wait until their date.";
	if (mode === "ahead") {
		title = counts.ahead === 0 ? "Nothing is scheduled ahead." : "That’s the ahead pile.";
		body = "Grading an early card still moves its next date out.";
	} else if (counts.due === 0 && counts.resting > 0 && counts.nextDue) {
		title = "These cards are resting.";
		body = `${counts.resting} missed ${counts.resting === 1 ? "card comes" : "cards come"} back ${formatDue(counts.nextDue, now)}.`;
	} else if (counts.due === 0 && counts.ahead > 0 && counts.nextDue) {
		title = "Nothing is due right now.";
		body = `Next card ${formatDue(counts.nextDue, now)}. ${counts.ahead} more sit further out.`;
	} else if (counts.due === 0 && counts.fresh === 0) {
		title = "The schedule is clear.";
		body = "Every card in this set has a future date.";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl border border-line bg-card px-6 py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl font-semibold text-balance",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto mt-3 max-w-sm text-muted",
				children: [answered > 0 ? `${tally.correct} correct, ${tally.wrong} incorrect. ` : "", body]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap justify-center gap-2",
				children: [
					mode === "due" && counts.due > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onResume,
						className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-paper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {
								className: "size-4",
								"aria-hidden": "true"
							}),
							"Resume ",
							counts.due,
							" due"
						]
					}) : null,
					mode === "due" && counts.resting > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onResting,
						className: "inline-flex min-h-12 items-center rounded-full border border-line bg-paper px-5 text-sm font-medium",
						children: "Study resting cards"
					}) : null,
					mode === "due" && counts.ahead > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onAhead,
						className: "inline-flex min-h-12 items-center rounded-full border border-line bg-paper px-5 text-sm font-medium",
						children: "Study ahead"
					}) : null,
					mode === "ahead" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onDue,
						className: "inline-flex min-h-12 items-center rounded-full bg-ink px-5 text-sm font-semibold text-paper",
						children: "Back to due cards"
					}) : null
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TractApp, {});
}
//#endregion
export { Home as component };
