const typicalFloorUnits = [
  {
    id: "S01",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/0.png",
    path: "M119.25 282.375L84.5 323.875L59.75 303L58 304.75L1.75 256.75L45 205.25L37.5 198.75L50.75 184.25L41 175.25L66.75 144.25L116.75 186.5L107.75 197.75L138.125 223.25L101.125 267.375L119.25 282.375Z",
    details: { number: "05", type: "Kitchen + Utility Space", sqft: "1275", balconySqft: "0", balcony: true, rooms: 2, washrooms: 2, floor: "Wing A - Second Floor" },
  },
  {
    id: "S02",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/1.png",
    path: "M682.25 700.5L620.25 773.25L594.125 751.625L586.75 760.25L551.875 731.25L609.25 663.5L618.75 671.75L631 656.5L608.375 638.125L656.375 580.25L672.5 593.5L690.5 572.125L728.5 603.75L720.625 613.5L750 638.125L720 674.25L723.75 677L695 711.5L682.25 700.5Z",
    details: { number: "08", type: "Kitchen + Utility Space", sqft: "1880", balconySqft: "100", balcony: true, rooms: 3, washrooms: 3, floor: "Wing B - Second Floor" },
  },
  {
    id: "S03",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/2.png",
    path: "M249.5 348.5L188.625 420.625L137.75 378.75L149.75 363.75L123.5 341.75L114.5 351.5L81.625 324.375L139.375 256.125L249.5 348.5Z",
    details: { number: "04", type: "Kitchen + Utility Space", sqft: "1275", balconySqft: "0", balcony: true, rooms: 2, washrooms: 2, floor: "Wing A - Second Floor" },
  },
  {
    id: "S04",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/3.png",
    path: "M217.25 451.375L186 425.5L256.75 340.25L282.5 362L325 311.75L382.5 360L292 468.5L238.875 424.5L217.25 451.375Z",
    details: { number: "03", type: "Kitchen + Utility Space", sqft: "1510", balconySqft: "0", balcony: true, rooms: 3, washrooms: 2, floor: "Wing A - Second Floor" },
  },
  {
    id: "S05",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/4.png",
    path: "M457 449L436 474.25L348.75 401.5L392.75 347.75L422 370.75L438.25 349.75L497.75 398.75L487.75 410.5L516 435.5L485 471.75L457 449Z",
    details: { number: "06", type: "Kitchen + Utility Space", sqft: "1225", balconySqft: "0", balcony: true, rooms: 2, washrooms: 2, floor: "Wing B - Second Floor" },
  },
  {
    id: "S06",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/5.png",
    path: "M468.75 545.25L417 607L384.75 578.75L373.75 591L322 549.25L326.375 544.125L301.25 523.25L295.75 530L262.5 502.75L327 426.5L343.375 440.625L323.375 463.125L338.25 475.75L357.75 452.375L468.75 545.25Z",
    details: { number: "10", type: "Kitchen + Utility Space", sqft: "1675", balconySqft: "0", balcony: true, rooms: 3, washrooms: 3, floor: "Wing B - Second Floor" },
  },
  {
    id: "S07",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/6.png",
    path: "M609 664L558 725L525.625 698L514.875 710.625L464.375 667.625L468.25 663.375L441.875 641.625L436.5 648.25L404.5 621.75L466.5 546.5L483.125 560.625L465 581.75L479 594L495.125 575.5L522.75 598.75L526.25 594.75L609 664Z",
    details: { number: "09", type: "Kitchen + Utility Space", sqft: "1650", balconySqft: "0", balcony: true, rooms: 3, washrooms: 3, floor: "Wing B - Second Floor" },
  },
  {
    id: "S08",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/7.png",
    path: "M670.475 565.191L636.754 604.977L609.584 582.173L591.147 603.521L532.125 554.375L552.332 529.53L524.676 506.969L568.75 454.5L596.375 477.625L594.3 480.041L652.765 529.53L642.875 541.875L670.475 565.191Z",
    details: { number: "07", type: "Kitchen + Utility Space", sqft: "1249", balconySqft: "50", balcony: true, rooms: 2, washrooms: 2, floor: "Wing B - Second Floor" },
  },
  {
    id: "S09",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/8.png",
    path: "M274 234.5L247.75 265.625L160.875 192.375L205.125 139.25L233 162.875L251 141.625L309.75 190.75L299 203.5L333.375 231.75L307.5 262.25L274 234.5Z",
    details: { number: "02", type: "Kitchen + Utility Space", sqft: "1225", balconySqft: "0", rooms: 2, washrooms: 2, floor: "Wing A - Second Floor" },
  },
  {
    id: "S10",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/9.png",
    path: "M167.023 157.612L132.312 198.75L33.1874 116.562L71.7499 71.5L60.3124 61.5625L102.254 12.5601L133.531 38.6645L143.381 27.8287L171 51.1875L161.852 62.3064L225.635 115.993L180.322 169.187L167.023 157.612Z",
    details: { number: "01", type: "Kitchen + Utility Space", sqft: "1910", balconySqft: "0", rooms: 3, washrooms: 3, floor: "Wing A - Second Floor" },
  },
];

// 1. Updated floorData with new Ground Floor units and dynamic viewBoxes
export const floorData = [
  {
    title: "Fourteenth Floor",
    viewBox: "0 0 760 786",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/floor.png",
    pdfPath: "/downloadFloorPlan/14th floor.pdf",
    features: ["3 BHKs", "2 BHKS"],
    units: [
      {
        id: "1401",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/0.png",
        path: "M665.249 562.5L618.188 617.5L590.75 594.187L586.063 599.937L527.813 550.812L548.188 527.625L520.187 504.062L564.499 451.375L620.749 497.875L618.499 500.687L647.188 525.312L636.438 538.687L665.249 562.5Z",
        details: { number: "D4 - Floor 2", balcony: true, type: "Kitchen + Utility Space", sqft: "2705", rooms: 2, washrooms: 2, floor: "Wing B - Fourteenth Floor" },
      },
      {
        id: "1402",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/1.png",
        path: "M472.625 460.75L451.25 485.75L347.528 397.878L410.766 322.702L438.513 345.61L436.04 348.298L442.923 354.321L448.623 348.298L468.627 365.076L459.375 376.125L517.375 425.625L481.75 467.875L472.625 460.75Z",
        details: { number: "D3 - Floor 2", balcony: true, type: "Kitchen + Utility Space", sqft: "2945", rooms: 3, washrooms: 3, floor: "Wing B - Fourteenth Floor" },
      },
      {
        id: "1403",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/2.png",
        path: "M226.25 116.25L121.25 240.75L42.5 173.5L68 142.75L35 114.75L74 71L62 61L102.75 12.25L133.25 39L142.5 28L171 51.75L168 56L202.75 84.25L196.25 91.5L226.25 116.25Z",
        details: { number: "C6", balcony: true, type: "Kitchen + Utility Space", sqft: "2450", rooms: 3, washrooms: 3, floor: "Wing A - Fourteenth Floor" },
      },
      {
        id: "1404",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/3.png",
        path: "M288.5 246.75L263 277L160.25 191.25L225.25 114.75L253.25 137.5L249.5 142L256.75 148.25L263 140.75L283 157.5L272 170.5L336.5 224.75L306.25 261.5L288.5 246.75Z",
        details: { number: "D1 - Floor 2", balcony: true, type: "Kitchen + Utility Space", sqft: "2965", rooms: 2, washrooms: 2, floor: "Wing A - Fourteenth Floor" },
      },
      {
        id: "1405",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/4.png",
        path: "M247.496 346.25L188.496 416.5L164.183 395.767L158.245 402.75L105.745 358.5L107.468 356.215L27.2453 288.751L34.5841 279.725L3.36599 252.86L46.2453 202.251L38.4397 196.021L52.2453 180.474L120.995 239.251L108.933 253.563L127.245 269.001L139.495 254.501L198.245 303.501L217.995 280.251L233.745 293.501L214.745 317.5L247.496 346.25Z",
        details: { number: "C9", balcony: true, type: "Kitchen + Utility Space", sqft: "2300", rooms: 3, washrooms: 4, floor: "Wing A - Fourteenth Floor" },
      },
      {
        id: "1406",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/5.png",
        path: "M215.375 447.625L184.25 421.625L247.875 346L262.375 359.25L282.75 335.625L293.875 345.125L323.625 310.125L330.375 315.625L334.25 311L384.75 353.375L290.329 465.129L237.829 420.754L215.375 447.625Z",
        details: { number: "D2 - Floor 2", balcony: true, type: "Kitchen + Utility Space", sqft: "3265 ", rooms: 3, washrooms: 3, floor: "Wing A - Fourteenth Floor" },
      },
      {
        id: "1407",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/6.png",
        path: "M438.375 636.5L424.5 652.25L312 556.25L324.869 541.228L299.119 518.978L293.25 525.75L261 499.125L324.25 424.75L339.75 437.375L332.75 445.75L347.75 459.25L356.25 450L480.5 555.5L472.75 564.5L487.5 576.75L494.75 568.25L522.75 591.75L465.625 659.875L438.375 636.5Z",
        details: { number: "C8", balcony: true, type: "Kitchen + Utility Space", sqft: "2725", rooms: 4, washrooms: 4, floor: "Wing B - Fourteenth Floor" },
      },
      {
        id: "1408",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor14/7.png",
        path: "M589.25 746L580.75 755.75L547.5 726.75L553.5 719.75L522.223 691.921L511.223 704.671L460.75 663.375L522.328 591.597L613.078 667.847L626 653.25L603.5 634.75L652.5 577.25L667.75 590L685.125 568.75L723 601.25L714.5 610.5L744.015 635.405L713.765 670.905L723 678.75L695.5 712.25L675.75 695.25L615.25 768.25L589.25 746Z",
        details: { number: "C7", type: "Kitchen + Utility Space", sqft: "2950", balcony: true, rooms: 4, washrooms: 4, floor: "Wing B - Fourteenth Floor" },
      },
    ],
  },
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
        details: { number: "Childern’s Play Area" },
      },
      {
        id: "G02",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/1.png",
        path: "M460 583.5L431.875 616.125L358.875 554.125L386.625 521.125L460 583.5Z",
        details: { number: "Outdoor Badminton Court" },
      },
      {
        id: "G03",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/2.png",
        path: "M654.121 516.569L684.696 542.792C686.474 544.316 689.176 543.994 690.545 542.095L697.47 532.489C698.688 530.8 698.406 528.459 696.822 527.108L666.826 501.501C665.133 500.055 662.585 500.271 661.158 501.98L653.654 510.97C652.252 512.65 652.46 515.145 654.121 516.569Z",
        details: { number: "Outdoor Meditation Deck" },
      },
      {
        id: "G04",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/3.png",
        path: "M288 334L244.25 384.75L213 357.875L256.625 307L288 334Z",
        details: { number: "Air Conditioned Mini Theatre" },
      },
      {
        id: "G05",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/4.png",
        path: "M443.5 397.625L420 424.5L350.625 365.75L373.5 337.875L443.5 397.625Z M334.625 384.062L312.125 410.438L425.943 506.543L464.299 461.302L446.921 446.127L446.546 445.799L446.872 445.423L469.697 419.047L591.938 523.681L583.916 533.959L589.18 539.223L588.881 539.574L577.053 553.459L576.672 553.127L571.302 548.457L568.308 551.951L562.434 547.015L559.836 550.062L566.4 555.438L554.043 569.843L547.913 564.214L542.466 570.439L548.899 575.718L536.715 589.982L536.335 589.665L530.371 584.671L501.182 619.049L287.055 436.577L285.059 438.824L234.545 396.562L282.188 339.796L334.625 384.062ZM437.625 511.375L465.062 534.75L476 522L448.75 498.562L437.625 511.375Z M435 285.75L411.5 313.5L562.5 441.75L560.25 445.5L641.75 516L664.5 488.25L623.922 453.281L624.352 452.727L583.125 417.625L585.844 414.375L435 285.75Z",
        details: { number: "Ample 2 Floor Parking Space" },
      },

      {
        id: "G08",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/5.png",
        path: "M245.625 319.125L212.625 357.625L196.375 344.5L229 305.125L245.625 319.125Z",
        details: { number: "Laundry Room" },
      },
      {
        id: "G09",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/6.png",
        path: "M228.93 305.494L200.375 338.625L130.819 279.682L151.263 255.696L140.641 246.902L165.426 217.777L154.125 208.375L178.218 180.771L168.51 172.09L183.472 140.795L186.785 136.569L224.133 166.951L180.25 218.25L202.204 236.508L179.361 263.235L228.93 305.494Z",
        details: { number: "24X7 Cloud Kitchen & Dining Space" },
      },
      {
        id: "G10",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/7.png",
        path: "M282.188 308.375L271 298.875L276.75 292.875L205.375 232.75L238.375 193.938L273.938 223.875L272.438 225.562L329.375 274L313.625 292L303.312 283.25L282.188 308.375Z",
        details: { number: "Indoor Function/Gathering Area" },
      },
      {
        id: "G11",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/ground/8.png",
        path: "M301 356.5L340.875 310.625L373.75 338.25L333.625 384.125L301 356.5Z",
        details: { number: "Entrance Visitor’s Lounge" },
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
        details: { number: "08", balcony: true, sqft: "1655", rooms: 3, washrooms: 3, floor: "First Floor" },
      },
      {
        id: "102",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/1.png",
        path: "M465.875 543.125L413.25 604.25L397.5 590.5L381.75 577.25L371.375 589.5L320.5 546.5L324.25 542.25L297 519.375L301.75 513.875L271 488.125L325.875 424.375L465.875 543.125Z",
        details: { number: "10", balcony: true, type: "Kitchen + Utility Space", sqft: "1625", rooms: 3, washrooms: 3, floor: "Wing B- First Floor" },
      },
      {
        id: "103",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/2.png",
        path: "M455.375 447.623L433.625 472.498L348 399.875L393.625 345.875L419.5 367.375L436.875 347L467.25 372L456.5 384.5L514.875 434.625L483.25 470.75L455.375 447.623Z",
        details: { number: "06", balcony: true, type: "Kitchen + Utility Space", sqft: "1155", rooms: 2, washrooms: 2, floor: "First Floor" },
      },
      {
        id: "104",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/3.png",
        path: "M605.25 662.498L553.5 722.998L472.543 654.449L465.224 662.452L438.548 640.153L435.949 642.958L403.75 615.813L466.625 543.438L498.938 571.125L495.75 575.063L519.875 595.812L523.313 591.75L605.25 662.498Z",
        details: { number: "09", balcony: true, type: "Kitchen + Utility Space", sqft: "1535", rooms: 3, washrooms: 3, floor: "Wing B- First Floor" },
      },
      {
        id: "105",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/4.png",
        path: "M124 269.75L93 306.25L14.75 239.5L47.75 202L40.25 194.25L53.5 179.5L44 171.25L68.25 143.5L107 174.25L116 181.25L103.75 194.25L113.75 202L118.5 196.75L138.75 214.5L118.5 238.25L128.75 247.75L116 262.75L124 269.75Z",
        details: { number: "Yoga / Meditation Zumba / Dance Floor" },
      },
      {
        id: "106",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/5.png",
        path: "M106.25 125.875L74.375 98.875L90.334 79.678L74.375 66.375L97.875 16.625L102.75 10.625L159.75 59.375L149.25 71.75L151 73.125L106.25 125.875Z",
        details: { number: "Health Club" },
      },
      {
        id: "107",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/6.png",
        path: "M185.742 102.518L159.144 133.453L214.075 179.567L240.096 149.21L185.742 102.518Z",
        details: { number: "Treatment Room" },
      },
      {
        id: "108",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/7.png",
        path: "M263 326.25L194.5 406.75L146.438 365.469L151.594 359.5L149.625 357.75L144.25 363.875L120 342.5L126.625 334.875L124.5 333.125L123.5 334L94.125 308.875L139.125 256.25L197.625 305.625L214.125 285.75L263 326.25Z",
        details: { number: "Indoor Games Arena" },
      },
      {
        id: "109",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/8.png",
        path: "M277.375 477.125L196.75 408.25L248 348.25L263 361.25L280.25 342.25L346 397.75L277.375 477.125Z",
        details: { number: "Air Conditioned Gymnasium" },
      },
      {
        id: "110",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/9.png",
        path: "M281.25 188.375L257.25 216.5L216.125 181.5L240 153.5L281.25 188.375Z",
        details: { number: "Heated Jacuzzi" },
      },
      {
        id: "111",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/10.png",
        path: "M282.25 189.375L258.25 217L306.75 257.125L329.875 230.125L282.25 189.375Z",
        details: { number: "Timber Saunas" },
      },
      {
        id: "112",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor1/11.png",
        path: "M633.25 605.5L606.5 582.75L589.673 602.559L530.75 552L550 529.5L522.375 506L557.5 465L613.75 512.75L610.875 516.125L667.75 564.25L633.25 605.5Z",
        details: { number: "07", balcony: true, type: "Kitchen + Utility Space", sqft: "1075", rooms: 2, washrooms: 2, floor: "First Floor" },
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
    title: "Terrace Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/terrace/floor.png",
    pdfPath: "/downloadFloorPlan/lower terrace.pdf",
    features: ["Private Terrace", "Rooftop Swimming Pool"],
    units: [
      {
        id: "T-01",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/terrace/0.png",
        path: "M473.75 664.75L447 642.5L504 576L515.25 585.75L559 533L531.75 510.5L575.5 458.5L689.75 554L677.5 568.75L692.75 582.5L686.25 589.5L743.5 637.5L626 776.5L481.5 656.25L473.75 664.75Z",
        details: { number: "Rooftop Infinity Swimming Pool" },
      },
    ],
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
        details: { number: "C2", balcony: true, type: "Kitchen + Utility Space", sqft: "1930", rooms: 3, washrooms: 3, floor: "Wing B - Thirteenth Floor" },
      },
      {
        id: "1302",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/1.png",
        path: "M683 548.5L634.75 604L620.25 592.25L606.875 607.75L594.125 597.125L589.75 602.375L530.125 553.125L550.25 528.75L522.75 506.25L567.875 452.75L683 548.5Z",
        details: { number: "D4", balcony: true, type: "Kitchen + Utility Space", sqft: "2705", rooms: 1, washrooms: 2, floor: "Wing B - Thirteenth Floor" },
      },
      {
        id: "1303",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/2.png",
        path: "M466.692 544.619L396.25 629L427.75 655.625L441.26 639.577L467.76 661.827L464 666.25L514 707.25L524.25 695.375L556.5 722.75L607.75 661.5L525.125 592.625L521.5 597L494.5 574.875L478.75 593.75L463.375 580.5L482.192 557.869L466.692 544.619Z",
        details: { number: "C3", balcony: true, type: "Kitchen + Utility Space", sqft: "1705", rooms: 3, washrooms: 3, floor: "Wing B - Thirteenth Floor" },
      },
      {
        id: "1304",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/3.png",
        path: "M466.5 544.5L395.75 629L313.5 560L326.265 544.5L299.765 522.25L294.25 528.5L262.25 501.75L326 426.75L342.25 439.875L322.5 462.75L337.625 475.75L357.125 452.625L466.5 544.5Z",
        details: { number: "C4", balcony: true, type: "Kitchen + Utility Space", sqft: "1895", rooms: 3, washrooms: 3, floor: "Wing B - Thirteenth Floor" },
      },
      {
        id: "1305",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/4.png",
        path: "M447.75 456.75L434.5 472L348.5 399.5L412.25 323.25L440.5 346.5L438 350.25L445.25 355.25L450.75 348.75L529.75 415L484.25 469.75L475.25 462.25L467.25 472L447.75 456.75Z",
        details: { number: "D3", balcony: true, type: "Kitchen + Utility Space", sqft: "2945", rooms: 1, washrooms: 1, floor: "Wing B - Thirteenth Floor" },
      },
      {
        id: "1306",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/5.png",
        path: "M215.75 450.25L185.25 424L248.25 347.75L263.375 361L270.375 352.625L256.625 340.625L269.25 325.5L294.5 346.25L324.75 312L330.25 316L348 295L399 338.5L291.25 467.25L238.5 422.25L215.75 450.25Z",
        details: { number: "D2", balcony: true, type: "Kitchen + Utility Space", sqft: "3265", rooms: 1, washrooms: 2, floor: "Wing A - Thirteenth Floor" },
      },
      {
        id: "1307",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/6.png",
        path: "M248.25 348.5L188.125 420.25L164.125 400.125L158.5 406.75L105 362.5L107.375 359.75L26.25 292L33.625 283.125L1.75 256.625L45.25 205.5L37.75 199L51 183L120.25 241.625L107.625 256.75L126.375 272.5L139.25 256.75L198.5 306.25L218.75 282.125L234.25 295.5L214.5 320L248.25 348.5Z",
        details: { number: "C5", type: "Kitchen + Utility Space", balcony: true, sqft: "2535", rooms: 3, washrooms: 4, floor: "Wing A - Thirteenth Floor" },
      },
      {
        id: "1308",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/7.png",
        path: "M260.375 249.125L246.75 265.375L160.125 192.125L223.875 116.125L252.25 139.25L249.25 142.75L256.5 148.125L262.75 140.5L348.625 212.125L306.75 262.75L289.5 248.25L276.875 262.75L260.375 249.125Z",
        details: { number: "D1 - Floor 1", type: "Kitchen + Utility Space", sqft: "2965", rooms: 1, washrooms: 1, floor: "Wing A - Thirteenth Floor" },
      },
      {
        id: "1309",
        unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor13/8.png",
        path: "M162.652 192.845L120.229 242.827L40.7463 175.535L67.078 144.327L32.9443 117.02L71.2228 72.1582L60.2513 61.9181L101.943 13.6433L131.201 38.9998L140.709 27.2969L170.211 51.6781L167.529 55.3353L202.15 84.3488L195.567 91.1756L224.337 115.313L179.719 168.22L166 158L147 180.25L162.652 192.845Z",
        details: { number: "C1", type: "Kitchen + Utility Space ", sqft: "2450", balcony: true, rooms: 3, washrooms: 3, floor: "Wing A - Thirteenth Floor" },
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


export const FLOOR_PATHS = [
  {
    id: 1,
    d: "M218.444 705.112V750.984H598.121V741.557H698.505V765H737.953V688.973H758.545V681.328L625.148 676.785L375.884 688.124V691.521L203.001 699.508L203 705.112H218.444Z",
  },
  { id: 2, wing: "A", transform: "translate(410, 640)",
    d: "M0 21.75V28.5V56.5L253.5 46L362.25 49L421.5 50.5V19.75H432V16.75H425.5V13L387.5 11.75V8L253.5 0L179.972 5V7.09464L120 9.25V13.875H89L49.875 14.625V18.875L0 21.75Z" },
  { id: 3, wing: "A", transform: "translate(410, 594)",
    d: "M0 29.625V39.125L0.75 72.25L40.875 69.875L50.375 69.25V65.125L121.125 64.375V60.125L181.375 57.375V55.625L254.625 50.875L363.625 56.625L388.375 57.875V61.875L425.875 63.375V48.125H421.375V26.125H435.375V22.125H425.875V15.75H413.5H388.375L389.25 11.75L255.25 0L181.375 7.875V10.25L121.125 14.375V18.25L90.25 16.625L50.375 20.625V26.5H32L0 29.625Z" },
  { id: 4, wing: "A", transform: "translate(410, 558) scale(0.86)",
    d: "M0 38.5V50.75V80.625L31.875 77.625H41.25H50.375V71.625L90.375 67.75L121.125 69.498V65.75L181.375 61.25V59L255.375 51.125L363.75 60.5L388.375 62.625V66.998H425.875V53.248H421.375V32.625L435.375 33.125V30.875H426.375V27.248H413.5V20.873H389.25V17.5L402.875 18.125V12.375L287.75 2.375H281.375L255.375 0L181.375 10V12.5L121.125 19.498V23.373H90.375L50.375 27.375V31.623H41.25V34.748L0 38.5Z" },
  { id: 5, wing: "A", transform: "translate(410, 520) scale(0.86)",
    d: "M0 49.125V66.625V90.5312L41.25 86.625V83.625H50.375V79.375L89.875 75.625L121.125 75V71.5L181.375 64.5V62L255.375 52L363.75 60.5L389.25 63L402.875 64.5V69.75H389.25V73.25H413.5V78.75H425.875V63H421.375V53.248V36.75H425.875V34.125H413.5V22.625L402.875 22V12.375L288 0L281.375 2.375L255.375 3.875L181.375 15.375V19.75L121.125 27.625V31.125L89.875 30.25L50.375 36.125V38.25L41.25 38.75V42.375L0 49.125Z" },
  { id: 6, wing: "A", transform: "translate(410, 478) scale(0.86)",
    d: "M0 57.5V76.625V97.125L41.25 90.5V86.75L50.375 86.25V84.25L89.7188 78.25L121.125 79.125V75.5625L181.375 67.6875V63.375L255.375 51.8125L281.375 50.5L288 48L402.875 60.375V70L413.5 70.5625V75.25V82.0625H425.875V67.375H421.375V63.248V46.75H425.875L427.625 44.125H413.5V32.625H399.875V25.375L288 10L281.375 11.75L255.375 0L181.375 15V19.5L121.125 29.25V33.75H90.875L50.375 41.5V46H41.25V47.75L0 57.5Z" },
  { id: 7, wing: "A", transform: "translate(410, 440) scale(0.86)",
    d: "M0 67.75V88.375V110.938L41.25 101V99.3125H50.375V94.875L90.8125 87.1875L121.125 86.875V82.625L181.375 72.75V68.25L255.75 53.125L281.625 65.125L288 63.125L399.875 78.625V85.75H413.5V93.375V97.375H426.625V77.25H421.375V51.125H425.875L427.625 48.5H413.5V37H399.875V29.75L288 14.375L281.375 16.125L255.75 0L181.375 18.125V20.875L121.125 34.875V41.75H89.875L41.25 52.75V56.75L0 67.75Z" },
  { id: 8, wing: "A", transform: "translate(410, 400) scale(0.86)",
    d: "M0 73.25V101.125V116.062L41.25 105.125V101.125L89.75 90.125H121.125V83.1875L181.375 69.3125V66.375L255.688 48.375L281.5 64.5625L288.062 62.6875L399.875 78.125V85.5H413.5V96.75H426.625V83.625H421.375V63.4375L430.812 59.9375V57.75L426.625 54.875L413.5 52.25V47.625L399.875 46.5L389.125 45.25V33L288.062 15.25L281.5 17.25L255.688 0L181.375 20.75L121.125 34.5V44.5L89.75 41.75L41.25 54.5V63.125L0 73.25Z" },
  { id: 9, wing: "A", transform: "translate(410, 362) scale(0.86)",
    d: "M0 83.125V111.125V124.125L41.25 114.25V105.5L89.75 92.625L121.125 95.5V85.25L181.375 71.5L255.5 50.75L281.5 68.125L288.062 66.125L389.125 83.875V96.375L413.5 98.625V102.875L426.625 105.5V94.5H421.375V72.375L434.75 69.75V65.75L421.375 62.125L413.5 60.875V50.5L399.875 49.375L389.125 48.125V34.875L288.062 17.125L281.5 19.125L254.875 0L181.375 21.75V23.625L121.125 41V55.375L89.75 52.625L41.25 65.375V71.125L0 83.125Z" },
  { id: 10, wing: "A", transform: "translate(410, 328) scale(0.86)",
    d: "M0 91.625V119.25V132.125L41.25 120.25V113.5L89.75 101.625L121.125 104.5V89.875L181.375 73.125V71.125L254.875 49.125L281.5 68.125L288.062 66.125L389.125 83.875V97.5L413.5 99.25V109.5L421.375 111.125L426.625 108.75V96.375L421.375 94.5V78.75L434.75 76V73.75L421.375 70.5L413.5 69.375V53.375H400.375L389.125 48.125V39.875L288.062 17.125L281.5 19.125L254.875 0L181.375 21.75V23.625L121.125 41V55.375L89.75 52.625L41.25 67.75V77.75L0 91.625Z" },
  { id: 11, wing: "A", transform: "translate(410, 292) scale(0.86)",
    d: "M0 105.75V133.375V142.875L41.25 128.875V118.75L89.75 104L121.125 106.5V92L181.375 74.75V72.875L254.875 51.25L281.5 70.375L288.062 68.125L389.125 90.875V99.25L400.375 104.375H413.5V120.375L421.375 121.625L426.625 122.875V105.25L421.375 104.375V88L434.75 84.5V80.5L421.375 76.125L413.5 73.75V67.5H400.375L389.125 62.25V44.5L288.062 21.375L281.5 23.375L254.875 0L181.375 23.375V37.75L121.125 55.125V69.5L89.75 66.75L41.25 81.875V91.875L0 105.75Z" },
  { id: 12, wing: "A", transform: "translate(410, 256) scale(0.86)",
    d: "M0 109.25V143V158.125L41.25 144.125V134L89.75 119.25L121.125 121.75V107.25L181.375 90V75.25L254.875 52.5L281.5 75.25L288.062 73.75L389.125 97V114.375L400.375 119.625H413.5V126.25L426.625 130V113.75H421.375V97L434.75 92.875L421.375 89.75L413.5 87.25V82.25L400.375 80.5L389.125 66.5V48.75L288.062 22.5L281.5 24.5L254.875 0L181.375 24.5V35.25L151.625 45L121.125 56V63.5H89.75L82.875 66.5V70.25L40 84.75V94.75L0 109.25Z" },
  { id: 13, wing: "A", transform: "translate(410, 222) scale(0.86)",
    d: "M426 133.5L431 141.25L412.5 136.25V131.75L399.25 129.5L388.5 114.25V97.75L287.75 72.25L281.75 74L254.25 49.75L180.5 74V85L120.5 105.25V112.75H90L81.75 115.5V120.25L39.5 134.25V144.25L0 159.25V145.75V105.625L2.5 104.875H8.5V96.75L32.75 99.25L68 88.75V81.25L65.25 79.75V77L90 69.5L113 60.5L119.25 58.75H124.75L142.75 52.75V41.25L254.25 0L281.75 25.75H287.75L365.75 46.5L388.5 53V86.25L400.75 89.75L420.75 91L434.25 95.25V100.25L420.75 104.25V120.25H426V133.5Z" },
  { id: 15, wing: "A", transform: "translate(410, 148) scale(0.86)",
    d: "M0 103V151.5V157.75L3.5 156.75L9 157.75V149L32 151.5L67.75 141.5V134L65.25 132V130L89.75 121.75L118.5 111.25H126.75L143.5 105.75V93.5L255 52.75L282 78H287.75L388.75 105.5V138.25L401.25 142.25L427.25 145L425.5 129.25H421.25V114.25L434.25 108.25L425.5 102.25V86.75L421.25 85.5V78L390 67.75L398 61.5V55.75L380 50.25V36L254.5 0L143.5 45.75V51.5L126.75 57.5L117 56L0 103Z" },
  { id: 0, wing: "A", transform: "translate(410, 120) scale(0.86)",
    d: "M413.75 49.75L263.5 0H257.75L137.5 51V56.5L0 115.75V125L18.5 130V135L3 141.375V151.625L10.1611 154.535V163.25H11L128.75 115.75L137.5 117.5L154.25 111.5V105.75L266 60L391.75 96V110.25L408.75 116V120.75L401.75 128L426.75 136.5V133.5L448.75 125.25V113.75L407 100.25L410 96V88.5L407 83.5L384.75 75.5L413.75 63.75V49.75Z" },
  { id: 2, wing: "B", transform: "translate(218, 662)",
    d: "M227.895 28.5029V0H177.713L144.657 1.92834L114.63 5.30288L74.7475 6.30342L42.1508 9.11348L5.72205e-06 11.6425L0 42.7148L184.059 35.247V31.0319L227.895 28.5029Z" },
  { id: 3, wing: "B", transform: "translate(218, 624)",
    d: "M0 17.25V53.9303L33.125 51.75L52.7907 49.875L74.75 48.3487L115.034 47.503L144.5 44.1203L178.25 41.75H226.875V0H178.25L144.5 3.375L113.5 9.875L96.875 8.75L74.75 9.875L39.5 14.375L33.125 13.75L0 17.25Z" },
  { id: 4, wing: "B", transform: "translate(218, 592) scale(0.845)",
    d: "M0 23V56.625L33.125 53.125L40.125 53.75L74.75 49.125L96.125 48.125L114.125 49.125L144.5 42.75L178.25 39.375H226.875V21.5V0H178.25L144.5 4.125L114.125 10.375L96.125 9.5L74.75 12L41 17.125V19.75L33.125 19L0 23Z" },
  { id: 5, wing: "B", transform: "translate(218, 562) scale(0.845)",
    d: "M0 27.75V61.125L33 57.125L40.9375 57.8125V55.25L73.75 50.1875L95.9375 47.625L114.188 48.4375L144.625 42.25L178.25 38.0938L226.875 38.25V25.9062V2L178.25 0L144.625 4.5L113.5 10.25H95.9375L74.375 13.75L40.9375 19.125V23H33L0 27.75Z" },
  { id: 6, wing: "B", transform: "translate(218, 530) scale(0.845)",
    d: "M0 31.75V65.625L33 61.125H40.9375V57L74.375 51.75L95.9375 48.4375H114.188L144.625 42.25L178.25 38.0938L226.875 39.75V22.5V2L178.25 0L144.625 4.5L114.188 13.75L95.9375 10.25L74.375 15.875L40.9375 22.5V25.875H33L0 31.75Z" },
  { id: 7, wing: "B", transform: "translate(218, 498) scale(0.845)",
    d: "M0 40V74L32.75 68.375H40.9375V64.75L74.25 58.125L95.875 52.5L114.188 56.25L144.625 46.875L178.25 42.5L226.875 44.4375V25.3125V2.75L178.25 0L145.375 6.875V12.5L114.188 20.5L96.5 18.375L74.25 22.375L40.9375 29.25V32.125H32.75L0 40Z" },
  { id: 8, wing: "B", transform: "translate(218, 468) scale(0.845)",
    d: "M0 44.375V79.25L32.75 71.625H40.9375V68.5L74.5625 61.5L96.4375 57.5625L114.312 59.6875L145.375 51.75V46.0625L178.312 39.25L226.875 42V21.3125V6.375L178.312 0L145.375 8.625V11.5L114.5 20.5L96.4375 18.75L74.5625 23L40.9375 31.625V37L32.75 36L0 44.375Z" },
  { id: 9, wing: "B", transform: "translate(218, 438) scale(0.845)",
    d: "M0 49.125V83.375L32.75 75L40.9375 75.75V70.625L74.5625 62L96.4375 57.5625L114.312 59.6875L145.375 50.75V47.5L178.312 39.125L226.875 45.25V17.5V4.5L178.312 0L145.375 9.5V15.125L114.312 23.25L96.25 21.5L74.5625 27.375L40.9375 36V41.375L32.75 40.375L0 49.125Z" },
  { id: 10, wing: "B", transform: "translate(218, 408) scale(0.845)",
    d: "M0 54V87.75L32.75 79.375L40.9375 80.25V75.125L74.5625 66.2673L96.875 60.375L114.312 62.125L145.375 54V48.5L178.125 38.875L226.875 43.25V15.5V2.625L178.125 0L144.657 10.5V15.7255L114.312 25.25L95 23.25L73.3125 29.125L40.9375 37.875V43.25H32.75L0 54Z" },
  { id: 11, wing: "B", transform: "translate(218, 380) scale(0.845)",
    d: "M0 54V91.125L32.75 80.25H40.9375V74.875L74.375 65.875L95 60.375L114.312 62.125L144.657 52.75V47.625L178.125 37.125L226.875 39.5V12.125V2.625L178.125 0L144.657 10.5V15.7255L114.312 25.25L95 23.25L73.3125 29.125L40.9375 37.875V43.25H32.75L0 54Z" },
  { id: 12, wing: "B", transform: "translate(218, 348) scale(0.845)",
    d: "M0 68.75V98.875L32.75 88H40.9375V82.625L74.375 73.625L95 68.125L114.312 69.875L144.657 60.5V55.375L178.125 44.875L226.875 47.25V19.875V4.75L205.25 0L178.125 5.875L144.657 16.25V22.5L114.312 31.75V36.5L95 34V38.8774H74.375L68.5 41.25V43.75L40.9375 53.375L32.75 55.625L0 68.75Z" },
  { id: 13, wing: "B", transform: "translate(218, 315) scale(0.845)",
    d: "M0 101.13V123.38H3.25L25 117.63V110.88H49L60.25 107.13V101.13L72.25 95.8797V91.8797L78 89.3797H89.75V83.8797L93.25 82.3797L119.75 85.1297V66.1297L143.5 68.6297L182 52.1297H188.5L208.25 44.8797L230.5 48.1297V7.87972V1.62972L208.25 0L191 6.87972H182L117 30.6297V46.3797L93.25 43.3797L20 72.6297V87.1297L9.5 90.8797L3.25 98.8797L0 101.13Z" },
  { id: 15, wing: "B", transform: "translate(218, 260) scale(0.845)",
    d: "M211 44.25L233.5 45.5L234.517 12.3879V3.79947L232.661 2.43848L222.861 1.70605L200 0L12.75 80.0801V87.75L30.5 91V103.625L0 116V121.042H5.5V142.946H6.40332L12.75 135.25L23.25 130.75V116.711L96.25 87.75L120.5 90.25V75L185.5 50.75H194.5L211 44.25Z" },
];