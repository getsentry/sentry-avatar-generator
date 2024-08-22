import { cn, darkenHexColor } from "@/lib/utils";
import {
  FacialHairStyle,
  PartConfigWithHairColor,
  PartProps,
} from "../sentry-avatar.types";
import classes from "./facial-hair.module.css";
import BaseSvg from "@/components/avatar/base-svg";

const FACIAL_HAIR_DARKENED_PERCENTAGE = 10;

export type FacialHairConfig = PartConfigWithHairColor<FacialHairStyle>;
export type FacialHairProps = PartProps<FacialHairConfig, FacialHairStyle>;

function Mustache({
  width,
  height,
  className,
  hairColor,
}: {
  width?: number;
  height?: number;
  className?: string;
  hairColor: string;
}) {
  return (
    <BaseSvg width={width} height={height} className={className}>
      <g className={classes.cls4}>
        <g id="Layer_12" data-name="Layer 12">
          <polygon
            className={classes.cls1}
            fill={hairColor}
            points="954.53 1299.7 1003.98 1287.89 1198.16 1342.41 1241.68 1419.15 1237.41 1456.98 1182.74 1436.69 1167.14 1423.95 1164.36 1430.15 1057.05 1406.66 1020.58 1402.73 954.3 1400.47 888.02 1402.73 851.54 1406.66 744.23 1430.15 741.46 1423.95 725.85 1436.69 671.19 1456.98 666.92 1419.15 710.43 1342.41 904.62 1287.89 954.07 1299.7 954.53 1299.7"
          />
          <polygon
            className={classes.cls2}
            fill={darkenHexColor(hairColor, FACIAL_HAIR_DARKENED_PERCENTAGE)}
            points="1241.68 1419.15 1198.16 1342.41 1003.98 1287.89 956.51 1322.57 924.89 1315.07 924.89 1380.5 939.88 1353.52 943.97 1383.22 997.13 1386.63 1003.94 1315.75 1014.85 1387.99 1055.71 1392.08 1055.71 1332.79 1093.91 1395.49 1134.8 1415.26 1113.67 1343.01 1167.14 1423.95 1182.74 1436.69 1155.93 1354.6 1241.68 1419.15"
          />
          <g>
            <polygon
              className={classes.cls3}
              fill={darkenHexColor(hairColor, FACIAL_HAIR_DARKENED_PERCENTAGE)}
              points="710.43 1342.41 666.92 1419.15 671.19 1456.98 725.85 1436.69 741.46 1423.95 767.45 1340.29 760.63 1426.16 786.86 1420.82 798.95 1317.56 710.43 1342.41"
            />
            <polygon
              className={classes.cls3}
              fill={darkenHexColor(hairColor, FACIAL_HAIR_DARKENED_PERCENTAGE)}
              points="956.51 1322.57 960 1319.86 1000.54 1288.49 954.07 1299.7 904.62 1287.89 924.89 1315.07 956.51 1322.57"
            />
            <polygon
              className={classes.cls3}
              fill={darkenHexColor(hairColor, FACIAL_HAIR_DARKENED_PERCENTAGE)}
              points="1113.67 1343.01 1134.46 1423.6 1164.36 1430.15 1167.14 1423.95 1113.67 1343.01"
            />
            <polygon
              className={classes.cls3}
              fill={darkenHexColor(hairColor, FACIAL_HAIR_DARKENED_PERCENTAGE)}
              points="1055.71 1336.2 1075.68 1410.74 1106.37 1417.45 1093.91 1395.49 1055.71 1336.2"
            />
            <polygon
              className={classes.cls3}
              fill={darkenHexColor(hairColor, FACIAL_HAIR_DARKENED_PERCENTAGE)}
              points="851.54 1406.66 857.41 1319.16 820.01 1413.56 851.54 1406.66"
            />
            <polygon
              className={classes.cls3}
              fill={darkenHexColor(hairColor, FACIAL_HAIR_DARKENED_PERCENTAGE)}
              points="900.4 1402.3 900.4 1328.02 864.26 1405.29 900.4 1402.3"
            />
          </g>
        </g>
      </g>
    </BaseSvg>
  );
}

function FacialHair({
  width,
  height,
  className,
  config: { style, hairColor },
}: FacialHairProps) {
  switch (style) {
    case FacialHairStyle.FIRST:
      return (
        <>
          <Mustache
            width={width}
            height={height}
            className={cn(className, "absolute top-0")}
            hairColor={hairColor}
          />
          <BaseSvg width={width} height={height} className={className}>
            <g className={classes.cls4}>
              <g id="Layer_13" data-name="Layer 13">
                <g>
                  <polygon
                    className={classes.cls1}
                    fill={hairColor}
                    points="818.07 1794.48 720.71 1707.64 695.31 1670.38 666.92 1419.15 710.43 1342.41 685.69 1419.15 695.31 1479.05 724.05 1513.18 754.34 1562.18 764.73 1603.52 902.89 1623.79 924.77 1552.87 950.77 1550.5 957.82 1550.5 983.82 1552.87 1005.7 1623.79 1143.87 1603.52 1154.26 1562.18 1184.55 1513.18 1213.29 1479.05 1222.9 1419.15 1198.16 1342.41 1241.68 1419.15 1213.29 1670.38 1187.89 1707.64 1091.53 1794.48 954.34 1808.71 818.07 1794.48"
                  />
                  <polygon
                    className={classes.cls3}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="695.31 1479.05 685.69 1419.15 710.43 1342.41 666.92 1419.15 695.31 1670.38 720.71 1707.64 818.07 1794.48 954.34 1808.71 1091.53 1794.48 1119.26 1769.49 976.84 1770.35 960 1667.58 946.21 1790.12 924.89 1687.34 900.4 1782.21 838.71 1769.36 849.37 1661.65 815.77 1707.11 788.1 1682.4 771.3 1692.29 798.95 1625.09 739.68 1671.53 764.73 1603.52 754.34 1562.18 695.31 1479.05"
                  />
                  <polygon
                    className={classes.cls2}
                    points="950.77 1550.5 995.62 1685.37 1005.7 1623.79 983.82 1552.87 950.77 1550.5"
                  />
                  <polygon
                    className={classes.cls2}
                    points="1019.97 1621.7 1047.99 1734.78 1047.99 1642.88 1076.65 1685.37 1113.67 1701.18 1098.39 1621.7 1167.14 1709.08 1151.75 1617.94 1199.69 1690.34 1213.29 1670.38 1237.41 1456.98 1189.3 1587.54 1194.24 1528.25 1143.87 1603.52 1019.97 1621.7"
                  />
                  <polygon
                    className={classes.cls3}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="924.77 1552.87 902.89 1623.79 900.4 1672.52 957.76 1571.5 950.77 1550.5 924.77 1552.87"
                  />
                </g>
              </g>
            </g>
          </BaseSvg>
        </>
      );

    case FacialHairStyle.SECOND:
      return (
        <>
          <Mustache
            width={width}
            height={height}
            className={cn(className, "absolute top-0")}
            hairColor={hairColor}
          />
          <BaseSvg width={width} height={height} className={className}>
            <g className={classes.cls4}>
              <g id="Layer_13" data-name="Layer 13">
                <g id="Layer_14" data-name="Layer 14">
                  <polygon
                    className={classes.cls1}
                    fill={hairColor}
                    points="575.99 1454.42 548 1287.89 459.02 1111.86 458.56 960 424.02 937.92 410.93 1082.57 432.62 1320.76 428.82 1454.42 529.45 1590.01 756.4 1718.93 703.97 1544.33 575.99 1454.42"
                  />
                  <polygon
                    className={classes.cls1}
                    fill={hairColor}
                    points="1496.3 937.92 1461.76 960 1461.3 1111.86 1372.32 1287.89 1344.34 1454.42 1216.35 1544.33 1163.93 1718.93 1390.87 1590.01 1489.82 1468.38 1490.1 1328.43 1509.4 1082.57 1496.3 937.92"
                  />
                  <polygon
                    className={classes.cls2}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="1496.3 937.92 1509.4 1082.57 1490.56 1322.57 1489.82 1468.38 1436.4 1534.04 1472.91 1317.56 1374.8 1599.14 1329.32 1624.97 1447.22 1258.47 1389.9 1381.01 1404.69 1223.86 1461.3 1111.86 1496.3 937.92"
                  />
                  <polygon
                    className={classes.cls2}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="1344.34 1454.42 1329.32 1550.5 1304.92 1511.45 1281.2 1554.93 1216.35 1544.33 1344.34 1454.42"
                  />
                  <polygon
                    className={classes.cls3}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="424.02 937.92 410.93 1082.57 432.62 1320.76 428.82 1454.42 529.45 1590.01 756.4 1718.93 703.97 1544.33 648.36 1505.27 664.75 1636.68 588.27 1485.67 570.7 1544.06 460.02 1261.44 562.21 1372.43 548 1287.89 438.28 1107.28 458.56 960 424.02 937.92"
                  />
                </g>
                <g>
                  <polygon
                    className={classes.cls1}
                    fill={hairColor}
                    points="818.07 1794.48 720.71 1707.64 695.31 1670.38 666.92 1419.15 710.43 1342.41 685.69 1419.15 695.31 1479.05 724.05 1513.18 754.34 1562.18 764.73 1603.52 902.89 1623.79 924.77 1552.87 950.77 1550.5 957.82 1550.5 983.82 1552.87 1005.7 1623.79 1143.87 1603.52 1154.26 1562.18 1184.55 1513.18 1213.29 1479.05 1222.9 1419.15 1198.16 1342.41 1241.68 1419.15 1213.29 1670.38 1187.89 1707.64 1091.53 1794.48 954.34 1808.71 818.07 1794.48"
                  />
                  <polygon
                    className={classes.cls3}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="695.31 1479.05 685.69 1419.15 710.43 1342.41 666.92 1419.15 695.31 1670.38 720.71 1707.64 818.07 1794.48 954.34 1808.71 1091.53 1794.48 1119.26 1769.49 976.84 1770.35 960 1667.58 946.21 1790.12 924.89 1687.34 900.4 1782.21 838.71 1769.36 849.37 1661.65 815.77 1707.11 788.1 1682.4 771.3 1692.29 798.95 1625.09 739.68 1671.53 764.73 1603.52 754.34 1562.18 695.31 1479.05"
                  />
                  <polygon
                    className={classes.cls2}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="950.77 1550.5 995.62 1685.37 1005.7 1623.79 983.82 1552.87 950.77 1550.5"
                  />
                  <polygon
                    className={classes.cls2}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="1019.97 1621.7 1047.99 1734.78 1047.99 1642.88 1076.65 1685.37 1113.67 1701.18 1098.39 1621.7 1167.14 1709.08 1151.75 1617.94 1199.69 1690.34 1213.29 1670.38 1237.41 1456.98 1189.3 1587.54 1194.24 1528.25 1143.87 1603.52 1019.97 1621.7"
                  />
                  <polygon
                    className={classes.cls3}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="924.77 1552.87 902.89 1623.79 900.4 1672.52 957.76 1571.5 950.77 1550.5 924.77 1552.87"
                  />
                </g>
              </g>
            </g>
          </BaseSvg>
        </>
      );

    case FacialHairStyle.THIRD:
      return (
        <>
          <Mustache
            width={width}
            height={height}
            className={cn(className, "absolute top-0")}
            hairColor={hairColor}
          />
          <BaseSvg width={width} height={height} className={className}>
            <g className={classes.cls4}>
              <g id="Layer_13_copy" data-name="Layer 13 copy">
                <g id="Layer_14_copy" data-name="Layer 14 copy">
                  <polygon
                    className={classes.cls1}
                    fill={hairColor}
                    points="575.99 1454.42 548 1287.89 459.02 1111.86 458.56 960 424.02 937.92 410.93 1082.57 432.62 1320.76 428.82 1559.42 529.45 1695.01 756.4 1823.93 703.97 1544.33 575.99 1454.42"
                  />
                  <polygon
                    className={classes.cls1}
                    fill={hairColor}
                    points="1496.3 937.92 1461.76 960 1461.3 1111.86 1372.32 1287.89 1344.34 1454.42 1216.35 1544.33 1163.93 1823.93 1390.87 1695.01 1489.82 1573.38 1490.1 1433.43 1509.4 1082.57 1496.3 937.92"
                  />
                  <polygon
                    className={classes.cls2}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="1496.3 937.92 1509.4 1082.57 1490.56 1322.57 1489.82 1573.38 1436.4 1639.04 1472.91 1317.56 1374.8 1704.14 1329.32 1729.97 1447.22 1258.47 1389.9 1381.01 1404.69 1223.86 1461.3 1111.86 1496.3 937.92"
                  />
                  <polygon
                    className={classes.cls2}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="1344.34 1454.42 1329.32 1550.5 1304.92 1511.45 1281.2 1554.93 1216.35 1544.33 1344.34 1454.42"
                  />
                  <polygon
                    className={classes.cls3}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="424.02 937.92 410.93 1082.57 432.62 1320.76 428.82 1559.42 529.45 1695.01 756.4 1823.93 703.97 1544.33 648.36 1505.27 664.75 1636.68 588.27 1485.67 570.7 1544.06 460.02 1261.44 562.21 1372.43 548 1287.89 438.28 1107.28 458.56 960 424.02 937.92"
                  />
                </g>
                <g>
                  <polygon
                    className={classes.cls1}
                    fill={hairColor}
                    points="818.07 1899.48 672.39 1776.21 695.31 1670.38 666.92 1419.15 710.43 1342.41 685.69 1419.15 695.31 1479.05 724.05 1513.18 754.34 1562.18 764.73 1603.52 902.89 1623.79 924.77 1552.87 950.77 1550.5 957.82 1550.5 983.82 1552.87 1005.7 1623.79 1143.87 1603.52 1154.26 1562.18 1184.55 1513.18 1213.29 1479.05 1222.9 1419.15 1198.16 1342.41 1241.68 1419.15 1255.51 1705.13 1262.68 1767.83 1091.53 1899.48 954.34 1913.71 818.07 1899.48"
                  />
                  <polygon
                    className={classes.cls3}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="695.31 1479.05 685.69 1419.15 710.43 1342.41 666.92 1419.15 695.31 1670.38 672.39 1776.21 818.07 1899.48 954.34 1913.71 1091.53 1899.48 1119.26 1874.49 976.84 1770.35 960 1667.58 946.21 1790.12 924.89 1687.34 900.4 1782.21 838.71 1769.36 849.37 1661.65 815.77 1707.11 788.1 1682.4 771.3 1692.29 798.95 1625.09 739.68 1671.53 764.73 1603.52 754.34 1562.18 695.31 1479.05"
                  />
                  <polygon
                    className={classes.cls2}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="950.77 1550.5 995.62 1685.37 1005.7 1623.79 983.82 1552.87 950.77 1550.5"
                  />
                  <polygon
                    className={classes.cls2}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="1019.97 1621.7 1047.99 1734.78 1047.99 1642.88 1076.65 1685.37 1113.67 1701.18 1098.39 1621.7 1151.75 1729.97 1151.75 1617.94 1199.69 1795.34 1237.41 1743.67 1237.41 1456.98 1189.3 1587.54 1194.24 1528.25 1143.87 1603.52 1019.97 1621.7"
                  />
                  <polygon
                    className={classes.cls3}
                    fill={darkenHexColor(
                      hairColor,
                      FACIAL_HAIR_DARKENED_PERCENTAGE
                    )}
                    points="924.77 1552.87 902.89 1623.79 900.4 1672.52 957.76 1571.5 950.77 1550.5 924.77 1552.87"
                  />
                </g>
                <polygon
                  className={classes.cls3}
                  fill={darkenHexColor(
                    hairColor,
                    FACIAL_HAIR_DARKENED_PERCENTAGE
                  )}
                  points="1270.35 1763.47 1297.01 1651.77 1303.39 1744.7 1270.35 1763.47"
                />
              </g>
            </g>
          </BaseSvg>
        </>
      );

    case FacialHairStyle.MUSTACHE:
      return (
        <Mustache
          width={width}
          height={height}
          className={className}
          hairColor={hairColor}
        />
      );
  }
}

export default FacialHair;
