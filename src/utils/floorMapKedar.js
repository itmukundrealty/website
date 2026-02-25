const typicalFloorUnits = [
   {
        id: "F01",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/0.png",
        path: "M264.5 158.75H210.75V0.5H275.25V22.75H366.5V220.5H264.5V158.75Z",
        details: { number: "F-01", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "F02",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/1.png",
        path: "M210.5 22.5V159H168.75V188H125V198.875H153.25V247.25H44V188H22.75V0.75H94V22.5H210.5Z",
        details: { number: "F-02", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "F03",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/2.png",
        path: "M153.5 462H79.5V427.25H0.25V307.5H22.25V247H153.5V295.75H124.5V307.5H162.25V402.25H153.5V462Z",
        details: { number: "F-03", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "F04",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/3.png",
        path: "M22.5 493.5H153.25V555.75H168.75V583.75H210.5V720.5H22.5V493.5Z",
        details: { number: "F-04", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "F05",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/4.png",
        path: "M367 720.5H210.5V583.75H272V522.75H367V720.5Z",
        details: { number: "F-05", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "F06",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/5.png",
        path: "M366.75 524.5H301.75V512.75H208.75V411.75H264.75V353H293.5V307.5H366.75V367.5H388.75V416H366.75V524.5Z",
        details: { number: "F-06", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      }
];

// 1. Updated floorData with new Ground Floor units and dynamic viewBoxes
export const floorData = [
  {
    title: "Ground Floor",
    planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/ground/floor.png",
    viewBox: "0 0 473 680", // Updated to match your new SVG dimensions
    features: [
      "Shops",
      "Outdoor Exercise Area",
      "Meditation Pavilion",
      "Outdoor Seating Area",
    ],
units: [
      {
        id: "U01",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/ground/0.png",
        path: "M404.875 373.625V330.25H458.75V352H440V373.625H404.875Z",
        details: { number: "Outdoor Exercise Gym", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U02",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/ground/1.png",
        path: "M432.125 483.25H401.5V423.375H432.125V483.25Z",
        details: { number: "Pavilion - Seating / Meditation", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U03",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/ground/2.png",
        path: "M428.562 526.625H401.438V496.75H428.562V526.625Z",
        details: { number: "Paved Seating Gallery", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U04",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/ground/3.png",
        path: "M224.5 505.625V573.75C262.75 567.007 284.579 565.143 324.5 566.75L345.75 559.75V521.625H332.875V505.625H224.5Z M402.5 414.5H386.5V548.5L402.5 542.75V414.5Z M183.25 341.5V583.5C176.95 585.709 164.511 590.088 164.252 590.246C164.251 590.249 164.25 590.25 164.25 590.25C164.246 590.25 164.247 590.249 164.252 590.246C164.449 589.283 164.333 430.508 164.25 351L183.25 341.5Z",
        details: { number: "Ample Parking Space", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U07",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/ground/4.png",
        path: "M317 504.5H284.5V358H310.25V367H317.625V358H346V450.75H317V504.5Z",
        details: { number: "External Shop Space 2", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U08",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/ground/5.png",
        path: "M284.5 505.5H223.5V357.5H284.5V505.5Z",
        details: { number: "External Shop Space 1", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      }
    ]
  },
  {
    title: "First Floor",
viewBox: "0 0 516 743",
    planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor1/floor.png",
    pdfPath: "/downloadFloorPlan/first floor plan.pdf",
   features: [
  "Shops",
  "Car Parking",
  "Visitor’s Lounge"
],
  units: [
      {
        id: "G01",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor1/0.png",
        path: "M199.5 638L178.5 645.5V382.5L199.5 376.001V638Z M146.5 354.501L122.25 404.5L89.9005 416.076L39.9348 257.972L307.625 126.42L376.902 213.317V355H338.5V345.125H315.812V390.688L243.5 390.249V279.251L212.5 248.751C205.806 254.647 202.547 259.045 199.5 273.001V334.001L146.5 354.501Z M438.157 594.086L420.75 598.75V453H438.157V594.086Z",
        details: { number: "Ample Parking Space", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
     
      {
        id: "G04",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor1/1.png",
        path: "M298.375 488.375V551.875H243.25V488.375H298.375Z",
        details: { number: "External Shop Space 1", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "G05",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor1/2.png",
        path: "M298.375 436.125H243.5V488.125H298.375V436.125Z",
        details: { number: "External Shop Space 2", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "G08",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor1/3.png",
        path: "M298.5 390.75H243.75V436H298.5V390.75Z",
        details: { number: "External Shop Space 3", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "G09",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor1/4.png",
        path: "M377.125 492.625H309.625V432.125H377.125V492.625Z",
        details: { number: "External Shop Space 5", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "G10",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor1/5.png",
        path: "M338.375 390.75H310V431.5H338.375V390.75Z",
        details: { number: "External Shop Space 4", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "G11",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor1/6.png",
        path: "M345.5 552.375H310.125V492.75H345.5V552.375Z",
        details: { number: "External Shop Space 6", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
    ]
  },
  // Floor 2 to 12 use the typical layout
  {
    title: "Second Floor",
   viewBox: "0 0 530 764",
    planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor2/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
features: [
  "Car Parking"
],
 units: [
      {
        id: "U01",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor2/0.png",
        path: "M203.625 385.5V655.5L182.25 662.5V394.5L203.625 385.5Z M387 443.875H347.375V411.875H355.625V402.375H387V443.875Z M450.073 610.523L431.5 615.5V465.25H450.073V610.523Z M91 428.5L160.375 401.125L149.25 364.75L203.5 344V281.75C210.209 254.441 220.28 246.367 245.25 240H291.5V286.5H250V567.25H372.5V550.75H387.5C389.3 550.75 388.25 542.25 387.5 538H360.5C358.9 538 359.833 475.333 360.5 444H324V355.25H348V364.75H387.25V286.5H337.5V240H388.75V218.75L306.5 116.25L35.5 250L91 428.5Z",
        details: { number: "Ample Parking Space", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      }
    ]
  },
 

  {
    title: "Third Floor",
    viewBox: "0 0 505 728",
    planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "3 BHKs",
  "2 BHKs",
  "Kids Play Area",
  "Meditation Pavilion",
  "Badminton Court",
  "Skating Rink"
],
      units: [
      {
        id: "S01",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/0.png",
        path: "M98 366.375L81.3785 372.787L47.75 313.75L62.125 305.375L49.75 283.625L71.5 271.125L88.875 300.875L103.5 292.5L128 335.375L92.375 356L98 366.375Z",
        details: { number: "Kids Play Area", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      },
      {
        id: "S02",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/1.png",
        path: "M143.25 327L122.125 290.5L167 264.5L188.125 301L143.25 327Z",
        details: { number: "Skating Park", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      },
      {
        id: "S03",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/2.png",
        path: "M89.625 241.25L98 256L49.75 283.625L28.5 246.875L85.75 213.875L98.75 236.25L89.625 241.25Z",
        details: { number: "Pavilion - Seating / Meditation", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      },
      {
        id: "S04",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/3.png",
        path: "M146.625 255L109.75 276.375L89.75 241.625L98.625 236.5L91.125 222.625L118.625 206.875L146.625 255Z",
        details: { number: "Tree Court", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      },
      {
        id: "S05",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/4.png",
        path: "M307.875 174.125L213.5 228.75L189.625 187.375L284.5 132.875L307.875 174.125Z",
        details: { number: "Badminton Court", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      },
      {
        id: "S06",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/5.png",
        path: "M360 185.375L326 205L290 142.625L323.5 122.75L360 185.375Z",
        details: { number: "Outdoor Exercise Gym", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      },
      {
        id: "S07",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/6.png",
        path: "M374.875 121L357.625 131.5L324.625 74.625L342.5 64.375L374.875 121Z",
        details: { number: "Climbing Wall", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      },
      {
        id: "S08",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/7.png",
        path: "M330.5 325H309.75V272.375H369.75V347.875H330.5V325Z",
        details: { number: "S-08", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      },
      {
        id: "S09",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/8.png",
        path: "M237.125 272.5V359.125H287V340.75H276.125V334.875H293.625V325.125H309.75V272.5H237.125Z",
        details: { number: "S-09", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      },
      {
        id: "S10",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/9.png",
        path: "M287.875 382.75H290.75V418.625H287.875V441.75H258.625V428.125H228.75V382.125H237.125V359.125H287.875V382.75Z",
        details: { number: "S-10", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      },
      {
        id: "S11",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/10.png",
        path: "M309.75 541.5H237.375V453.625H287.75V477.375H293.5V488.625H309.75V541.5Z",
        details: { number: "S-11", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      },
      {
        id: "S12",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/11.png",
        path: "M370 465.625V541.375H309.75V488.75H333.125V465.625H370Z",
        details: { number: "S-12", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      },
      {
        id: "S13",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor3/12.png",
        path: "M309 422.5V461.375H344.625V465.75H369.75V423.875H378.375V404.5H369.75V381.875H341.625V399.625H330.625V422.5H309Z",
        details: { number: "S-13", type: "", sqft: "", balconySqft: "", rooms: 0, washrooms: 0, floor: "" },
      }
    ]
  },
  {
    title: "Fourth Floor",
    viewBox: "0 0 389 734",
    planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "3 BHKs",
  "2 BHKs"
],
   units: typicalFloorUnits,
  },
  {
    title: "Fifth Floor",
    viewBox: "0 0 389 734",
     planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "3 BHKs",
  "2 BHKs"
],
    units: typicalFloorUnits,
  },
  {
    title: "Sixth Floor",
    viewBox: "0 0 389 734",
     planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "3 BHKs",
  "2 BHKs"
],
    units: typicalFloorUnits,
  },
  {
    title: "Seventh Floor",
    viewBox: "0 0 389 734",
     planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "3 BHKs",
  "2 BHKs"
],
    units: typicalFloorUnits,
  },
  {
    title: "Eighth Floor",
    viewBox: "0 0 389 734",
     planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "3 BHKs",
  "2 BHKs"
],
    units: typicalFloorUnits,
  },
  {
    title: "Ninth Floor",
    viewBox: "0 0 389 734",
     planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "3 BHKs",
  "2 BHKs"
],
    units: typicalFloorUnits,
  },
  {
    title: "Tenth Floor",
    viewBox: "0 0 389 734",
     planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "3 BHKs",
  "2 BHKs"
],
    units: typicalFloorUnits,
  },
  {
    title: "Eleventh Floor",
    viewBox: "0 0 389 734",
     planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "3 BHKs",
  "2 BHKs"
],
    units: typicalFloorUnits,
  },
  {
    title: "Twelfth Floor",
    viewBox: "0 0 389 734",
     planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "3 BHKs",
  "2 BHKs"
],
    units: typicalFloorUnits,
  },
   {
    title: "Thirteenth Floor",
    viewBox: "0 0 389 734",
     planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "3 BHKs",
  "2 BHKs"
],
    units: typicalFloorUnits,
  },
   {
    title: "Fourteenth Floor",
    viewBox: "0 0 389 734",
     planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor4-14/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "3 BHKs",
  "2 BHKs"
],
    units: typicalFloorUnits,
  },
  {
    title: "Fifteenth Floor",
    viewBox: "0 0 379 714",
    planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor15/floor.png",
    pdfPath: "/downloadFloorPlan/13th floor.pdf",
 features: [
  "4 BHKs",
  "Duplex - Lower Floor"
],
  units: [
      {
        id: "U01",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor15/0.png",
        path: "M257.75 214.75V154.75H149.25V240.25H43V182.25H21.75V0.25H91.5V21.25H203.75V0.25H268.25V21.25H357.25V214.75H257.75Z",
        details: { number: "U-01", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U02",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor15/1.png",
        path: "M22 298.5V238.75H149.25V287.75H121V298.5H157.5V391H149.25V449.25H77V415.5H0.5V298.5H22Z",
        details: { number: "U-02", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U03",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor15/2.png",
        path: "M149 480.5H22.042V701.271H357.347V508.558H264.633V568H164V539.75H149V480.5Z",
        details: { number: "U-03", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U04",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor15/3.png",
        path: "M292.5 512V499H203.75V400.5H258V298.5H357.5V357.25H379V404.5H357.5V512H292.5Z",
        details: { number: "U-04", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      }
    ]
  },
  {
    title: "Sixteenth Floor",
    viewBox: "0 0 393 741",
    planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor16/floor.png",
    pdfPath: "/downloadFloorPlan/14th floor.pdf",
 features: [
  "4 BHKs",
  "Duplex - Upper Floor"
],
 units: [
      {
        id: "U01",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor16/0.png",
        path: "M154.5 251.25H22.5V230.125H44.4375V188.812H22.5V-0.5H95V21H211V-0.5H278.5V21H371.25V222H267.5V159.5H154.5V251.25Z",
        details: { number: "U-01", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U02",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor16/1.png",
        path: "M371.25 369V309.5H297V355.75H268V415.5H211.25V517.5H275V529.75H371.25V419.75H393.5V369H371.25Z",
        details: { number: "U-02", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U03",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor16/2.png",
        path: "M154.5 466H79.75V430.75H0.25V309.25H23V247H154.5V298.5H125.5V309.25H177.5V376.75H154.5V466Z",
        details: { number: "U-03", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U04",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/floor16/3.png",
        path: "M154.75 498H22.75L22.25 727.5H371V527.75H275.75V589H170.5V560H154.75V498Z",
        details: { number: "U-04", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      }
    ]
  },
  {
    title: "Terrace Floor",
    viewBox: "0 0 383 729",
    planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/terrace/floor.png",
    pdfPath: "/downloadFloorPlan/lower terrace.pdf",
   features: [
  "Library",
  "Cardio Machines",
  "Indoor Games Area"
],
    units: [
      {
        id: "U01",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/terrace/0.png",
        path: "M173.875 689.25H39.25V547.75H173.875V689.25Z",
        details: { number: "U-01", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U02",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/terrace/1.png",
        path: "M39.25 547.5V484.375H150.75V534.25H132.625V547.5H39.25Z",
        details: { number: "U-02", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U03",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/terrace/2.png",
        path: "M343.75 690.25H271.5V488.5H343.75V690.25Z",
        details: { number: "U-03", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      }
    ]
  },
   {
    title: "Upper Terrace Floor",
    viewBox: "0 0 384 720",
    planImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/upperTerrace/floor.png",
    pdfPath: "/downloadFloorPlan/lower terrace.pdf",
   features: [
  "Infinity Swimming Pool",
  "Baby Pool",
  "Changing Rooms",
  "Seated Chalk Gallery"
],
  units: [
      {
        id: "U01",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/upperTerrace/0.png",
        path: "M121.5 241.5H23V177.75H121.5V241.5Z",
        details: { number: "U-01", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      },
      {
        id: "U02",
        unitImage: "/floorPlans/kedar/floorMapAndSpeceficMapImages/upperTerrace/1.png",
        path: "M121.5 177.5H23.5V22H338V181.75H206.875V207H121.5V177.5Z",
        details: { number: "U-02", type: "", sqft: "", balconySqft: "", rooms: "", washrooms: "", floor: "" },
      }
    ]
  },
  
];

export const HERO_MARKERS = [
  {
    label: "Swimming Pool", // Leftmost marker (cx: 533.227)
    cx: 533.227,
    cy: 613.227,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={534.227} y1={644.035} x2={534.227} y2={701.535} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={533.227} cy={613.227} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={533.227} cy={613.227} r="30.2266" stroke="white" strokeWidth="2" fill="none" />
        {/* Icon Path */}
        <path
          d="M530.548 612.065L533.422 606.296M537.976 618.428L545.214 614.49C545.74 614.19 546.213 613.778 546.597 613.261C548.09 611.251 547.671 608.413 545.662 606.92C544.575 606.113 543.246 605.865 542.018 606.125C541.913 604.874 541.291 603.673 540.205 602.866C539.118 602.059 537.789 601.811 536.561 602.071C536.455 600.82 535.834 599.619 534.747 598.812C532.738 597.319 529.899 597.738 528.407 599.747C528.023 600.265 527.765 600.836 527.629 601.426L525.949 609.494M538.879 610.35L534.186 614.768M524.259 624.331C521.245 622.092 520.617 617.833 522.856 614.82C523.602 613.815 525.021 613.606 526.026 614.352L533.302 619.757C534.307 620.503 534.516 621.923 533.77 622.928C531.531 625.941 527.273 626.57 524.259 624.331Z"
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
    label: "Leisure Areas", // Middle marker (cx: 582.227)
    cx: 582.227,
    cy: 538.227,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={583.227} y1={569.035} x2={583.227} y2={626.535} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={582.227} cy={538.227} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={582.227} cy={538.227} r="30.2266" stroke="white" strokeWidth="2" fill="none" />
        {/* Icon Path */}
        <path
          d="M588.297 526.026C589.778 525.236 591.567 525.296 593.005 526.16L593.756 526.611L596.629 528.336C597.933 528.954 598.539 530.475 598.014 531.82C597.594 532.901 596.558 533.572 595.452 533.572C595.182 533.572 594.909 533.533 594.638 533.449L591.512 532.48H591.511C588.931 533.414 590.36 539.021 590.408 539.224C590.408 539.226 590.408 539.227 590.408 539.228L592.446 547.083L593.533 551.273L588.899 552.054C588.38 546.985 584.097 543.03 578.891 543.03C573.686 543.03 569.403 546.985 568.884 552.054L564.25 551.273L565.337 547.083L567.375 537.819C567.993 535.434 570.354 533.928 572.775 534.386C574.795 534.769 576.843 534.96 578.891 534.96C579.028 534.96 579.166 534.959 579.303 534.957C579.346 534.956 579.389 534.956 579.432 534.955C580.868 534.932 582.303 534.814 583.727 534.602M570.264 547.913L565.337 547.083M592.446 547.083L587.519 547.913M583.727 534.602C583.727 529.97 586.172 527.159 588.297 526.026C589.778 525.236 591.567 525.296 593.005 526.16L593.756 526.611L596.199 523.149L595.181 522.537C592.476 520.912 589.077 520.82 586.309 522.296C584.291 523.372 582.68 524.976 581.52 527.066C580.703 528.538 580.132 530.231 579.81 532.127C579.81 532.127 579.586 533.595 579.432 534.955M564.25 533.617V532.315C564.25 531.148 565.196 530.202 566.363 530.202C566.946 530.202 567.475 530.439 567.857 530.821C568.24 531.204 568.476 531.732 568.476 532.315V535.805M578.891 550.964V543.03M584.672 555.203H573.111V553.803C573.111 552.235 574.382 550.964 575.95 550.964H581.833C583.401 550.964 584.672 552.235 584.672 553.803V555.203Z"
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
    label: "Garden Area", // Rightmost marker (cx: 652.227)
    cx: 652.227,
    cy: 567.227,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={653.227} y1={598.035} x2={653.227} y2={655.535} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={652.227} cy={567.227} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={652.227} cy={567.227} r="30.2266" stroke="white" strokeWidth="2" fill="none" />
        {/* Icon Path */}
        <path
          d="M652.409 559.399V583.387M652.09 567.843L649.339 565.092M652.921 571.297L656.407 567.811M652.409 552.555C648.979 552.555 646.173 555.361 646.173 558.792V559.055C643.535 558.249 640.827 560.214 640.827 563.011C640.827 564.785 641.944 566.297 643.512 566.885C642.125 567.953 641.231 569.63 641.231 571.517C641.231 574.743 643.846 577.359 647.072 577.359C648.925 577.359 650.575 576.496 651.645 575.152C652.154 575.215 652.665 575.215 653.173 575.152C654.244 576.496 655.894 577.359 657.746 577.359C660.973 577.359 663.588 574.743 663.588 571.517C663.588 569.63 662.694 567.953 661.306 566.885C662.875 566.297 663.992 564.785 663.992 563.011C663.992 560.214 661.284 558.249 658.646 559.055V558.792C658.646 555.361 655.84 552.555 652.409 552.555Z"
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
];


export const FLOOR_PATHS = [
  {
    id: 0,
    d: "M238.085 738.612V710.059L357.805 752.491L540.208 650.377L357.805 786L238.085 738.612Z",
  },
  {
    id: 1,
    d: "M237.188 684.308L237.967 710.603L357.221 753.232L539.312 650.842V628.531L357.221 723.75L237.188 684.308Z",
  },
  {
    id: 2,
    d: "M360.336 698.786L237.335 663.577L218.312 665.875V667.625L224.875 670.5L229.188 674.063L232 675.625L237.335 684.94L357.221 724.105L540.208 629.159V612.147L360.336 698.786Z",
  },
  {
    id: 3,
    d: "M359.534 668.553L237.188 633.354V658.438L218.5 665.938L237.188 663.562L360.313 699.25L540.326 612.259L541.105 586.812L359.534 668.553Z",
  },
  {
    id: 4,
    d: "M236.292 602.817L237.072 633.082L359.512 668.581L541.222 587.213L542.001 562.085L359.512 635.922L236.292 602.817Z",
  },
  {
    id: 5,
    d: "M236.292 574.404V603.348L359.559 635.813L542.118 563.061L542.898 538.419L359.559 604.522L236.292 574.404Z",
  },
  {
    id: 6,
    d: "M235.396 544.983L236.176 574.33L359.536 604.866L543.014 538.242L543.747 511.058L359.488 571.733L235.396 544.983Z",
  },
  {
    id: 7,
    d: "M359.559 537.846L234.499 516.704V532L221.5 534.5V536.625L227.062 538.688V540.938L230.812 541.812V544L235.28 544.791L359.559 571.75L547 510.125V508.188L548.875 507.688L551.438 504.625L553.562 504.312L555.188 502.5L554.562 500.812L544.806 499.25L545.312 484.5L359.559 537.846Z",
  },
  {
    id: 8,
    d: "M233.602 487.881L234.384 516.532L359.537 538.419L545.701 484.3L546.484 459.229L359.537 503.401L233.602 487.881Z",
  },
  {
    id: 9,
    d: "M232.706 458.967L233.486 487.477L359.153 502.92L545.703 459.363L546.484 432.833L359.153 468.075L232.706 458.967Z",
  },
  {
    id: 10,
    d: "M231.809 431.273L232.591 459.359L359.256 468.332L546.957 433.759L548.277 408.257L359.256 439.465L231.809 431.273Z",
  },
  {
    id: 11,
    d: "M230.913 393.452L231.401 430.949L358.327 439.205L547.495 407.377L548.277 379.13L358.327 404.194L230.913 393.452Z",
  },
  {
    id: 12,
    d: "M230.016 366.061L230.644 394.304L358.453 404.616L548.992 379.79L550.07 351.823L358.453 370.075L230.016 366.061Z",
  },
  {
    id: 13,
    d: "M230.016 329.564L230.992 365.085L359.021 369.117L549.795 350.759L550.966 322.695L359.021 329.868L230.016 329.564Z",
  },
  {
    id: 14,
    d: "M229.12 297.209L230.098 329.869L359.201 329.977L551.586 322.743L552.759 298.307H359.201L229.12 297.209Z",
  },
  {
    id: 15,
    d: "M228.223 262.876L229.202 297.217L359.179 298.12L552.481 298.011L553.656 267.947L359.179 260.801L228.223 262.876Z",
  },
  {
    id: 16,
    d: "M226.43 229.564L227.9 263.194L359.135 261.15L554.273 268.082L555.449 240.034L359.135 224.392L226.43 229.564Z",
  },
  {
    id: 17,
    d: "M224.637 192.204L226.105 228.674L358.684 223.542L554.275 238.955L555.449 212.679L358.684 187.072L224.637 192.204Z",
  },
  {
    id: 18,
    d: "M283.092 135.843L331.423 167.59L357.015 165.493L355.825 163.546L355.651 159.801L417.156 153.67L459.695 160.578V164.206L457.91 164.723L457.979 179.774L537.049 192.778L535.877 195.257L568 201.626L557.943 211.578L555.112 213.469L551.89 212.971L358.664 187.205L220.115 192.47L219.759 191.54L216.327 191.364L214.8 190.294L212.45 189.98L212.14 188.058L211.037 186.442L208.544 186.427L208.5 184.311L219.892 183.297L219.98 178.395L227.126 178.267L267.763 132.459L283.092 135.843Z",
  }
];

export const FLOOR_PATHS_VIEWBOX = "0 0 1728 848";