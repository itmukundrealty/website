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
    d: "M253 695.853V721L401.765 714.308V710.86L438.855 708.832L645.495 700.315L734.143 702.748L782.441 703.965V679.021H791V676.587H785.702V673.545L754.726 672.531V669.49L645.495 663L585.559 667.056V668.755L536.673 670.503V674.255H511.403L479.51 674.864V678.311L438.855 680.643V686.119H398.505L371.197 687.741L346.946 690.378H331.866L314.34 691.392L292.535 692.608L280.919 694.231L253 695.853Z",
  },
  {
    id: 1,
    d: "M253 668.286V696L280.01 694.494L313.951 691.582L346.873 690.678L370.826 687.967L398.345 686.461H438.606V681.039L471.324 679.131L479.07 678.629V675.315L536.76 674.713V671.298L585.888 669.089V667.684L645.616 663.868L734.495 668.487L754.676 669.491V672.704L785.254 673.909V661.659H781.584V643.986H793V640.773H781.584H775.163V635.652H754.676L755.39 632.439L646.126 623L585.888 629.326V631.234L536.76 634.547V637.66L511.584 636.355L479.07 639.568V644.287H464.087L437.994 646.798V654.429H398.345L370.826 657.14L345.548 662.362L331.992 661.458L313.951 662.362L285.208 665.977L280.01 665.475L253 668.286Z",
  },
  {
    id: 2,
    d: "M253 640.069V667L280.01 664.197L285.718 664.697L313.951 660.993L331.381 660.192L346.058 660.993L370.826 655.887L398.345 653.184H437.994V645.575L463.985 643.172H471.63H479.07V638.367L511.686 635.263L536.76 636.663V633.661L585.888 630.057V628.255L646.228 621.948L734.597 629.456L754.676 631.158V634.661H785.254V623.648H781.584V607.13L793 607.531V605.729H785.661V602.824H775.163V597.718H755.39V595.016L766.499 595.517V590.912L672.626 582.902H667.428L646.228 581L585.888 589.009V591.012L536.76 596.617V599.72H511.686L479.07 602.925V606.328H471.63V608.831L437.994 611.836V621.647H398.345L370.826 624.951L346.058 629.957L331.381 629.256L313.951 631.258L286.431 635.363V637.466L280.01 636.865L253 640.069Z",
  },
  {
    id: 3,
    d: "M253 613.928V641L279.895 637.755L286.365 638.313V636.235L313.107 632.128L331.19 630.05L346.064 630.709L370.871 625.69L398.276 622.319L437.906 622.445V612.433L471.525 609.264V606.831H478.962V603.384L511.155 600.342L536.625 599.835V596.996L585.729 591.318V589.29L646.04 581.179L734.367 588.074L755.15 590.101L766.255 591.318V595.577H755.15V598.416H774.914V602.877H785V590.101H781.332V582.191V568.809H785V566.68H774.914V557.352L766.255 556.845V549.038L672.63 539L667.231 540.926L646.04 542.143L585.729 551.471V555.02L536.625 561.408V564.247L511.155 563.537L478.962 568.302V570.026L471.525 570.431V573.372L437.906 578.847V593.042L398.276 591.419L370.871 595.07L345.504 599.734H331.19L313.617 602.573L286.365 606.932V610.076H279.895L253 613.928Z",
  },
  {
    id: 4,
    d: "M253 585.707V613L279.924 609.374H286.4V606.051L313.682 601.821L331.274 599.152H346.164L370.998 594.167L398.432 590.818L438.105 592.152V578.254L471.761 572.916V569.895L479.206 569.492V567.881L511.306 563.046L536.93 563.751V560.881L586.087 554.536V551.061L646.463 541.746L667.676 540.688L673.081 538.674L766.807 548.644V556.399L775.476 556.852V560.629V566.118H785.572V554.284H781.901V550.959V537.667H785.572L787 535.552H775.476V526.286H764.359V520.445L673.081 508.057L667.676 509.467L646.463 500L586.087 512.086V515.711L536.93 523.567V527.193H512.249L479.206 533.437V537.062H471.761V538.472L438.105 546.328V561.737L398.432 560.126L370.998 563.751L346.164 571.204L331.274 568.384L313.682 572.916L286.4 578.254V580.973H279.924L253 585.707Z",
  },
  {
    id: 5,
    d: "M253 558.523V586L279.72 581.454H286.4V578.525L313.58 573.171L331.223 568.625L346.164 571.655L370.998 564.079L398.432 560.543L438.105 562.109V546.653L471.761 538.623V537.259H479.206V533.673L512.198 527.46L536.93 527.208V523.773L586.087 515.792V512.156L646.769 499.933L667.88 509.63L673.081 508.014L764.359 520.54V526.298H775.476V532.46V535.693H786.184V519.429H781.901V498.316H785.572L787 496.195H775.476V486.901H764.359V481.042L673.081 468.617L667.676 470.031L646.769 457L586.087 471.648V473.87L536.93 485.184V490.74H511.433L471.761 499.63V502.862L438.105 511.752V528.42L398.432 526.197L371.61 531.753V536.299L346.164 542.764L331.733 541.047L313.58 544.28L286.4 549.836V552.159H279.72L253 558.523Z",
  },
  {
    id: 6,
    d: "M253 530.739V559L279.641 552.821H286.301V550.289L313.653 544.616L331.448 541.426L345.988 543.148L371.256 536.716V532.107L398.049 526.586L437.553 528.815V512.051L471.108 503.188V499.946L510.561 491.032H536.083V485.411L585.094 474.167V471.787L645.543 457.2L666.541 470.318L671.879 468.798L762.834 481.308V487.284H773.917V496.401H784.594V485.765H780.323V469.406L788 466.57V464.797L784.594 462.468L773.917 460.341V456.593L762.834 455.681L754.089 454.668V444.741L671.879 430.358L666.541 431.978L645.543 418L585.094 434.815L536.083 445.957V454.06L510.561 451.832L471.108 462.164V469.153L437.553 477.358V499.946L398.049 494.78L371.256 501.769V504.099L346.141 511.392L331.448 509.974L313.653 513.418L286.301 520.407V524.763L279.641 523.953L253 530.739Z",
  },
  {
    id: 7,
    d: "M253 503.239V531L279.68 524.212L286.35 524.82V520.666L313.743 513.675L331.564 510.078L346.126 511.801L371.431 504.557V501.922L398.264 495.134L437.826 500.099V477.607L471.431 469.603V462.511L510.942 452.075L536.502 454.405V446.097L585.585 434.953L645.972 418.134L667.153 432.217L672.499 430.596L754.831 444.983V455.114L774.688 456.938V460.383L785.381 462.511V453.595H781.104V435.662L792 433.534V430.292L781.104 427.354L774.688 426.341V417.932L763.589 417.02L754.831 416.007V405.267L672.499 390.88L667.153 392.501L645.463 377L585.585 394.629V396.149L536.502 410.232V421.883L510.942 419.654L471.431 429.988V434.649L437.826 444.375V467.07L398.264 463.422L371.431 471.122V475.682L346.126 482.267L331.411 480.849L313.743 485.611L286.35 492.601V496.958L279.68 496.147L253 503.239Z",
  },
  {
    id: 8,
    d: "M253 474.752V502L279.68 495.239L286.35 495.945V491.807L313.743 484.656L331.92 479.899L346.126 481.312L371.431 474.752V470.312L398.111 462.541L437.826 466.073V443.67L471.431 434.083V428.633L510.942 419.046L536.502 421.367V409.56L585.585 396.037V394.422L645.463 376.661L667.153 392L672.499 390.385L754.831 404.716V415.716L774.688 417.128V425.404L781.104 426.716L785.381 424.798V414.807L781.104 413.294V400.578L792 398.358V396.541L781.104 393.917L774.688 393.009V380.092H763.996L754.831 375.853V369.193L672.499 350.826L667.153 352.44L645.463 337L585.585 354.56V356.073L536.502 370.101V381.706L510.942 379.486L471.431 391.697V399.771L437.826 410.972V433.275L398.111 431.156L370.846 439.633V443.852L346.126 451.541L330.393 449.927L312.725 454.67L286.35 461.734V466.073H279.68L253 474.752Z",
  },
  {
    id: 9,
    d: "M253 445.049V475L279.68 466.226H286.35V461.89L313.59 454.629L330.393 450.192L346.126 451.604L370.846 444.041V439.906L398.111 431.435L437.826 433.351V411.266L471.431 399.971V391.803L510.942 379.903L536.502 381.92V370.222L585.585 356.305V354.793L645.463 337.346L667.153 352.776L672.499 350.961L754.831 369.314V376.071L763.996 380.206H774.688V393.114L781.104 394.122L785.381 395.131V380.912L781.104 380.206V366.995L792 364.171V360.944L781.104 357.415L774.688 355.499V350.456H763.996L754.831 346.221V331.901L672.499 313.245L667.153 314.858L645.463 296L585.585 314.858V326.455L536.502 340.473V352.07L510.942 349.851L471.431 362.054V370.121L437.826 381.315V403.602L398.111 401.484L370.846 409.955V414.171L346.126 421.855L330.393 420.241L312.725 424.981L286.35 432.04V436.376H279.68L253 445.049Z",
  },
  {
    id: 10,
    d: "M253 421.608V446L279.68 437.195H286.35V432.842L313.59 425.555L330.393 421.102L346.126 422.519L370.846 414.928V410.778L398.111 402.276L437.826 404.199V382.034L471.431 370.698V362.5L510.942 350.557L536.502 352.581V340.84L585.585 326.873V314.93L645.463 296.509L667.153 314.93L672.499 313.715L754.831 332.541V346.609L763.996 350.86H774.688V356.225L785.381 359.261V346.103H781.104V332.541L792 329.201L781.104 326.671L774.688 324.646V320.598L763.996 319.181L754.831 307.845V293.473L672.499 272.218L667.153 273.838L645.463 254L585.585 273.838V282.542L561.349 290.436L536.502 299.343V305.416H510.942L505.341 307.845V310.881L470.413 322.622V330.719L437.826 342.46V369.787L420.209 365.941L398.111 370.698L370.846 379.099V384.159L346.126 391.649V395.495L330.393 393.471V397.42H313.59L308.804 399.341V401.365L286.35 409.159L279.68 410.98L253 421.608Z",
  },
  {
    id: 11,
    d: "M785.276 321.49L789.351 327.73L774.273 323.705V320.081L763.474 318.27L754.712 305.991V292.705L672.597 272.174L667.707 273.583L645.293 254.057L585.184 273.583V282.44L536.282 298.744V304.783H511.423L504.699 306.997V310.822L470.264 322.094V330.146L438.07 342.223V369.801L419.12 365.573L397.522 369.801L370.626 378.859V383.287L345.767 391.138L346.786 394.358L330.077 392.144V396.572H312.758L308.886 398.384V400.598L275.674 411.468L252.445 420.627V432L250 430.792V392.144H252.445L270.172 387.514V381.274H290.141L299.31 378.859V373.223L308.886 369.801V366.58L313.777 364.366H323.353V360.139L327.021 358.729L346.786 361.346V345.847L366.754 347.457L398.948 334.776H403.023L419.12 328.536L438.07 331.354V299.046L440.108 298.442H444.998V291.9L464.762 293.913L493.492 285.459V279.42L491.251 278.212V275.998L511.423 269.959L530.169 262.713L535.263 261.304H539.746L554.417 256.473V247.213L645.293 214L667.707 234.733H672.597L736.17 251.44L754.712 256.674V283.446L764.696 286.264L780.997 287.271L792 290.693V294.718L780.997 297.939V310.822H785.276V321.49Z",
  },
  {
    id: 12,
    d: "M250 374.086V392H252.65L270.384 387.371V381.936H289.952L299.124 378.917V374.086L308.909 369.859V366.639L313.597 364.626H323.177V360.198L326.031 358.99L347.637 361.204V345.907L367.002 347.919L398.393 334.635H403.692L419.795 328.798L437.937 331.414V299.008L440.791 298.203L445.275 299.008V291.963L464.028 293.976L493.176 285.925V279.887L491.138 278.276V276.666L511.114 270.024L534.555 261.57H541.282L554.939 257.142V247.279L645.85 214.47L667.864 234.8H672.552L754.902 256.941V283.308L765.094 286.529L786.293 288.743L784.866 276.062H781.401V263.985L792 259.155L784.866 254.324V241.844L781.401 240.838V234.8L755.921 226.547L762.444 221.515V216.886L747.768 212.457V200.984L645.442 172L554.939 208.834V213.464L541.282 218.295L533.332 217.087L437.937 254.928V293.976L419.795 292.97L405.731 298.203H398.393L345.395 317.325V330.005L326.031 327.59L266.307 351.14V362.814L257.746 365.833L252.65 372.274L250 374.086Z",
  },
  {
    id: 13,
    d: "M766.426 163.129L643.764 123H639.07L540.899 164.138V168.574L428.646 216.366V223.827L443.749 227.86V231.893L431.095 237.036V245.303L436.942 247.651V258.664L428.941 258.073L410.277 256.697L257.409 321.291V327.478L271.9 330.099V340.283L247 350.265V354.332H251.49V372H252.228L257.409 365.792L265.981 362.162V350.838L325.577 327.478L345.375 329.494V317.193L398.44 297.633H405.787L419.258 292.39L437.626 293.398V254.68L533.756 216.366L540.899 217.778L554.574 212.938V208.3L645.805 171.397L748.466 200.435V211.93L762.345 216.568V220.399L756.63 226.247L777.039 233.103V230.684L795 224.029V214.753L760.916 203.863L763.365 200.435V194.386L760.916 190.353L742.751 183.9L766.426 174.422V163.129Z",
  },
  {
    id: 14,
    d: "M494 187.881L431.383 214.297V201.795L425.468 199.778V193.93L460.346 178L494 187.881Z",
  },
  {
    id: 15,
    d: "M410.579 256.039L436.278 258.586V247.57L430.771 244.948V237.487L442.907 232.143V228.211H439.134L437.298 230.228L390.59 250.594V256.039L397.729 257.854V260.274L367.135 255.031L274.331 295.563V313.711L410.579 256.039Z",
  },
  {
    id: 16,
    d: "M247 340.127V349L271.68 339.903V330.045L247 340.127Z",
  },
  {
    id: 17,
    d: "M251.706 726.974V770.653H613.242V761.677H708.829V784H746.392V711.605H766V704.326L638.977 700L401.624 710.797V714.032L237.001 721.637L237 726.974H251.706Z",
  }
];

export const FLOOR_PATHS_VIEWBOX = "0 0 1728 848";