const typicalFloorUnits = [
  {
    id: "S01",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2/0.png",
    path: "M119.25 282.375L84.5 323.875L59.75 303L58 304.75L1.75 256.75L45 205.25L37.5 198.75L50.75 184.25L41 175.25L66.75 144.25L116.75 186.5L107.75 197.75L138.125 223.25L101.125 267.375L119.25 282.375Z",
    details: { number: "S-01", type: "Corner Office", sqft: "1600", balconySqft: "0", rooms: 2, washrooms: 1, floor: "Second Floor" },
  },
  {
    id: "S02",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2/1.png",
    path: "M682.25 700.5L620.25 773.25L594.125 751.625L586.75 760.25L551.875 731.25L609.25 663.5L618.75 671.75L631 656.5L608.375 638.125L656.375 580.25L672.5 593.5L690.5 572.125L728.5 603.75L720.625 613.5L750 638.125L720 674.25L723.75 677L695 711.5L682.25 700.5Z",
    details: { number: "S-02", type: "Large Workspace", sqft: "2200", balconySqft: "100", rooms: 3, washrooms: 2, floor: "Second Floor" },
  },
  {
    id: "S03",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2/2.png",
    path: "M249.5 348.5L188.625 420.625L137.75 378.75L149.75 363.75L123.5 341.75L114.5 351.5L81.625 324.375L139.375 256.125L249.5 348.5Z",
    details: { number: "S-03", type: "Meeting Room", sqft: "1400", balconySqft: "0", rooms: 1, washrooms: 0, floor: "Second Floor" },
  },
  {
    id: "S04",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2/3.png",
    path: "M217.25 451.375L186 425.5L256.75 340.25L282.5 362L325 311.75L382.5 360L292 468.5L238.875 424.5L217.25 451.375Z",
    details: { number: "S-04", type: "Co-working Pod", sqft: "1550", balconySqft: "0", rooms: 1, washrooms: 1, floor: "Second Floor" },
  },
  {
    id: "S05",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2/4.png",
    path: "M457 449L436 474.25L348.75 401.5L392.75 347.75L422 370.75L438.25 349.75L497.75 398.75L487.75 410.5L516 435.5L485 471.75L457 449Z",
    details: { number: "S-05", type: "Private Cabin", sqft: "1350", balconySqft: "0", rooms: 1, washrooms: 0, floor: "Second Floor" },
  },
  {
    id: "S06",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2/5.png",
    path: "M468.75 545.25L417 607L384.75 578.75L373.75 591L322 549.25L326.375 544.125L301.25 523.25L295.75 530L262.5 502.75L327 426.5L343.375 440.625L323.375 463.125L338.25 475.75L357.75 452.375L468.75 545.25Z",
    details: { number: "S-06", type: "Discussion Area", sqft: "1500", balconySqft: "0", rooms: 1, washrooms: 0, floor: "Second Floor" },
  },
  {
    id: "S07",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2/6.png",
    path: "M609 664L558 725L525.625 698L514.875 710.625L464.375 667.625L468.25 663.375L441.875 641.625L436.5 648.25L404.5 621.75L466.5 546.5L483.125 560.625L465 581.75L479 594L495.125 575.5L522.75 598.75L526.25 594.75L609 664Z",
    details: { number: "S-07", type: "Small Office", sqft: "1250", balconySqft: "0", rooms: 1, washrooms: 1, floor: "Second Floor" },
  },
  {
    id: "S08",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2/7.png",
    path: "M670.475 565.191L636.754 604.977L609.584 582.173L591.147 603.521L532.125 554.375L552.332 529.53L524.676 506.969L568.75 454.5L596.375 477.625L594.3 480.041L652.765 529.53L642.875 541.875L670.475 565.191Z",
    details: { number: "S-08", type: "Lounge", sqft: "1450", balconySqft: "50", rooms: 1, washrooms: 0, floor: "Second Floor" },
  },
  {
    id: "S09",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2/8.png",
    path: "M274 234.5L247.75 265.625L160.875 192.375L205.125 139.25L233 162.875L251 141.625L309.75 190.75L299 203.5L333.375 231.75L307.5 262.25L274 234.5Z",
    details: { number: "S-09", type: "Reception", sqft: "1100", balconySqft: "0", rooms: 0, washrooms: 1, floor: "Second Floor" },
  },
  {
    id: "S10",
    unitImage: "/floorPlans/Rudrarsh/floorMapAndSpeceficMapImages/floor2/9.png",
    path: "M167.023 157.612L132.312 198.75L33.1874 116.562L71.7499 71.5L60.3124 61.5625L102.254 12.5601L133.531 38.6645L143.381 27.8287L171 51.1875L161.852 62.3064L225.635 115.993L180.322 169.187L167.023 157.612Z",
    details: { number: "S-10", type: "Utility Room", sqft: "900", balconySqft: "0", rooms: 0, washrooms: 0, floor: "Second Floor" },
  },
];

// 1. Updated floorData with new Ground Floor units and dynamic viewBoxes
export const floorData = [
  {
    title: "Ground Floor",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
    viewBox: "0 0 576 728",
    features: [
      "Visitor Lounge",
      "Branded Franchise Outlets",
      "Co-working Spaces",
      "Meeting Rooms"
    ],
    units: [
      {
        id: "Parking",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M444.034 39.541V30.541H462.034V39.541H443.534M3.03418 37.041L0.53418 2.04102L19.5342 0.541016V10.041H18.8012L20.5342 36.541L3.03418 37.041ZM33.5342 37.041V19.541H52.0342V11.541H70.0342V20.541H79.0342V11.541H97.0342V20.541H106.034V11.541H124.034V20.541H133.034V11.541H151.034V20.541H159.534V11.541H178.034V20.541H186.534V11.541H204.534V20.541H213.534V11.541H231.034V20.541H240.034V11.541H258.034V20.541H267.034V11.541H285.534V20.541H294.034V11.541H312.034V20.541H356.534V22.541H383.534V40.041H52.0342V37.041H33.5342ZM392.034 35.541V26.541H410.034V35.541H392.034ZM417.534 37.541V28.541H435.534V37.541H417.534ZM466.034 40.541H475.034V58.541H466.034V40.541ZM468.034 66.541H477.034V84.541H468.034V66.541ZM470.534 92.041H479.534V110.541H470.534V92.041ZM470.534 118.541H479.534V136.541H470.534V118.541ZM470.534 145.041H479.534V162.541H470.534V145.041ZM476.034 531.541V487.041H183.534V531.541H476.034ZM130.034 518.041V471.541H83.5342L83.0342 461.041L61.0342 460.541V505.541L84.0342 506.041V518.041H130.034ZM83.0342 447.041H61.0342V342.541H83.5342L83.0342 445.541V447.041ZM65.0342 127.041H83.0342V73.541H65.5342L65.0342 127.041ZM40.5342 113.541V77.541H49.5342V114.041H40.5342V113.541Z",
        transform: "translate(-12, 48) scale(1.15)",
        details: { number: "Ample Parking Space", type: "Parking", sqft: "", rooms: "", washrooms: "" },
      },
      {
        id: "G1A",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M0.5 0.5V61H87V0.5H0.5Z",
        transform: "translate(185, 429) scale(1.15)",
        details: { number: "Shop Space No. G1A", type: "Shop Space", sqft: "", rooms: "", washrooms: "" },
      },
      {
        id: "G1B",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M0.5 62.5H87V0.5H0.5V62.5Z",
        transform: "translate(185, 500) scale(1.15)",
        details: { number: "Shop Space No. G1B", type: "Shop Space", sqft: "", rooms: "", washrooms: "" },
      },
      {
        id: "G1C",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M0.5 0.5V85.5H86.5V0.5H0.5Z",
        transform: "translate(185, 328) scale(1.15)",
        details: { number: "Shop Space No. G1C", type: "Shop Space", sqft: "", rooms: "", washrooms: "" },
      },
      {
        id: "G2",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M0.5 0.5V209.5H88.5V0.5H0.5Z",
        transform: "translate(286, 328) scale(1.15)",
        details: { number: "Shop Space No. G2", type: "Shop Space", sqft: "", rooms: "", washrooms: "" },
      },
      {
        id: "G3",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M0.5 0.5V209.5H87V0.5H0.5Z",
        transform: "translate(386, 328) scale(1.15)",
        details: { number: "Shop Space No. G3", type: "Shop Space", sqft: "", rooms: "", washrooms: "" },
      },
      {
        id: "CW1",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M0.5 0.5V84.5H70.5V87.5H89.5V0.5H0.5Z",
        transform: "translate(82, 128) scale(1.15)",
        details: { number: "Shop Space No. CW1", type: "Shop Space", sqft: "", rooms: "", washrooms: "" },
      },
      {
        id: "CW2",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M0.5 0.5V86.5H86.5V0.5H0.5Z",
        transform: "translate(185, 128) scale(1.15)",
        details: { number: "Shop Space No. CW2", type: "Shop Space", sqft: "", rooms: "", washrooms: "" },
      },
      {
        id: "CW3",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M0.5 0.5V87H89V0.5H0.5Z",
        transform: "translate(285, 128) scale(1.15)",
        details: { number: "Shop Space No. CW3", type: "Shop Space", sqft: "", rooms: "", washrooms: "" },
      },
      {
        id: "CW4",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M87 0.5H0.5V87H87V0.5Z",
        transform: "translate(385, 128) scale(1.15)",
        details: { number: "Shop Space No. CW4", type: "Shop Space", sqft: "", rooms: "", washrooms: "" },
      },
      {
        id: "CW5",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M0.5 0.5V51.5H86.5V0.5H0.5Z",
        transform: "translate(185, 248) scale(1.15)",
        details: { number: "Shop Space No. CW5", type: "Shop Space", sqft: "", rooms: "", washrooms: "" },
      },
      {
        id: "CW6",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M0.5 0.5V52H89L89.5 0.5H0.5Z",
        transform: "translate(285, 248) scale(1.15)",
        details: { number: "Shop Space No. CW6", type: "Shop Space", sqft: "", rooms: "", washrooms: "" },
      },
      {
        id: "CW7",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newground/floor.png",
        path: "M87 0.5V45H64.5V51.5H0.5V0.5H87Z",
        transform: "translate(385, 248) scale(1.15)",
        details: { number: "Shop Space No. CW7", type: "Shop Space", sqft: "", rooms: "", washrooms: "" },
      }
    ]
  },
  {
    title: "First Floor",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/floor.png",
    pdfPath: "/downloadFloorPlan/first floor plan.pdf",
    viewBox: "0 0 576 624",
    features: [
      "Utility Block",
      "Private Offices"
    ],
    units: [
      {
        id: "101",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/123.png",
        path: "M176.579 22.9062H158.906V145.5H166.5V154.5H224V20.8047H176.579V22.9062Z",
        details: { number: "Shop Space No. 123", sqft: "728 "},
      },
      {
        id: "102",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/122.png",
        path: "M273.495 22.9062H291.168V145.5H283.574V154.5H226.074V20.8047H273.495V22.9062Z",
        details: { number: "Shop Space No. 122", sqft: "728 "},
      },
      {
        id: "103",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/121.png",
        path: "M293.243 154.5V20.8047H357.181V154.5H293.243Z",
        details: { number: "Shop Space No. 121", sqft: "716 "},
      },
      {
        id: "104",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/120.png",
        path: "M359.256 154.5V20.8047H423.193V154.5H359.256Z",
        details: { number: "Shop Space No. 120", sqft: "716 "},
      },
      {
        id: "105",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/119.png",
        path: "M425.268 154.5V20.8047H489.205V154.5H425.268Z",
        details: { number: "Shop Space No. 119", sqft: "716 "},
      },
      {
        id: "106",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/118.png",
        path: "M491.279 154.5V20.8047H555.217V154.5H491.279Z",
        details: { number: "Shop Space No. 118", sqft: "716 "},
      },
      {
        id: "107",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/112.png",
        path: "M158.859 291.266V184.141H224V291.266H158.859Z",
        details: { number: "Shop Space No. 112", sqft: "592 "},
      },
      {
        id: "108",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/110.png",
        path: "M158.859 419.125V312H224V419.125H158.859Z",
        details: { number: "Shop Space No. 110", sqft: "592" },
      },
      {
        id: "109",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/113.png",
        path: "M226.109 291.266V184.141H291.25V291.266H226.109Z",
        details: { number: "Shop Space No. 113", sqft: "592 "},
      },
      {
        id: "110",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/109.png",
        path: "M226.109 419.125V312H291.25V419.125H226.109Z",
        details: { number: "Shop Space No. 109", sqft: "592" },
      },
      {
        id: "111",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/114.png",
        path: "M292.984 291.266V184.141H357V291.266H292.984Z",
        details: { number: "Shop Space No. 114", sqft: "580 "},
      },
      {
        id: "112",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/108.png",
        path: "M292.984 419.125V312H357V419.125H292.984Z",
        details: { number: "Shop Space No. 108", sqft: "580" },
      },
      {
        id: "113",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/115.png",
        path: "M358.734 291.266V184.141H422.75V291.266H358.734Z",
        details: { number: "Shop Space No. 115", sqft: "580 "},
      },
      {
        id: "114",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/107.png",
        path: "M358.734 419.125V312H422.75V419.125H358.734Z",
        details: { number: "Shop Space No. 107", sqft: "580" },
      },
      {
        id: "115",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/116.png",
        path: "M425.109 291.266V184.141H489.125V291.266H425.109Z",
        details: { number: "Shop Space No. 116", sqft: "580 "},
      },
      {
        id: "116",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/106.png",
        path: "M425.109 419.125V312H489.125V419.125H425.109Z",
        details: { number: "Shop Space No. 106", sqft: "580" },
      },
      {
        id: "117",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/117.png",
        path: "M491.015 291.266V184.141H555.03V291.266H491.015Z",
        details: { number: "Shop Space No. 117", sqft: "580 "},
      },
      {
        id: "118",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/105.png",
        path: "M491.015 419.125V312H555.03V419.125H491.015Z",
        details: { number: "Shop Space No. 105", sqft: "580" },
      },
      {
        id: "119",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/111.png",
        path: "M127.75 332.75H21.25V418.875H127.75V332.75Z",
        details: { number: "Shop Space No. 111", sqft: "800 " },
      },
      {
        id: "120",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/101.png",
        path: "M21.5 603V450.25H157.25V603H21.5Z",
        details: { number: "Shop Space No. 101" , sqft: "1752"  },
      },
      {
        id: "121",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/102.png",
        path: "M158.859 603V450.25H291.25V603H158.859Z",
        details: { number: "Shop Space No. 102", sqft: "1706 " },
      },
      {
        id: "122",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/103.png",
        path: "M292.984 603V450.25H422.75V603H292.984Z",
        details: { number: "Shop Space No. 103", sqft: "1674 " },
      },
      {
        id: "123",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor1/104.png",
        path: "M425.266 603V450.25H555.031V603H425.266Z",
        details: { number: "Shop Space No. 104", sqft: "1676 " },
      }
    ],
  },
  // Floor 2 to 12 use the typical layout
  {
    title: "Second Floor",
    viewBox: "0 0 576 624",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
      "Utility Block",
      "Private Offices"
    ],
    units: [
      {
        id: "201",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/223.png",
        path: "M176.579 22.9062H158.906V145.5H166.5V154.5H224V20.8047H176.579V22.9062Z",
        details: { number: "Shop Space No. 223", sqft: "728 "},
      },
      {
        id: "202",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/222.png",
        path: "M273.495 22.9062H291.168V145.5H283.574V154.5H226.074V20.8047H273.495V22.9062Z",
        details: { number: "Shop Space No. 222", sqft: "728 "},
      },
      {
        id: "203",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/221.png",
        path: "M293.243 154.5V20.8047H357.181V154.5H293.243Z",
        details: { number: "Shop Space No. 221", sqft: "716 "},
      },
      {
        id: "204",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/220.png",
        path: "M359.256 154.5V20.8047H423.193V154.5H359.256Z",
        details: { number: "Shop Space No. 220", sqft: "716 "},
      },
      {
        id: "205",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/219.png",
        path: "M425.268 154.5V20.8047H489.205V154.5H425.268Z",
        details: { number: "Shop Space No. 219", sqft: "716 "},
      },
      {
        id: "206",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/218.png",
        path: "M491.279 154.5V20.8047H555.217V154.5H491.279Z",
        details: { number: "Shop Space No. 218", sqft: "716 "},
      },
      {
        id: "207",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/212.png",
        path: "M158.859 291.266V184.141H224V291.266H158.859Z",
        details: { number: "Shop Space No. 212", sqft: "592 "},
      },
      {
        id: "208",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/210.png",
        path: "M158.859 419.125V312H224V419.125H158.859Z",
        details: { number: "Shop Space No. 210", sqft: "592 "},
      },
      {
        id: "209",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/213.png",
        path: "M226.109 291.266V184.141H291.25V291.266H226.109Z",
        details: { number: "Shop Space No. 213", sqft: "592 "},
      },
      {
        id: "210",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/209.png",
        path: "M226.109 419.125V312H291.25V419.125H226.109Z",
        details: { number: "Shop Space No. 209", sqft: "592 "},
      },
      {
        id: "211",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/214.png",
        path: "M292.984 291.266V184.141H357V291.266H292.984Z",
        details: { number: "Shop Space No. 214", sqft: "580 "},
      },
      {
        id: "212",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/208.png",
        path: "M292.984 419.125V312H357V419.125H292.984Z",
        details: { number: "Shop Space No. 208", sqft: "580 "},
      },
      {
        id: "213",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/215.png",
        path: "M358.734 291.266V184.141H422.75V291.266H358.734Z",
        details: { number: "Shop Space No. 215", sqft: "580 "},
      },
      {
        id: "214",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/207.png",
        path: "M358.734 419.125V312H422.75V419.125H358.734Z",
        details: { number: "Shop Space No. 207", sqft: "580 "},
      },
      {
        id: "215",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/216.png",
        path: "M425.109 291.266V184.141H489.125V291.266H425.109Z",
        details: { number: "Shop Space No. 216", sqft: "580 "},
      },
      {
        id: "216",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/206.png",
        path: "M425.109 419.125V312H489.125V419.125H425.109Z",
        details: { number: "Shop Space No. 206", sqft: "580 "},
      },
      {
        id: "217",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/217.png",
        path: "M491.015 291.266V184.141H555.03V291.266H491.015Z",
        details: { number: "Shop Space No. 217", sqft: "580 "},
      },
      {
        id: "218",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/205.png",
        path: "M491.015 419.125V312H555.03V419.125H491.015Z",
        details: { number: "Shop Space No. 205", sqft: "580 "},
      },
      {
        id: "219",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/211.png",
        path: "M127.75 332.75H21.25V418.875H127.75V332.75Z",
        details: { number: "Shop Space No. 211", sqft: "800 "},
      },
      {
        id: "220",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/201.png",
        path: "M21.5 603V450.25H157.25V603H21.5Z",
        details: { number: "Shop Space No. 201", sqft: "1752 "},
      },
      {
        id: "221",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/202.png",
        path: "M158.859 603V450.25H291.25V603H158.859Z",
        details: { number: "Shop Space No. 202", sqft: "1706 "},
      },
      {
        id: "222",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/203A.png",
        path: "M292.984 603V450.25H357V603H292.984Z",
        details: { number: "Shop Space No. 203A", sqft: "837 "},
      },
      {
        id: "223",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/203B.png",
        path: "M359.125 603V450.25H423.141V603H359.125Z",
        details: { number: "Shop Space No. 203B", sqft: "837 "},
      },
      {
        id: "224",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor2/204.png",
        path: "M425.266 603V450.25H555.031V603H425.266Z",
        details: { number: "Shop Space No. 204", sqft: "1752 "},
      }
    ]
  },
  {
    title: "Third Floor",
    viewBox: "0 0 576 624",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/floor.png",
    pdfPath: "/downloadFloorPlan/third floor plan.pdf",
    features: [
      "Utility Block",
      "Private Offices"
    ],
    units: [
      {
        id: "301",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/304a.png",
        path: "M176.267 23.125H158.906V145.719H166.5V154.719H287.375V21.0234H176.267V23.125Z",
        details: { number: "Shop Space No. 304A", sqft: "1612"},
      },
      {
        id: "302",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/304b.png",
        path: "M289.493 154.719V21.0234H365.531V154.719H289.493Z",
        details: { number: "Shop Space No. 304 B1", sqft: "970"},
      },
      {
        id: "303",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/304b2.png",
        path: "M367.518 154.719V21.0234H422.094V154.719H367.518Z",
        details: { number: "Shop Space No. 304 B2", sqft: "694"},
      },
      {
        id: "304",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/304c1.png",
        path: "M424.08 154.719V21.0234H488.562V154.719H424.08Z",
        details: { number: "Shop Space No. 304 C1", sqft: "821"},
      },
      {
        id: "305",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/304c2.png",
        path: "M490.625 154.719V21.0234H555.217V154.719H490.625Z",
        details: { number: "Shop Space No. 304 C2", sqft: "821"},
      },
      {
        id: "306",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/303a1.png",
        path: "M158.859 293.016V184.531H222V293.016H158.859Z",
        details: { number: "Shop Space No. 303 A1", sqft: "664"},
      },
      {
        id: "307",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/303a2.png",
        path: "M223.984 293.016V184.531H287.25V293.016H223.984Z",
        details: { number: "Shop Space No. 303 A2", sqft: "664"},
      },
      {
        id: "308",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/303c1.png",
        path: "M424.158 293.016V184.531H488.531V293.016H424.158Z",
        details: { number: "Shop Space No. 303 C1", sqft: "676"},
      },
      {
        id: "309",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/302b.png",
        path: "M424.188 419.188V322.938H488.484V419.188H424.188Z",
        details: { number: "Shop Space No. 302 B", sqft: "688"},
      },
      {
        id: "310",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/302a.png",
        path: "M157.125 419.188V322.938H422.094V419.188H157.125Z",
        details: { number: "Shop Space No. 302 A", sqft: "2736"},
      },
      {
        id: "311",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/303c2.png",
        path: "M490.625 293.016V184.531H554.998V293.016H490.625Z",
        details: { number: "Shop Space No. 303 C2", sqft: "676 "},
      },
      {
        id: "312",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/302c.png",
        path: "M490.734 419.188V322.938H555V419.188H490.734Z",
        details: { number: "Shop Space No. 302 C", sqft: "688 "},
      },
      {
        id: "313",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/303b.png",
        path: "M289.328 293.016V184.531H422.031V293.016H289.328Z",
        details: { number: "Shop Space No. 303 B", sqft: "1370 "},
      },
      {
        id: "314",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/301a1.png",
        path: "M127.5 332.812H21V389.594H127.5V332.812Z",
        details: { number: "Shop Space No. 301 A1", sqft: "522"},
      },
      {
        id: "315",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/301a2.png",
        path: "M127.5 391.531H21V448.375H127.5V391.531Z",
        details: { number: "Shop Space No. 301 A2", sqft: "598 "},
      },
      {
        id: "316",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/301b.png",
        path: "M21 603.313V450.844H160.5V603.313H21Z",
        details: { number: "Shop Space No. 301 B", sqft: "2040"},
      },
      {
        id: "317",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/301c.png",
        path: "M162.484 603.312V450.562H287.219V603.312H162.484Z",
        details: { number: "Shop Space No. 301 C", sqft: "1840 "},
      },
      {
        id: "318",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/301d.png",
        path: "M289.367 603.312V450.562H422.062V603.312H289.367Z",
        details: { number: "Shop Space No. 301 D", sqft: "1960 "},
      },
      {
        id: "319",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor3/301e.png",
        path: "M424.141 603.312V450.562H554.985V603.312H424.141Z",
        details: { number: "Shop Space No. 301 E", sqft: "1930 "},
      }
    ]
  },
  {
    title: "Fourth Floor",
    viewBox: "0 0 576 624",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/floor.png",
    pdfPath: "/downloadFloorPlan/fourth floor plan.pdf",
    features: [
      "Utility Block",
      "Private Offices"
    ],
    units: [
      {
        id: "401",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/404a.png",
        path: "M176.267 23.125H158.906V145.719H166.5V154.719H222V21.0234H176.267V23.125Z",
        details: { number: "Shop Space No. 404 A"},
      },
      {
        id: "402",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/404b.png",
        path: "M223.984 154.719V21.0234H287.375V154.719H223.984Z",
        details: { number: "Shop Space No. 404 B"},
      },
      {
        id: "403",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/404c.png",
        path: "M289.493 154.719V21.0234H354.672V154.719H289.493Z",
        details: { number: "Shop Space No. 404 C"},
      },
      {
        id: "404",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/404d.png",
        path: "M356.743 154.719V21.0234H422.031V154.719H356.743Z",
        details: { number: "Shop Space No. 404 D"},
      },
      {
        id: "405",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/404e.png",
        path: "M424.08 154.719V21.0234H488.562V154.719H424.08Z",
        details: { number: "Shop Space No. 404 E", sqft: "826 "},
      },
      {
        id: "406",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/404f.png",
        path: "M490.625 154.719V21.0234H555.217V154.719H490.625Z",
        details: { number: "Shop Space No. 404 F", sqft: "826 "},
      },
      {
        id: "407",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/403a.png",
        path: "M158.859 293.016V184.531H222V293.016H158.859Z",
        details: { number: "Shop Space No. 403 A", sqft: "658"},
      },
      {
        id: "408",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/403b.png",
        path: "M223.984 293.016V184.531H287.25V293.016H223.984Z",
        details: { number: "Shop Space No. 403 B", sqft: "658"},
      },
      {
        id: "409",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/403e.png",
        path: "M424.158 293.016V184.531H488.531V293.016H424.158Z",
        details: { number: "Shop Space No. 403 E", sqft: "672" },
      },
      {
        id: "410",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/403c.png",
        path: "M424.188 419.188V322.938H554.875V419.188H424.188Z",
        details: { number: "Shop Space No. 403 C", sqft: "680 "},
      },
      {
        id: "411",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/402a.png",
        path: "M157.125 419.188V322.938H287.219V419.188H157.125Z",
        details: { number: "Shop Space No. 402 A"},
      },
      {
        id: "412",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/402b.png",
        path: "M289.344 419.188V322.938H421.875V419.188H289.344Z",
        details: { number: "Shop Space No. 402 B"},
      },
      {
        id: "413",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/403f.png",
        path: "M490.625 293.016V184.531H554.998V293.016H490.625Z",
        details: { number: "Shop Space No. 403 F", sqft: "672"},
      },
      {
        id: "414",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/403c.png",
        path: "M289.328 293.016V184.531H354.672V293.016H289.328Z",
        details: { number: "Shop Space No. 403 C"},
      },
      {
        id: "415",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/403d.png",
        path: "M356.743 293.016V184.531H422.047V293.016H356.743Z",
        details: { number: "Shop Space No. 403 D", sqft: "680" },
      },
      {
        id: "416",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/401a.png",
        path: "M127.5 332.75H21V448.375H127.5V332.75Z",
        details: { number: "Shop Space No. 401 A", sqft: "672" },
      },
      {
        id: "417",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/401b.png",
        path: "M21 603.313V450.844H160.5V603.313H21Z",
        details: { number: "Shop Space No. 401 B", sqft: "2020"},
      },
      {
        id: "418",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/401c.png",
        path: "M162.484 603.312V450.562H287.219V603.312H162.484Z",
        details: { number: "Shop Space No. 401 C", sqft: "1824"},
      },
      {
        id: "419",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/401d.png",
        path: "M289.367 603.312V450.562H422.062V603.312H289.367Z",
        details: { number: "Shop Space No. 401 D", sqft: "1944"},
      },
      {
        id: "420",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor4/401e.png",
        path: "M424.141 603.312V450.562H554.985V603.312H424.141Z",
        details: { number: "Shop Space No. 401 E", sqft: "1914"},
      }
    ]
  },
  {
    title: "Fifth Floor",
    viewBox: "0 0 576 624",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/floor.png",
    pdfPath: "/downloadFloorPlan/fifth floor plan.pdf",
    features: [
      "Full Floor Private Office Space"
    ],
    units: [
      {
        id: "501",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/504a.png",
        path: "M169.173 22.9062H158.875V145.5H164.522V154.5H222.078V20.8047H169.173V22.9062Z",
        details: { number: "Shop Space No. 504 A", sqft: "854 " },
      },
      {
        id: "502",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/504c.png",
        path: "M289.478 154.5V20.8047H354.688V154.5H289.478Z",
        details: { number: "Shop Space No. 504 C", sqft: "882 " },
      },
      {
        id: "503",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/504d.png",
        path: "M356.728 154.5V20.8047H422.156V154.5H356.728Z",
        details: { number: "Shop Space No. 504 D", sqft: "882 " },
      },
      {
        id: "504",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/504e.png",
        path: "M424.196 154.5V20.8047H488.672V154.5H424.196Z",
        details: { number: "Shop Space No. 504 E", sqft: "870  " },
      },
      {
        id: "505",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/504f.png",
        path: "M490.703 154.5V20.8047H555.125V154.5H490.703Z",
        details: { number: "Shop Space No. 504 F", sqft: "870 " },
      },
      {
        id: "506",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/504b.png",
        path: "M224.118 154.5V20.8047H287.25V154.5H224.118Z",
        details: { number: "Shop Space No. 504 B", sqft: "854 " },
      },
      {
        id: "507",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/503a.png",
        path: "M158.922 292.75V182.969H222.062V292.75H158.922Z",
        details: { number: "Shop Space No. 503 A", sqft: "702 " },
      },
      {
        id: "508",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/503b.png",
        path: "M224.172 292.75V182.969H287.438V292.75H224.172Z",
        details: { number: "Shop Space No. 503 B", sqft: "702 " },
      },
      {
        id: "509",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/503e.png",
        path: "M424.283 292.75V182.969H488.562V292.75H424.283Z",
        details: { number: "Shop Space No. 503 E", sqft: "718 " },
      },
      {
        id: "510",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/502c.png",
        path: "M426.188 419.188V322.938H556.875V419.188H426.188Z",
        details: { number: "Shop Space No. 502 C"},
      },
      {
        id: "511",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/502a.png",
        path: "M159.125 419.188V322.938H289.219V419.188H159.125Z",
        details: { number: "Shop Space No. 502 A"},
      },
      {
        id: "512",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/502b.png",
        path: "M291.344 419.188V322.938H423.875V419.188H291.344Z",
        details: { number: "Shop Space No. 502 B"},
      },
      {
        id: "513",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/503f.png",
        path: "M490.703 292.75V182.969H555.076V292.75H490.703Z",
        details: { number: "Shop Space No. 503 F", sqft: "718 " },
      },
      {
        id: "514",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/503c.png",
        path: "M289.39 292.75V182.969H354.734V292.75H289.39Z",
        details: { number: "Shop Space No. 503 C", sqft: "728 " },
      },
      {
        id: "515",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/503d.png",
        path: "M356.743 292.75V182.969H422.047V292.75H356.743Z",
        details: { number: "Shop Space No. 503 D", sqft: "728 " },
      },
      {
        id: "516",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/501a.png",
        path: "M128.75 332.75H21.125V448.188H128.75V332.75Z",
        details: { number: "Shop Space No. 501 A", sqft: "1302 "},
      },
      {
        id: "517",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/501b.png",
        path: "M21.125 603.25V450.375H156.812V603.25H21.125Z",
        details: { number: "Shop Space No. 501 B", sqft: "2160 "},
      },
      {
        id: "518",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/501c.png",
        path: "M158.984 603.25V450.375H287.281V603.25H158.984Z",
        details: { number: "Shop Space No. 501 C", sqft: "2062 "},
      },
      {
        id: "519",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/501d.png",
        path: "M289.461 603.125V450.375H422.156V603.125H289.461Z",
        details: { number: "Shop Space No. 501 D", sqft: "2134 "},
      },
      {
        id: "520",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newfloor5/501e.png",
        path: "M424.266 603.219V450.375H555.11V603.219H424.266Z",
        details: { number: "Shop Space No. 501 E", sqft: "2104 "},
      }
    ]
  },
  {
    title: "Terrace",
    viewBox: "0 0 576 629",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newterrace/floor.png",
    pdfPath: "/downloadFloorPlan/terrace plan.pdf",
    features: [
      "Auditorium",
      "Break-Out Zone",
      "Conference Room",
      "Banquet Hall",
      "Health Room",
      "Pre-function Space"
    ],
    units: [
      {
        id: "T01",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newterrace/t4.png",
        path: "M554.031 21.832H250.003V240.882H554.031V21.832Z",
        details: { number: "Events Space" , sqft: "2945" },
      },
      {
        id: "T02",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newterrace/t5.png",
        path: "M553.875 288.75H401.094V591.75H553.875V288.75Z",
        details: { number: "Banquet Hall" , sqft: "2945" },
      },
      {
        id: "T03",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newterrace/t2.png",
        path: "M334.5 387.75H276V292.438C276 290.228 277.791 288.438 280 288.438H310.188V287.344H334.5V387.75Z",
        details: { number: "Conference Room 1"},
      },
      {
        id: "T04",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newterrace/t3.png",
        path: "M359.719 288.531H397.938V387.75H335.438V287.312H359.719V288.531Z",
        details: { number: "Conference Room 2" , sqft: "2945" },
      },
      {
        id: "T05",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/newterrace/t1.png",
        path: "M398 390.75V622L2.5 622.156V622L3 339.25H157V285.75H272.75V390.75H398Z",
        details: { number: "Break Out Area"},
      }
    ]
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


