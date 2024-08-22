import { AccessoriesProps } from "@/components/avatar/accessories/accessories";
import classes from "./glasses-first.module.css";
import BaseSvg from "@/components/avatar/base-svg";

function GlassesSecond({ width, height, className }: AccessoriesProps) {
  return (
    <BaseSvg width={width} height={height} className={className}>
      <g className={classes.cls4}>
        <g id="accessories">
          <g id="Layer_25" data-name="Layer 25">
            <path
              className={classes.cls2}
              d="M1295.77,912.62h-149.99l-116.39,37.04-75.97-9.64-75.97,9.64-116.39-37.04h-149.99l-172.79,26.15v32.69l34.8,10.9,13.2,53.39,14.4,86.07,52.8,68.64,106.79,29.42,105.59-16.34,86.39-52.3,46.8-103.5,1.2-52.3,53.17-9.56,53.17,9.56,1.2,52.3,46.8,103.5,86.39,52.3,105.59,16.34,106.79-29.42,52.8-68.64,14.4-86.07,13.2-53.39,34.8-10.9v-32.69l-172.79-26.15ZM832.07,1142.31l-74.17,46.13-97.76,12.39-97.31-27.61-42.83-60.84-20.4-108.95,39.15-50.22,102.33-18.79,124.44,2.63,97.51,37.83,14.43,69.19-45.39,98.25ZM1386.85,1112.37l-42.83,60.84-97.31,27.61-97.76-12.39-74.17-46.13-45.39-98.25,14.43-69.19,97.51-37.83,124.44-2.63,102.33,18.79,39.15,50.22-20.4,108.95Z"
            />
            <polygon
              className={classes.cls3}
              points="1469.04 938.77 1296.26 912.62 1146.27 912.62 1029.88 949.66 953.91 940.03 877.95 949.66 960.49 955.1 1029.88 973.03 1152.36 925.46 1276.55 924.47 1388.8 948.18 1469.04 955.66 1469.04 938.77"
            />
            <polygon
              className={classes.cls1}
              points="1148.95 1188.44 1407.25 1003.42 1386.85 1112.37 1344.02 1173.22 1246.71 1200.83 1148.95 1188.44"
            />
            <polygon
              className={classes.cls1}
              points="877.46 1044.06 562.83 1173.22 660.14 1200.83 757.9 1188.44 832.07 1142.31 877.46 1044.06"
            />
          </g>
        </g>
      </g>
    </BaseSvg>
  );
}

export default GlassesSecond;
