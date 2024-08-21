export interface EyesConfig {
  style: "main";
  color: string;
}

export interface EyesProps {
  width?: number;
  height?: number;
  config: EyesConfig;
}

function Mouth({ width, height, config: { color } }: EyesProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 2560 2560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2_111"
        mask-type="luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="2560"
        height="2560"
      >
        <path d="M0 0H2560V2560H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2_111)">
        <path
          d="M1430.45 1372.32C1432.34 1372.32 1432.97 1377.36 1432.97 1377.36L1463.2 1375.47L1507.9 1388.69L1620.77 1389.47L1733.32 1372.32L1690.51 1332.02L1595.06 1289.82L1520.5 1292.35L1465.72 1334.54L1450.6 1358.47L1430.45 1372.32Z"
          fill="white"
        />
        <path
          d="M1533.16 1291.58L1595.06 1289.82L1612.42 1295.61L1630.42 1334.82L1620.77 1389.47C1620.77 1389.47 1518.55 1391.4 1518.55 1389.47C1518.55 1387.54 1509.55 1341.89 1509.55 1341.89L1533.16 1291.58Z"
          fill={color}
        />
        <path
          d="M1542.98 1318.75L1541.7 1339.32H1593.13L1593.77 1316.18L1542.98 1318.75Z"
          fill="white"
        />
        <path
          d="M1463.02 1400.43L1454.78 1410.04L1542.21 1449.87L1533.06 1435.68L1463.02 1400.43Z"
          fill="#444444"
        />
        <path
          d="M1692.36 1330.39L1597.6 1286.91L1521.62 1289.19C1521.62 1289.19 1468.97 1329.02 1465.31 1333.14C1462.41 1336.4 1454.4 1349.88 1451.19 1355.35L1427.24 1372.43L1431.52 1378.85C1431.52 1378.85 1462.33 1375.39 1463.29 1375.63L1439.43 1374.81L1436.25 1371.71L1454 1357.6L1453.97 1357.52L1466.03 1337.58L1522.84 1293.65L1597.27 1291.13L1688.7 1333.14L1732.64 1373.42L1739.15 1373.4L1692.36 1330.39Z"
          fill="black"
        />
        <path
          d="M1102.82 1372.32C1100.94 1372.32 1100.31 1377.36 1100.31 1377.36L1070.08 1375.47L1025.38 1388.69L912.505 1389.47L799.956 1372.32L842.773 1332.02L938.221 1289.82L1012.78 1292.35L1067.56 1334.54L1082.68 1358.47L1102.82 1372.32Z"
          fill="white"
        />
        <path
          d="M1000.12 1291.58L938.22 1289.82L920.862 1295.61L902.862 1334.82L912.504 1389.47C912.504 1389.47 1014.73 1391.4 1014.73 1389.47C1014.73 1387.54 1023.73 1341.89 1023.73 1341.89L1000.12 1291.58Z"
          fill={color}
        />
        <path
          d="M990.295 1318.75L991.581 1339.32H940.15L939.506 1316.18L990.295 1318.75Z"
          fill="white"
        />
        <path
          d="M1070.26 1400.43L1078.5 1410.04L991.064 1449.87L1000.22 1435.68L1070.26 1400.43Z"
          fill="#444444"
        />
        <path
          d="M840.919 1330.39L935.675 1286.91L1011.66 1289.19C1011.66 1289.19 1064.31 1329.02 1067.97 1333.14C1070.87 1336.4 1078.88 1349.88 1082.09 1355.35L1106.04 1372.43L1101.76 1378.85C1101.76 1378.85 1070.94 1375.39 1069.99 1375.63L1093.85 1374.81L1097.03 1371.71L1079.28 1357.6L1079.3 1357.52L1067.25 1337.58L1010.44 1293.65L936.007 1291.13L844.582 1333.14L800.637 1373.42L794.13 1373.4L840.919 1330.39Z"
          fill="black"
        />
      </g>
    </svg>
  );
}

export default Mouth;
