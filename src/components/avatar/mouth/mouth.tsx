import { darkenHexColor } from "@/lib/utils";
import classes from "./mouth.module.css";
import BaseSvg from "@/components/avatar/base-svg";
import {
  PartConfigRequiredStyle,
  MouthStyle,
  PartProps,
  PartConfigFaceColor,
} from "@/components/avatar/sentry-avatar.types";

const MOUTH_DARKENED_PERCENTAGE = 30;

export interface MouthConfig
  extends PartConfigRequiredStyle<MouthStyle>,
    PartConfigFaceColor {}
export type MouthProps = PartProps<MouthConfig, MouthStyle>;

function Mouth({
  width,
  height,
  className,
  config: { style, faceColor },
}: MouthProps) {
  switch (style) {
    case MouthStyle.FIRST:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls3}>
            <g id="Mouth">
              <g id="Mouth_1">
                <path
                  className={classes.cls1}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M885.0481,1571.342s94.8444,19.623,151.7511-3.2705c32.705-30.0886,107.9264-138.6691,107.9264-138.6691l-188.1213,22.3502-184.7154-18.4256,113.1592,138.015Z"
                />
                <path
                  className={classes.cls1}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M957.7324,1430.4179l23.3849-19.4874s160.6989-11.8507,160.248-6.5749-184.9321,76.7297-184.9321,76.7297l-170.1903-50.6674-22.0858-31.1799,157.1987,14.2908,36.3766,16.8891Z"
                />
                <path
                  className={classes.cls2}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M1107.0091,1212.526c3.6366.9091,47.2755,48.1847,47.2755,48.1847l30.9109,71.8225,35.4567,41.8207-15.4555,24.5469,4.5457-26.3652-32.7292-32.7292-32.7292-75.459-37.2749-51.8213Z"
                />
                <path
                  className={classes.cls2}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M808.8096,1212.526c-3.6366.9091-47.2755,48.1847-47.2755,48.1847l-30.9109,71.8225-35.4567,41.8207,15.4555,24.5469-4.5457-26.3652,32.7292-32.7292,32.7292-75.459,37.2749-51.8213Z"
                />
                <polygon points="745.2448 1387.5065 736.0556 1394.7265 744.2603 1379.8086 772.4438 1404.3556 789.7175 1407.083 805.173 1439.8122 803.3547 1462.5408 769.7163 1431.6299 745.2448 1387.5065" />
                <polygon points="1168.5642 1387.5065 1177.7534 1394.7265 1169.5488 1379.8086 1141.3653 1404.3556 1124.0915 1407.083 1108.636 1439.8122 1110.4543 1462.5408 1144.0927 1431.6299 1168.5642 1387.5065" />
                <path
                  className={classes.cls4}
                  d="M789.7175,1407.083c5.1959,3.0885,167.3659,41.065,167.3659,41.065l167.0081-41.065-15.4555,32.7292,1.8183,22.7286-67.154,61.5602s-76.9794,22.5806-168.3283-1.0264c-42.0821-29.7654-71.6173-60.5338-71.6173-60.5338l1.8183-22.7286-15.4555-32.7292Z"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );

    case MouthStyle.SECOND:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls3}>
            <g id="Mouth">
              <g id="Mouth_2">
                <path
                  className={classes.cls1}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M1170.9041,1379.6966l-9.06,50.736-28.086,87.882-56.172,69.762-82.4505,13.9061-76.0994.5899-75.198-14.496-53.454-64.326-35.334-88.788-19.026-68.856,36.24,6.342,40.77-12.684,100.566-10.872,45.3,28.992,51.642-30.804s95.13,18.12,97.848,19.026,38.958,12.684,38.958,12.684l23.556.906Z"
                />
                <polygon
                  className={classes.cls4}
                  points="1168.1861 1382.4146 1151.8781 1414.1246 1159.1261 1428.6205 1138.2881 1466.6725 1056.7482 1520.1265 855.6163 1520.1265 762.2983 1441.3045 769.5463 1416.8426 741.4603 1373.3546 830.2483 1411.4066 910.8822 1439.4925 1004.2002 1439.4925 1094.8002 1411.4066 1168.1861 1382.4146"
                />
                <path d="M1150.9489,1410.2896c.5675-1.7024,13.619-24.9681,13.619-24.9681l29.5077-23.2657,5.1071,19.861-6.8095-8.5119-30.0752,56.7457-10.2142-9.6468-1.1349-10.2142Z" />
                <path d="M773.3387,1416.1722c-.5675-1.7024-17.349-30.8507-17.349-30.8507l-29.5077-23.2657-5.1071,19.861,6.8095-8.5119,27.06,58.181,8.7121,14.0734,9.3823-29.4871Z" />
                <path
                  className={classes.cls2}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M1135.5012,1189.8512c.8542,2.5625,20.4999,47.8331,20.4999,47.8331l90.5412,95.6662,5.018,17.7751s-10.9972,52.2662-8.4347,48.8496,17.9374-41.854,17.9374-41.854l1.7083-32.4582-34.1665-25.6249-63.208-64.9163-29.8957-45.2706Z"
                />
                <path
                  className={classes.cls2}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M766.9301,1195.4032c-.8542,2.5625-20.4999,47.8331-20.4999,47.8331l-90.5412,95.6662-7.3304,21.3021s13.3095,48.7392,10.747,45.3225-17.9374-41.854-17.9374-41.854l-1.7083-32.4582,34.1665-25.6249,63.208-64.9163,29.8957-45.2706Z"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );

    case MouthStyle.THIRD:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls3}>
            <g id="Mouth">
              <g id="Mouth_3">
                <polygon
                  className={classes.cls1}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  points="900.5089 1574.7757 1016.7734 1574.7757 1124.8183 1493.957 1163.7422 1411.2438 1042.353 1411.1051 989.2559 1418.4289 957.2679 1442.0327 919.7337 1417.3151 851.9891 1412.7377 753.2172 1412.9022 794.5738 1495.1734 900.5089 1574.7757"
                />
                <polygon
                  className={classes.cls4}
                  points="776.3283 1419.1502 907.6962 1467.805 994.6667 1468.4132 1143.672 1419.1502 1135.1575 1454.425 1107.7891 1479.9687 1011.0877 1528.0154 902.8308 1524.9744 814.6439 1482.4015 786.0592 1452.6004 776.3283 1419.1502"
                />
                <polygon points="1187.4614 1408.8111 1175.2977 1403.9456 1143.672 1419.1502 1135.1575 1454.425 1175.9059 1410.6356 1187.4614 1408.8111" />
                <polygon points="734.3635 1408.8111 746.5272 1403.9456 778.1528 1419.1502 786.6674 1454.425 745.919 1410.6356 734.3635 1408.8111" />
                <path
                  className={classes.cls2}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M1161.9068,1350.8659c.6231,2.4925,8.7237,14.3318,8.7237,14.3318l34.2716,19.9398,10.593,26.171-15.578,42.3722-4.985,21.8092,11.2162-23.0554,21.1861-39.8797-15.578-33.0254-36.7641-18.6936-13.0855-9.9699Z"
                />
                <path
                  className={classes.cls2}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M762.9799,1350.8659c-.6231,2.4925-8.7237,14.3318-8.7237,14.3318l-34.2716,19.9398-10.593,26.171,15.578,42.3722,4.985,21.8092-11.2162-23.0554-21.1861-39.8797,15.578-33.0254,36.7641-18.6936,13.0855-9.9699Z"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );

    case MouthStyle.FOURTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls3}>
            <g id="Mouth">
              <g id="Mouth_4">
                <path
                  className={classes.cls2}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M1179.4303,1369.4309s29.5024,37.0805,35.3488,51.3716c-7.6185,14.9831-31.4512,44.1193-31.4512,44.1193l21.4367-46.1215-25.3343-49.3695Z"
                />
                <path
                  className={classes.cls2}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M747.0209,1378.4851s-40.5025,24.5947-50.9291,35.9835c1.9689,16.6931,14.2593,52.272,14.2593,52.272l-4.1702-50.6886,40.8399-37.567Z"
                />
                <path
                  className={classes.cls1}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M1155.211,1441.2464l-139.216,105.9253h-115.7612l-131.65-103.6554-17.402-2.2698,72.6345-18.1586,140.7293,35.5606,107.4385-30.2644s67.3382,5.2963,83.227,12.8624Z"
                />
                <polygon points="750.0793 1444.3233 739.7805 1437.7026 744.328 1433.8907 751.8181 1441.1802 814.01 1448.1607 955.6031 1492.9245 1081.1018 1452.5091 1162.3364 1439.2939 1169.7979 1432.4956 1173.5287 1434.8999 1163.3312 1441.4495 1084.2283 1454.854 955.836 1495.7189 812.9802 1451.5826 750.0793 1444.3233" />
              </g>
            </g>
          </g>
        </BaseSvg>
      );

    case MouthStyle.FIFTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls3}>
            <g id="Mouth">
              <g id="Mouth_5">
                <path
                  className={classes.cls1}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M781.0726,1447.9281c3.8936.1206,105.465-7.645,105.465-7.645l39.4909-16.7043,28.7228,28.9507,33.6713-30.1355,44.6833,16.9737,78.6219,1.8971-15.4403,16.1842-27.8604,24.3248-17.3423,31.4209-28.9025,27.1654-50.5619,21.8175-56.7742-4.0974-39.0392-23.0346-33.7878-41.5791-52.0362-31.232-8.9104-14.3065Z"
                />
                <path d="M744.2344,1452.2875c1.811-2.8168,27.7665-6.0346,27.7665-6.0346l46.4123,13.3651,88.0026,6.3128,51.3112,31.4675,56.8183-35.0123s21.795,1.2498,24.1089.7469,34.7436-8.6913,34.7436-8.6913c0,0,39.959-14.1704,54.2174-20.0936,3.0072-1.2492,19.5119,4.466,19.8087,4.5753,1.7043.6274-.7696,6.2965-.7696,6.2965l-18.1019-9.1794-54.5552,20.9037-38.3197,9.544-22.458,1.6025-55.0785,34.4916-53.014-34.1791-86.4527-6.8512-46.1599-12.3435-19.2023,6.8077-9.0776-3.7287Z" />
                <polygon
                  className={classes.cls2}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  points="1151.8754 1303.4899 1163.7394 1316.8579 1171.3697 1350.3176 1217.4497 1401.5802 1208.3563 1461.967 1201.5717 1471.146 1205.68 1407.7395 1163.9977 1355.1449 1155.7576 1318.0551 1151.8754 1303.4899"
                />
                <polygon
                  className={classes.cls2}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  points="767.948 1320.7567 755.2792 1333.3646 745.5922 1366.2878 696.4272 1414.5995 701.7649 1475.4335 707.9683 1485.0149 707.793 1421.4756 752.6513 1371.5622 763.1716 1335.0536 767.948 1320.7567"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );

    case MouthStyle.SIXTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls3}>
            <g id="Mouth">
              <g id="Mouth_6">
                <path
                  className={classes.cls1}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  d="M1146.9509,1451.8261l-115.634,113.1788h-148.4983l-121.72-115.0046,56.9918-9.0878,102.5956-10.3874,44.2936,18.258,46.9446-20.0838,84.513,10.3874s52.9482,12.7394,50.5138,12.7394Z"
                />
                <path d="M1100.3988,1453.0337l-11.5293,29.6214,61.698-30.3101c.7133-.3242,1.3216-.8415,1.7562-1.4934l18.9323-14.0987-18.9266.3425-5.0296,11.4005-46.901,4.5378Z" />
                <path d="M816.0586,1453.0337l10.1602,36.5256-67.9423-37.6159c-.7133-.3242-1.3216-.8415-1.7562-1.4934l-6.7119-10.0678,6.7062-3.6884,5.0296,11.4005,54.5143,4.9394Z" />
                <polygon
                  className={classes.cls4}
                  points="1092.1769 1481.0389 1026.4481 1515.1205 889.5132 1513.2947 824.8147 1488.9205 811.8543 1452.3267 907.7711 1467.6497 1019.1449 1465.2153 1102.0611 1452.8603 1092.1769 1481.0389"
                />
                <polygon
                  className={classes.cls2}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  points="1188.8303 1475.1503 1201.3478 1461.4406 1194.1949 1392.2959 1134.2894 1330.3041 1131.011 1335.3707 1185.113 1396.424 1188.8303 1475.1503"
                />
                <polygon
                  className={classes.cls2}
                  fill={darkenHexColor(faceColor, MOUTH_DARKENED_PERCENTAGE)}
                  points="716.4896 1475.1503 703.972 1461.4406 711.1249 1392.2959 771.0304 1330.3041 774.3089 1335.3707 720.2068 1396.424 716.4896 1475.1503"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );
  }
}

export default Mouth;
