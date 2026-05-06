

const typicalFloorUnits = [
  {
    id: "S01",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/5.png",
    path: "M81.7493 0.5H0.5V50.7476H16.6214V75.8564H28.2458V162.206H122.224V160.448H161.743V92.3152H132.029V19.0815H81.7493V0.5Z",
    transform: "translate(-20, 380) scale(1.9)",
    details: { number: "05", type: "Kitchen + Utility Space", sqft: "1275", balconySqft: "0", balcony: true, rooms: 2, washrooms: 2, floor: "Wing A - Second Floor" },
  },
  {
    id: "S02",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/8.png",
    path: "M137.74 76.0378V17.4183H89.3604V0.5H27.4068V38.412H0.5V131.094H38.1995V156.129H22.5894V181.753V267.583H80.5054V251.896H122.669V132.466H144.137V76.0378H137.74Z",
    transform: "translate(645, 160) scale(1.8)",
    details: { number: "08", type: "Kitchen + Utility Space", sqft: "1880", balconySqft: "100", balcony: true, rooms: 3, washrooms: 3, floor: "Wing B - Second Floor" },
  },
  {
    id: "S03",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/4.png",
    path: "M179.776 118.206V0.500977L0.5 0.865208V112.741H51.8899V96.3452H95.9759V118.206H179.776Z",
    transform: "translate(297, 470) scale(1.95)",
    details: { number: "04", type: "Kitchen + Utility Space", sqft: "1275", balconySqft: "0", balcony: true, rooms: 2, washrooms: 2, floor: "Wing A - Second Floor" },
  },
  {
    id: "S04",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/3.png",
    path: "M138.223 0.5H43.493V82.4778H0.5V223.844H52.6016V177.572H138.223V0.5Z",
    transform: "translate(652, 280) scale(1.95)",
    details: { number: "03", type: "Kitchen + Utility Space", sqft: "1510", balconySqft: "0", balcony: true, rooms: 3, washrooms: 2, floor: "Wing A - Second Floor" },
  },
  {
    id: "S05",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/6.png",
    path: "M188.91 80.1409V22.9912H143.19V21.1476V0.5H45.8514V35.5272H0.5V122.174H143.19V80.1409H188.91Z",
    transform: "translate(-166, 140) scale(1.8)",
    details: { number: "06", type: "Kitchen + Utility Space", sqft: "1225", balconySqft: "0", balcony: true, rooms: 2, washrooms: 2, floor: "Wing B - Second Floor" },
  },
  {
    id: "S06",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/10.png",
    path: "M0 0.5V126.25H52.5949V112.789H97.2546V121.318H139.659V119.926H179.427V98.1875H205.403V100.067H233.061V0.5H0Z",
    transform: "translate(-165, 440) scale(1.80)",
    details: { number: "10", type: "Kitchen + Utility Space", sqft: "1675", balconySqft: "0", balcony: true, rooms: 3, washrooms: 3, floor: "Wing B - Second Floor" },
  },
  {
    id: "S07",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/9.png",
    path: "M0.5 0.5V125.143H52.1273V112.6H96.7022V120.719H137.681V118.137H178.88V98.3944H204.042V99.6983H233.929V0.5H97.4856V6.40025H52.1273V37.7454H25.5761V0.5H0.5Z",
    transform: "translate(260, 442) scale(1.80)",
    details: { number: "09", type: "Kitchen + Utility Space", sqft: "1650", balconySqft: "0", balcony: true, rooms: 3, washrooms: 3, floor: "Wing B - Second Floor" },
  },
  {
    id: "S08",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/7.png",
    path: "M0.5 86.7776V0.5H46.5882V4.18708H143.558V25.9408H189.278V90.4647H143.558V124.755H93.0454H46.5882V86.7776H0.5Z",
    transform: "translate(305, 130) scale(1.80)",
    details: { number: "07", type: "Kitchen + Utility Space", sqft: "1249", balconySqft: "50", balcony: true, rooms: 2, washrooms: 2, floor: "Wing B - Second Floor" },
  },
  {
    id: "S09",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/2.png",
    path: "M0.5 35.4794V123.374L142.361 122.828V71.5187H199.173V22.2586H141.703V0.5H91.0146V2.0092H45.9028V35.4794H0.5Z",
    transform: "translate(235, 73) scale(1.95)",
    details: { number: "02", type: "Kitchen + Utility Space", sqft: "1225", balconySqft: "0", rooms: 2, washrooms: 2, floor: "Wing A - Second Floor" },
  },
  {
    id: "S10",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/1.png",
    path: "M19.4307 99.4401V174.365L181.542 173.835L181.941 105.002H204.123V17.2597H98.8814V0.5H51.5597V18.794H1.21839L0.504395 99.4401H19.4307Z",
    transform: "translate(-168, 35) scale(1.95)",
    details: { number: "01", type: "Kitchen + Utility Space", sqft: "1910", balconySqft: "0", rooms: 3, washrooms: 3, floor: "Wing A - Second Floor" },
  },
];

export const floorData = [
  {
    title: "Ground Floor",
    viewBox: "0 0 760 786",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newground/floor.png",
    pdfPath: "/downloadFloorPlan/14th floor.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: [
      {
        id: "G-parking",
        unitImage: "",
        path: "M60.1206 0.502441V28.9248L216.258 30.0645V33.9301H301.008V5.4045H258.84V4.68102H216.258V1.27035L60.1206 0.502441Z M101.806 63.5707H53.0691V92.2541H101.806V63.5707Z M107.644 63.5707V92.2541H122.366V63.5707H107.644Z M150.796 61.2862V90.4773H175.33V121.574L219.082 122.194V132.947H213.261V137.407H208.196H176.298L49.5695 138.624V111.251L0.5 112.062V168.836H49.5695V165.189H54.3383H208.196V160.745H213.261H248.269V159.013H267.56V131.091H275.175V88.4466H280.506V73.978H252.076V67.8859H233.038V64.8399H165.011V61.2862H150.796Z",
        transform: "translate(260, 230) scale(1.7)",
        details: { number: "Ample Upper Ground Floor Parking Space", floor: "Upper Ground Floor" },
      },
      {
        id: "G-play",
        unitImage: "",
        path: "M57.9905 45.0539L68.4497 0.261963C65.6565 4.80169 62.3139 6.21553 56.71 3.81122C50.3631 7.39246 48.67 7.95331 43.4438 9.25749H25.1891C21.5303 13.4633 21.7044 13.89 21.4811 14.1064L27.1857 25.8009H17.7731C19.2881 30.1369 19.504 32.4916 19.4844 36.6397L11.2128 115.221C6.57046 116.684 4.18589 118.063 1.22985 123.778C-0.749238 132.674 1.06884 136.481 9.50151 141.177L32.7476 144.314V149.306L48.15 143.459L50.004 118.358H46.2961L49.0057 81.1357L57.9905 45.0539Z",
        transform: "translate(744, 289) scale(1.58)",
        details: { number: "Children’s Play Area", floor: "Upper Ground Floor" },
      },
      {
        id: "G-meditation",
        unitImage: "",
        path: "M6.80447 16.2934H38.4752V5.9595C37.7954 2.09427 37.1862 0.898917 33.9066 0.5H0.5V10.769C1.12317 15.0278 2.87984 15.8065 6.80447 16.2934Z",
        transform: "translate(785, 255) scale(1.6)",
        details: { number: "Outdoor Meditation Deck", floor: "Upper Ground Floor" },
      },
      {
        id: "G-badminton",
        unitImage: "",
        path: "M75.5707 35.0028V0.5H0.5V38.6418H75.5707V35.0028Z",
        transform: "translate(530, 520) scale(1.5)",
        details: { number: "Outdoor Badminton Court", floor: "Upper Ground Floor" },
      },
      {
        id: "G-theatre",
        unitImage: "",
        path: "M0.5 0.5V52.28H32.7901V0.5H0.5Z",
        transform: "translate(202, 415) scale(1.6)",
        details: { number: "Air Conditioned Mini Theatre", floor: "Upper Ground Floor" },
      },
      {
        id: "G-laundry",
        unitImage: "",
        path: "M17.8047 0.5H0.5V39.9434H17.8047V0.5Z",
        transform: "translate(172, 435) scale(1.6)",
        details: { number: "Laundry Room", floor: "Upper Ground Floor" },
      },
      {
        id: "G-kitchen",
        unitImage: "",
        path: "M40.3709 115.209H111.797V80.2419H59.9864V35.2537H38.2387V0.5H0.5V5.19076L7.74932 31.4159H18.1967V61.0526H29.2837V80.2419H35.0405V90.0495H40.3709V115.209Z",
        transform: "translate(-14, 300) scale(1.6)",
        details: { number: "24X7 Cloud Kitchen & Dining Space", floor: "Upper Ground Floor" },
      },
      {
        id: "G-gathering",
        unitImage: "",
        path: "M0.5 0.5V41.0244H84.2646V21.5374H95.2124V2.6561H36.3846V0.5H0.5Z",
        transform: "translate(87, 310) scale(1.7)",
        details: { number: "Indoor Function/ Gathering Area", floor: "Upper Ground Floor" },
      },
    ],
  },
  {
    title: "First Floor",
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
        path: "M99.3844 107.844V0.5H0.5V10.4718L19.2938 82.3281H45.0269V107.844H99.3844Z",
        transform: "translate(-155, 92) scale(1.70)",
        details: { number: "Health Club", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-A-2",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/yoga.png",
        path: "M79.0126 0.5H0.5V50.9526H16.0642V77.2912H28.3707V141.08H161.21V78.9518H146.451L147.039 53.1894H128.694V13.1685H95.0885V22.5858H79.0126V0.5Z",
        transform: "translate(-18, 378) scale(1.80)",
        details: { number: "Yoga / Meditation Zumba / Dance Floor", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-A-3",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/treatment.png",
        path: "M94.4689 0.5H0.5V53.4118H94.4689V0.5Z",
        transform: "translate(135, 125) scale(1.70)",
        details: { number: "Treatment Room", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-A-4",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/indoorGames.png",
        path: "M178.305 136.096V0.5H96.902V34.4104L0.5 34.4104V123.817L51.2393 123.817V136.096H178.305Z",
        transform: "translate(289, 416) scale(1.80)",
        details: { number: "Indoor Games Arena", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-A-5",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/gym.png",
        path: "M136.82 0.5H0.5V137.821H136.82V0.5Z",
        transform: "translate(625, 416) scale(1.80)",
        details: { number: "Air Conditioned Gymnasium", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-A-6",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/jacuzzi.png",
        path: "M70.2703 0.5H0.5V48.7854H70.2703V0.5Z",
        transform: "translate(315, 140) scale(1.70)",
        details: { number: "Heated Jacuzzi", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-A-7",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-a/saunas.png",
        path: "M0.5 0.5V49.0354H79.6489V0.5H0.5Z",
        transform: "translate(440, 132) scale(1.80)",
        details: { number: "Timber Saunas", floor: "Wing A - First Floor" },
      },
      {
        id: "F1-B-06",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-b/6.png",
        path: "M189.09 79.4956V22.0443H92.6095V0.5H45.7742V35.1582H0.5V121.96H142.879V79.4956H189.09Z",
        transform: "translate(-140, 135) scale(1.70)",
        details: { number: "06", balcony: true, type: "Kitchen + Utility Space", sqft: "1155", rooms: 2, washrooms: 2, floor: "Wing B - First Floor" },
      },
      {
        id: "F1-B-07",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-b/7.png",
        path: "M188.154 70.1286V6.12024L90.4239 5.49578V0.5H45.7742H0.5V67.3185H45.7742V106.348H142.255V70.1286H188.154Z",
        transform: "translate(316, 158) scale(1.73)",
        details: { number: "07", balcony: true, type: "Kitchen + Utility Space", sqft: "1075", rooms: 2, washrooms: 2, floor: "Wing B - First Floor" },
      },
      {
        id: "F1-B-08",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-b/8.png",
        path: "M22.6154 150.725V240.182H78.8003V220.457H122.234V69.6352H137.376V10.6611H90.1568V0.5H26.9988V30.3855H0.5V125.222H38.1558V150.725H22.6154Z",
        transform: "translate(645, 165) scale(1.75)",
        details: { number: "08", balcony: true, sqft: "1655", rooms: 3, washrooms: 3, floor: "Wing B - First Floor" },
      },
      {
        id: "F1-B-09",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-b/9.png",
        path: "M52.5132 0.5H0.821363L0.501465 119.324H52.5023V112.425H98.154V110.015V97.8186H203.659V99.791H233.61V0.5H97.4751V7.36919H52.5132V0.5Z",
        transform: "translate(272, 426) scale(1.75)",
        details: { number: "09", balcony: true, type: "Kitchen + Utility Space", sqft: "1535", rooms: 3, washrooms: 3, floor: "Wing B - First Floor" },
      },
      {
        id: "F1-B-10",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor1/wing-b/10.png",
        path: "M181.513 0.5H1.75918L0.506104 102.507H53.4422V112.524H97.8525V120.181H139.587V118.98H180.422V98.5626H204.004V100.104H233.869V0.5H181.513Z",
        transform: "translate(-145, 425) scale(1.75)",
        details: { number: "10", balcony: true, type: "Kitchen + Utility Space", sqft: "1625", rooms: 3, washrooms: 3, floor: "Wing B - First Floor" },
      },
    ],
  },
  { title: "Second Floor", viewBox: "0 0 757 781", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Third Floor", viewBox: "0 0 757 781", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Fourth Floor", viewBox: "0 0 757 781", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Fifth Floor", viewBox: "0 0 757 781", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Sixth Floor", viewBox: "0 0 757 781", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Seventh Floor", viewBox: "0 0 757 781", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Eighth Floor", viewBox: "0 0 757 781", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Ninth Floor", viewBox: "0 0 757 781", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Tenth Floor", viewBox: "0 0 757 781", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Eleventh Floor", viewBox: "0 0 757 781", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Twelfth Floor", viewBox: "0 0 757 781", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  { title: "Thirteenth Floor", viewBox: "0 0 757 781", planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/floor.png", planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-a/floor.png", planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor2-12/wing-b/floor.png", pdfPath: "/downloadFloorPlan/typical layout.pdf", features: ["3 BHKs", "2 BHKs"], units: typicalFloorUnits },
  {
    title: "Fourteenth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/floor.png",
    planImageWingA: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-a/floor.png",
    planImageWingB: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-b/floor.png",
    pdfPath: "/downloadFloorPlan/14th floor.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: [
      {
        id: "1301",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-b/c8.png",
        path: "M0.5 0.5V124.351H52.319V111.566H96.4103V139.339H140.837V138.287H232.455H285.671V111.197H329.981V0.5H0.5Z",
        transform: "translate(-165, 425) scale(1.8)",
        details: { number: "C8", balcony: true, type: "Kitchen + Utility Space", sqft: "2800", rooms: 3, washrooms: 3, floor: "Wing B - Fourteenth Floor" },
      },
      {
        id: "1302",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-b/c7.png",
        path: "M203.632 0.5H141.368V36.3046H115.001V130.852H152.55V156.438H0.5V277.077H42.0833V275.726H82.8925V254.913H135.945V267.972H193.894V251.444H236.074V130.852H268.522V75.8926H251.255V16.7346H203.632V0.5Z",
        transform: "translate(430, 148) scale(1.8)",
        details: { number: "C7", balcony: true, type: "Kitchen + Utility Space", sqft: "2700", rooms: 3, washrooms: 3, floor: "Wing B - Fourteenth Floor" },
      },
      {
        id: "1303",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-b/d3.png",
        path: "M175.735 89.7164H189.805V18.727H92.9143V0.5H58.3789V12.0118H46.867V6.25591H0.5V131.927H175.735V89.7164Z",
        transform: "translate(-165, 105) scale(1.8)",
        details: { number: "D3 - Floor 2", balcony: true, type: "Kitchen + Utility Space", sqft: "2945", rooms: 1, washrooms: 1, floor: "Wing B - Fourteenth Floor" },
      },
      {
        id: "1304",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-b/d4.png",
        path: "M47.1868 127.13H142.479V118.28H189.15V25.8923H141.379V4.59488H93.234V0.5H0.5V89.0769H47.1868V127.13Z",
        transform: "translate(300, 115) scale(1.80)",
        details: { number: "D4 - Floor 2", balcony: true, type: "Kitchen + Utility Space", sqft: "2705", rooms: 1, washrooms: 2, floor: "Wing B - Fourteenth Floor" },
      },
      {
        id: "1306",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-a/c6.png",
        path: "M73.9886 224.556H205.554L206.347 143.409H181.064V104.499H202.94V17.7133H155.423V5.87894H98.4027V0.5H50.8858V17.8929H0.5V97.8645H19.8654L18.4229 174.772H44.7909V173.548H73.9886V224.556Z",
        transform: "translate(-165, 34) scale(1.92)",
        details: { number: "C6", balcony: true, type: "Kitchen + Utility Space", sqft: "3265", rooms: 1, washrooms: 2, floor: "Wing A - Fourteenth Floor" },
      },
      {
        id: "1307",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-a/d1.png",
        path: "M199.373 81.0656V30.3664V27.8746H92.8109V0.5H58.606V12.0488H46.9473V6.48833H0.5V131.765H171.897V81.0656H199.373Z",
        transform: "translate(235, 55) scale(1.9)",
        details: { number: "D2 - Floor 2", type: "Kitchen + Utility Space", balcony: true, sqft: "2535", rooms: 3, washrooms: 4, floor: "Wing A - Fourteenth Floor" },
      },
      {
        id: "1308",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-a/c9.png",
        path: "M326.277 157.129V40.7376L270.178 40.4413V0.5H242.001V40.4413H198.412V55.8717H184.617V40.4413H146.821V65.5096H131.995V67.3921H114.522V40.4413H0.5V66.5035H11.1619V151.206H65.1817V165.758H199.224V169.271H286.592V157.129H326.277Z",
        transform: "translate(10, 390) scale(1.98)",
        details: { number: "C9", type: "Kitchen + Utility Space", sqft: "2965", rooms: 1, washrooms: 1, floor: "Wing A - Fourteenth Floor" },
      },
      {
        id: "1309",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newfloor14/wing-a/d2.png",
        path: "M138.946 0.505859L44.6277 1.5835V61.2348H25.3284V84.7505H0.5V224.869H52.2734V179.247H138.946V0.505859Z",
        transform: "translate(650, 280) scale(1.95)",
        details: { number: "D1 - Floor 2", type: "Kitchen + Utility Space ", sqft: "2450", balcony: true, rooms: 3, washrooms: 3, floor: "Wing A - Fourteenth Floor" },
      },
    ],
  },
  {
    title: "Terrace Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newterrace/lower/floor.png",
    upperPlanImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newterrace/upper/floor.png",
    lowerPlanImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newterrace/lower/floor.png",
    pdfPath: "/downloadFloorPlan/lower terrace.pdf",
    features: ["Private Terrace", "Rooftop Swimming Pool"],
    units: [
      {
        id: "T-lower-pool",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newterrace/lower/pool.png",
        path: "M61.5729 0.5H0.5V140.044H61.5729V0.5Z",
        transform: "translate(840, 310) scale(1.6)",
        details: { number: "Rooftop Infinity Swimming Pool", terraceType: "lower" },
      },
      {
        id: "T-upper-pool",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/newterrace/upper/pool.png",
        path: "M18.5352 105.594V173.059H45.6994V165.934H129.641V163.485H191.095V23.211H129.419V16.3086H116.282V0.5H0.5V54.1604H29.6681V105.594H18.5352Z",
        transform: "translate(622, 260) scale(1.7)",
        details: { number: "Rooftop Infinity Swimming Pool", terraceType: "upper" },
      },
    ],
  },
];

export const HERO_MARKERS = [
  {
    label: "Leisure Areas", // Leftmost marker (cx: 181.227)
    cx: 181.227,
    cy: 665.227,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={182.227} y1={696.035} x2={182.227} y2={753.535} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={181.227} cy={665.227} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={181.227} cy={665.227} r="30.2266" stroke="white" strokeWidth="2" fill="none" />
        {/* Icon Path */}
        <path
          d="M187.298 653.026C188.778 652.236 190.567 652.296 192.005 653.16L192.757 653.611L195.629 655.336C196.934 655.954 197.539 657.475 197.015 658.82C196.594 659.901 195.559 660.572 194.452 660.572C194.183 660.572 193.909 660.533 193.639 660.449L190.513 659.48H190.512C187.932 660.414 189.361 666.021 189.408 666.224C189.408 666.226 189.409 666.227 189.409 666.228L191.447 674.083L192.533 678.273L187.899 679.054C187.381 673.985 183.098 670.03 177.892 670.03C172.686 670.03 168.403 673.985 167.885 679.054L163.25 678.273L164.337 674.083L166.375 664.819C166.994 662.434 169.354 660.928 171.775 661.386C173.796 661.769 175.844 661.96 177.892 661.96C178.029 661.96 178.166 661.959 178.304 661.957C178.347 661.956 178.39 661.956 178.433 661.955C179.868 661.932 181.303 661.814 182.727 661.602M169.265 674.913L164.337 674.083M191.447 674.083L186.519 674.913M182.727 661.602C182.727 656.97 185.172 654.159 187.298 653.026C188.778 652.236 190.568 652.296 192.005 653.16L192.757 653.611L195.2 650.149L194.181 649.537C191.477 647.912 188.077 647.82 185.31 649.296C183.292 650.372 181.681 651.976 180.52 654.066C179.703 655.538 179.132 657.231 178.81 659.127C178.81 659.127 178.586 660.595 178.433 661.955M163.251 660.617V659.315C163.251 658.148 164.197 657.202 165.364 657.202C165.947 657.202 166.475 657.439 166.858 657.821C167.24 658.204 167.477 658.732 167.477 659.315V662.805M177.892 677.964V670.03M183.673 682.203H172.111V680.803C172.111 679.235 173.382 677.964 174.95 677.964H180.834C182.402 677.964 183.673 679.235 183.673 680.803V682.203Z"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  },
  {
    label: "Scenic Garden", // Middle marker (cx: 475.227) - Uses the Tree/Garden icon
    cx: 475.227,
    cy: 665.227,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={476.227} y1={696.035} x2={476.227} y2={753.535} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={475.227} cy={665.227} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={475.227} cy={665.227} r="30.2266" stroke="white" strokeWidth="2" fill="none" />
        {/* Icon Path */}
        <path
          d="M475.41 657.399V681.387M475.091 665.843L472.34 663.092M475.922 669.297L479.408 665.811M475.41 650.555C471.98 650.555 469.174 653.361 469.174 656.792V657.055C466.536 656.249 463.828 658.214 463.828 661.011C463.828 662.785 464.945 664.297 466.513 664.885C465.126 665.953 464.232 667.63 464.232 669.517C464.232 672.743 466.847 675.359 470.073 675.359C471.926 675.359 473.576 674.496 474.646 673.152C475.155 673.215 475.666 673.215 476.174 673.152C477.245 674.496 478.895 675.359 480.747 675.359C483.974 675.359 486.589 672.743 486.589 669.517C486.589 667.63 485.695 665.953 484.307 664.885C485.876 664.297 486.993 662.785 486.993 661.011C486.993 658.214 484.285 656.249 481.647 657.055V656.792C481.647 653.361 478.841 650.555 475.41 650.555Z"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="22.926"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  },
  {
    label: "Badminton Court ", // Rightmost marker (cx: 846.227)
    cx: 846.227,
    cy: 665.227,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={847.227} y1={696.035} x2={847.227} y2={753.535} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={846.227} cy={665.227} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={846.227} cy={665.227} r="30.2266" stroke="white" strokeWidth="2" fill="none" />
        {/* Icon Path */}
        <path
          d="M843.548 664.065L846.422 658.296M850.976 670.428L858.215 666.49C858.74 666.19 859.213 665.778 859.597 665.261C861.09 663.251 860.671 660.413 858.662 658.92C857.575 658.113 856.246 657.865 855.018 658.125C854.913 656.874 854.291 655.673 853.205 654.866C852.118 654.059 850.789 653.811 849.561 654.071C849.456 652.82 848.834 651.619 847.748 650.812C845.738 649.319 842.9 649.738 841.407 651.747C841.023 652.265 840.765 652.836 840.629 653.426L838.949 661.494M851.879 662.35L847.186 666.768M837.259 676.331C834.245 674.092 833.617 669.833 835.856 666.82C836.602 665.815 838.022 665.606 839.026 666.352L846.302 671.757C847.307 672.503 847.516 673.923 846.77 674.928C844.531 677.941 840.273 678.57 837.259 676.331Z"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  },
];

export const FLOOR_PATHS_VIEWBOX = "0 0 1728 848";
export const FLOOR_PATHS = [
  {
    id: 0, // Ground Floor
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