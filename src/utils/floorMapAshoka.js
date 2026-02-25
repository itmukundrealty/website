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
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/ground/floor.png",
    viewBox: "0 0 576 728",
    features: [
      "Visitor Lounge",
      "Branded Franchise Outlets",
      "Co-working Spaces",
      "Meeting Rooms"
    ],
    units: [
      {
        id: "G01",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/ground/0.png",
        path: "M573.688 -0.382812H96.25V134.031H119.719V293.688H147.656V281.875H159.438V297.5H156.48V330.875H199.5V253H538V242.75H573.688V-0.382812Z",
        details: { number: "G-01", type: "Commercial Space", sqft: "2100", balconySqft: "0", rooms: 1, washrooms: 1, floor: "Ground Floor" },
      },
      {
        id: "G02",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/ground/1.png",
        path: "M433.776 284.156C433.676 284.156 433.739 511 433.781 624.5H573.624L573.62 284.156H433.776Z",
        details: { number: "G-02", type: "Office Suite", sqft: "1200", balconySqft: "0", rooms: 1, washrooms: 1, floor: "Ground Floor" },
      },
      {
        id: "G03",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/ground/2.png",
        path: "M431.5 416.5V624.875H144.5V600.25H121.5V440.812H185.5V439.184C183.349 439.118 181.625 437.355 181.625 435.188V389.688C181.625 387.478 183.416 385.688 185.625 385.688H192.25C192.594 385.688 192.928 385.731 193.246 385.812H202V255.25H431.75L431.5 416.5Z",
        details: { number: "G-03", type: "Retail Shop", sqft: "800", balconySqft: "0", rooms: 1, washrooms: 0, floor: "Ground Floor" },
      },
      {
        id: "G04",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/ground/3.png",
        path: "M199.599 353.195V384.249H180.038V440.843H121.531V600.218H144.562V636.249H5.4375V510.249H6.5957C7.0617 506.334 10.1156 503.216 14 502.653V502.499H64.0537V483.514H83.9912V353.195H199.599Z",
        details: { number: "G-04", type: "Office Suite", sqft: "1150", balconySqft: "0", rooms: 1, washrooms: 1, floor: "Ground Floor" },
      }
    ]
  },
 {
    title: "First Floor",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/floor.png",
    pdfPath: "/downloadFloorPlan/first floor plan.pdf",
    viewBox: "0 0 576 624",
    features: [
      "Utility Block",
      "Private Offices"
    ],
    units: [
      {
        id: "101",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/0.png",
        path: "M176.579 22.9062H158.906V145.5H166.5V154.5H224V20.8047H176.579V22.9062Z",
        details: { number: "101", type: "Premium 3BHK", sqft: "1850", balconySqft: "160", rooms: 3, washrooms: 3, floor: "First Floor" },
      },
      {
        id: "102",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/1.png",
        path: "M273.495 22.9062H291.168V145.5H283.574V154.5H226.074V20.8047H273.495V22.9062Z",
        details: { number: "102", type: "Luxury 2BHK", sqft: "1420", balconySqft: "110", rooms: 2, washrooms: 2, floor: "First Floor" },
      },
      {
        id: "103",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/2.png",
        path: "M293.243 154.5V20.8047H357.181V154.5H293.243Z",
        details: { number: "103", type: "Standard 2BHK", sqft: "1350", balconySqft: "100", rooms: 2, washrooms: 2, floor: "First Floor" },
      },
      {
        id: "104",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/3.png",
        path: "M359.256 154.5V20.8047H423.193V154.5H359.256Z",
        details: { number: "104", type: "Garden View 2BHK", sqft: "1490", balconySqft: "125", rooms: 2, washrooms: 2, floor: "First Floor" },
      },
      {
        id: "105",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/4.png",
        path: "M425.268 154.5V20.8047H489.205V154.5H425.268Z",
        details: { number: "105", type: "Compact 1BHK", sqft: "850", balconySqft: "50", rooms: 1, washrooms: 1, floor: "First Floor" },
      },
      {
        id: "106",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/5.png",
        path: "M491.279 154.5V20.8047H555.217V154.5H491.279Z",
        details: { number: "106", type: "Studio Apartment", sqft: "650", balconySqft: "40", rooms: 1, washrooms: 1, floor: "First Floor" },
      },
      {
        id: "107",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/6.png",
        path: "M158.859 291.266V184.141H224V291.266H158.859Z",
        details: { number: "107", type: "Executive Suite", sqft: "920", balconySqft: "65", rooms: 1, washrooms: 1, floor: "First Floor" },
      },
      {
        id: "108",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/7.png",
        path: "M158.859 419.125V312H224V419.125H158.859Z",
        details: { number: "108", type: "Standard 2BHK", sqft: "1280", balconySqft: "90", rooms: 2, washrooms: 2, floor: "First Floor" },
      },
      {
        id: "109",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/8.png",
        path: "M226.109 291.266V184.141H291.25V291.266H226.109Z",
        details: { number: "109", type: "Corner 2BHK", sqft: "1310", balconySqft: "115", rooms: 2, washrooms: 2, floor: "First Floor" },
      },
      {
        id: "110",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/9.png",
        path: "M226.109 419.125V312H291.25V419.125H226.109Z",
        details: { number: "110", type: "Compact Suite", sqft: "750", balconySqft: "45", rooms: 1, washrooms: 1, floor: "First Floor" },
      },
      {
        id: "111",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/10.png",
        path: "M292.984 291.266V184.141H357V291.266H292.984Z",
        details: { number: "111", type: "Junior Suite", sqft: "780", balconySqft: "50", rooms: 1, washrooms: 1, floor: "First Floor" },
      },
      {
        id: "112",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/11.png",
        path: "M292.984 419.125V312H357V419.125H292.984Z",
        details: { number: "112", type: "Corner 3BHK", sqft: "1900", balconySqft: "180", rooms: 3, washrooms: 3, floor: "First Floor" },
      },
      {
        id: "113",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/12.png",
        path: "M358.734 291.266V184.141H422.75V291.266H358.734Z",
        details: { number: "113", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "First Floor" },
      },
      {
        id: "114",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/13.png",
        path: "M358.734 419.125V312H422.75V419.125H358.734Z",
        details: { number: "114", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "First Floor" },
      },
      {
        id: "115",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/14.png",
        path: "M425.109 291.266V184.141H489.125V291.266H425.109Z",
        details: { number: "115", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "First Floor" },
      },
      {
        id: "116",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/15.png",
        path: "M425.109 419.125V312H489.125V419.125H425.109Z",
        details: { number: "116", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "First Floor" },
      },
      {
        id: "117",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/16.png",
        path: "M491.015 291.266V184.141H555.03V291.266H491.015Z",
        details: { number: "117", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "First Floor" },
      },
      {
        id: "118",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/17.png",
        path: "M491.015 419.125V312H555.03V419.125H491.015Z",
        details: { number: "118", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "First Floor" },
      },
      {
        id: "119",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/18.png",
        path: "M127.75 332.75H21.25V418.875H127.75V332.75Z",
        details: { number: "119", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "First Floor" },
      },
      {
        id: "120",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/19.png",
        path: "M21.5 603V450.25H157.25V603H21.5Z",
        details: { number: "120", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "First Floor" },
      },
      {
        id: "121",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/20.png",
        path: "M158.859 603V450.25H291.25V603H158.859Z",
        details: { number: "121", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "First Floor" },
      },
      {
        id: "122",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/21.png",
        path: "M292.984 603V450.25H422.75V603H292.984Z",
        details: { number: "122", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "First Floor" },
      },
      {
        id: "123",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor1/22.png",
        path: "M425.266 603V450.25H555.031V603H425.266Z",
        details: { number: "123", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "First Floor" },
      }
    ],
  },
  // Floor 2 to 12 use the typical layout
  {
    title: "Second Floor",
    viewBox: "0 0 576 624",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/floor.png",
    pdfPath: "/downloadFloorPlan/typical layout.pdf",
    features: [
      "Utility Block",
      "Private Offices"
    ],
    units: [
      {
        id: "201",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/0.png",
        path: "M176.579 22.9062H158.906V145.5H166.5V154.5H224V20.8047H176.579V22.9062Z",
        details: { number: "201", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "202",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/1.png",
        path: "M273.495 22.9062H291.168V145.5H283.574V154.5H226.074V20.8047H273.495V22.9062Z",
        details: { number: "202", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "203",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/2.png",
        path: "M293.243 154.5V20.8047H357.181V154.5H293.243Z",
        details: { number: "203", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "204",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/3.png",
        path: "M359.256 154.5V20.8047H423.193V154.5H359.256Z",
        details: { number: "204", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "205",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/4.png",
        path: "M425.268 154.5V20.8047H489.205V154.5H425.268Z",
        details: { number: "205", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "206",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/5.png",
        path: "M491.279 154.5V20.8047H555.217V154.5H491.279Z",
        details: { number: "206", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "207",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/6.png",
        path: "M158.859 291.266V184.141H224V291.266H158.859Z",
        details: { number: "207", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "208",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/7.png",
        path: "M158.859 419.125V312H224V419.125H158.859Z",
        details: { number: "208", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "209",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/8.png",
        path: "M226.109 291.266V184.141H291.25V291.266H226.109Z",
        details: { number: "209", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "210",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/9.png",
        path: "M226.109 419.125V312H291.25V419.125H226.109Z",
        details: { number: "210", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "211",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/10.png",
        path: "M292.984 291.266V184.141H357V291.266H292.984Z",
        details: { number: "211", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "212",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/11.png",
        path: "M292.984 419.125V312H357V419.125H292.984Z",
        details: { number: "212", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "213",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/12.png",
        path: "M358.734 291.266V184.141H422.75V291.266H358.734Z",
        details: { number: "213", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "214",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/13.png",
        path: "M358.734 419.125V312H422.75V419.125H358.734Z",
        details: { number: "214", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "215",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/14.png",
        path: "M425.109 291.266V184.141H489.125V291.266H425.109Z",
        details: { number: "215", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "216",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/15.png",
        path: "M425.109 419.125V312H489.125V419.125H425.109Z",
        details: { number: "216", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "217",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/16.png",
        path: "M491.015 291.266V184.141H555.03V291.266H491.015Z",
        details: { number: "217", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "218",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/17.png",
        path: "M491.015 419.125V312H555.03V419.125H491.015Z",
        details: { number: "218", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "219",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/18.png",
        path: "M127.75 332.75H21.25V418.875H127.75V332.75Z",
        details: { number: "219", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "220",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/19.png",
        path: "M21.5 603V450.25H157.25V603H21.5Z",
        details: { number: "220", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "221",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/20.png",
        path: "M158.859 603V450.25H291.25V603H158.859Z",
        details: { number: "221", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "222",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/21.png",
        path: "M292.984 603V450.25H357V603H292.984Z",
        details: { number: "222", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "223",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/22.png",
        path: "M359.125 603V450.25H423.141V603H359.125Z",
        details: { number: "223", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      },
      {
        id: "224",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor2/23.png",
        path: "M425.266 603V450.25H555.031V603H425.266Z",
        details: { number: "224", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Second Floor" },
      }
    ]
  },
 {
    title: "Third Floor",
    viewBox: "0 0 576 624",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/floor.png",
    pdfPath: "/downloadFloorPlan/third floor plan.pdf",
    features: [
      "Utility Block",
      "Private Offices"
    ],
    units: [
      {
        id: "301",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/0.png",
        path: "M176.267 23.125H158.906V145.719H166.5V154.719H287.375V21.0234H176.267V23.125Z",
        details: { number: "301", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "302",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/1.png",
        path: "M289.493 154.719V21.0234H365.531V154.719H289.493Z",
        details: { number: "302", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "303",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/2.png",
        path: "M367.518 154.719V21.0234H422.094V154.719H367.518Z",
        details: { number: "303", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "304",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/3.png",
        path: "M424.08 154.719V21.0234H488.562V154.719H424.08Z",
        details: { number: "304", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "305",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/4.png",
        path: "M490.625 154.719V21.0234H555.217V154.719H490.625Z",
        details: { number: "305", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "306",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/5.png",
        path: "M158.859 293.016V184.531H222V293.016H158.859Z",
        details: { number: "306", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "307",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/6.png",
        path: "M223.984 293.016V184.531H287.25V293.016H223.984Z",
        details: { number: "307", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "308",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/7.png",
        path: "M424.158 293.016V184.531H488.531V293.016H424.158Z",
        details: { number: "308", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "309",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/8.png",
        path: "M424.188 419.188V322.938H488.484V419.188H424.188Z",
        details: { number: "309", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "310",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/9.png",
        path: "M157.125 419.188V322.938H422.094V419.188H157.125Z",
        details: { number: "310", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "311",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/10.png",
        path: "M490.625 293.016V184.531H554.998V293.016H490.625Z",
        details: { number: "311", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "312",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/11.png",
        path: "M490.734 419.188V322.938H555V419.188H490.734Z",
        details: { number: "312", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "313",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/12.png",
        path: "M289.328 293.016V184.531H422.031V293.016H289.328Z",
        details: { number: "313", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "314",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/13.png",
        path: "M127.5 332.812H21V389.594H127.5V332.812Z",
        details: { number: "314", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "315",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/14.png",
        path: "M127.5 391.531H21V448.375H127.5V391.531Z",
        details: { number: "315", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "316",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/15.png",
        path: "M21 603.313V450.844H160.5V603.313H21Z",
        details: { number: "316", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "317",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/16.png",
        path: "M162.484 603.312V450.562H287.219V603.312H162.484Z",
        details: { number: "317", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "318",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/17.png",
        path: "M289.367 603.312V450.562H422.062V603.312H289.367Z",
        details: { number: "318", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      },
      {
        id: "319",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor3/18.png",
        path: "M424.141 603.312V450.562H554.985V603.312H424.141Z",
        details: { number: "319", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Third Floor" },
      }
    ]
  },
 {
    title: "Fourth Floor",
    viewBox: "0 0 576 624",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/floor.png",
    pdfPath: "/downloadFloorPlan/fourth floor plan.pdf",
    features: [
      "Utility Block",
      "Private Offices"
    ],
    units: [
      {
        id: "401",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/0.png",
        path: "M176.267 23.125H158.906V145.719H166.5V154.719H287.375V21.0234H176.267V23.125Z",
        details: { number: "401", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "402",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/1.png",
        path: "M289.493 154.719V21.0234H422.031V154.719H289.493Z",
        details: { number: "402", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "403",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/2.png",
        path: "M424.08 154.719V21.0234H488.562V154.719H424.08Z",
        details: { number: "403", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "404",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/3.png",
        path: "M490.625 154.719V21.0234H555.217V154.719H490.625Z",
        details: { number: "404", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "405",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/4.png",
        path: "M158.859 293.016V184.531H222V293.016H158.859Z",
        details: { number: "405", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "406",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/5.png",
        path: "M223.984 293.016V184.531H287.25V293.016H223.984Z",
        details: { number: "406", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "407",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/6.png",
        path: "M424.158 293.016V184.531H488.531V293.016H424.158Z",
        details: { number: "407", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "408",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/7.png",
        path: "M424.188 419.188V322.938H554.875V419.188H424.188Z",
        details: { number: "408", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "409",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/8.png",
        path: "M157.125 419.188V322.938H287.219V419.188H157.125Z",
        details: { number: "409", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "410",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/9.png",
        path: "M289.344 419.188V322.938H421.875V419.188H289.344Z",
        details: { number: "410", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "411",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/10.png",
        path: "M490.625 293.016V184.531H554.998V293.016H490.625Z",
        details: { number: "411", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "412",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/11.png",
        path: "M289.328 293.016V184.531H354.672V293.016H289.328Z",
        details: { number: "412", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "413",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/12.png",
        path: "M356.743 293.016V184.531H422.047V293.016H356.743Z",
        details: { number: "413", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "414",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/13.png",
        path: "M127.5 332.75H21V448.375H127.5V332.75Z",
        details: { number: "414", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "415",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/14.png",
        path: "M21 603.313V450.844H160.5V603.313H21Z",
        details: { number: "415", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "416",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/15.png",
        path: "M162.484 603.312V450.562H287.219V603.312H162.484Z",
        details: { number: "416", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "417",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/16.png",
        path: "M289.367 603.312V450.562H422.062V603.312H289.367Z",
        details: { number: "417", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      },
      {
        id: "418",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor4/17.png",
        path: "M424.141 603.312V450.562H554.985V603.312H424.141Z",
        details: { number: "418", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fourth Floor" },
      }
    ]
  },
  {
    title: "Fifth Floor",
    viewBox: "0 0 576 624",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/floor.png",
    pdfPath: "/downloadFloorPlan/fifth floor plan.pdf",
    features: [
      "Utility Block",
      "Private Offices"
    ],
    units: [
      {
        id: "501",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/0.png",
        path: "M169.173 22.9062H158.875V145.5H164.522V154.5H222.078V20.8047H169.173V22.9062Z",
        details: { number: "501", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "502",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/1.png",
        path: "M289.478 154.5V20.8047H354.688V154.5H289.478Z",
        details: { number: "502", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "503",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/2.png",
        path: "M356.728 154.5V20.8047H422.156V154.5H356.728Z",
        details: { number: "503", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "504",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/3.png",
        path: "M424.196 154.5V20.8047H488.672V154.5H424.196Z",
        details: { number: "504", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "505",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/4.png",
        path: "M490.703 154.5V20.8047H555.125V154.5H490.703Z",
        details: { number: "505", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "506",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/5.png",
        path: "M224.118 154.5V20.8047H287.25V154.5H224.118Z",
        details: { number: "506", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "507",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/6.png",
        path: "M158.922 292.75V182.969H222.062V292.75H158.922Z",
        details: { number: "507", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "508",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/7.png",
        path: "M224.172 292.75V182.969H287.438V292.75H224.172Z",
        details: { number: "508", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "509",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/8.png",
        path: "M424.283 292.75V182.969H488.562V292.75H424.283Z",
        details: { number: "509", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "510",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/9.png",
        path: "M426.188 419.188V322.938H556.875V419.188H426.188Z",
        details: { number: "510", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "511",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/10.png",
        path: "M159.125 419.188V322.938H289.219V419.188H159.125Z",
        details: { number: "511", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "512",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/11.png",
        path: "M291.344 419.188V322.938H423.875V419.188H291.344Z",
        details: { number: "512", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "513",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/12.png",
        path: "M490.703 292.75V182.969H555.076V292.75H490.703Z",
        details: { number: "513", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "514",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/13.png",
        path: "M289.39 292.75V182.969H354.734V292.75H289.39Z",
        details: { number: "514", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "515",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/14.png",
        path: "M356.743 292.75V182.969H422.047V292.75H356.743Z",
        details: { number: "515", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "516",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/15.png",
        path: "M128.75 332.75H21.125V448.188H128.75V332.75Z",
        details: { number: "516", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "517",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/16.png",
        path: "M21.125 603.25V450.375H156.812V603.25H21.125Z",
        details: { number: "517", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "518",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/17.png",
        path: "M158.984 603.25V450.375H287.281V603.25H158.984Z",
        details: { number: "518", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "519",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/18.png",
        path: "M289.461 603.125V450.375H422.156V603.125H289.461Z",
        details: { number: "519", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      },
      {
        id: "520",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/floor5/19.png",
        path: "M424.266 603.219V450.375H555.11V603.219H424.266Z",
        details: { number: "520", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Fifth Floor" },
      }
    ]
  },
  {
    title: "Terrace",
    viewBox: "0 0 576 629",
    planImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/terrace/floor.png",
    pdfPath: "/downloadFloorPlan/terrace plan.pdf",
    features: [
      "Open Terrace",
      "Seating Area",
      "Utility Space"
    ],
    units: [
      {
        id: "T01",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/terrace/0.png",
        path: "M554.031 21.832H250.003V240.882H554.031V21.832Z",
        details: { number: "T-01", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Terrace" },
      },
      {
        id: "T02",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/terrace/1.png",
        path: "M553.875 288.75H401.094V591.75H553.875V288.75Z",
        details: { number: "T-02", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Terrace" },
      },
      {
        id: "T03",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/terrace/2.png",
        path: "M334.5 387.75H276V292.438C276 290.228 277.791 288.438 280 288.438H310.188V287.344H334.5V387.75Z",
        details: { number: "T-03", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Terrace" },
      },
      {
        id: "T04",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/terrace/3.png",
        path: "M359.719 288.531H397.938V387.75H335.438V287.312H359.719V288.531Z",
        details: { number: "T-04", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Terrace" },
      },
      {
        id: "T05",
        unitImage: "/floorPlans/ashoka/floorMapAndSpeceficMapImages/terrace/4.png",
        path: "M398 390.75V622L2.5 622.156V622L3 339.25H157V285.75H272.75V390.75H398Z",
        details: { number: "T-05", type: "TBD", sqft: "TBD", balconySqft: "TBD", rooms: 0, washrooms: 0, floor: "Terrace" },
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


