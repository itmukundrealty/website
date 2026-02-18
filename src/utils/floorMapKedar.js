const typicalFloorUnits = [
  {
    id: "S01",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/0.png",
    path: "M119.25 282.375L84.5 323.875L59.75 303L58 304.75L1.75 256.75L45 205.25L37.5 198.75L50.75 184.25L41 175.25L66.75 144.25L116.75 186.5L107.75 197.75L138.125 223.25L101.125 267.375L119.25 282.375Z",
    details: { number: "S-01", type: "Corner Office", sqft: "1600", balconySqft: "0", rooms: 2, washrooms: 1, floor: "Second Floor" },
  },
  {
    id: "S02",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/1.png",
    path: "M682.25 700.5L620.25 773.25L594.125 751.625L586.75 760.25L551.875 731.25L609.25 663.5L618.75 671.75L631 656.5L608.375 638.125L656.375 580.25L672.5 593.5L690.5 572.125L728.5 603.75L720.625 613.5L750 638.125L720 674.25L723.75 677L695 711.5L682.25 700.5Z",
    details: { number: "S-02", type: "Large Workspace", sqft: "2200", balconySqft: "100", rooms: 3, washrooms: 2, floor: "Second Floor" },
  },
  {
    id: "S03",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/2.png",
    path: "M249.5 348.5L188.625 420.625L137.75 378.75L149.75 363.75L123.5 341.75L114.5 351.5L81.625 324.375L139.375 256.125L249.5 348.5Z",
    details: { number: "S-03", type: "Meeting Room", sqft: "1400", balconySqft: "0", rooms: 1, washrooms: 0, floor: "Second Floor" },
  },
  {
    id: "S04",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/3.png",
    path: "M217.25 451.375L186 425.5L256.75 340.25L282.5 362L325 311.75L382.5 360L292 468.5L238.875 424.5L217.25 451.375Z",
    details: { number: "S-04", type: "Co-working Pod", sqft: "1550", balconySqft: "0", rooms: 1, washrooms: 1, floor: "Second Floor" },
  },
  {
    id: "S05",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/4.png",
    path: "M457 449L436 474.25L348.75 401.5L392.75 347.75L422 370.75L438.25 349.75L497.75 398.75L487.75 410.5L516 435.5L485 471.75L457 449Z",
    details: { number: "S-05", type: "Private Cabin", sqft: "1350", balconySqft: "0", rooms: 1, washrooms: 0, floor: "Second Floor" },
  },
  {
    id: "S06",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/5.png",
    path: "M468.75 545.25L417 607L384.75 578.75L373.75 591L322 549.25L326.375 544.125L301.25 523.25L295.75 530L262.5 502.75L327 426.5L343.375 440.625L323.375 463.125L338.25 475.75L357.75 452.375L468.75 545.25Z",
    details: { number: "S-06", type: "Discussion Area", sqft: "1500", balconySqft: "0", rooms: 1, washrooms: 0, floor: "Second Floor" },
  },
  {
    id: "S07",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/6.png",
    path: "M609 664L558 725L525.625 698L514.875 710.625L464.375 667.625L468.25 663.375L441.875 641.625L436.5 648.25L404.5 621.75L466.5 546.5L483.125 560.625L465 581.75L479 594L495.125 575.5L522.75 598.75L526.25 594.75L609 664Z",
    details: { number: "S-07", type: "Small Office", sqft: "1250", balconySqft: "0", rooms: 1, washrooms: 1, floor: "Second Floor" },
  },
  {
    id: "S08",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/7.png",
    path: "M670.475 565.191L636.754 604.977L609.584 582.173L591.147 603.521L532.125 554.375L552.332 529.53L524.676 506.969L568.75 454.5L596.375 477.625L594.3 480.041L652.765 529.53L642.875 541.875L670.475 565.191Z",
    details: { number: "S-08", type: "Lounge", sqft: "1450", balconySqft: "50", rooms: 1, washrooms: 0, floor: "Second Floor" },
  },
  {
    id: "S09",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/8.png",
    path: "M274 234.5L247.75 265.625L160.875 192.375L205.125 139.25L233 162.875L251 141.625L309.75 190.75L299 203.5L333.375 231.75L307.5 262.25L274 234.5Z",
    details: { number: "S-09", type: "Reception", sqft: "1100", balconySqft: "0", rooms: 0, washrooms: 1, floor: "Second Floor" },
  },
  {
    id: "S10",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/9.png",
    path: "M167.023 157.612L132.312 198.75L33.1874 116.562L71.7499 71.5L60.3124 61.5625L102.254 12.5601L133.531 38.6645L143.381 27.8287L171 51.1875L161.852 62.3064L225.635 115.993L180.322 169.187L167.023 157.612Z",
    details: { number: "S-10", type: "Utility Room", sqft: "900", balconySqft: "0", rooms: 0, washrooms: 0, floor: "Second Floor" },
  },
];

// 1. Updated floorData with new Ground Floor units and dynamic viewBoxes
export const floorData = [
  {
    title: "Ground Floor",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/floor.png",
    viewBox: "0 0 764 696", // Updated to match your new SVG dimensions
    features: [
      "24×7 Cloud Kitchen",
      "Entrance Lobby",
      "Yoga Lawn & Meditation Deck",
      "Toddler’s & Childern’s Play Areas",
      "Outdoor Sport Courts",
      "Car Parking",
      "A/C Mini Theatre",
    ],
    units: [
      {
        id: "G01",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/0.png", // Placeholder path
        path: "M513.45 632.127C513.45 622.78 521.028 615.203 530.374 615.203C533.516 615.203 536.456 616.06 538.977 617.552L539.28 617.264L612.938 547.125C616.732 543.104 618.009 540.406 619.875 536.062C622.852 540.44 624.946 542.952 628.812 543.625C631.617 538.214 632.208 534.035 632.515 527.624L632.586 527.356L632.849 527.274L638.974 525.336L639.238 525.252L641.065 526.806C657.469 540.689 665.347 545.139 675.305 546.502L676.308 546.628L676.523 546.653L676.653 546.829C679.095 550.152 681.084 551.94 683.239 552.642C685.387 553.342 687.807 553 691.206 551.78L691.67 552.654L604.588 616.371L571.575 651.154L573.312 652.812L551.53 675.45L538.847 671.351L538.132 671.12L539.838 669.129L517.875 644.08L517.548 643.708L517.814 643.468C515.103 640.467 513.45 636.49 513.45 632.127Z",
        details: { number: "G-01", type: "Commercial Space", sqft: "2100", balconySqft: "0", rooms: 1, washrooms: 1, floor: "Ground Floor" },
      },
      {
        id: "G02",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/1.png",
        path: "M460 583.5L431.875 616.125L358.875 554.125L386.625 521.125L460 583.5Z",
        details: { number: "G-02", type: "Office Suite", sqft: "1200", balconySqft: "0", rooms: 1, washrooms: 1, floor: "Ground Floor" },
      },
      {
        id: "G03",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/2.png",
        path: "M654.121 516.569L684.696 542.792C686.474 544.316 689.176 543.994 690.545 542.095L697.47 532.489C698.688 530.8 698.406 528.459 696.822 527.108L666.826 501.501C665.133 500.055 662.585 500.271 661.158 501.98L653.654 510.97C652.252 512.65 652.46 515.145 654.121 516.569Z",
        details: { number: "G-03", type: "Retail Shop", sqft: "800", balconySqft: "0", rooms: 1, washrooms: 0, floor: "Ground Floor" },
      },
      {
        id: "G04",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/3.png",
        path: "M288 334L244.25 384.75L213 357.875L256.625 307L288 334Z",
        details: { number: "G-04", type: "Office Suite", sqft: "1150", balconySqft: "0", rooms: 1, washrooms: 1, floor: "Ground Floor" },
      },
      {
        id: "G05",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/4.png",
        path: "M443.5 397.625L420 424.5L350.625 365.75L373.5 337.875L443.5 397.625Z M334.625 384.062L312.125 410.438L425.943 506.543L464.299 461.302L446.921 446.127L446.546 445.799L446.872 445.423L469.697 419.047L591.938 523.681L583.916 533.959L589.18 539.223L588.881 539.574L577.053 553.459L576.672 553.127L571.302 548.457L568.308 551.951L562.434 547.015L559.836 550.062L566.4 555.438L554.043 569.843L547.913 564.214L542.466 570.439L548.899 575.718L536.715 589.982L536.335 589.665L530.371 584.671L501.182 619.049L287.055 436.577L285.059 438.824L234.545 396.562L282.188 339.796L334.625 384.062ZM437.625 511.375L465.062 534.75L476 522L448.75 498.562L437.625 511.375Z M435 285.75L411.5 313.5L562.5 441.75L560.25 445.5L641.75 516L664.5 488.25L623.922 453.281L624.352 452.727L583.125 417.625L585.844 414.375L435 285.75Z",
        details: { number: "G-05", type: "Large Commercial", sqft: "3200", balconySqft: "0", rooms: 2, washrooms: 2, floor: "Ground Floor" },
      },

      {
        id: "G08",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/5.png",
        path: "M245.625 319.125L212.625 357.625L196.375 344.5L229 305.125L245.625 319.125Z",
        details: { number: "G-08", type: "Small Office", sqft: "600", balconySqft: "0", rooms: 1, washrooms: 0, floor: "Ground Floor" },
      },
      {
        id: "G09",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/6.png",
        path: "M228.93 305.494L200.375 338.625L130.819 279.682L151.263 255.696L140.641 246.902L165.426 217.777L154.125 208.375L178.218 180.771L168.51 172.09L183.472 140.795L186.785 136.569L224.133 166.951L180.25 218.25L202.204 236.508L179.361 263.235L228.93 305.494Z",
        details: { number: "G-09", type: "Lounge Area", sqft: "1800", balconySqft: "0", rooms: 1, washrooms: 1, floor: "Ground Floor" },
      },
      {
        id: "G10",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/7.png",
        path: "M282.188 308.375L271 298.875L276.75 292.875L205.375 232.75L238.375 193.938L273.938 223.875L272.438 225.562L329.375 274L313.625 292L303.312 283.25L282.188 308.375Z",
        details: { number: "G-10", type: "Reception", sqft: "1300", balconySqft: "0", rooms: 1, washrooms: 1, floor: "Ground Floor" },
      },
      {
        id: "G11",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/8.png",
        path: "M301 356.5L340.875 310.625L373.75 338.25L333.625 384.125L301 356.5Z",
        details: { number: "G-11", type: "Office", sqft: "1000", balconySqft: "0", rooms: 1, washrooms: 0, floor: "Ground Floor" },
      },
    ],
  },
  {
    title: "First Floor",

    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/floor.png",
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
        id: "101",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/0.png",
        path: "M593.75 748.375L558.625 718.375L606.25 662.75L615.5 670.625L626.625 657L606.25 638.875L655.25 580.375L669.375 592.375L684.125 575L723.625 608.25L719.375 613.375L748.125 637.625L715.5 675.25L707.125 667.75L630.125 758.625L604 736.625L593.75 748.375Z",
        details: { number: "101", type: "Premium 3BHK", sqft: "1850", balconySqft: "160", rooms: 3, washrooms: 3, floor: "First Floor" },
      },
      {
        id: "102",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/1.png",
        path: "M465.875 543.125L413.25 604.25L397.5 590.5L381.75 577.25L371.375 589.5L320.5 546.5L324.25 542.25L297 519.375L301.75 513.875L271 488.125L325.875 424.375L465.875 543.125Z",
        details: { number: "102", type: "Luxury 2BHK", sqft: "1420", balconySqft: "110", rooms: 2, washrooms: 2, floor: "First Floor" },
      },
      {
        id: "103",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/2.png",
        path: "M455.375 447.623L433.625 472.498L348 399.875L393.625 345.875L419.5 367.375L436.875 347L467.25 372L456.5 384.5L514.875 434.625L483.25 470.75L455.375 447.623Z",
        details: { number: "103", type: "Standard 2BHK", sqft: "1350", balconySqft: "100", rooms: 2, washrooms: 2, floor: "First Floor" },
      },
      {
        id: "104",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/3.png",
        path: "M605.25 662.498L553.5 722.998L472.543 654.449L465.224 662.452L438.548 640.153L435.949 642.958L403.75 615.813L466.625 543.438L498.938 571.125L495.75 575.063L519.875 595.812L523.313 591.75L605.25 662.498Z",
        details: { number: "104", type: "Garden View 2BHK", sqft: "1490", balconySqft: "125", rooms: 2, washrooms: 2, floor: "First Floor" },
      },
      {
        id: "105",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/4.png",
        path: "M124 269.75L93 306.25L14.75 239.5L47.75 202L40.25 194.25L53.5 179.5L44 171.25L68.25 143.5L107 174.25L116 181.25L103.75 194.25L113.75 202L118.5 196.75L138.75 214.5L118.5 238.25L128.75 247.75L116 262.75L124 269.75Z",
        details: { number: "105", type: "Compact 1BHK", sqft: "850", balconySqft: "50", rooms: 1, washrooms: 1, floor: "First Floor" },
      },
      {
        id: "106",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/5.png",
        path: "M106.25 125.875L74.375 98.875L90.334 79.678L74.375 66.375L97.875 16.625L102.75 10.625L159.75 59.375L149.25 71.75L151 73.125L106.25 125.875Z",
        details: { number: "106", type: "Studio Apartment", sqft: "650", balconySqft: "40", rooms: 1, washrooms: 1, floor: "First Floor" },
      },
      {
        id: "107",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/6.png",
        path: "M185.742 102.518L159.144 133.453L214.075 179.567L240.096 149.21L185.742 102.518Z",
        details: { number: "107", type: "Executive Suite", sqft: "920", balconySqft: "65", rooms: 1, washrooms: 1, floor: "First Floor" },
      },
      {
        id: "108",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/7.png",
        path: "M263 326.25L194.5 406.75L146.438 365.469L151.594 359.5L149.625 357.75L144.25 363.875L120 342.5L126.625 334.875L124.5 333.125L123.5 334L94.125 308.875L139.125 256.25L197.625 305.625L214.125 285.75L263 326.25Z",
        details: { number: "108", type: "Standard 2BHK", sqft: "1280", balconySqft: "90", rooms: 2, washrooms: 2, floor: "First Floor" },
      },
      {
        id: "109",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/8.png",
        path: "M277.375 477.125L196.75 408.25L248 348.25L263 361.25L280.25 342.25L346 397.75L277.375 477.125Z",
        details: { number: "109", type: "Corner 2BHK", sqft: "1310", balconySqft: "115", rooms: 2, washrooms: 2, floor: "First Floor" },
      },
      {
        id: "110",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/9.png",
        path: "M281.25 188.375L257.25 216.5L216.125 181.5L240 153.5L281.25 188.375Z",
        details: { number: "110", type: "Compact Suite", sqft: "750", balconySqft: "45", rooms: 1, washrooms: 1, floor: "First Floor" },
      },
      {
        id: "111",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/10.png",
        path: "M282.25 189.375L258.25 217L306.75 257.125L329.875 230.125L282.25 189.375Z",
        details: { number: "111", type: "Junior Suite", sqft: "780", balconySqft: "50", rooms: 1, washrooms: 1, floor: "First Floor" },
      },
      {
        id: "112",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/11.png",
        path: "M633.25 605.5L606.5 582.75L589.673 602.559L530.75 552L550 529.5L522.375 506L557.5 465L613.75 512.75L610.875 516.125L667.75 564.25L633.25 605.5Z",
        details: { number: "112", type: "Corner 3BHK", sqft: "1900", balconySqft: "180", rooms: 3, washrooms: 3, floor: "First Floor" },
      },
    ],
  },
  // Floor 2 to 12 use the typical layout
  {
    title: "Second Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: typicalFloorUnits,
  },
  {
    title: "Third Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: typicalFloorUnits,
  },
  {
    title: "Fourth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: typicalFloorUnits,
  },
  {
    title: "Fifth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: typicalFloorUnits,
  },
  {
    title: "Sixth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: typicalFloorUnits,
  },
  {
    title: "Seventh Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: typicalFloorUnits,
  },
  {
    title: "Eighth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: typicalFloorUnits,
  },
  {
    title: "Ninth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: typicalFloorUnits,
  },
  {
    title: "Tenth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: typicalFloorUnits,
  },
  {
    title: "Eleventh Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: typicalFloorUnits,
  },
  {
    title: "Twelfth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: typicalFloorUnits,
  },
  {
    title: "Thirteenth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/floor.png",
    pdfPath: "/downloadFloorPlan/13th floor.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: [
      {
        id: "1301",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/0.png",
        path: "M607.75 662L551.5 729.75L586 758.25L593.448 749.638L620.198 771.638L681.25 699.25C689.353 705.694 692.897 708.306 701 714.75L730 681.25L718.875 672.125L748.625 636.625L718.875 612.125L726.75 602.5L689.25 570.75L671.5 592.25L655.625 578.75L607.75 636.25L629.5 655.5L617.5 669.75L607.75 662Z",
        details: { number: "1301", type: "Sky Suite", sqft: "1850", balconySqft: "165", rooms: 3, washrooms: 3, floor: "Thirteenth Floor" },
      },
      {
        id: "1302",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/1.png",
        path: "M683 548.5L634.75 604L620.25 592.25L606.875 607.75L594.125 597.125L589.75 602.375L530.125 553.125L550.25 528.75L522.75 506.25L567.875 452.75L683 548.5Z",
        details: { number: "1302", type: "Luxury 2BHK", sqft: "1450", balconySqft: "120", rooms: 2, washrooms: 2, floor: "Thirteenth Floor" },
      },
      {
        id: "1303",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/2.png",
        path: "M466.692 544.619L396.25 629L427.75 655.625L441.26 639.577L467.76 661.827L464 666.25L514 707.25L524.25 695.375L556.5 722.75L607.75 661.5L525.125 592.625L521.5 597L494.5 574.875L478.75 593.75L463.375 580.5L482.192 557.869L466.692 544.619Z",
        details: { number: "1303", type: "Premium 3BHK", sqft: "1700", balconySqft: "145", rooms: 3, washrooms: 3, floor: "Thirteenth Floor" },
      },
      {
        id: "1304",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/3.png",
        path: "M466.5 544.5L395.75 629L313.5 560L326.265 544.5L299.765 522.25L294.25 528.5L262.25 501.75L326 426.75L342.25 439.875L322.5 462.75L337.625 475.75L357.125 452.625L466.5 544.5Z",
        details: { number: "1304", type: "Premium 3BHK", sqft: "1720", balconySqft: "155", rooms: 3, washrooms: 3, floor: "Thirteenth Floor" },
      },
      {
        id: "1305",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/4.png",
        path: "M447.75 456.75L434.5 472L348.5 399.5L412.25 323.25L440.5 346.5L438 350.25L445.25 355.25L450.75 348.75L529.75 415L484.25 469.75L475.25 462.25L467.25 472L447.75 456.75Z",
        details: { number: "1305", type: "Standard 2BHK", sqft: "1300", balconySqft: "100", rooms: 2, washrooms: 2, floor: "Thirteenth Floor" },
      },
      {
        id: "1306",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/5.png",
        path: "M215.75 450.25L185.25 424L248.25 347.75L263.375 361L270.375 352.625L256.625 340.625L269.25 325.5L294.5 346.25L324.75 312L330.25 316L348 295L399 338.5L291.25 467.25L238.5 422.25L215.75 450.25Z",
        details: { number: "1306", type: "Standard 2BHK", sqft: "1280", balconySqft: "90", rooms: 2, washrooms: 2, floor: "Thirteenth Floor" },
      },
      {
        id: "1307",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/6.png",
        path: "M248.25 348.5L188.125 420.25L164.125 400.125L158.5 406.75L105 362.5L107.375 359.75L26.25 292L33.625 283.125L1.75 256.625L45.25 205.5L37.75 199L51 183L120.25 241.625L107.625 256.75L126.375 272.5L139.25 256.75L198.5 306.25L218.75 282.125L234.25 295.5L214.5 320L248.25 348.5Z",
        details: { number: "1307", type: "Corner 3BHK", sqft: "1900", balconySqft: "175", rooms: 3, washrooms: 3, floor: "Thirteenth Floor" },
      },
      {
        id: "1308",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/7.png",
        path: "M260.375 249.125L246.75 265.375L160.125 192.125L223.875 116.125L252.25 139.25L249.25 142.75L256.5 148.125L262.75 140.5L348.625 212.125L306.75 262.75L289.5 248.25L276.875 262.75L260.375 249.125Z",
        details: { number: "1308", type: "Compact Suite", sqft: "950", balconySqft: "60", rooms: 1, washrooms: 1, floor: "Thirteenth Floor" },
      },
      {
        id: "1309",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/8.png",
        path: "M162.652 192.845L120.229 242.827L40.7463 175.535L67.078 144.327L32.9443 117.02L71.2228 72.1582L60.2513 61.9181L101.943 13.6433L131.201 38.9998L140.709 27.2969L170.211 51.6781L167.529 55.3353L202.15 84.3488L195.567 91.1756L224.337 115.313L179.719 168.22L166 158L147 180.25L162.652 192.845Z",
        details: { number: "1309", type: "Penthouse Suite", sqft: "2500", balconySqft: "350", rooms: 4, washrooms: 4, floor: "Thirteenth Floor" },
      },
    ],
  },
  {
    title: "Fourteenth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/floor.png",
    pdfPath: "/downloadFloorPlan/14th floor.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: [
      {
        id: "1401",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/0.png",
        path: "M665.249 562.5L618.188 617.5L590.75 594.187L586.063 599.937L527.813 550.812L548.188 527.625L520.187 504.062L564.499 451.375L620.749 497.875L618.499 500.687L647.188 525.312L636.438 538.687L665.249 562.5Z",
        details: { number: "1401", type: "Sky Suite", sqft: "1650", balconySqft: "130", rooms: 3, washrooms: 3, floor: "Fourteenth Floor" },
      },
      {
        id: "1402",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/1.png",
        path: "M472.625 460.75L451.25 485.75L347.528 397.878L410.766 322.702L438.513 345.61L436.04 348.298L442.923 354.321L448.623 348.298L468.627 365.076L459.375 376.125L517.375 425.625L481.75 467.875L472.625 460.75Z",
        details: { number: "1402", type: "Club Suite", sqft: "1550", balconySqft: "115", rooms: 3, washrooms: 2, floor: "Fourteenth Floor" },
      },
      {
        id: "1403",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/2.png",
        path: "M226.25 116.25L121.25 240.75L42.5 173.5L68 142.75L35 114.75L74 71L62 61L102.75 12.25L133.25 39L142.5 28L171 51.75L168 56L202.75 84.25L196.25 91.5L226.25 116.25Z",
        details: { number: "1403", type: "Penthouse", sqft: "2200", balconySqft: "280", rooms: 4, washrooms: 4, floor: "Fourteenth Floor" },
      },
      {
        id: "1404",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/3.png",
        path: "M288.5 246.75L263 277L160.25 191.25L225.25 114.75L253.25 137.5L249.5 142L256.75 148.25L263 140.75L283 157.5L272 170.5L336.5 224.75L306.25 261.5L288.5 246.75Z",
        details: { number: "1404", type: "Executive Suite", sqft: "1400", balconySqft: "110", rooms: 2, washrooms: 2, floor: "Fourteenth Floor" },
      },
      {
        id: "1405",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/4.png",
        path: "M247.496 346.25L188.496 416.5L164.183 395.767L158.245 402.75L105.745 358.5L107.468 356.215L27.2453 288.751L34.5841 279.725L3.36599 252.86L46.2453 202.251L38.4397 196.021L52.2453 180.474L120.995 239.251L108.933 253.563L127.245 269.001L139.495 254.501L198.245 303.501L217.995 280.251L233.745 293.501L214.745 317.5L247.496 346.25Z",
        details: { number: "1405", type: "Garden Suite", sqft: "2300", balconySqft: "250", rooms: 4, washrooms: 4, floor: "Fourteenth Floor" },
      },
      {
        id: "1406",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/5.png",
        path: "M215.375 447.625L184.25 421.625L247.875 346L262.375 359.25L282.75 335.625L293.875 345.125L323.625 310.125L330.375 315.625L334.25 311L384.75 353.375L290.329 465.129L237.829 420.754L215.375 447.625Z",
        details: { number: "1406", type: "Standard 2BHK", sqft: "1300", balconySqft: "105", rooms: 2, washrooms: 2, floor: "Fourteenth Floor" },
      },
      {
        id: "1407",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/6.png",
        path: "M438.375 636.5L424.5 652.25L312 556.25L324.869 541.228L299.119 518.978L293.25 525.75L261 499.125L324.25 424.75L339.75 437.375L332.75 445.75L347.75 459.25L356.25 450L480.5 555.5L472.75 564.5L487.5 576.75L494.75 568.25L522.75 591.75L465.625 659.875L438.375 636.5Z",
        details: { number: "1407", type: "Premium 3BHK", sqft: "1850", balconySqft: "145", rooms: 3, washrooms: 3, floor: "Fourteenth Floor" },
      },
      {
        id: "1408",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/7.png",
        path: "M589.25 746L580.75 755.75L547.5 726.75L553.5 719.75L522.223 691.921L511.223 704.671L460.75 663.375L522.328 591.597L613.078 667.847L626 653.25L603.5 634.75L652.5 577.25L667.75 590L685.125 568.75L723 601.25L714.5 610.5L744.015 635.405L713.765 670.905L723 678.75L695.5 712.25L675.75 695.25L615.25 768.25L589.25 746Z",
        details: { number: "1408", type: "Corner Suite", sqft: "1950", balconySqft: "170", rooms: 3, washrooms: 3, floor: "Fourteenth Floor" },
      },
    ],
  },
  {
    title: "Terrace Floor",
    viewBox: "0 0 760 786",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/terrace/floor.png",
    pdfPath: "/downloadFloorPlan/lower terrace.pdf",
    features: ["Private Terrace", "Rooftop Swimming Pool"],
    units: [
      {
        id: "T-01",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/terrace/0.png",
        path: "M473.75 664.75L447 642.5L504 576L515.25 585.75L559 533L531.75 510.5L575.5 458.5L689.75 554L677.5 568.75L692.75 582.5L686.25 589.5L743.5 637.5L626 776.5L481.5 656.25L473.75 664.75Z",
        details: { number: "T-01", type: "Sky Lounge & Pool", sqft: "3500", balconySqft: "0", rooms: 0, washrooms: 4, floor: "Terrace Floor" },
      },
    ],
  },
  // Floor 2 to 12 use the typical layout
];

export const HERO_MARKERS = [
  {
    label: "Play Area", // Marker 1
    cx: 777.508,
    cy: 728.5,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={778.508} y1={759.309} x2={778.508} y2={816.809} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={777.508} cy={728.5} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={777.508} cy={728.5} r="30.2266" fill="none" stroke="white" strokeWidth="2" />
        {/* Icon Path */}
        <g>
          <path
            d="M783.578 716.299C785.059 715.51 786.848 715.569 788.286 716.433L789.038 716.885L791.91 718.61C793.215 719.227 793.82 720.748 793.296 722.093C792.875 723.174 791.84 723.846 790.733 723.846C790.463 723.846 790.19 723.806 789.919 723.722L786.793 722.754H786.793C784.212 723.687 785.642 729.295 785.689 729.497C785.689 729.499 785.689 729.501 785.689 729.501L787.727 737.356L788.814 741.547L784.18 742.327C783.661 737.258 779.379 733.304 774.172 733.304C768.967 733.304 764.684 737.258 764.166 742.327L759.531 741.547L760.618 737.356L762.656 728.093C763.274 725.707 765.635 724.201 768.056 724.66C770.076 725.042 772.125 725.233 774.172 725.233C774.31 725.233 774.447 725.233 774.584 725.23C774.627 725.23 774.67 725.229 774.713 725.228C776.149 725.205 777.584 725.087 779.008 724.875M765.545 738.186L760.618 737.356M787.727 737.356L782.8 738.186M779.008 724.875C779.008 720.244 781.453 717.432 783.578 716.299C785.059 715.51 786.848 715.569 788.286 716.433L789.038 716.885L791.48 713.422L790.462 712.81C787.758 711.186 784.358 711.094 781.591 712.569C779.572 713.645 777.961 715.25 776.801 717.34C775.984 718.812 775.413 720.505 775.091 722.401C775.091 722.401 774.867 723.869 774.713 725.228M759.531 723.891V722.589C759.531 721.422 760.477 720.476 761.644 720.476C762.228 720.476 762.756 720.712 763.139 721.095C763.521 721.477 763.758 722.006 763.758 722.589V726.079M774.172 741.237V733.304M779.953 745.477H768.392V744.077C768.392 742.509 769.663 741.238 771.231 741.238H777.114C778.682 741.238 779.953 742.509 779.953 744.077V745.477Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </>
    ),
  },
  {
    label: "Leisure Areas", // Marker 2
    cx: 852.734,
    cy: 757.039,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={853.734} y1={787.848} x2={853.734} y2={845.348} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={852.734} cy={757.039} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={852.734} cy={757.039} r="30.2266" fill="none" stroke="white" strokeWidth="2" />
        {/* Icon Path */}
        <g>
          <path
            d="M852.917 749.212V773.199M852.597 757.655L849.847 754.905M853.429 761.11L856.915 757.623M852.917 742.367C849.487 742.367 846.681 745.174 846.681 748.604V748.867C844.043 748.061 841.335 750.027 841.335 752.823C841.335 754.597 842.451 756.11 844.02 756.698C842.633 757.766 841.738 759.443 841.738 761.329C841.738 764.556 844.354 767.171 847.58 767.171C849.432 767.171 851.083 766.309 852.153 764.964C852.662 765.027 853.173 765.027 853.681 764.964C854.752 766.309 856.402 767.171 858.254 767.171C861.481 767.171 864.096 764.556 864.096 761.329C864.096 759.443 863.202 757.766 861.814 756.698C863.383 756.11 864.5 754.597 864.5 752.823C864.5 750.027 861.792 748.061 859.154 748.867V748.604C859.154 745.174 856.347 742.367 852.917 742.367Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="22.926"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </>
    ),
  },
  {
    label: "Badminton Court", // Marker 3
    cx: 736.281,
    cy: 802.957,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={737.281} y1={833.766} x2={737.281} y2={891.266} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={736.281} cy={802.957} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={736.281} cy={802.957} r="30.2266" fill="none" stroke="white" strokeWidth="2" />
        {/* Icon Path */}
        <g>
          <path
            d="M733.603 801.796L736.477 796.027M741.031 808.159L748.269 804.221C748.795 803.92 749.268 803.508 749.652 802.991C751.145 800.982 750.726 798.143 748.717 796.65C747.63 795.843 746.301 795.595 745.073 795.855C744.967 794.605 744.346 793.404 743.259 792.596C742.173 791.789 740.844 791.541 739.616 791.801C739.51 790.551 738.889 789.35 737.802 788.543C735.793 787.05 732.954 787.469 731.462 789.478C731.077 789.995 730.82 790.567 730.684 791.157L729.004 799.224M741.934 800.081L737.241 804.498M727.314 814.061C724.3 811.822 723.672 807.564 725.911 804.55C726.657 803.545 728.076 803.336 729.081 804.082L736.357 809.488C737.362 810.234 737.571 811.653 736.825 812.658C734.586 815.672 730.328 816.3 727.314 814.061Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </>
    ),
  }
];


export const FLOOR_PATHS = [
  {
    id: 0,
    d: "M340.75 944.367V908.367L494.5 961.867L728.75 833.117L494.5 1004.12L340.75 944.367Z",
  },
  {
    id: 1,
    d: "M339.5 875.617L340.5 908.617L493.75 962.117L727.75 833.617V805.617L493.75 925.117L339.5 875.617Z",
  },
  {
    id: 2,
    d: "M340.5 848.867V875.867L493.5 925.367L728.5 805.367V783.867L497.5 893.367L340.5 848.867Z",
  },
  {
    id: 3,
    d: "M339.5 810.617L340.5 848.617L497.5 893.117L728.5 784.117L729.5 752.617L496.5 855.117L339.5 810.617Z",
  },
  {
    id: 4,
    d: "M338.5 773.617L339.5 810.617L496.5 855.117L729.5 753.117L730.5 721.617L496.5 815.117L338.5 773.617Z",
  },
  {
    id: 5,
    d: "M338.5 736.367V773.367L496.5 814.867L730.5 721.867L731.5 690.367L496.5 774.867L338.5 736.367Z",
  },
  {
    id: 6,
    d: "M337.5 699.367L338.5 736.367L496.5 774.867L731.5 690.867L732.5 654.367L496.5 730.867L337.5 699.367Z",
  },
  {
    id: 7,
    d: "M336.5 663.367L337.5 699.367L496.5 730.867L733.5 653.867L734.5 622.367L496.5 690.867L336.5 663.367Z",
  },
  {
    id: 8,
    d: "M335.5 627.367L336.5 663.367L496.5 690.867L734.5 622.867L735.5 591.367L496.5 646.867L335.5 627.367Z",
  },
  {
    id: 9,
    d: "M334.5 591.367L335.5 627.367L496.5 646.867L735.5 591.867L736.5 558.367L496.5 602.867L334.5 591.367Z",
  },
  {
    id: 10,
    d: "M333.5 555.117L334.5 591.117L496.5 602.617L736.562 558.305L738.25 525.617L496.5 565.617L333.5 555.117Z",
  },
  {
    id: 11,
    d: "M332.875 508.117L333.5 555.242L495.875 565.617L737.875 525.617L738.875 490.117L495.875 521.617L332.875 508.117Z",
  },
  {
    id: 12,
    d: "M332.074 472.139L332.875 508.115L495.875 521.252L738.875 489.627L740.25 454.002L495.875 477.252L332.074 472.139Z",
  },
  {
    id: 13,
    d: "M330.625 426.867L331.875 472.117L495.875 477.254L740.25 453.867L741.75 418.117L495.875 427.254L330.625 426.867Z",
  },
  {
    id: 14,
    d: "M329.625 385.867L330.875 427.117L495.875 427.254L741.75 418.117L743.25 387.254H495.875L329.625 385.867Z",
  },
  {
    id: 15,
    d: "M328.625 342.867L329.875 386.117L495.875 387.254L742.75 387.117L744.25 349.254L495.875 340.254L328.625 342.867Z",
  },
  {
    id: 16,
    d: "M326.625 299.867L328.5 342.867L495.875 340.254L744.75 349.117L746.25 313.254L495.875 293.254L326.625 299.867Z",
  },
  {
    id: 17,
    d: "M324.625 252.867L326.5 299.867L495.875 293.254L745.75 313.117L747.25 279.254L495.875 246.254L324.625 252.867Z",
  },
  {
    id: 18,
    d: "M399.125 181.742L461 221.617L493.764 218.983L492.24 216.538L492.017 211.834L570.758 204.134L625.219 212.811V217.367L622.933 218.016L623.022 236.92L724.249 253.254L722.75 256.367L763.875 264.367L751 276.867L747.375 279.242L743.25 278.617L495.874 246.254L318.499 252.867L318.042 251.699L313.649 251.478L311.694 250.134L308.686 249.739L308.289 247.325L306.877 245.296L303.686 245.277L303.629 242.62L318.213 241.346L318.326 235.188L327.475 235.028L379.5 177.492L399.125 181.742Z",
  }
];

// ViewBox reflecting the SVG header: viewBox="0 0 1728 1048"
export const FLOOR_PATHS_VIEWBOX = "0 0 1728 1048";