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
    label: "Badminton Court", // Middle marker (cx: 475.227) - Uses the Tree/Garden icon
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
    label: "Swimming Pool", // Rightmost marker (cx: 846.227)
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


export const FLOOR_PATHS = [
  {
    id: 0,
    d: "M219.803 672.43V698.839L376.033 691.811V688.19L414.983 686.061L631.993 677.116L725.089 679.671L775.81 680.949V654.754H784.799V652.198H779.235V649.003L746.705 647.938V644.744L631.993 637.929L569.049 642.188V643.973L517.71 645.809V649.749H491.172L457.679 650.388V654.008L414.983 656.457V662.208H372.609L343.931 663.911L318.463 666.68H302.626L284.221 667.745L261.321 669.023L249.123 670.727L219.803 672.43Z",
  },
  {
    id: 1,
    d: "M219.803 643.479V672.584L248.168 671.002L283.812 667.944L318.386 666.995L343.541 664.148L372.441 662.566H414.722V656.872L449.082 654.868L457.217 654.341V650.861L517.801 650.228V646.643L569.395 644.323V642.847L632.12 638.84L725.458 643.69L746.652 644.745V648.119L778.764 649.385V636.52H774.911V617.96H783.863V614.586H775.758V609.208H746.652L747.402 605.833L632.655 595.921L569.395 602.564V604.568L517.801 608.048V611.317L491.363 609.946L457.217 613.32V618.277H441.482L414.08 620.913V628.927H372.441L343.541 631.774L316.995 637.258L302.759 636.309L283.812 637.258L253.627 641.054L248.168 640.527L219.803 643.479Z",
  },
  {
    id: 2,
    d: "M219.803 615.188V644.562L248.168 641.504L254.162 642.05L283.812 638.01L302.116 637.136L317.53 638.01L343.541 632.441L372.441 629.493H414.08V621.194L441.375 618.573H449.403H457.217V613.332L491.47 609.947L517.801 611.474V608.2L569.395 604.269V602.303L632.762 595.424L725.566 603.614L746.652 605.47V609.29H775.981V597.279H772.254V579.263L783.046 579.7V577.735H775.966V574.566H768.167V568.997H747.402V566.378H755.854V558.724L723.024 555.245L660.485 552.838H655.026L632.762 550.764L569.395 559.499V561.683L517.801 567.796V571.181H491.47L457.217 574.677V578.388H449.403V581.118L414.08 584.395V595.097H372.441L343.541 598.7L317.53 604.16L302.116 603.395L283.812 605.579L254.912 610.056V612.349L248.168 611.694L219.803 615.188Z",
  },
  {
    id: 3,
    d: "M219.803 586.394V614.824L248.048 611.417L254.842 612.003V609.82L282.926 605.507L301.917 603.325L317.537 604.017L343.589 598.746L372.369 595.205L413.987 595.339V584.824L449.294 581.496V578.941H457.104V575.32L490.912 572.126L517.659 571.594V568.612L569.228 562.649V560.52L632.565 552.001L722.898 555.244L747.466 558.154L755.854 559.242V566.426H747.466V568.964H767.906V574.788H775.968V561.372H772.116V539.011H775.778V536.775H767.906V526.979L758.812 526.446V518.248L660.489 507.706L654.819 509.729L632.565 511.007L569.228 520.803V524.53L517.659 531.238V534.219L490.912 533.474L457.104 538.479V540.289L449.294 540.715V543.803L413.987 549.552V564.46L372.369 562.756L343.589 566.589L316.949 571.487H301.917L283.461 574.469L254.842 579.047V582.348H248.048L219.803 586.394Z",
  },
  {
    id: 4,
    d: "M219.803 556.756V586.398L248.038 582.371H254.879V579.092L283.588 574.474L302.005 571.477H316.987L343.396 566.63L372.272 562.803L414.006 564.443V549.847L449.224 543.862V540.689L457.138 540.284V538.573L490.849 533.497L517.663 534.237V531.223L569.256 524.528V520.879L632.442 511.029L654.771 509.732L660.433 507.708L758.637 518.208V526.415L767.739 526.969V536.904L775.81 536.944V523.757H771.827V506.306H775.02L776.52 504.085H768.496V494.354H756.821V488.22L660.963 475.21L655.287 476.691L633.009 466.749L569.604 479.441V483.249L517.98 491.498V495.306H492.061L457.359 501.864V505.671H449.54V507.152L414.196 515.402V531.584L372.533 529.892L343.722 533.699L317.642 541.526L302.005 538.565L283.53 543.324L254.879 548.93V551.785H248.078L219.803 556.756Z",
  },
  {
    id: 5,
    d: "M219.803 528.209V557.065L247.864 552.291H254.879V549.214L283.422 543.592L301.951 538.818L317.642 542.001L343.722 534.044L372.533 530.331L414.196 531.975V515.744L449.54 507.31V505.878H457.359V502.112L492.007 495.587L517.98 495.322V491.715L569.604 483.334V479.515L633.331 466.679L655.501 476.863L660.963 475.166L756.821 488.321V494.367H768.496V500.839V504.234L776.515 504.55V487.47L771.827 487.154V464.981H773.849L775.348 462.754H768.496V452.994H756.821V446.84L660.963 433.792L655.287 435.277L633.331 421.592L569.604 436.974V439.308L517.98 451.19V457.025H491.204L449.54 466.361V469.755L414.196 479.091V496.595L372.533 494.261L344.364 500.096V504.87L317.642 511.66L302.487 509.856L283.422 513.251L254.879 519.086V521.526H247.864L219.803 528.209Z",
  },
  {
    id: 6,
    d: "M219.803 499.031V528.71L247.78 522.221H254.775V519.562L283.5 513.605L302.187 510.254L317.457 512.062L343.993 505.307V500.467L372.131 494.67L413.616 497.01V479.405L448.855 470.097V466.693L490.287 457.332H517.09V451.428L568.56 439.62V437.12L632.044 421.802L654.095 435.578L659.701 433.982L755.219 447.12V453.396H766.859V462.97H775.288V451.8H771.056V434.621L779.688 431.642V429.78L776.791 427.215L766.859 425.1V421.164L755.219 420.207L746.036 419.143V408.718L659.701 393.613L654.095 395.315L632.044 380.635L568.56 398.293L517.09 409.995V418.505L490.287 416.164L448.855 427.015V434.355L413.616 442.971V466.693L372.131 461.268L343.993 468.608V471.054L317.617 478.713L302.187 477.224L283.5 480.841L254.775 488.181V492.755L247.78 491.904L219.803 499.031Z",
  },
  {
    id: 7,
    d: "M219.803 469.087V499.305L247.822 492.176L254.826 492.814V488.452L283.594 481.11L302.309 477.333L317.602 479.142L344.177 471.534V468.768L372.356 461.639L413.903 466.853V443.232L449.194 434.826V427.379L490.688 416.419L517.531 418.867V410.142L569.077 398.438L632.494 380.775L654.738 395.565L660.352 393.863L746.079 408.843V419.483L766.779 421.442V425.06L776.81 427.379V418.015H772.047V398.877L783.066 395.565V392.16L774.406 389.768L767.669 388.503V379.605L746.815 378.541V366.63L660.352 351.521L654.738 353.206L631.959 337.577L569.077 356.091V357.687L517.531 371.803V384.201L490.688 381.798L449.194 392.171V397.106L413.903 407.321V431.209L372.356 427.379L344.177 435.565V439.721L317.602 446.637L302.148 445.625L283.594 450.626L254.826 458.128V462.703L247.822 461.639L219.803 469.087Z",
  },
  {
    id: 8,
    d: "M219.803 440.235V468.85L247.822 461.749L254.826 462.491V458.146L283.594 450.636L302.683 445.64L317.602 447.124L344.177 440.235V435.572L372.196 427.411L413.903 431.12V407.593L449.194 397.524V391.801L490.688 381.733L517.53 384.171V371.771L569.077 357.569V355.874L631.959 337.221L654.738 353.33L660.352 351.634L746.815 366.684V378.236L767.669 379.719V388.41L774.406 389.788L776.178 387.774V377.282L771.813 375.692V362.339L783.129 359.691V357.783L774.406 355.344L767.669 354.39V340.824H756.44L746.815 336.373V329.378L660.352 310.09L654.738 311.785L631.959 295.57L569.077 314.011V315.601L517.53 330.332V342.52L490.688 340.188L449.194 353.012V361.491L413.903 373.255V396.677L372.196 394.451L343.562 403.353V407.784L317.602 415.859L301.079 414.163L282.524 419.145L254.826 426.563V431.12H247.822L219.803 440.235Z",
  },
  {
    id: 9,
    d: "M219.803 409.041V440.495L247.822 431.281H254.826V426.727L283.434 419.102L301.079 414.442L317.602 415.925L343.562 407.982V403.64L372.196 394.744L413.903 396.756V373.563L449.194 361.701V353.123L490.688 340.626L517.531 342.744V330.459L569.077 315.844V314.256L631.959 295.934L654.738 312.137L660.352 310.231L746.815 329.506V336.602L756.44 340.944H767.669V354.5L774.406 355.559L778.118 356.489V341.556L771.75 340.944V327.07L783.762 323.599V320.21L774.406 317.009L767.669 314.997V309.702H756.44L746.815 305.254V290.215L660.352 270.623L654.738 272.317L631.959 252.513L569.077 272.317V284.496L517.531 299.217V311.396L490.688 309.066L449.194 321.881V330.353L413.903 342.109V365.514L372.196 363.29L343.562 372.186V376.613L317.602 384.683L301.079 382.988L282.524 387.966L254.826 395.379V399.933H247.822L219.803 409.041Z",
  },
  {
    id: 10,
    d: "M219.803 383.158V410.04L247.822 400.792H254.826V396.222L283.433 388.569L301.079 383.892L317.602 385.38L343.562 377.408V373.05L372.196 364.122L413.903 366.141V342.864L449.194 330.959V322.349L490.688 309.807L517.531 311.933V299.603L569.077 284.935V272.393L631.959 253.048L654.738 272.393L660.352 271.117L746.815 290.887V305.662L756.44 310.126H767.669V315L775.919 317.575V304.2L771.813 303.361V290.887L783.307 285.902L775.084 283.499L767.669 281.711V277.459L755.727 275.781L746.815 263.257V248.961L660.352 227.538L655.404 229.238L631.959 208.405L569.077 229.238V238.379L543.624 246.67L517.531 255.361V261.739H490.688L483.981 264.142V268.191L448.125 280.471V288.432L413.903 301.304V330.002L394.538 325.753L372.196 330.002L343.562 339.781V344.337L317.602 352.202V355.735L301.079 353.609V358.136L282.421 358.012L278.407 359.903V362.102L254.826 370.287L247.822 371.998L219.803 383.158Z",
  },
  {
    id: 11,
    d: "M778.788 279.282L783.067 285.836L767.233 281.608V277.803L755.892 275.9L746.69 263.005V249.053L660.455 227.491L655.319 228.971L631.781 208.466L568.656 228.971V238.272L517.3 255.395V261.737H491.194L484.132 264.062V268.079L447.969 279.917V288.372L414.159 301.056V330.017L394.259 325.578L371.577 330.017L343.331 339.53V344.18L317.225 352.425L318.295 355.807L300.748 353.482V358.132H282.559L278.494 360.035V362.36L243.614 373.775L219.22 383.394V395.337L216.652 394.069V353.482H219.22L237.837 348.619V342.066H258.807L268.436 339.53V333.611L278.494 330.017V326.635L283.629 324.309H293.687V319.87L297.538 318.39L318.295 321.138V304.861L339.265 306.552L373.075 293.234H377.354L394.259 286.681L414.159 289.641V255.712L416.299 255.078H421.435V248.208L442.191 250.322L472.363 241.443V235.101L470.009 233.833V231.508L491.194 225.166L510.88 217.556L516.23 216.076H520.937L536.344 211.002V201.278L631.781 166.398L655.319 188.172H660.455L727.218 205.718L746.69 211.214V239.329L757.175 242.289L774.294 243.346L785.849 246.939V251.167L774.294 254.549V268.079H778.788V279.282Z",
  },
  {
    id: 12,
    d: "M216.652 334.517V353.33H219.435L238.059 348.469V342.761H258.609L268.242 339.591V334.517L278.517 330.078V326.696L283.44 324.583H293.501V319.932L296.498 318.664L319.189 320.989V304.924L339.525 307.038L372.491 293.087H378.057L394.968 286.957L414.02 289.705V255.672L417.016 254.827L421.726 255.672V248.274L441.42 250.388L472.031 241.933V235.591L469.89 233.9V232.209L490.869 225.234L515.486 216.356H522.55L536.892 211.705V201.347L632.365 166.892L655.484 188.242H660.408L746.89 211.494V239.185L757.593 242.567L779.855 244.892L778.357 231.575H774.718V218.892L785.849 213.819L778.357 208.746V195.64L774.718 194.583V188.242L747.96 179.575L754.81 174.291V169.429L739.397 164.779V152.73L631.937 122.291L536.892 160.974V165.835L522.55 170.909L514.202 169.64L414.02 209.38V250.388L394.968 249.331L380.197 254.827H372.491L316.834 274.908V288.225L296.498 285.688L233.777 310.42V322.68L224.787 325.851L219.435 332.615L216.652 334.517Z",
  },
  {
    id: 13,
    d: "M758.993 112.975L628.078 69.0605H623.397L521.461 112.555V115.949L404.263 167.871V176.718L419.533 180.796V185.032L406.835 190.59V199.272L412.355 201.692V213.257L404.573 212.683L384.973 211.237L224.433 279.073V285.57L239.651 288.323V299.017L213.502 309.5V313.771H218.217V333.344L219.288 332.711L224.95 325.753L233.775 322.837V310.38L296.022 285.981L316.813 288.148V275.828L372.541 255.286H380.257L394.403 249.78L413.694 250.792V209.752L514.647 169.515L522.149 170.998L536.51 165.915V160.909L632.319 122.669L739.545 152.999V164.691L754.706 169.727V173.118L748.072 179.26L770.138 186.717V183.919L789 176.93V167.189L753.205 155.753L755.778 152.153V145.799L753.205 141.564L734.129 134.787L758.993 124.834V112.975Z",
  },
  {
    id: 14,
    d: "M472.896 138.969L407.137 166.71V153.581L400.925 151.463V145.322L437.553 128.592L472.896 138.969Z M385.289 210.547L412.278 213.221V201.652L406.495 198.899V191.064L419.239 185.452V181.322H415.277L413.349 183.44L364.298 204.829V210.547L371.795 212.453V214.994L339.665 209.488L242.205 252.053V271.113L385.289 210.547Z",
  },
  {
    id: 15,
    d: "M213.502 298.855V309.433L240.068 298.855V288.053L213.502 298.855Z",
  },
  {
    id: 16,
    d: "M218.444 705.112V750.984H598.121V741.557H698.505V765H737.953V688.973H758.545V681.328L625.148 676.785L375.884 688.124V691.521L203.001 699.508L203 705.112H218.444Z",
  }
];

export const FLOOR_PATHS_VIEWBOX = "0 0 1728 848";