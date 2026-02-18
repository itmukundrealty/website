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
    label: "Play Area",
    cx: 152.688,
    cy: 865.096,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={152.688} y1={865.096 + 30} x2={152.688} y2={865.096 + 90} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={152.688} cy={865.096} r="31" fill="white" opacity="0.5" stroke="white" strokeWidth="0.5" />
        <circle cx={152.688} cy={865.096} r="30" fill="none" stroke="white" strokeWidth="2" />
        {/* Icon Path */}
        <g transform={`translate(${152.688 - 31.5}, ${865.096 - 31.5})`}>
          <path
            d="M37.2976 19.0258C38.7783 18.2362 40.5675 18.296 42.0052 19.1597L42.7568 19.6112L45.6294 21.3363C46.934 21.9541 47.539 23.4749 47.015 24.8196C46.5944 25.9009 45.5589 26.5722 44.4523 26.5722C44.1825 26.5722 43.9092 26.5327 43.6387 26.4489L40.5125 25.4803H40.5118C37.9316 26.4137 39.3608 32.0215 39.408 32.2237C39.408 32.2258 39.4087 32.2272 39.4087 32.2279L41.4466 40.0828L42.5335 44.2733L37.8992 45.0538C37.3807 39.9849 33.0979 36.0303 27.8916 36.0303C22.6861 36.0303 18.4033 39.9849 17.8848 45.0538L13.2505 44.2733L14.3374 40.0828L16.3753 30.8191C16.9937 28.4339 19.3542 26.9279 21.7753 27.3865C23.7955 27.769 25.844 27.9599 27.8916 27.9599C28.029 27.9599 28.1663 27.9592 28.3037 27.957C28.3467 27.9563 28.3896 27.9556 28.4326 27.9549C29.8682 27.9317 31.3031 27.8141 32.7274 27.602M19.2647 40.9127L14.3373 40.0829M41.4465 40.0829L36.5192 40.9127M32.7274 27.602C32.7274 22.9702 35.1724 20.1585 37.2976 19.0258C38.7783 18.2362 40.5675 18.296 42.0052 19.1597L42.7568 19.6112L45.1996 16.149L44.1811 15.5369C41.4769 13.9125 38.0774 13.8202 35.3098 15.296C33.2916 16.3716 31.6806 17.9762 30.5205 20.0662C29.7034 21.5385 29.1321 23.2312 28.8102 25.1274C28.8102 25.1274 28.5862 26.5954 28.4326 27.9549M13.2505 26.6173V25.3155C13.2505 24.1483 14.1965 23.2023 15.3637 23.2023C15.947 23.2023 16.4753 23.4389 16.8578 23.8214C17.2403 24.2039 17.477 24.7322 17.477 25.3155V28.8052M27.8917 43.964V36.0302M33.6727 48.2031H22.1113V46.8032C22.1113 45.2353 23.3823 43.9642H24.9503C26.5183 43.9642 27.7894 45.2353 27.7894 46.8032V48.2031Z"
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
    label: "Leisure Areas",
    cx: 479.516,
    cy: 877.477,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={479.516} y1={877.477 + 30} x2={479.516} y2={877.477 + 90} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={479.516} cy={877.477} r="31" fill="white" opacity="0.5" stroke="white" strokeWidth="0.5" />
        <circle cx={479.516} cy={877.477} r="30" fill="none" stroke="white" strokeWidth="2" />
        {/* Icon Path */}
        <g transform={`translate(${479.516 - 31.5}, ${877.477 - 31.5})`}>
          <path
            d="M31.4104 23.3993V47.3867M31.0906 31.8429L28.34 29.0923M31.9222 35.297L35.4083 31.8109M31.4104 16.5549C27.9802 16.5549 25.1737 19.3614 25.1737 22.7916V23.0546C22.536 22.2489 19.8277 24.2144 19.8277 27.0107C19.8277 28.7846 20.9445 30.2975 22.5134 30.8851C21.126 31.9531 20.2316 33.6303 20.2316 35.5167C20.2316 38.7431 22.8471 41.3586 26.0734 41.3586C27.9256 41.3586 29.5761 40.4964 30.6464 39.1519C31.1548 39.2147 31.666 39.2147 32.1744 39.1519C33.2447 40.4964 34.8953 41.3586 36.7475 41.3586C39.9738 41.3586 42.5893 38.7431 42.5893 35.5167C42.5893 33.6303 41.695 31.9531 40.3075 30.8851C41.8763 30.2975 42.9932 28.7846 42.9932 27.0107C42.9932 24.2144 40.2848 22.2489 37.6472 23.0546V22.7916C37.6472 19.3614 34.8406 16.5549 31.4104 16.5549Z"
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
    label: "Badminton Court",
    cx: 875.064,
    cy: 848.727,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={875.064} y1={848.727 + 30} x2={875.064} y2={848.727 + 90} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={875.064} cy={848.727} r="31" fill="white" opacity="0.5" stroke="white" strokeWidth="0.5" />
        <circle cx={875.064} cy={848.727} r="30" fill="none" stroke="white" strokeWidth="2" />
        {/* Icon Path */}
        <g transform={`translate(${875.064 - 31.5}, ${848.727 - 31.5})`}>
          <path
            d="M28.5478 30.0651L31.422 24.2961M35.9758 36.4283L43.2144 32.4904C43.7397 32.1895 44.2129 31.7778 44.597 31.2607C46.0897 29.2515 45.6709 26.4127 43.6616 24.92C42.575 24.1128 41.2458 23.8646 40.0181 24.1247C39.9126 22.8741 39.2911 21.6732 38.2045 20.866C37.1179 20.0588 35.7887 19.8106 34.561 20.0707C34.4555 18.8202 33.834 17.6193 32.7474 16.812C30.7382 15.3194 27.8994 15.7382 26.4067 17.7474C26.0226 18.2645 25.7651 18.8364 25.6287 19.4263L23.9488 27.4936M36.8791 28.3501L32.1859 32.7677M22.2589 42.3306C19.245 40.0917 18.6168 35.8334 20.8557 32.8195C21.602 31.8149 23.0215 31.6055 24.0261 32.3518L31.3022 37.7571C32.3068 38.5034 32.5162 39.9229 31.7699 40.9275C29.531 43.9414 25.2727 44.5696 22.2589 42.3306Z"
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
];


export const FLOOR_PATHS = [
  {
    id: 0,
    d: "M186.977 910.097V964.097H629.5V953H746.5V980.598H792.478V891.098H816.478V882.098L661 876.75L370.478 890.098V894.098L168.978 903.5L168.977 910.097H186.977Z",
  },
  {
    id: 1,
    d: "M187.5 871.5V902.5L370 894.25V890L415.5 887.5L669 877L777.75 880L837 881.5V850.75H847.5V847.75H841V844L803 842.75V839L669 831L595.472 836V838.095L535.5 840.25V844.875H504.5L465.375 845.625V849.875L415.5 852.75V859.5H366L332.5 861.5L302.75 864.75H284.25L262.75 866L236 867.5L221.75 869.5L187.5 871.5Z",
  },
  {
    id: 2,
    d: "M187.5 836.748V871.248L220.625 869.373L262.25 865.748L302.625 864.623L332 861.248L365.75 859.373H415.125V852.623L455.25 850.248L464.75 849.623V845.498L535.5 844.748V840.498L595.75 837.748V835.998L669 831.248L778 836.998L802.75 838.248V842.248L840.25 843.748V828.498H835.75V806.498H849.75V802.498H835.75H827.875V796.123H802.75L803.625 792.123L669.625 780.373L595.75 788.248V790.623L535.5 794.748V798.623L504.625 796.998L464.75 800.998V806.873H446.375L414.375 809.998V819.498H365.75L332 822.873L301 829.373L284.375 828.248L262.25 829.373L227 833.873L220.625 833.248L187.5 836.748Z",
  },
  {
    id: 3,
    d: "M187.5 803V836.625L220.625 833.125L227.625 833.75L262.25 829.125L283.625 828.125L301.625 829.125L332 822.75L365.75 819.375H414.375V809.875L446.25 806.875H455.625H464.75V800.875L504.75 797L535.5 798.748V795L595.75 790.5V788.25L669.75 780.375L778.125 789.75L802.75 791.875V796.248H840.25V782.498H835.75V761.875L849.75 762.375V760.125H840.75V756.498H827.875V750.123H803.625V746.75L817.25 747.375V741.625L702.125 731.625H695.75L669.75 729.25L595.75 739.25V741.75L535.5 748.748V752.623H504.75L464.75 756.625V760.873H455.625V763.998L414.375 767.75V780H365.75L332 784.125L301.625 790.375L283.625 789.5L262.25 792L228.5 797.125V799.75L220.625 799L187.5 803Z",
  },
  {
    id: 4,
    d: "M187.5 769.625V803L220.5 799L228.438 799.688V797.125L261.25 792.062L283.438 789.5L301.688 790.312L332.125 784.125L365.75 779.969L414.375 780.125V767.781L455.625 763.875V760.875H464.75V756.625L504.25 752.875L535.5 752.25V748.75L595.75 741.75V739.25L669.75 729.25L778.125 737.75L803.625 740.25L817.25 741.75V747H803.625V750.5H827.875V756H840.25V740.25H835.75V730.498V714H840.25V711.375H827.875V699.875L817.25 699.25V689.625L702.375 677.25L695.75 679.625L669.75 681.125L595.75 692.625V697L535.5 704.875V708.375L504.25 707.5L464.75 713.375V715.5L455.625 716V719.625L414.375 726.375V743.875L365.75 741.875L332.125 746.375L301 752.125H283.438L261.875 755.625L228.438 761V764.875H220.5L187.5 769.625Z",
  },
  {
    id: 5,
    d: "M187.5 735.625V769.5L220.5 765H228.438V760.875L261.875 755.625L283.438 752.312H301.688L332.125 746.125L365.75 741.969L414.375 743.625V726.375L455.625 719.75V716L464.75 715.5V713.5L504.094 707.5L535.5 708.375V704.812L595.75 696.938V692.625L669.75 681.062L695.75 679.75L702.375 677.25L817.25 689.625V699.25L827.875 699.812V704.5V711.312H840.25V696.625H835.75V692.498V676H840.25L842 673.375H827.875V661.875H814.25V654.625L702.375 639.25L695.75 641L669.75 629.25L595.75 644.25V648.75L535.5 658.5V663H505.25L464.75 670.75V675.25H455.625V677L414.375 686.75V705.875L365.75 703.875L332.125 708.375L301.688 717.625L283.438 714.125L261.875 719.75L228.438 726.375V729.75H220.5L187.5 735.625Z",
  },
  {
    id: 6,
    d: "M187.5 701.5V735.5L220.25 729.875H228.438V726.25L261.75 719.625L283.375 714L301.688 717.75L332.125 708.375L365.75 704L414.375 705.938V686.812L455.625 676.875V675.188H464.75V670.75L505.188 663.062L535.5 662.75V658.5L595.75 648.625V644.125L670.125 629L696 641L702.375 639L814.25 654.5V661.625H827.875V669.25V673.25H841V653.125H835.75V627H840.25L842 624.375H827.875V612.875H814.25V605.625L702.375 590.25L695.75 592L670.125 575.875L595.75 594V596.75L535.5 610.75V617.625H504.25L455.625 628.625V632.625L414.375 643.625V664.25L365.75 661.5L332.875 668.375V674L301.688 682L284 679.875L261.75 683.875L228.438 690.75V693.625H220.25L187.5 701.5Z",
  },
  {
    id: 7,
    d: "M187.5 666.625V701.5L220.25 693.875H228.438V690.75L262.062 683.75L283.938 679.812L301.812 681.938L332.875 674V668.312L365.812 661.5L414.375 664.25V643.562L455.625 632.625V628.625L504.125 617.625H535.5V610.688L595.75 596.812V593.875L670.062 575.875L695.875 592.062L702.438 590.188L814.25 605.625V613H827.875V624.25H841V611.125H835.75V590.938L845.188 587.438V585.25L841 582.375L827.875 579.75V575.125L814.25 574L803.5 572.75V560.5L702.438 542.75L695.875 544.75L670.062 527.5L595.75 548.25L535.5 562V572L504.125 569.25L455.625 582V590.625L414.375 600.75V628.625L365.812 622.25L332.875 630.875V633.75L302 642.75L283.938 641L262.062 645.25L228.438 653.875V659.25L220.25 658.25L187.5 666.625Z",
  },
  {
    id: 8,
    d: "M187.5 632.375V666.625L220.25 658.25L228.438 659V653.875L262.062 645.25L283.938 640.812L301.812 642.938L332.875 634V630.75L365.812 622.375L414.375 628.5V600.75L455.625 590.875V582.125L504.125 569.25L535.5 572.125V561.875L595.75 548.125L669.875 527.375L695.875 544.75L702.438 542.75L803.5 560.5V573L827.875 575.25V579.5L841 582.125V571.125H835.75V549L849.125 546.375V542.375L835.75 538.75L827.875 537.5V527.125L814.25 526L803.5 524.75V511.5L702.438 493.75L695.875 495.75L669.25 476.625L595.75 498.375V500.25L535.5 517.625V532L504.125 529.25L455.625 542V547.75L414.375 559.75V587.75L365.812 583.25L332.875 592.75V598.375L301.812 606.5L283.75 604.75L262.062 610.625L228.438 619.25V624.625L220.25 623.625L187.5 632.375Z",
  },
  {
    id: 9,
    d: "M187.5 598.25V632L220.25 623.625L228.438 624.5V619.375L262.062 610.517L284.375 604.625L301.812 606.375L332.875 598.25V592.75L365.625 583.125L414.375 587.5V559.75L455.625 547.875V541.125L504.125 529.25L535.5 532.125V517.5L595.75 500.75V498.75L669.25 476.75L695.875 495.75L702.438 493.75L803.5 511.5V525.125L827.875 526.875V537.125L835.75 538.75L841 536.375V524L835.75 522.125V506.375L849.125 503.625V501.375L835.75 498.125L827.875 497V481H814.75L803.5 475.75V467.5L702.438 444.75L695.875 446.75L669.25 427.625L595.75 449.375V451.25L535.5 468.625V483L504.125 480.25L455.625 495.375V505.375L414.375 519.25V546.875L365.625 544.25L332.157 554.75V559.976L301.812 569.5L282.5 567.5L260.812 573.375L228.438 582.125V587.5H220.25L187.5 598.25Z",
  },
  {
    id: 10,
    d: "M187.5 561.25V598.375L220.25 587.5H228.438V582.125L261.875 573.125L282.5 567.625L301.812 569.375L332.157 560V554.875L365.625 544.375L414.375 546.75V519.375L455.625 505.375V495.25L504.125 480.5L535.5 483V468.5L595.75 451.25V449.375L669.25 427.75L695.875 446.875L702.438 444.625L803.5 467.375V475.75L814.75 480.875H827.875V496.875L835.75 498.125L841 499.375V481.75L835.75 480.875V464.5L849.125 461V457L835.75 452.625L827.875 450.25V444H814.75L803.5 438.75V421L702.438 397.875L695.875 399.875L669.25 376.5L595.75 399.875V414.25L535.5 431.625V446L504.125 443.25L455.625 458.375V468.375L414.375 482.25V509.875L365.625 507.25L332.157 517.75V522.976L301.812 532.5L282.5 530.5L260.812 536.375L228.438 545.125V550.5H220.25L187.5 561.25Z",
  },
  {
    id: 11,
    d: "M187.5 531.25V561.375L220.25 550.5H228.438V545.125L261.875 536.125L282.5 530.625L301.812 532.375L332.157 523V517.875L365.625 507.375L414.375 509.75V482.375L455.625 468.375V458.25L504.125 443.5L535.5 446V431.5L595.75 414.25V399.5L669.25 376.75L695.875 399.5L702.438 398L803.5 421.25V438.625L814.75 443.875H827.875V450.5L841 454.25V438H835.75V421.25L849.125 417.125L835.75 414L827.875 411.5V406.5L814.75 404.75L803.5 390.75V373L702.438 346.75L695.875 348.75L669.25 324.25L595.75 348.75V359.5L566 369.25L535.5 380.25V387.75H504.125L497.25 390.75V394.5L454.375 409V419L414.375 433.5V467.25L392.75 462.5L365.625 468.375L332.157 478.75V485L301.812 494.25V499L282.5 496.5V501.377H261.875L256 503.75V506.25L228.438 515.875L220.25 518.125L187.25 531.25Z",
  },
  {
    id: 12,
    d: "M841 408.25L846 416L827.5 411V406.5L814.25 404.25L803.5 389V372.5L702.75 347L696.75 348.75L669.25 324.5L595.5 348.75V359.75L535.5 380V387.5H505L496.75 390.25V395L454.5 409V419L415 434V468.25L391.75 463L365.25 468.25L332.25 479.5V485L301.75 494.75L303 498.75L282.5 496V501.5H261.25L256.5 503.75V506.5L215.75 520L187.25 531.375V545.5L184.25 544V496H187.25L209 490.25V482.5H233.5L244.75 479.5V472.5L256.5 468.25V464.25L262.5 461.5H274.25V456.25L278.75 454.5L303 457.75V438.5L327.5 440.5L367 424.75H372L391.75 417L415 420.5V380.375L417.5 379.625H423.5V371.5L447.75 374L483 363.5V356L480.25 354.5V351.75L505 344.25L528 335.25L534.25 333.5H539.75L557.75 327.5V316L669.25 274.75L696.75 300.5H702.75L780.75 321.25L803.5 327.75V361L815.75 364.5L835.75 365.75L849.25 370V375L835.75 379V395H841V408.25Z",
  },
  {
    id: 13,
    d: "M184.25 473.25V495.5H187.5L209.25 489.75V483H233.25L244.5 479.25V473.25L256.5 468V464L262.25 461.5H274V456L277.5 454.5L304 457.25V438.25L327.75 440.75L366.25 424.25H372.75L392.5 417L414.75 420.25V380L418.25 379L423.75 380V371.25L446.75 373.75L482.5 363.75V356.25L480 354.25V352.25L504.5 344L533.25 333.5H541.5L558.25 328V315.75L669.75 275L696.75 300.25H702.5L803.5 327.75V360.5L816 364.5L842 367.25L840.25 351.5H836V336.5L849 330.5L840.25 324.5V309L836 307.75V300.25L804.75 290L812.75 283.75V278L794.75 272.5V258.25L669.25 222.25L558.25 268V273.75L541.5 279.75L531.75 278.25L414.75 325.25V373.75L392.5 372.5L375.25 379H366.25L301.25 402.75V418.5L277.5 415.5L204.25 444.75V459.25L193.75 463L187.5 471L184.25 473.25Z",
  },
  {
    id: 14,
    d: "M817.5 212L667.25 162.25H661.5L541.25 213.25V218.75L403.75 278V287.25L406.75 303.625V313.875L413.911 316.785V330.438L404.111 329.706L381.25 328L194 408.08V415.75L211.75 419V431.625L181.25 444V449.042H186.75V470.946H187.653L194 463.25L204.5 458.75V444.711L277.5 415.75L301.75 418.25V403L366.75 378.75H375.75L392.25 372.25L414.75 373.5V325.5L532.5 278L541.25 279.75L558 273.75V268L669.75 222.25L795.5 258.25V272.5L812.5 278.25V283L805.5 290.25L830.5 298.75V295.75L852.5 287.5V276L810.75 262.5L813.75 258.25V250.75L810.75 245.75L788.5 237.75L817.5 226V212Z",
  },
  {
    id: 15,
    d: "M382 327.25L413.5 330.407V316.75L406.75 313.5V304.25L421.625 297.625V292.75H417L414.75 295.25L357.5 320.5V327.25L366.25 329.5V332.5L328.75 326L215 376.25V398.75L382 327.25Z M484.25 242.75L407.5 275.5V260L400.25 257.5V250.25L443 230.5L484.25 242.75Z",
  },
  {
    id: 16,
    d: "M181.5 431.5V442.5L211.75 431.222V419L181.5 431.5Z",
  },
];

export const FLOOR_PATHS_VIEWBOX = "0 0 1728 1048";