import { AccessoriesProps } from "@/components/avatar/accessories/accessories";
import classes from "./glasses-first.module.css";
import BaseSvg from "@/components/avatar/base-svg";

function GlassesFirst({ width, height, className }: AccessoriesProps) {
  return (
    <BaseSvg width={width} height={height} className={className}>
      <g id="Layer_26" data-name="Layer 26">
        <path
          className={classes.cls2}
          d="M1406.61,933.78l-113.85-14.02h-162.64l-126.92,30.19-52.08-3.12-52.08,3.12-126.92-30.19h-162.64l-113.85,14.02-58.35,7.64v47.26l27.82,19.89,23.28,110.02,87.29,43.17h222.99l55.21-30.65,20.08-47.26,39.82-81.43,37.35-11.88,37.35,11.88,39.82,81.43,20.08,47.26,55.21,30.65h222.99l87.29-43.17,23.28-110.02,27.82-19.89v-47.26l-58.35-7.64ZM867.69,1041.72l-26.43,70.72-49.81,28.85h-210.41l-70.14-36.29-12.3-102.58,22.75-47.21,91.2-13.98,162.65,1.15,88.43,23.04,11.18,37-7.12,39.3ZM1391.36,1104.99l-70.14,36.29h-210.41l-49.81-28.85-26.43-70.72-7.12-39.3,11.18-37,88.43-23.04,162.65-1.15,91.2,13.98,22.75,47.21-12.3,102.58Z"
        />
        <polygon
          className={classes.cls3}
          points="772.13 919.76 899.05 949.95 951.13 946.83 1003.2 949.95 1130.12 919.76 1292.76 919.76 1464.96 941.42 1464.96 988.68 1384.33 948.29 1292.58 931.18 1128.69 931.18 1005.7 967.08 950.77 960 900.4 973.03 864.26 954.22 772.13 919.76"
        />
        <polygon
          className={classes.cls1}
          points="1403.67 1002.41 1110.81 1141.28 1321.22 1141.28 1391.36 1104.99 1403.67 1002.41"
        />
        <polygon
          className={classes.cls1}
          points="867.69 1041.72 581.03 1141.28 791.45 1141.28 841.26 1112.44 867.69 1041.72"
        />
      </g>
    </BaseSvg>
  );
}

export default GlassesFirst;
