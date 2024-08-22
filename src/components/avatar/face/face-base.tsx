import BaseSvg from "@/components/avatar/base-svg";
import {
  SubPartProps,
  FaceStyle,
} from "@/components/avatar/sentry-avatar.types";

function FaceBase({
  partProps: {
    width,
    height,
    config: { color, style },
  },
  className,
}: SubPartProps<FaceStyle>) {
  switch (style) {
    case FaceStyle.FIRST:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Face_1">
            <path
              fill={color}
              d="M410.9269,1082.5695l52.2425,324.0947,120.0607,178.2151,191.3467,91.9214,82.5417,71.286s102.0431,12.9688,108.805,13.1316c61.5559,1.482,121.9366-26.2633,121.9366-26.2633l45.0227-56.2784,208.2302-114.4328,114.4328-181.9669,34.4078-351.8702-66.2989-452.9115-171.2397-170.5877-209.4072-93.7709h-212.2955l-179.9481,93.7709-176.3391,226.8661-63.4982,448.7959Z"
            />
          </g>
        </BaseSvg>
      );
    case FaceStyle.SECOND:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Face_2">
            <path
              fill={color}
              d="M1449.7558,561.4563c60.6747,326.7097,19.6555,763.003,10.321,805.0086s-150.3394,212.4587-150.3394,212.4587l-210.0276,175.023-301.0396,4.6673-219.3622-179.6903-114.3484-179.6903s-74.6765-569.4083-9.3346-802.7723c21.5492-76.9614,182.5241-217.5321,182.5241-217.5321l201.7529-83.0007h230.0983l179.7305,55.0018s186.1234,135.6714,200.0251,210.5265Z"
            />
          </g>
        </BaseSvg>
      );
    case FaceStyle.THIRD:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Face_3">
            <polygon
              fill={color}
              points="1287.4848 398.6765 1463.4181 671.9603 1485.9212 1430.9283 1424.5491 1547.5352 1041.9965 1790.9777 886.5206 1786.8863 532.6083 1584.3584 446.6874 1453.4314 442.596 674.006 649.2153 398.6765 867.3311 334.503 1075.9961 334.503 1287.4848 398.6765"
            />
          </g>
        </BaseSvg>
      );
    case FaceStyle.FOURTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Face_4">
            <path
              fill={color}
              d="M439.5162,1088.4011c-1.8956-7.5822,1.8956-417.0219,1.8956-417.0219l73.9266-142.1666,161.1221-152.5921,166.8088-67.2922h272.9598l159.2266,67.2922,161.1221,152.5921,60.6577,142.1666-8.6964,413.2308-26.5026,285.2809-182.7898,224.6232-223.6754,186.7121h-174.391l-255.8998-186.7121-164.9132-224.6232-20.8511-281.4898Z"
            />
          </g>
        </BaseSvg>
      );
    case FaceStyle.FIFTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Face_5">
            <path
              id="Face_base"
              fill={color}
              d="M837.8483,1792.5341s220.5138,6.9636,220.5138,0,225.1561-229.2182,225.1561-229.2182l141.593-150.8778,58.0299-290.1497,6.9636-425.9397-116.0599-263.4559-257.6529-125.3447h-287.8285l-264.6165,127.6659-143.9142,261.1347,16.2484,425.9397,44.1028,290.1497,134.6294,178.7322,222.8349,201.3639Z"
            />
          </g>
        </BaseSvg>
      );
    case FaceStyle.SIXTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Face_6">
            <polygon
              fill={color}
              points="410.5654 691.9088 448.0626 1346.4608 509.6422 1478.3224 744.1816 1661.6306 866.9125 1776.9536 1025.0803 1776.9536 1132.6737 1661.6306 1357.9988 1496.145 1446.4244 1346.4608 1497.983 691.9088 1448.7679 497.8688 1303.9084 349.8413 1080.655 275.3689 810.7867 275.3689 608.0326 349.8413 457.4369 510.2528 410.5654 691.9088"
            />
          </g>
        </BaseSvg>
      );
  }
}

export default FaceBase;
