// ─────────────────────────────────────────────────────────────────────────────
// Rudrarsh Floor Data
// All SVG path transforms have been baked into the path coordinates.
// No `transform` attribute is needed — paths now use absolute coordinates,
// matching Ashoka's approach for perfect responsiveness at any screen size.
// ─────────────────────────────────────────────────────────────────────────────


const typicalFloorUnits = [
  {
    id: "S01",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/5.png",
    path: "M135.324 380.95H-19.05V476.42H11.581V524.127H33.667V688.191H212.226V684.851H287.312V555.399H230.855V416.255H135.324V380.95Z",
    details: { number: "05", type: "Kitchen + Utility Space", sqft: "1275", balconySqft: "0", balcony: true, rooms: 2, washrooms: 2, floor: "Wing A - Second Floor" },
  },
  {
    id: "S02",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/8.png",
    path: "M892.932 296.868V191.353H805.849V160.9H694.332V229.142H645.9V395.969H713.759V441.032H685.661V487.155V641.649H789.91V613.413H865.804V398.439H904.447V296.868H892.932Z",
    details: { number: "08", type: "Kitchen + Utility Space", sqft: "1880", balconySqft: "100", balcony: true, rooms: 3, washrooms: 3, floor: "Wing B - Second Floor" },
  },
  {
    id: "S03",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/4.png",
    path: "M647.563 700.502V470.977L297.975 471.687V689.845H398.185V657.873H484.153V700.502H647.563Z",
    details: { number: "04", type: "Kitchen + Utility Space", sqft: "1275", balconySqft: "0", balcony: true, rooms: 2, washrooms: 2, floor: "Wing A - Second Floor" },
  },
  {
    id: "S04",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/3.png",
    path: "M921.535 280.975H736.811V440.832H652.975V716.496H754.573V626.265H921.535V280.975Z",
    details: { number: "03", type: "Kitchen + Utility Space", sqft: "1510", balconySqft: "0", balcony: true, rooms: 3, washrooms: 2, floor: "Wing A - Second Floor" },
  },
  {
    id: "S05",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/6.png",
    path: "M174.038 284.254V181.384H91.742V178.066V140.9H-83.467V203.949H-165.1V359.913H91.742V284.254H174.038Z",
    details: { number: "06", type: "Kitchen + Utility Space", sqft: "1225", balconySqft: "0", balcony: true, rooms: 2, washrooms: 2, floor: "Wing B - Second Floor" },
  },
  {
    id: "S06",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/10.png",
    path: "M-165 440.9V667.25H-70.329V643.02H10.058V658.372H86.386V655.867H157.969V616.738H204.725V620.121H254.51V440.9H-165Z",
    details: { number: "10", type: "Kitchen + Utility Space", sqft: "1675", balconySqft: "0", balcony: true, rooms: 3, washrooms: 3, floor: "Wing B - Second Floor" },
  },
  {
    id: "S07",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/9.png",
    path: "M260.9 442.9V667.257H353.829V644.68H434.064V659.294H507.826V654.647H581.984V619.11H627.276V621.457H681.072V442.9H435.474V453.52H353.829V509.942H306.037V442.9H260.9Z",
    details: { number: "09", type: "Kitchen + Utility Space", sqft: "1650", balconySqft: "0", balcony: true, rooms: 3, washrooms: 3, floor: "Wing B - Second Floor" },
  },
  {
    id: "S08",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/7.png",
    path: "M305.9 286.2V130.9H388.859V137.537H563.404V176.693H645.7V292.836H563.404V354.559H472.482H388.859V286.2H305.9Z",
    details: { number: "07", type: "Kitchen + Utility Space", sqft: "1249", balconySqft: "50", balcony: true, rooms: 2, washrooms: 2, floor: "Wing B - Second Floor" },
  },
  {
    id: "S09",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/2.png",
    path: "M235.975 142.185V313.579L512.604 312.515V212.461H623.387V116.404H511.321V73.975H412.478V76.918H324.51V142.185H235.975Z",
    details: { number: "02", type: "Kitchen + Utility Space", sqft: "1225", balconySqft: "0", rooms: 2, washrooms: 2, floor: "Wing A - Second Floor" },
  },
  {
    id: "S10",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/1.png",
    path: "M-130.11 228.908V375.012L186.007 373.978L186.785 239.754H230.04V68.656H24.819V35.975H-67.459V71.648H-165.624L-167.016 228.908H-130.11Z",
    details: { number: "01", type: "Kitchen + Utility Space", sqft: "1910", balconySqft: "0", rooms: 3, washrooms: 3, floor: "Wing A - Second Floor" },
  },
];

export const floorData = [
{
  title: "Ground Floor",
  // Added preserveAspectRatio to stretch horizontally while keeping height perfect
  preserveAspectRatio: "none",
  // Tune this viewBox to perfect your alignment!
  // - To drag the left edge: Change the 1st number (38). Increase it to drag left, decrease to drag right.
  // - To drag the right edge: Change the 3rd number (680). Decrease it to stretch further right, increase to shrink.
  viewBox: "6 215 740 351",
  planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newground/floor.png",
  pdfPath: "/downloadFloorPlan/14th floor.pdf",
  features: ["3 BHKs", "2 BHKS"],
  units: [
    {
      id: "G-parking",
      unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newground/parking.png",
      transform: "translate(368.39, 0) scale(1.038, 1) translate(-378.39, 0)",
      path: "M378.39 275.41V310.2L547.99 311.6V316.33H633.05V281.42H590.73V280.53H547.99V276.36L378.39 275.41ZM429.41 352.61H369.76V387.72H429.41V352.61ZM436.56 352.61V387.72H453.76V352.61H436.56ZM482.28 349.81V385.54H506.91V423.61L550.83 424.37V437.53H544.98V442.99H539.9H507.88L365.47 444.48V410.97L305.41 411.96V481.46H365.47V476.99H371.31H539.9V471.55H544.98H580.12V469.43H599.48V435.26H607.12V383.06H612.47V365.35H583.94V357.89H564.83V354.16H496.55V349.81H482.28Z",
      details: { number: "Ample Upper Ground Floor Parking Space", floor: "Upper Ground Floor" },
    },
    {
      id: "G-play",
      unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newground/children.png",
      path: "M670.79 368.53L680.54 317.58C677.94 322.74 674.82 324.35 669.59 321.62C663.67 325.69 662.09 326.33 657.21 327.81H640.19C636.77 332.6 636.94 333.08 636.73 333.33L642.05 346.63H633.27C634.68 351.56 634.89 354.24 634.87 358.96L627.15 448.36C622.82 450.02 620.59 451.59 617.84 458.09C615.99 468.21 617.69 472.54 625.55 477.88L647.23 481.45V487.13L661.61 480.48L663.33 451.92H659.88L662.4 409.58L670.79 368.53Z",
      details: { number: "Children's Play Area", floor: "Upper Ground Floor" },
    },
    {
      id: "G-meditation",
      unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newground/meditation.png",
      transform: "translate(643.37, -1) scale(1.2, 1) translate(-641.37, 0)",
      path: "M647.32 311.57H677.24V299.67C676.6 295.21 676.02 293.84 672.93 293.38H641.37V305.21C641.95 310.11 643.62 311.01 647.32 311.57Z",
      details: { number: "Outdoor Meditation Deck", floor: "Upper Ground Floor" },
    },
    {
      id: "G-badminton",
      unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newground/badminton.png",
      transform: "translate(472.79, 0) scale(1.198 1) translate(-490.79, 0)",
      path: "M557.27 521.4V484.14H490.79V525.33H557.27V521.4Z",
      details: { number: "Outdoor Badminton Court", floor: "Upper Ground Floor" },
    },
    {
      id: "G-theatre",
      unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newground/theatre.png",
      transform: "translate(-4, 2)",
      path: "M263.62 408.58V468.23H300.81V408.58H263.62Z",
      details: { number: "Air Conditioned Mini Theatre", floor: "Upper Ground Floor" },
    },
    {
      id: "G-laundry",
      unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newground/laundry.png",
      transform: "translate(-2, 0)",
      path: "M261.95 422.98H242.02V468.41H261.95V422.98Z",
      details: { number: "Laundry Room", floor: "Upper Ground Floor" },
    },
    {
      id: "G-kitchen",
      unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newground/24x7.png",
      transform: " scale(0.999) translate(2,1) ",
      path: "M154.03 457.92H236.31V417.64H176.62V365.81H151.57V325.78H108.1V331.18L116.45 361.39H128.48V395.53H141.25V417.64H147.89V428.94H154.03V457.92Z",
      details: { number: "24X7 Cloud Kitchen & Dining Space", floor: "Upper Ground Floor" },
    },
    {
      id: "G-gathering",
      unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newground/indoorFunction.png",
      path: "M180.85 333.01V382.61H283.38V358.76H296.78V335.65H224.77V333.01H180.85Z",
      details: { number: "Indoor Function/ Gathering Area", floor: "Upper Ground Floor" },
    },
  ],
},
  {
    title: "First Floor",
    viewBox: "-165 82 1060 592",
    viewBoxWingA: "-168 82 1096 602",
    viewBoxWingB: "-155 125 1050 520",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/floor.png",
    planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/floor.png",
    planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-b/floor.png",
    pdfPath: "/downloadFloorPlan/first floor plan.pdf",
    features: [
      "3 BHKs",
      "2 BHKs",
      "Indoor Games & Gymnasium Security",
      "Treatment Rooms",
      "Health Club",
      "Multipurpose Area",
      "Jacuzzi & Sauna Rooms",
    ],
    units: [
      {
        id: "F1-A-1",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/health.png",
        path: "M13.953 275.335V92.85H-154.15V109.802L-122.201 231.958H-78.454V275.335H13.953Z",
        details: { number: "Health Club", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-A-2",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/yoga.png",
        path: "M124.223 378.9H-17.1V469.715H10.916V517.124H33.067V631.944H272.178V520.113H245.612L246.67 473.741H213.649V401.703H153.159V418.654H124.223V378.9Z",
        details: { number: "Yoga / Meditation Zumba / Dance Floor", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-A-3",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/treatment.png",
        path: "M295.597 125.85H135.85V215.8H295.597V125.85Z",
        details: { number: "Treatment Room", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-A-4",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/indoorGames.png",
        path: "M609.949 660.973V416.9H463.424V477.939L289.9 477.939V638.871L381.231 638.871V660.973H609.949Z",
        details: { number: "Indoor Games Arena", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-A-5",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/gym.png",
        path: "M871.276 416.9H625.9V664.078H871.276V416.9Z",
        details: { number: "Air Conditioned Gymnasium", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-A-6",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/jacuzzi.png",
        path: "M434.46 140.85H315.85V222.935H434.46V140.85Z",
        details: { number: "Heated Jacuzzi", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-A-7",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/saunas.png",
        path: "M440.9 132.9V220.264H583.368V132.9H440.9Z",
        details: { number: "Timber Saunas", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-B-06",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-b/6.png",
        path: "M181.453 270.143V172.475H17.436V135.85H-62.184V194.769H-139.15V342.332H102.894V270.143H181.453Z",
        details: { number: "06", balcony: true, type: "Kitchen + Utility Space", sqft: "1155", rooms: 2, washrooms: 2, floor: "Wing B - First Floor" },
      },
      {
        id: "F1-B-07",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-b/7.png",
        path: "M641.506 279.322V168.588L472.433 167.508V158.865H395.189H316.865V274.461H395.189V341.982H562.101V279.322H641.506Z",
        details: { number: "07", balcony: true, type: "Kitchen + Utility Space", sqft: "1075", rooms: 2, washrooms: 2, floor: "Wing B - First Floor" },
      },
      {
        id: "F1-B-08",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-b/8.png",
        path: "M684.577 428.769V585.319H782.901V550.8H858.91V286.862H885.408V183.657H802.774V165.875H692.248V218.175H645.875V384.139H711.773V428.769H684.577Z",
        details: { number: "08", balcony: true, sqft: "1655", rooms: 3, washrooms: 3, floor: "Wing B - First Floor" },
      },
      {
        id: "F1-B-09",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-b/9.png",
        path: "M363.898 426.875H273.437L272.878 634.817H363.879V622.744H443.77V618.526V597.183H628.403V600.634H680.818V426.875H442.581V438.896H363.898V426.875Z",
        details: { number: "09", balcony: true, type: "Kitchen + Utility Space", sqft: "1535", rooms: 3, washrooms: 3, floor: "Wing B - First Floor" },
      },
      {
        id: "F1-B-10",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-b/10.png",
        path: "M172.648 425.875H-141.921L-144.114 604.387H-51.476V621.917H26.242V635.317H99.277V633.215H170.739V597.485H212.007V600.182H264.271V425.875H172.648Z",
        details: { number: "10", balcony: true, type: "Kitchen + Utility Space", sqft: "1625", rooms: 3, washrooms: 3, floor: "Wing B - First Floor" },
      },
    ],
  },
  { title: "Second Floor",    viewBox: "-173 45 1099 691", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Third Floor",     viewBox: "-173 45 1099 691", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Fourth Floor",    viewBox: "-173 45 1099 691", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Fifth Floor",     viewBox: "-173 45 1099 691", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Sixth Floor",     viewBox: "-173 45 1099 691", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Seventh Floor",   viewBox: "-173 45 1099 691", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Eighth Floor",    viewBox: "-173 45 1099 691", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Ninth Floor",     viewBox: "-173 45 1099 691", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Tenth Floor",     viewBox: "-173 45 1099 691", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Eleventh Floor",  viewBox: "-173 45 1099 691", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Twelfth Floor",   viewBox: "-173 45 1099 691", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Thirteenth Floor",viewBox: "-173 45 1099 691", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { 
    title: "Fourteenth Floor",
    viewBox: "-175 45 1106 711",
    viewBoxWingA: "-180 40 1105 711",
    viewBoxWingB: "-175 95 1098 590",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/floor.png",
    planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-a/floor.png",
    planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-b/floor.png",
    pdfPath: "/downloadFloorPlan/14th floor.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: [
      {
        id: "1301",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-b/c8.png",
        path: "M-164.1 425.9V648.832H-70.826V625.819H8.539V675.81H88.507V673.917H253.419H349.208V625.155H428.966V425.9H-164.1Z",
        details: { number: "C8", balcony: true, type: "Kitchen + Utility Space", sqft: "2800", rooms: 3, washrooms: 3, floor: "Wing B - Fourteenth Floor" },
      },
      {
        id: "1302",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-b/c7.png",
        path: "M796.538 148.9H684.462V213.348H637.002V383.534H704.59V429.588H430.9V646.739H505.75V644.307H579.207V606.843H674.701V630.35H779.009V600.599H854.933V383.534H913.34V284.607H882.259V178.122H796.538V148.9Z",
        details: { number: "C7", balcony: true, type: "Kitchen + Utility Space", sqft: "2700", rooms: 3, washrooms: 3, floor: "Wing B - Fourteenth Floor" },
      },
      {
        id: "1303",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-b/d3.png",
        path: "M151.323 266.49H176.649V138.709H2.246V105.9H-59.918V126.621H-80.639V116.261H-164.1V342.469H151.323V266.49Z",
        details: { number: "D3 - Floor 2", balcony: true, type: "Kitchen + Utility Space", sqft: "2945", rooms: 1, washrooms: 1, floor: "Wing B - Fourteenth Floor" },
      },
      {
        id: "1304",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-b/d4.png",
        path: "M384.936 343.834H556.462V327.904H640.47V161.606H554.482V123.271H467.821V115.9H300.9V275.338H384.936V343.834Z",
        details: { number: "D4 - Floor 2", balcony: true, type: "Kitchen + Utility Space", sqft: "2705", rooms: 1, washrooms: 2, floor: "Wing B - Fourteenth Floor" },
      },
      {
        id: "1306",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-a/c6.png",
        path: "M-22.942 465.148H229.664L231.186 309.345H182.643V234.638H224.645V68.01H133.412V45.288H23.933V34.96H-67.299V68.354H-164.04V221.9H-126.858L-129.628 369.562H-79.001V367.212H-22.942V465.148Z",
        details: { number: "C6", balcony: true, type: "Kitchen + Utility Space", sqft: "3265", rooms: 1, washrooms: 2, floor: "Wing A - Fourteenth Floor" },
      },
      {
        id: "1307",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-a/d1.png",
        path: "M613.809 209.025V112.696V107.962H411.341V55.95H346.351V77.893H324.2V67.328H235.95V305.353H561.604V209.025H613.809Z",
        details: { number: "D2 - Floor 2", type: "Kitchen + Utility Space", balcony: true, sqft: "2535", rooms: 3, washrooms: 4, floor: "Wing A - Fourteenth Floor" },
      },
      {
        id: "1308",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-a/c9.png",
        path: "M656.028 701.115V470.66L544.952 470.074V390.99H489.162V470.074H402.856V500.626H375.542V470.074H300.706V519.709H271.35V523.436H236.754V470.074H10.99V521.677H32.101V689.388H139.06V718.201H404.464V725.157H577.452V701.115H656.028Z",
        details: { number: "C9", type: "Kitchen + Utility Space", sqft: "2965", rooms: 1, washrooms: 1, floor: "Wing A - Fourteenth Floor" },
      },
      {
        id: "1309",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-a/d2.png",
        path: "M920.945 280.986L737.024 283.088V399.408H699.39V445.263H650.975V718.495H751.933V629.532H920.945V280.986Z",
        details: { number: "D1 - Floor 2", type: "Kitchen + Utility Space", sqft: "2450", balcony: true, rooms: 3, washrooms: 3, floor: "Wing A - Fourteenth Floor" },
      },
    ],
  },
  {
    title: "Terrace Floor",
    viewBox: "-220 210 1205 370",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newterrace/lower/floor.png",
    upperPlanImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newterrace/upper/floor.png",
    lowerPlanImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newterrace/lower/floor.png",
    pdfPath: "/downloadFloorPlan/lower terrace.pdf",
    features: ["Private Terrace", "Rooftop Swimming Pool"],
    units: [
      {
        id: "T-lower-pool",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newterrace/lower/pool.png",
        path: "M938.517 310.8H840.8V534.07H938.517V310.8Z",
        details: { number: "Rooftop Infinity Swimming Pool", terraceType: "lower" },
      },
      {
        id: "T-upper-pool",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newterrace/upper/pool.png",
        path: "M653.51 439.51V554.2H699.689V542.088H842.39V537.925H946.862V299.459H842.012V287.725H819.679V260.85H622.85V352.073H672.436V439.51H653.51Z",
        details: { number: "Rooftop Infinity Swimming Pool", terraceType: "upper" },
      },
    ],
  },
];

export const HERO_MARKERS = [
  {
    label: "Leisure Areas",
    cx: 181.227,
    cy: 665.227,
    markerElements: (
      <>
        <line x1={182.227} y1={696.035} x2={182.227} y2={753.535} stroke="white" strokeWidth="2" />
        <circle cx={181.227} cy={665.227} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={181.227} cy={665.227} r="30.2266" stroke="white" strokeWidth="2" fill="none" />
        <path
          d="M187.298 653.026C188.778 652.236 190.567 652.296 192.005 653.16L192.757 653.611L195.629 655.336C196.934 655.954 197.539 657.475 197.015 658.82C196.594 659.901 195.559 660.572 194.452 660.572C194.183 660.572 193.909 660.533 193.639 660.449L190.513 659.48H190.512C187.932 660.414 189.361 666.021 189.408 666.224C189.408 666.226 189.409 666.227 189.409 666.228L191.447 674.083L192.533 678.273L187.899 679.054C187.381 673.985 183.098 670.03 177.892 670.03C172.686 670.03 168.403 673.985 167.885 679.054L163.25 678.273L164.337 674.083L166.375 664.819C166.994 662.434 169.354 660.928 171.775 661.386C173.796 661.769 175.844 661.96 177.892 661.96C178.029 661.96 178.166 661.959 178.304 661.957C178.347 661.956 178.39 661.956 178.433 661.955C179.868 661.932 181.303 661.814 182.727 661.602M169.265 674.913L164.337 674.083M191.447 674.083L186.519 674.913M182.727 661.602C182.727 656.97 185.172 654.159 187.298 653.026C188.778 652.236 190.568 652.296 192.005 653.16L192.757 653.611L195.2 650.149L194.181 649.537C191.477 647.912 188.077 647.82 185.31 649.296C183.292 650.372 181.681 651.976 180.52 654.066C179.703 655.538 179.132 657.231 178.81 659.127C178.81 659.127 178.586 660.595 178.433 661.955M163.251 660.617V659.315C163.251 658.148 164.197 657.202 165.364 657.202C165.947 657.202 166.475 657.439 166.858 657.821C167.24 658.204 167.477 658.732 167.477 659.315V662.805M177.892 677.964V670.03M183.673 682.203H172.111V680.803C172.111 679.235 173.382 677.964 174.95 677.964H180.834C182.402 677.964 183.673 679.235 183.673 680.803V682.203Z"
          stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
      </>
    ),
  },
  {
    label: "Scenic Garden",
    cx: 475.227,
    cy: 665.227,
    markerElements: (
      <>
        <line x1={476.227} y1={696.035} x2={476.227} y2={753.535} stroke="white" strokeWidth="2" />
        <circle cx={475.227} cy={665.227} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={475.227} cy={665.227} r="30.2266" stroke="white" strokeWidth="2" fill="none" />
        <path
          d="M475.41 657.399V681.387M475.091 665.843L472.34 663.092M475.922 669.297L479.408 665.811M475.41 650.555C471.98 650.555 469.174 653.361 469.174 656.792V657.055C466.536 656.249 463.828 658.214 463.828 661.011C463.828 662.785 464.945 664.297 466.513 664.885C465.126 665.953 464.232 667.63 464.232 669.517C464.232 672.743 466.847 675.359 470.073 675.359C471.926 675.359 473.576 674.496 474.646 673.152C475.155 673.215 475.666 673.215 476.174 673.152C477.245 674.496 478.895 675.359 480.747 675.359C483.974 675.359 486.589 672.743 486.589 669.517C486.589 667.63 485.695 665.953 484.307 664.885C485.876 664.297 486.993 662.785 486.993 661.011C486.993 658.214 484.285 656.249 481.647 657.055V656.792C481.647 653.361 478.841 650.555 475.41 650.555Z"
          stroke="white" strokeWidth="2" strokeMiterlimit="22.926" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
      </>
    ),
  },
  {
    label: "Badminton Court ",
    cx: 846.227,
    cy: 665.227,
    markerElements: (
      <>
        <line x1={847.227} y1={696.035} x2={847.227} y2={753.535} stroke="white" strokeWidth="2" />
        <circle cx={846.227} cy={665.227} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={846.227} cy={665.227} r="30.2266" stroke="white" strokeWidth="2" fill="none" />
        <path
          d="M843.548 664.065L846.422 658.296M850.976 670.428L858.215 666.49C858.74 666.19 859.213 665.778 859.597 665.261C861.09 663.251 860.671 660.413 858.662 658.92C857.575 658.113 856.246 657.865 855.018 658.125C854.913 656.874 854.291 655.673 853.205 654.866C852.118 654.059 850.789 653.811 849.561 654.071C849.456 652.82 848.834 651.619 847.748 650.812C845.738 649.319 842.9 649.738 841.407 651.747C841.023 652.265 840.765 652.836 840.629 653.426L838.949 661.494M851.879 662.35L847.186 666.768M837.259 676.331C834.245 674.092 833.617 669.833 835.856 666.82C836.602 665.815 838.022 665.606 839.026 666.352L846.302 671.757C847.307 672.503 847.516 673.923 846.77 674.928C844.531 677.941 840.273 678.57 837.259 676.331Z"
          stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
      </>
    ),
  },
];

export const FLOOR_PATHS_VIEWBOX = "0 0 1728 848";
export const FLOOR_PATHS = [
  {
    id: 0,
    d: "M218.444 705.112V750.984H598.121V741.557H698.505V765H737.953V688.973H758.545V681.328L625.148 676.785L375.884 688.124V691.521L203.001 699.508L203 705.112H218.444Z",
  },
  { id: 1, wing: "A", transform: "translate(410, 640) scale(0.86)", d: "M0 21.75V28.5V56.5L253.5 46L362.25 49L421.5 50.5V19.75H432V16.75H425.5V13L387.5 11.75V8L253.5 0L179.972 5V7.09464L120 9.25V13.875H89L49.875 14.625V18.875L0 21.75Z" },
  { id: 1, wing: "B", transform: "translate(218, 664) scale(0.85)", d: "M227.895 28.5029V0H177.713L144.657 1.92834L114.63 5.30288L74.7475 6.30342L42.1508 9.11348L5.72205e-06 11.6425L0 42.7148L184.059 35.247V31.0319L227.895 28.5029Z" },
  { id: 2, wing: "A", transform: "translate(410, 597) scale(0.86)", d: "M0 29.625V39.125L0.75 72.25L40.875 69.875L50.375 69.25V65.125L121.125 64.375V60.125L181.375 57.375V55.625L254.625 50.875L363.625 56.625L388.375 57.875V61.875L425.875 63.375V48.125H421.375V26.125H435.375V22.125H425.875V15.75H413.5H388.375L389.25 11.75L255.25 0L181.375 7.875V10.25L121.125 14.375V18.25L90.25 16.625L50.375 20.625V26.5H32L0 29.625Z" },
  { id: 2, wing: "B", transform: "translate(218, 628) scale(0.85)", d: "M0 17.25V53.9303L33.125 51.75L52.7907 49.875L74.75 48.3487L115.034 47.503L144.5 44.1203L178.25 41.75H226.875V0H178.25L144.5 3.375L113.5 9.875L96.875 8.75L74.75 9.875L39.5 14.375L33.125 13.75L0 17.25Z" },
  { id: 3, wing: "A", transform: "translate(410, 553) scale(0.86)", d: "M0 38.5V50.75V80.625L31.875 77.625H41.25H50.375V71.625L90.375 67.75L121.125 69.498V65.75L181.375 61.25V59L255.375 51.125L363.75 60.5L388.375 62.625V66.998H425.875V53.248H421.375V32.625L435.375 33.125V30.875H426.375V27.248H413.5V20.873H389.25V17.5L402.875 18.125V12.375L287.75 2.375H281.375L255.375 0L181.375 10V12.5L121.125 19.498V23.373H90.375L50.375 27.375V31.623H41.25V34.748L0 38.5Z" },
  { id: 3, wing: "B", transform: "translate(218, 596) scale(0.85)", d: "M0 23V56.625L33.125 53.125L40.125 53.75L74.75 49.125L96.125 48.125L114.125 49.125L144.5 42.75L178.25 39.375H226.875V21.5V0H178.25L144.5 4.125L114.125 10.375L96.125 9.5L74.75 12L41 17.125V19.75L33.125 19L0 23Z" },
  { id: 4, wing: "A", transform: "translate(410, 510) scale(0.86)", d: "M0 49.125V66.625V90.5312L41.25 86.625V83.625H50.375V79.375L89.875 75.625L121.125 75V71.5L181.375 64.5V62L255.375 52L363.75 60.5L389.25 63L402.875 64.5V69.75H389.25V73.25H413.5V78.75H425.875V63H421.375V53.248V36.75H425.875V34.125H413.5V22.625L402.875 22V12.375L288 0L281.375 2.375L255.375 3.875L181.375 15.375V19.75L121.125 27.625V31.125L89.875 30.25L50.375 36.125V38.25L41.25 38.75V42.375L0 49.125Z" },
  { id: 4, wing: "B", transform: "translate(218, 564) scale(0.85)", d: "M0 27.75V61.125L33 57.125L40.9375 57.8125V55.25L73.75 50.1875L95.9375 47.625L114.188 48.4375L144.625 42.25L178.25 38.0938L226.875 38.25V25.9062V2L178.25 0L144.657 4.5L113.5 10.25H95.9375L74.375 13.75L40.9375 19.125V23H33L0 27.75Z" },
  { id: 5, wing: "A", transform: "translate(410, 467) scale(0.86)", d: "M0 57.5V76.625V97.125L41.25 90.5V86.75L50.375 86.25V84.25L89.7188 78.25L121.125 79.125V75.5625L181.375 67.6875V63.375L255.375 51.8125L281.375 50.5L288 48L402.875 60.375V70L413.5 70.5625V75.25V82.0625H425.875V67.375H421.375V63.248V46.75H425.875L427.625 44.125H413.5V32.625H399.875V25.375L288 10L281.375 11.75L255.375 0L181.375 15V19.5L121.125 29.25V33.75H90.875L50.375 41.5V46H41.25V47.75L0 57.5Z" },
  { id: 5, wing: "B", transform: "translate(218, 530) scale(0.85)", d: "M0 27.75V61.125L33 57.125L40.9375 57.8125V55.25L73.75 50.1875L95.9375 47.625L114.188 48.4375L144.625 42.25L178.25 38.0938L226.875 38.25V25.9062V2L178.25 0L144.657 4.5L113.5 10.25H95.9375L74.375 13.75L40.9375 19.125V23H33L0 27.75Z" },
  { id: 6, wing: "A", transform: "translate(410, 420) scale(0.86)", d: "M0 67.75V88.375V110.938L41.25 101V99.3125H50.375V94.875L90.8125 87.1875L121.125 86.875V82.625L181.375 72.75V68.25L255.75 53.125L281.625 65.125L288 63.125L399.875 78.625V85.75H413.5V93.375V97.375H426.625V77.25H421.375V51.125H425.875L427.625 48.5H413.5V37H399.875V29.75L288 14.375L281.375 16.125L255.75 0L181.375 18.125V20.875L121.125 34.875V41.75H89.875L41.25 52.75V56.75L0 67.75Z" },
  { id: 6, wing: "B", transform: "translate(218, 496) scale(0.85)", d: "M0 40V74L32.75 68.375H40.9375V64.75L74.25 58.125L95.875 52.5L114.188 56.25L144.625 46.875L178.25 42.5L226.875 44.4375V25.3125V2.75L178.25 0L145.375 6.875V12.5L114.188 20.5L96.5 18.375L74.25 22.375L40.9375 29.25V32.125H32.75L0 40Z" },
  { id: 7, wing: "A", transform: "translate(412, 380) scale(0.86)", d: "M0 73.25V101.125V116.062L41.25 105.125V101.125L89.75 90.125H121.125V83.1875L181.375 69.3125V66.375L255.688 48.375L281.5 64.5625L288.062 62.6875L399.875 78.125V85.5H413.5V96.75H426.625V83.625H421.375V63.4375L430.812 59.9375V57.75L426.625 54.875L413.5 52.25V47.625L399.875 46.5L389.125 45.25V33L288.062 15.25L281.5 17.25L255.688 0L181.375 20.75L121.125 34.5V44.5L89.75 41.75L41.25 54.5V63.125L0 73.25Z" },
  { id: 7, wing: "B", transform: "translate(218, 466) scale(0.85)", d: "M0 40V74L32.75 68.375H40.9375V64.75L74.25 58.125L95.875 52.5L114.188 56.25L144.625 46.875L178.25 42.5L226.875 44.4375V25.3125V2.75L178.25 0L145.375 6.875V12.5L114.188 20.5L96.5 18.375L74.25 22.375L40.9375 29.25V32.125H32.75L0 40Z" },
  { id: 8, wing: "A", transform: "translate(410, 340) scale(0.86)", d: "M0 83.125V111.125V124.125L41.25 114.25V105.5L89.75 92.625L121.125 95.5V85.25L181.375 71.5L255.5 50.75L281.5 68.125L288.062 66.125L389.125 83.875V96.375L413.5 98.625V102.875L426.625 105.5V94.5H421.375V72.375L434.75 69.75V65.75L421.375 62.125L413.5 60.875V50.5L399.875 49.375L389.125 48.125V34.875L288.062 17.125L281.5 19.125L254.875 0L181.375 21.75V23.625L121.125 41V55.375L89.75 52.625L41.25 65.375V71.125L0 83.125Z" },
  { id: 8, wing: "B", transform: "translate(218, 433) scale(0.85)", d: "M0 44.375V79.25L32.75 71.625H40.9375V68.5L74.5625 61.5L96.4375 57.5625L114.312 59.6875L145.375 51.75V46.0625L178.312 39.25L226.875 42V21.3125V6.375L178.312 0L145.375 8.625V11.5L114.5 20.5L96.4375 18.75L74.5625 23L40.9375 31.625V37L32.75 36L0 44.375Z" },
  { id: 9, wing: "A", transform: "translate(410, 296) scale(0.86)", d: "M0 91.625V119.25V132.125L41.25 120.25V113.5L89.75 101.625L121.125 104.5V89.875L181.375 73.125V71.125L254.875 49.125L281.5 68.125L288.062 66.125L389.125 83.875V97.5L413.5 99.25V109.5L421.375 111.125L426.625 108.75V96.375L421.375 94.5V78.75L434.75 76V73.75L421.375 70.5L413.5 69.375V53.375H400.375L389.125 48.125V39.875L288.062 17.125L281.5 19.125L254.875 0L181.375 21.75V23.625L121.125 41V55.375L89.75 52.625L41.25 67.75V77.75L0 91.625Z" },
  { id: 9, wing: "B", transform: "translate(218, 400) scale(0.85)", d: "M0 49.125V83.375L32.75 75L40.9375 75.75V70.625L74.5625 62L96.4375 57.5625L114.312 59.6875L145.375 50.75V47.5L178.312 39.125L226.875 45.25V17.5V4.5L178.312 0L145.375 9.5V15.125L114.312 23.25L96.25 21.5L74.5625 27.375L40.9375 36V41.375L32.75 40.375L0 49.125Z" },
  { id: 10, wing: "A", transform: "translate(410, 258) scale(0.86)", d: "M0 91.625V119.25V132.125L41.25 120.25V113.5L89.75 101.625L121.125 104.5V89.875L181.375 73.125V71.125L254.875 49.125L281.5 68.125L288.062 66.125L389.125 83.875V97.5L413.5 99.25V109.5L421.375 111.125L426.625 108.75V96.375L421.375 94.5V78.75L434.75 76V73.75L421.375 70.5L413.5 69.375V53.375H400.375L389.125 48.125V39.875L288.062 17.125L281.5 19.125L254.875 0L181.375 21.75V23.625L121.125 41V55.375L89.75 52.625L41.25 67.75V77.75L0 91.625Z" },
  { id: 10, wing: "B", transform: "translate(218, 366) scale(0.85)", d: "M0 54V87.75L32.75 79.375L40.9375 80.25V75.125L74.5625 66.2673L96.875 60.375L114.312 62.125L145.375 54V48.5L178.125 38.875L226.875 43.25V15.5V2.625L178.125 0L144.657 10.5V15.7255L114.312 25.25L95 23.25L73.3125 29.125L40.9375 37.875V43.25H32.75L0 54Z" },
  { id: 11, wing: "A", transform: "translate(410, 212) scale(0.86)", d: "M0 105.75V133.375V142.875L41.25 128.875V118.75L89.75 104L121.125 106.5V92L181.375 74.75V72.875L254.875 51.25L281.5 70.375L288.062 68.125L389.125 90.875V99.25L400.375 104.375H413.5V120.375L421.375 121.625L426.625 122.875V105.25L421.375 104.375V88L434.75 84.5V80.5L421.375 76.125L413.5 73.75V67.5H400.375L389.125 62.25V44.5L288.062 21.375L281.5 23.375L254.875 0L181.375 23.375V37.75L121.125 55.125V69.5L89.75 66.75L41.25 81.875V91.875L0 105.75Z" },
  { id: 11, wing: "B", transform: "translate(218, 325) scale(0.85)", d: "M0 68.75V98.875L32.75 88H40.9375V82.625L74.375 73.625L95 68.125L114.312 69.875L144.657 60.5V55.375L178.125 44.875L226.875 47.25V19.875V4.75L205.25 0L178.125 5.875L144.657 16.25V22.5L114.312 31.75V36.5L95 34V38.8774H74.375L68.5 41.25V43.75L40.9375 53.375L32.75 55.625L0 68.75Z" },
  { id: 12, wing: "A", transform: "translate(412, 166) scale(0.865)", d: "M426 133.5L431 141.25L412.5 136.25V131.75L399.25 129.5L388.5 114.25V97.75L287.75 72.25L281.75 74L254.25 49.75L180.5 74V85L120.5 105.25V112.75H90L81.75 115.5V120.25L39.5 134.25V144.25L0 159.25V145.75V105.625L2.5 104.875H8.5V96.75L32.75 99.25L68 88.75V81.25L65.25 79.75V77L90 69.5L113 60.5L119.25 58.75H124.75L142.75 52.75V41.25L254.25 0L281.75 25.75H287.75L365.75 46.5L388.5 53V86.25L400.75 89.75L420.75 91L434.25 95.25V100.25L420.75 104.25V120.25H426V133.5Z" },
  { id: 12, wing: "B", transform: "translate(216, 288) scale(0.85)", d: "M230.75 3.5V17V51.25L207.5 46L181 51.25L148 62.5V68L117.5 77.75L118.75 81.75L98.25 79V84.5H77L72.25 86.75V89.5L31.5 103L3 114.375V128.5L0 127V79H3L24.75 73.25V65.5H49.25L60.5 62.5V55.5L72.25 51.25V47.25L78.25 44.5H90V39.25L94.5 37.5L118.75 40.75V21.5L143.25 23.5L182.75 7.75H187.75L207.5 0L230.75 3.5Z" },
  { id: 13, wing: "A", transform: "translate(412, 120) scale(0.86)", d: "M0 103V151.5V157.75L3.5 156.75L9 157.75V149L32 151.5L67.75 141.5V134L65.25 132V130L89.75 121.75L118.5 111.25H126.75L143.5 105.75V93.5L255 52.75L282 78H287.75L388.75 105.5V138.25L401.25 142.25L427.25 145L425.5 129.25H421.25V114.25L434.25 108.25L425.5 102.25V86.75L421.25 85.5V78L390 67.75L398 61.5V55.75L380 50.25V36L254.5 0L143.5 45.75V51.5L126.75 57.5L117 56L0 103Z" },
  { id: 13, wing: "B", transform: "translate(216, 250) scale(0.85)", d: "M0 101.13V123.38H3.25L25 117.63V110.88H49L60.25 107.13V101.13L72.25 95.8797V91.8797L78 89.3797H89.75V83.8797L93.25 82.3797L119.75 85.1297V66.1297L143.5 68.6297L182 52.1297H188.5L208.25 44.8797L230.5 48.1297V7.87972V1.62972L208.25 0L191 6.87972H182L117 30.6297V46.3797L93.25 43.3797L20 72.6297V87.1297L9.5 90.8797L3.25 98.8797L0 101.13Z" },
  { id: 14, wing: "A", transform: "translate(400, 68) scale(0.86)", d: "M413.75 49.75L263.5 0H257.75L137.5 51V56.5L0 115.75V125L18.5 130V135L3 141.375V151.625L10.1611 154.535V163.25H11L128.75 115.75L137.5 117.5L154.25 111.5V105.75L266 60L391.75 96V110.25L408.75 116V120.75L401.75 128L426.75 136.5V133.5L448.75 125.25V113.75L407 100.25L410 96V88.5L407 83.5L384.75 75.5L413.75 63.75V49.75Z" },
  { id: 14, wing: "B", transform: "translate(213, 212) scale(0.845)", d: "M211 44.25L233.5 45.5L234.517 12.3879V3.79947L232.661 2.43848L222.861 1.70605L200 0L12.75 80.0801V87.75L30.5 91V103.625L0 116V121.042H5.5V142.946H6.40332L12.75 135.25L23.25 130.75V116.711L96.25 87.75L120.5 90.25V75L185.5 50.75H194.5L211 44.25Z" },
  { id: 15, transform: "translate(214, 128) scale(0.845)", d: "M302.75 12.25L226 45V29.5L218.75 27V19.75L261.5 0L302.75 12.25Z M200.5 96.75L232 99.9072V86.25L225.25 83V73.75L240.125 67.125V62.25H235.5L233.25 64.75L176 90V96.75L184.75 99V102L147.25 95.5L33.5 145.75V168.25L200.5 96.75Z M0 201V212L30.25 200.722V188.5L0 201Z" },
];