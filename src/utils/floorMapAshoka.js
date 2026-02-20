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
  "Visitor Lounge",
  "Branded Franchise Outlets",
  "Co-working Spaces",
  "Meeting Rooms"
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
  "Utility Block",
  "Private Offices"
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
    features: [
  "Utility Block",
  "Private Offices"
],
    units: typicalFloorUnits,
  },
  {
    title: "Third Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "Utility Block",
  "Private Offices"
],
    units: typicalFloorUnits,
  },
  {
    title: "Fourth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
  "Utility Block",
  "Private Offices"
],
    units: typicalFloorUnits,
  },
  {
    title: "Fifth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
   features: [
  "Full Floor Private Office Space"
],
    units: typicalFloorUnits,
  },
  {
    title: "Sixth Floor",
    viewBox: "0 0 757 781",
    planImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2-12/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
features: [
  "Auditorium",
  "Break-Out Zone",
  "Conference Room",
  "Banquet Hall",
  "Health Room",
  "Pre-function Space"
],
    units: typicalFloorUnits,
  }
  // Floor 2 to 12 use the typical layout
];

export const HERO_MARKERS = [
  {
    label: "Parking Area", // <-- Change this label to match your feature!
    cx: 1174.23,
    cy: 652.227,
    markerElements: (
      <>
        {/* Connector Line */}
        <line x1={1175.23} y1={683.035} x2={1175.23} y2={740.535} stroke="white" strokeWidth="2" />
        {/* Circle Background */}
        <circle cx={1174.23} cy={652.227} r="31.2266" fill="white" opacity="0.5" />
        <circle cx={1174.23} cy={652.227} r="30.2266" fill="none" stroke="white" strokeWidth="2" />
        {/* Icon Path (No translation wrap needed as coordinates are absolute) */}
        <g>
          <path
            d="M1159.09 656.958V652.55C1159.09 650.408 1160.78 648.672 1162.87 648.672M1159.09 656.958C1159.09 659.099 1160.78 660.835 1162.87 660.835H1185.58C1187.67 660.835 1189.37 659.099 1189.37 656.958M1159.09 656.958V662.889C1159.09 664.317 1160.22 665.474 1161.61 665.474H1164.13C1165.53 665.474 1166.66 664.317 1166.66 662.889V660.835M1189.37 656.958V652.55C1189.37 650.408 1187.67 648.672 1185.58 648.672H1162.87M1189.37 656.958V662.889C1189.37 664.317 1188.24 665.474 1186.84 665.474H1184.32C1182.93 665.474 1181.8 664.317 1181.8 662.889V660.835M1162.87 648.672L1164.89 640.898C1165.19 639.766 1166.19 638.979 1167.33 638.979H1181.24C1182.33 638.979 1183.29 639.691 1183.63 640.746L1186.21 648.672M1163.5 654.488H1167.92M1180.53 654.488H1184.95"
            fill="none"
            stroke="white"
            strokeWidth="2"
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
    d: "M909.014 717.048L215.014 691.548V636.048L910.014 653.048L948.576 654.3L1076.51 632.548V677.548L1026.45 685.877L918.393 684.206L918.271 714.865L909.014 717.048Z",
  },
  {
    id: 1,
    d: "M216.012 581.548V635.548L949.012 653.548L1100.51 628.048V568.548L922.012 572.048L277.497 574.548V581.94L216.012 581.548Z",
  },
  {
    id: 2,
    d: "M173.988 581.5L174 550.048H214.512V524.048H180.012V513.048L948.512 502.048L1101.01 525.048V575.048L948.512 572.048L277.512 575.048L277.5 581.5H173.988Z",
  },
  {
    id: 3,
    d: "M951.012 502.048L178.5 513V462H177.5V453H179.012V450.548L951.012 430.548L1102.01 477.048L1101.01 525.048L951.012 502.048Z",
  },
  {
    id: 4,
    d: "M175 403.5L213.5 410.5V429.5H178V450.5L950.512 430.548L1101.01 477.048V460.548L1079.51 452.548V427.548L1104.01 438.929L1109.01 438.048L950.512 366.048L175 402.5V403.5Z",
  },
  {
    id: 5,
    d: "M174.5 371.548V402.548L951.012 366.548L1108.51 438.048V392.048L951.012 300.048L215.512 346.048V369.5L174.5 371.548Z",
  },
  {
    id: 6,
    d: "M174.5 305V345L216.512 351.548L949.512 300.548L1108.01 391.548V363.548L1078.51 346.048V328.048H1103.01V322.048L936.512 189.548L177.512 255.048V266.048L216.512 277.048V302.548L174.5 305Z",
  }
];

export const FLOOR_PATHS_VIEWBOX = "0 0 1728 848";


