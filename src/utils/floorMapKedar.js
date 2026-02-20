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
    label: "Play Area", // Leftmost marker (cx: 533.5)
    cx: 533.5,
    cy: 619.435,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={534.5} y1={643.542} x2={534.5} y2={688.535} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <ellipse cx={533.5} cy={619.435} rx="21.5" ry="24.4345" fill="white" opacity="0.5" />
        <path d="M533.5 596C544.705 596 554 606.368 554 619.435C554 632.501 544.705 642.869 533.5 642.869C522.295 642.869 513 632.501 513 619.435C513 606.368 522.295 596 533.5 596Z" stroke="white" strokeWidth="2" fill="none" />
        {/* Icon Path */}
        <path
          d="M531.579 618.6L533.689 614.366M537.031 623.271L542.344 620.38C542.73 620.16 543.077 619.857 543.359 619.478C544.455 618.003 544.147 615.919 542.673 614.824C541.875 614.231 540.899 614.049 539.998 614.24C539.921 613.322 539.465 612.441 538.667 611.848C537.87 611.256 536.894 611.073 535.993 611.264C535.915 610.346 535.459 609.465 534.662 608.872C533.187 607.777 531.103 608.084 530.007 609.559C529.726 609.939 529.536 610.358 529.436 610.791L528.203 616.713M537.694 617.341L534.249 620.584M526.963 627.603C524.751 625.96 524.29 622.834 525.933 620.622C526.481 619.885 527.523 619.731 528.26 620.279L533.601 624.246C534.338 624.794 534.492 625.836 533.944 626.573C532.301 628.785 529.175 629.246 526.963 627.603Z"
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
    label: "Leisure Areas", // Middle marker (cx: 577.5)
    cx: 577.5,
    cy: 560.39,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={578.5} y1={583.466} x2={578.5} y2={626.535} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <ellipse cx={577.5} cy={560.39} rx="21.5" ry="23.3896" fill="white" opacity="0.5" />
        <path d="M577.5 538C588.744 538 598 547.943 598 560.39C598 572.836 588.744 582.779 577.5 582.779C566.256 582.779 557 572.836 557 560.39C557 547.943 566.256 538 577.5 538Z" stroke="white" strokeWidth="2" fill="none" />
        {/* Icon Path */}
        <path
          d="M581.889 551.628C582.953 551.061 584.237 551.104 585.27 551.724L585.81 552.048L587.873 553.287C588.809 553.731 589.244 554.823 588.868 555.789C588.566 556.565 587.822 557.047 587.027 557.047C586.833 557.047 586.637 557.019 586.443 556.959L584.198 556.263H584.197C582.344 556.933 583.371 560.96 583.405 561.106C583.405 561.107 583.405 561.108 583.405 561.109L584.869 566.75L585.649 569.759L582.321 570.319C581.949 566.679 578.873 563.839 575.134 563.839C571.396 563.839 568.321 566.679 567.948 570.319L564.62 569.759L565.401 566.75L566.864 560.097C567.308 558.384 569.003 557.303 570.742 557.632C572.193 557.907 573.664 558.044 575.134 558.044C575.233 558.044 575.332 558.043 575.43 558.042C575.461 558.041 575.492 558.041 575.523 558.04C576.554 558.023 577.584 557.939 578.607 557.787M568.939 567.346L565.401 566.75M584.869 566.75L581.33 567.346M578.607 557.787C578.607 554.46 580.363 552.441 581.889 551.628C582.953 551.061 584.237 551.104 585.27 551.724L585.81 552.048L587.564 549.562L586.832 549.122C584.89 547.956 582.449 547.889 580.462 548.949C579.012 549.722 577.855 550.874 577.022 552.375C576.436 553.432 576.025 554.648 575.794 556.01C575.794 556.01 575.633 557.064 575.523 558.04M564.62 557.079V556.145C564.62 555.306 565.299 554.627 566.138 554.627C566.557 554.627 566.936 554.797 567.211 555.072C567.485 555.346 567.655 555.726 567.655 556.145V558.651M575.134 569.537V563.839M579.286 572.581H570.983V571.576C570.983 570.45 571.896 569.537 573.022 569.537H577.247C578.373 569.537 579.286 570.45 579.286 571.576V572.581Z"
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
    label: "Badminton Court", // Rightmost marker (cx: 638.5)
    cx: 638.5,
    cy: 581.912,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={639.5} y1={605.504} x2={639.5} y2={649.535} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <ellipse cx={638.5} cy={581.912} rx="23.5" ry="23.912" fill="white" opacity="0.5" />
        <path d="M638.5 559C650.91 559 661 569.242 661 581.912C661 594.582 650.91 604.824 638.5 604.824C626.09 604.824 616 594.582 616 581.912C616 569.242 626.09 559 638.5 559Z" stroke="white" strokeWidth="2" fill="none" />
        {/* Icon Path */}
        <path
          d="M638.638 575.975V594.185M638.395 582.385L636.307 580.297M639.026 585.007L641.673 582.36M638.638 570.779C636.034 570.779 633.903 572.91 633.903 575.514V575.713C631.901 575.102 629.845 576.594 629.845 578.716C629.845 580.063 630.693 581.212 631.884 581.658C630.831 582.468 630.152 583.742 630.152 585.174C630.152 587.623 632.137 589.608 634.586 589.608C635.992 589.608 637.245 588.954 638.058 587.933C638.444 587.981 638.832 587.981 639.218 587.933C640.03 588.954 641.283 589.608 642.689 589.608C645.139 589.608 647.124 587.623 647.124 585.174C647.124 583.742 646.445 582.468 645.392 581.658C646.583 581.212 647.431 580.063 647.431 578.716C647.431 576.594 645.375 575.102 643.372 575.713V575.514C643.372 572.91 641.242 570.779 638.638 570.779Z"
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