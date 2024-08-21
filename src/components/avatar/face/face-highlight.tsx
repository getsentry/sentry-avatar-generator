import { FaceStyle, SubPartProps } from "../sentry-avatar.types";

function FaceHighlight({
  partProps: {
    width,
    height,
    config: { style },
  },
  className,
}: SubPartProps<FaceStyle>) {
  switch (style) {
    case FaceStyle.FIRST:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <defs>
            <style>
              {`
              .cls-1 {
                isolation: isolate;
              }
              .cls-2 {
                fill: #fff;
                mix-blend-mode: screen;
                opacity: .10;
              }
            `}
            </style>
          </defs>
          <g className="cls-1">
            <g id="Face">
              <g id="Face_1">
                <polygon
                  id="Highlight"
                  className="cls-2"
                  points="1425.094 577.7327 1490.1832 1033.3478 1454.556 1383.1872 1341.0608 1564.0627 1133.9957 1678.8655 1087.371 1735.0542 1041.4075 1751.7568 1105.1042 1620.528 1280.7926 1515.454 1354.019 1134.7422 1416.7646 1043.5111 1366.9708 905.0676 1305.3868 850.5684 1331.2806 696.2324 1294.5631 540.7534 1253.3347 406.8365 1425.094 577.7327"
                />
              </g>
            </g>
          </g>
        </svg>
      );
    case FaceStyle.SECOND:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <defs>
            <style>
              {`
              .cls-1 {
                isolation: isolate;
              }
        
              .cls-2 {
                fill: #fff;
                mix-blend-mode: screen;
                opacity: .10;
              }
              `}
            </style>
          </defs>
          <g className="cls-1">
            <g id="Face">
              <g id="Face_2">
                <path
                  id="Hilite"
                  className="cls-2"
                  d="M1447.1967,552.232c34.5981,120.5527,39.7186,542.1542,39.7186,542.1542,0,0-17.9508,232.5693-28.1828,275.9354-8.5111,36.0723-149.6514,209.9273-149.6514,209.9273l-208.493,174.7464,69.5921-83.2624,164.0534-200.3345,15.07-327.006,61.5329-100.2434-61.2076-173.8419-70.2749-44.3401,45.9985-129.0967-36.7175-155.4791-23.3717-178.9674s161.5137,118.6583,181.9334,189.8081Z"
                />
              </g>
            </g>
          </g>
        </svg>
      );
    case FaceStyle.THIRD:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <defs>
            <style>
              {`
              .cls-1 {
                isolation: isolate;
              }
              .cls-2 {
                fill: #fff;
                mix-blend-mode: screen;
                opacity: .10;
              }
            `}
            </style>
          </defs>
          <g className="cls-1">
            <g id="Face">
              <g id="Face_3">
                <polygon
                  className="cls-2"
                  points="1464.4243 675.115 1480.6821 1221.627 1485.6845 1431.7277 1424.4051 1548.0334 1036.6772 1792.8848 1063.6162 1742.3764 1273.371 1584.2782 1340.2287 1445.4198 1346.4757 1293.2297 1434.1783 1112.5103 1365.9941 906.0164 1289.933 839.1964 1320.7612 670.9388 1288.0898 399.9831 1464.4243 675.115"
                />
              </g>
            </g>
          </g>
        </svg>
      );

    case FaceStyle.FOURTH:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <defs>
            <style>
              {`
              .cls-1 {
                isolation: isolate;
              }
              .cls-2 {
                fill: #fff;
                mix-blend-mode: screen;
                opacity: .10;
              }
            `}
            </style>
          </defs>
          <g className="cls-1">
            <g id="Face">
              <g id="Face_4">
                <polygon
                  className="cls-2"
                  points="1495.9823 671.7466 1492.5419 1026.1093 1461.9454 1370.2765 1278.0894 1593.7776 1054.4625 1781.8536 1234.8949 1586.7457 1314.5163 1415.7941 1350.1923 1293.2297 1437.8948 1112.5103 1365.1468 905.1713 1333.2665 871.039 1361.7993 649.91 1275.7958 378.1646 1436.3484 529.5428 1495.9823 671.7466"
                />
              </g>
            </g>
          </g>
        </svg>
      );

    case FaceStyle.FIFTH:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <defs>
            <style>
              {`
              .cls-1 {
                isolation: isolate;
              }
              .cls-2 {
                fill: #fff;
                mix-blend-mode: screen;
                opacity: .10;
              }
            `}
            </style>
          </defs>
          <g className="cls-1">
            <g id="Face">
              <g id="Face_5">
                <polygon
                  id="Screen"
                  className="cls-2"
                  points="1489.8215 694.978 1482.3529 1116.0178 1425.4052 1414.76 1272.2998 1574.4004 1055.7117 1792.1284 1214.4185 1573.4668 1330.0765 1458.941 1345.8301 1293.2297 1433.5327 1112.5103 1370.8281 908.1666 1328.9044 871.039 1357.4371 649.91 1259.2298 376.6308 1372.1917 431.7114 1489.8215 694.978"
                />
              </g>
            </g>
          </g>
        </svg>
      );

    case FaceStyle.SIXTH:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <defs>
            <style>
              {`
              .cls-1 {
                isolation: isolate;
              }
              .cls-2 {
                fill: #fff;
                mix-blend-mode: screen;
                opacity: .10;
              }
            `}
            </style>
          </defs>
          <g className="cls-1">
            <g id="Face">
              <g id="Face_6">
                <polygon
                  id="Screen"
                  className="cls-2"
                  points="1498.5053 692.1164 1465.0393 1108.1803 1446.13 1345.8977 1357.8864 1496.2719 1141.7797 1655.6506 1022.2928 1777.2106 1162.9093 1589.0535 1307.9395 1467.9603 1333.4765 1292.3241 1426.3741 1112.5103 1363.6695 908.1666 1299.7975 839.7197 1350.2785 649.91 1347.6019 482.4439 1304.1616 350.2893 1448.3819 497.5699 1498.5053 692.1164"
                />
              </g>
            </g>
          </g>
        </svg>
      );
  }
}

export default FaceHighlight;
