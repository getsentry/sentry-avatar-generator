import { darkenHexColor } from "@/lib/utils";
import { FaceStyle, SubPartProps } from "../sentry-avatar.types";

const FACE_SHADOW_DARKENED_PERCENTAGE = 10;

function FaceShadow({
  partProps: {
    width,
    height,
    config: { color, style },
  },
  className,
}: SubPartProps<FaceStyle>) {
  switch (style) {
    case FaceStyle.MAIN:
      return (
        <svg
          id="Face"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <g id="Face_1">
            <g id="Shadow">
              <polygon
                fill={darkenHexColor(color, FACE_SHADOW_DARKENED_PERCENTAGE)}
                points="541.9683 886.1291 614.0202 841.8843 1306.736 851.4669 1368.644 908.414 1409.4085 1020.9982 504.572 1023.0304 541.9683 886.1291"
              />
              <polygon
                fill={darkenHexColor(color, FACE_SHADOW_DARKENED_PERCENTAGE)}
                points="474.4251 633.7736 407.5601 1088.6719 463.1694 1406.6642 583.23 1584.8792 774.5767 1676.8007 857.1184 1748.0867 965.7972 1760.7106 911.0793 1743.7978 870.8255 1710.448 811.8282 1621.1659 638.2801 1516.0918 561.7007 1144.3924 500.1678 1044.149 542.9098 887.4284 613.0896 842.2457 585.6518 696.8703 622.3693 541.3912 650.7642 406.9075 474.4251 633.7736"
              />
            </g>
          </g>
        </svg>
      );
    case FaceStyle.SECOND:
      return (
        <svg
          id="Face"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <g id="Face_2">
            <g id="Tones">
              <polygon
                fill={darkenHexColor(color, FACE_SHADOW_DARKENED_PERCENTAGE)}
                points="545.8376 879.8636 603.2737 823.7632 1279.1551 824.9329 1349.9423 870.5135 1401.4985 1020.9982 504.572 1023.0304 545.8376 879.8636"
              />
              <path
                fill={darkenHexColor(color, FACE_SHADOW_DARKENED_PERCENTAGE)}
                d="M467.1512,566.0369c-61.9866,121.8109-32.3499,577.2546-32.3499,577.2546l29.8014,254.1987,118.6273,187.389,217.5367,175.1901-59.9426-88.3365-164.0534-200.3345-15.07-327.006-61.5329-100.2434,47.9928-164.6392,56.0526-56.0526-18.5614-126.5869,36.7175-155.4791,19.0763-164.734s-144.3225,130.4815-174.2944,189.3797Z"
              />
            </g>
          </g>
        </svg>
      );
    case FaceStyle.THIRD:
      return (
        <svg
          id="Face"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <g id="Face_3">
            <g id="Tones">
              <polygon
                fill={darkenHexColor(color, FACE_SHADOW_DARKENED_PERCENTAGE)}
                points="607.5297 838.3572 1289.8764 838.3572 1365.0664 906.543 1403.1449 1020.9982 504.572 1023.0304 532.8919 921.9285 607.5297 838.3572"
              />
              <polygon
                fill={darkenHexColor(color, FACE_SHADOW_DARKENED_PERCENTAGE)}
                points="438.6405 675.1558 446.5445 1223.1662 446.5445 1456.3341 534.8058 1586.7501 883.899 1786.9846 852.6746 1742.3764 642.9198 1584.2782 576.0621 1445.4198 569.8151 1293.2297 482.1125 1112.5103 532.8764 920.9443 608.2266 838.4856 595.5296 670.9388 646.7791 401.1506 438.6405 675.1558"
              />
            </g>
          </g>
        </svg>
      );
    case FaceStyle.FOURTH:
      return (
        <svg
          id="Face"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <g id="Face_4">
            <g id="Tones">
              <polygon
                fill={darkenHexColor(color, FACE_SHADOW_DARKENED_PERCENTAGE)}
                points="622.0425 838.3572 1305.5784 838.3572 1365.0664 906.543 1405.6533 1020.9982 509.745 1023.0304 544.817 908.1666 622.0425 838.3572"
              />
              <polygon
                fill={darkenHexColor(color, FACE_SHADOW_DARKENED_PERCENTAGE)}
                points="439.9652 671.5671 437.3681 1053.4217 457.2661 1357.8603 552.7762 1497.1459 634.3578 1594.6459 877.1128 1781.6866 685.1124 1586.7457 605.4911 1415.7941 569.8151 1293.2297 482.1125 1112.5103 544.817 908.1666 586.7408 871.039 558.208 649.91 646.1034 405.5321 514.6417 529.9929 439.9652 671.5671"
              />
            </g>
          </g>
        </svg>
      );
    case FaceStyle.FIFTH:
      return (
        <svg
          id="Face"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <g id="Face_5">
            <g id="Tones">
              <polygon
                id="Shadow"
                fill={darkenHexColor(color, FACE_SHADOW_DARKENED_PERCENTAGE)}
                points="607.9074 838.3572 1289.8764 838.3572 1365.0664 906.543 1403.1449 1020.9982 509.8685 1023.0304 544.817 908.1666 607.9074 838.3572"
              />
              <polygon
                id="Shadow-2"
                data-name="Shadow"
                fill={darkenHexColor(color, FACE_SHADOW_DARKENED_PERCENTAGE)}
                points="420.8417 692.1952 436 1110.0526 477.4951 1412.1888 612.3542 1587.2463 837.9838 1792.1284 669.8549 1591.3907 585.5687 1458.941 569.8151 1293.2297 482.1125 1112.5103 544.817 908.1666 586.7408 871.039 558.208 649.91 652.8109 390.1975 567.4637 431.7769 420.8417 692.1952"
              />
            </g>
          </g>
        </svg>
      );
    case FaceStyle.SIXTH:
      return (
        <svg
          id="Face"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <g id="Face_6">
            <g id="Tones">
              <polygon
                id="Shadow"
                fill={darkenHexColor(color, FACE_SHADOW_DARKENED_PERCENTAGE)}
                points="607.9074 838.3572 1300.0847 838.3572 1362.6852 906.543 1397.7794 1020.9982 509.8685 1023.0304 544.817 908.1666 607.9074 838.3572"
              />
              <polygon
                id="Shadow-2"
                data-name="Shadow"
                fill={darkenHexColor(color, FACE_SHADOW_DARKENED_PERCENTAGE)}
                points="411.1114 681.4848 433.9963 1105.9688 447.6777 1344.8679 507.6656 1477.4727 746.5648 1664.8033 867.593 1777.4121 745.5773 1589.0535 600.547 1467.9603 575.01 1292.3241 482.1125 1112.5103 544.817 908.1666 608.689 839.7197 558.208 649.91 560.8847 482.4439 606.2108 346.4655 460.3789 504.1216 411.1114 681.4848"
              />
            </g>
          </g>
        </svg>
      );
  }
}

export default FaceShadow;
