import { darkenHexColor } from "@/lib/utils";
import classes from "@/components/avatar/hair/hair-front.module.css";
import {
  HairStyle,
  SubPartProps,
} from "@/components/avatar/sentry-avatar.types";
import BaseSvg from "@/components/avatar/base-svg";
import { HairConfig } from "@/components/avatar/hair/hair";

const HAIR_DARKENED_PERCENTAGE = 10;

function HairFront({
  partProps: {
    width,
    height,
    config: { style, color },
  },
  className,
}: SubPartProps<HairConfig, HairStyle>) {
  switch (style) {
    case HairStyle.FIRST:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cl4}>
            <g id="Hair_Front" data-name="Hair Front">
              <path
                className={classes.cl1}
                fill={color}
                d="M1555.71,624.65l-53.14-101.27.24-80.99-38.41-91.13-50.25-40.4-45.01-73.65-118.79-90.57-127.36-41.54-104.68,26.32-47.4-16.63-76.71-23.96-198.62,55.81-57.12,71.38-84.49,17.89-53.57,62.99-71.84,35.61-47.39,155.43,17.38,72.82-17.38,150.2,29.94,91.57,8.92,90.09,49.8,146.21,7.34-130.94,13.82-57.09,8.92-231.73,57.33-100.9,48.03-120.94,33.3-27.96,100.27,26.77,229.26,19.53,238.96-19.53,100.27-26.77,33.3,27.96,48.03,120.94,57.33,100.9,8.92,231.73,13.82,57.09,7.34,130.94,39.37-150,8.84-81.88,35.45-44.31-4.04-139.99ZM400.37,481.07l38.27-118.65,56.04-27.92-94.31,146.57ZM832.27,144.32l-140.7,53.14,18.6-35.7,168.6-46.97,52.33,16.63-98.84,12.9ZM1099.7,144.32h74.42l79.07,39.99,63.95,72.29-217.44-112.28ZM1539.24,722.22l-24.92-128.75,24.92,43.87v84.88Z"
              />
              <polygon
                className={classes.cl3}
                fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                points="504.57 401.15 457.97 481.07 476.72 362.42 400.37 481.07 438.64 362.42 428.56 334.5 381.17 489.94 398.55 562.75 381.17 712.95 411.11 804.52 420.03 894.61 465.22 1027.27 447.53 890.82 447.53 816.76 438.64 651.32 474.22 743.96 465.35 606.61 607.14 368.83 735.63 275.37 614.67 326 504.57 401.15"
              />
              <polygon
                className={classes.cl3}
                fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                points="831.63 218.18 719.38 224.09 589.41 256.6 551.02 313.14 614.67 275.37 831.63 218.18"
              />
              <polygon
                className={classes.cl2}
                fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                points="1515.46 890.82 1524.3 808.95 1559.74 764.64 1555.71 624.65 1502.56 523.39 1502.8 442.39 1464.39 351.27 1414.14 310.86 1369.14 237.21 1250.35 146.64 1122.99 105.1 1018.31 131.42 894.19 90.83 695.58 146.64 710.17 161.76 878.78 114.79 931.1 131.42 823.77 147.53 960 181.26 1041.41 179.79 1197.9 237.38 1175.75 200.46 1055.71 132.52 1171.32 132.52 1248.12 165.02 1348.55 244.77 1363.31 309.33 1224.48 227.05 1338.21 334.5 1428.3 466.31 1470.06 581.82 1508.05 624.33 1526.78 714.43 1539.24 766.12 1506.57 811.9 1508.05 705.56 1478.51 789.75 1515.46 890.82"
              />
              <polygon
                className={classes.cl3}
                fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                points="850.15 382.25 968.11 417.57 824.66 405.35 850.15 382.25"
              />
              <polygon
                className={classes.cl3}
                fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                points="796.71 402.97 671.85 352.56 638.58 371.27 738.85 398.04 796.71 402.97"
              />
              <polygon
                className={classes.cl2}
                fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                points="1281.89 340.03 1195.86 271.52 1032.56 218.18 968.11 213.38 1073.19 293.03 1208.42 313.14 1281.89 340.03"
              />
            </g>
          </g>
        </BaseSvg>
      );

    case HairStyle.SECOND:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cl4}>
            <g id="Hair_Front" data-name="Hair Front">
              <g id="Layer_18" data-name="Layer 18">
                <polygon
                  className={classes.cl1}
                  fill={color}
                  points="1457.24 1106.16 1438.93 923.4 1397.78 767.4 1391.58 732.07 1364.71 693.37 1379.64 761.43 1289.93 735.02 1253.63 600.96 1275.22 739.04 1175.19 732.07 1165 656.37 1130.42 600.08 1145.34 724.12 1036.68 720.06 1033.41 664.43 1014.01 600.08 999.12 719.64 902.09 722.63 883.9 646.33 883.9 722.63 830.46 728.6 815.53 622.64 811.79 522.65 800.77 651 794.64 733.07 697.64 743.52 684.21 643.53 675.25 742.03 639.35 745.01 639.35 656.37 643.86 568.92 614.67 686.09 606.87 753.35 546.91 768.89 561.83 663.54 539.91 724.12 523.03 782.32 504.57 794.26 464.83 930.69 451.4 1101.68 428.56 1058.71 411.11 930.69 361.22 780.83 428.56 547.89 454.38 479.38 524.8 343.29 629.41 279.43 757.33 218.22 909.55 200.31 976.7 219.71 1054.46 210.75 1364.71 334.5 1467.46 491.06 1542.94 753.35 1497.24 930.69 1482.3 1040.27 1457.24 1106.16"
                />
                <polygon
                  className={classes.cl3}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="629.41 279.43 524.8 343.29 454.38 479.38 428.82 540.56 361.22 780.83 411.11 930.69 428.56 1058.71 451.4 1101.68 466.96 923.4 504.57 794.26 578.25 528.62 557.02 676.85 546.91 768.89 579.49 760.45 631.97 468.93 643.86 568.92 639.35 686.81 639.35 745.01 657.24 743.53 669.28 586.83 673.56 417.71 686.68 328.65 727.82 232.34 629.41 279.43"
                />
                <polygon
                  className={classes.cl2}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="877.11 723.39 883.9 542.05 867.59 340.59 849.86 628.61 830.46 728.6 877.11 723.39"
                />
                <polygon
                  className={classes.cl2}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="999.12 719.64 1015.84 606.13 991.63 378.16 954.27 295.93 919.89 722.08 999.12 719.64"
                />
                <polygon
                  className={classes.cl2}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="1457.24 1106.16 1482.3 1040.27 1497.24 930.69 1542.94 753.35 1467.46 491.06 1364.71 334.5 1054.46 210.75 976.7 219.71 909.55 200.31 757.33 218.22 883.9 230.15 978.2 274.93 1073.71 390.2 1117.02 723.06 1145.34 724.12 1112.43 471.91 1179.66 653.23 1199.33 733.75 1275.22 739.04 1242.88 532.22 1312.97 741.8 1379.64 761.43 1315.47 543.55 1397.78 700.24 1416.95 725.61 1455.75 894.25 1445.71 991.06 1457.24 1106.16"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );

    case HairStyle.THIRD:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cl4}>
            <g id="Hair_Front" data-name="Hair Front">
              <g id="Layer_17" data-name="Layer 17">
                <path
                  className={classes.cl1}
                  fill={color}
                  d="M1508.96,630.27l-43.92-182.23-164.5-165.65-40.14,3.49-24.03-40.44-214.08-77.96-115.76,32.56-202.46,37.91-182.53,108.52-153.12,343.76,11.8,157.76,30.89,75.41,9.73,99.63,33.37,85.15,4.65-167.67,25.37-73.12,7.46-135.33,59.69-54.2,78.03-105.88,292.08,11.86,270.11-74.62,13.34-38.8,41.88,43.28v-43.28l150.96,185.05,20.66,168.29,35.82,121.22,10.78,163.19,32.2-106.48,9.25-69.24,22.91-42.58,30.82-143.37-51.25-116.24ZM940.49,205.66l81.8-13.39,145.43,47.57-227.23-34.18Z"
                />
                <polygon
                  className={classes.cl2}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="1465.04 1108.18 1497.24 1001.7 1506.49 932.46 1529.4 889.88 1560.21 746.51 1508.96 630.27 1465.04 448.04 1300.54 282.39 1260.4 285.88 1236.37 245.44 1022.29 167.48 1022.29 192.27 1167.72 239.84 1041.41 220.84 1161.76 301.79 964.26 239.84 781.21 251.04 676.74 283.88 854.33 268.96 1074.33 309.33 1233.39 378.16 1055.71 346.47 1236.37 424.16 1399.59 586.83 1275.22 421.13 1391.58 483.85 1469.18 661.44 1504.99 753.26 1490.1 867.39 1474.02 753.26 1438.19 675.11 1458.75 813.26 1454.25 944.99 1465.04 1108.18"
                />
                <polygon
                  className={classes.cl3}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="454.21 1108.18 420.84 1023.03 411.11 923.4 380.22 847.99 368.42 690.23 521.54 346.47 704.07 237.95 561.83 346.47 686.68 313.14 867.59 307.55 686.68 350.29 567.46 431.78 700.62 399.98 872.24 390.2 1118.48 448.04 837.98 422.67 614.67 465.95 484.23 631.6 451.4 716.66 418.78 823.76 458.86 940.51 454.21 1108.18"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );

    case HairStyle.FOURTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cl4}>
            <g id="Hair_Front" data-name="Hair Front">
              <g id="Layer_16" data-name="Layer 16">
                <path
                  className={classes.cl1}
                  fill={color}
                  d="M1525.49,654.11l-89.08-217.78-202.85-160.96-132.98-67.13-233-13.87-137.24,37.16-25.8,56.61-65.2-4.32-62.66,32.65-134.1,195.44-70.63,311.85,48.06,148.09,8.53,73.42,27.11,54.41,3.61-139.68,17.13-29.31,14.87-70.79,165.97-204.93,56.4-182,254.47,295.37,340.27,179.01,141.13,15.23,8.5,151.28,24.28-51.91,14.94-110.04,45.8-110.01-17.55-187.77ZM583.83,334.5l61.69-33.14,24.38,2.46-86.08,30.68ZM730.36,275.37l11-25.29,126.24-37.79,45.16,8.59-182.4,54.49Z"
                />
                <polygon
                  className={classes.cl3}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="428.56 1045.28 455.67 1099.68 459.28 960 476.41 930.69 476.41 818.28 569.95 723.81 651.99 554.14 538.26 686.02 476.82 717.06 576.69 491.67 677.92 350.29 524.06 497.07 587.49 333.76 645.53 301.37 704.55 288.14 639.35 283.82 576.69 316.47 442.6 511.91 371.97 823.76 420.03 971.86 428.56 1045.28"
                />
                <polygon
                  className={classes.cl3}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="1482.3 1061.94 1497.24 951.9 1543.04 841.88 1525.49 654.11 1436.42 436.33 1233.57 275.37 1100.59 208.24 867.59 194.37 730.36 231.53 867.59 212.29 912.76 220.88 953.48 232.54 856.07 260.7 989.69 267.63 1214.83 376.63 976.19 299.45 1165.14 405.53 1291.73 587.49 1403.14 729.2 1177.29 591.54 964.26 409.82 781.24 338.92 992.39 502.46 1239.37 744.6 1444.52 873.62 1472.9 960 1482.3 1061.94"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );

    case HairStyle.FIFTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cl4}>
            <g id="Hair_Front" data-name="Hair Front">
              <g id="Hair_f_05">
                <path
                  id="Hair_f_05-2"
                  data-name="Hair_f_05"
                  className={classes.cl1}
                  fill={color}
                  d="M1467.95,505.81l-147.59-159.34-210.3-77.54h-298.08l-210.3,77.54-147.59,159.34-50.12,183.08,16.07,190.32,6.5,69.81,27.83,63.95,5.9-74.47,38.48-154.44v-186.43l100.01-89.33s357.32,16.1,362.25,15.86c4.93.23,362.25-15.86,362.25-15.86l100.01,89.33v186.43l38.48,154.44,5.9,74.47,27.83-63.95,6.5-69.81,16.07-190.32-50.12-183.08Z"
                />
                <polygon
                  className={classes.cl3}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="598.76 508.28 961.01 524.15 1323.27 508.28 1147.72 487.1 960 499.42 693.53 476.32 598.76 508.28"
                />
                <polygon
                  className={classes.cl3}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="454.36 1012.95 426.53 949.01 403.96 688.89 454.08 505.81 601.67 346.47 821.32 268.92 612.64 378.16 478.02 592.22 485.68 770.39 443.91 923.4 454.36 1012.95"
                />
                <polygon
                  className={classes.cl3}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="1470.06 1037.21 1495.49 949.01 1518.06 688.89 1467.95 505.81 1320.35 346.47 1110.05 268.92 811.97 268.92 1100.59 323.9 1312.46 423.98 1446.93 593.35 1441.79 779.63 1478.74 916.66 1470.06 1037.21"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );

    case HairStyle.SIXTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cl4}>
            <g id="Hair_Front" data-name="Hair Front">
              <g id="Hair_f_05">
                <path
                  id="Hair_f_05-2"
                  data-name="Hair_f_05"
                  className={classes.cl1}
                  fill={color}
                  d="M1467.95,268.92l-147.59-88.8-210.3-39.05h-298.08l-210.3,39.05-147.59,88.8-50.12,419.96,16.07,190.32,6.5,69.81,27.83,63.95,5.9-74.47,38.48-154.44v-186.43l100.01-89.33s357.32,16.1,362.25,15.86c4.93.23,362.25-15.86,362.25-15.86l100.01,89.33v186.43l38.48,154.44,5.9,74.47,27.83-63.95,6.5-69.81,16.07-190.32-50.12-419.96Z"
                />
                <polygon
                  className={classes.cl3}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="601.67 180.12 800.77 143.16 1110.05 141.08 1320.35 180.12 1467.95 268.92 1518.06 688.89 1495.49 949.01 1483.84 975.8 1460.26 759.62 1482.3 651.84 1418.69 390.2 1307.84 288.49 1113.85 219.21 809 193.03 614.67 208.43 515.73 231.83 601.67 180.12"
                />
                <polygon
                  className={classes.cl3}
                  fill={darkenHexColor(color, HAIR_DARKENED_PERCENTAGE)}
                  points="454.08 268.92 403.96 682.63 426.53 949.01 454.36 1012.95 445.65 807.34 462.59 594.88 515.73 346.47 504.57 309.33 483.61 251.16 454.08 268.92"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );
  }
}

export default HairFront;
