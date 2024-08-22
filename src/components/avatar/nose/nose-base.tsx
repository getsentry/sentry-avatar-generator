import BaseSvg from "@/components/avatar/base-svg";
import { NoseConfig } from "@/components/avatar/nose/nose";
import {
  SubPartProps,
  NoseStyle,
} from "@/components/avatar/sentry-avatar.types";
import { darkenHexColor } from "@/lib/utils";

const NOSE_BASE_DARKENED_PERCENTAGE = 5;

function NoseBase({
  partProps: {
    width,
    height,
    config: { faceColor, style },
  },
  className,
}: SubPartProps<NoseConfig, NoseStyle>) {
  switch (style) {
    case NoseStyle.FIRST:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Nose_1">
            <polygon
              id="Nose_1_Base"
              fill={darkenHexColor(faceColor, NOSE_BASE_DARKENED_PERCENTAGE)}
              points="942.3707 955.5665 978.8251 955.5665 1032.1705 1196.9242 1085.3842 1229.2382 1073.101 1278.9168 1012.2119 1278.9168 979.6281 1307.2881 942.239 1307.2881 911.2612 1278.9168 849.7008 1278.9168 832.0727 1229.2382 878.875 1196.9242 942.3707 955.5665"
            />
          </g>
        </BaseSvg>
      );
    case NoseStyle.SECOND:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Nose_2">
            <path
              id="Nose_2_Base"
              fill={darkenHexColor(faceColor, NOSE_BASE_DARKENED_PERCENTAGE)}
              d="M978.4284,940.941c-2.5536-.8512-36.6019,0-36.6019,0l-87.6743,269.8327s-37.4531,30.6435-41.7092,56.1797c18.7266,32.3459,27.2386,40.8579,27.2386,40.8579h62.9893l34.0483,37.4531s51.9236,2.5536,51.9236,0,35.7507-37.4531,35.7507-37.4531h66.3942c-1.7136,2.4969,19.5569-33.843,16.8748-40.8579-11.0657-28.941-42.411-56.1797-42.411-56.1797l-86.8231-269.8327Z"
            />
          </g>
        </BaseSvg>
      );
    case NoseStyle.THIRD:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Nose_3">
            <polygon
              id="Nose_3_Base"
              fill={darkenHexColor(faceColor, NOSE_BASE_DARKENED_PERCENTAGE)}
              points="928.7599 982.0769 973.2882 982.0769 1055.7965 1203.4086 1118.6599 1249.5566 1095.0862 1285.9169 1015.1972 1285.9169 982.2876 1311.2473 935.5111 1311.2473 905.6826 1285.9169 817.4393 1285.9169 789.9365 1249.5566 841.013 1203.4086 928.7599 982.0769"
            />
          </g>
        </BaseSvg>
      );
    case NoseStyle.FOURTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Nose_4">
            <polygon
              id="Nose_4_Base"
              fill={darkenHexColor(faceColor, NOSE_BASE_DARKENED_PERCENTAGE)}
              points="932.8046 986.5159 983.4447 986.5159 1067.7163 1211.7027 1105.427 1254.8007 1081.7231 1295.7438 1019.2311 1295.7438 980.4429 1322.68 936.2675 1322.68 898.5568 1295.7438 825.2902 1295.7438 803.7413 1254.8007 845.7618 1211.7027 932.8046 986.5159"
            />
          </g>
        </BaseSvg>
      );
    case NoseStyle.FIFTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Nose_5">
            <path
              id="Nose_5_Base"
              fill={darkenHexColor(faceColor, NOSE_BASE_DARKENED_PERCENTAGE)}
              d="M923.3001,988.8081h53.1506l79.1381,192.1918s44.2131,19.3061,59.8835,32.1783c5.0369,7.2756-17.9091,60.9366-23.0567,60.7103-18.358-1.4527-57.9825-6.4425-57.9825-6.4425l-49.9293,27.3806h-67.6462l-45.0975-27.3806-57.9825,6.4425s-26.2655-35.5215-27.3806-60.7103c14.547-19.0242,71.0725-32.1783,71.0725-32.1783l65.8305-192.1918Z"
            />
          </g>
        </BaseSvg>
      );
    case NoseStyle.SIXTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Nose_6">
            <polygon
              id="Nose_6_Base"
              fill={darkenHexColor(faceColor, NOSE_BASE_DARKENED_PERCENTAGE)}
              points="932.1539 984.9499 984.4061 984.9499 1039.9269 1250.2137 1082.7738 1284.7002 1070.2332 1326.502 994.623 1347.519 984.5395 1360.9885 926.0169 1360.9885 915.4394 1347.519 843.4583 1326.502 827.7827 1285.7452 873.7647 1250.2137 932.1539 984.9499"
            />
          </g>
        </BaseSvg>
      );
  }
}

export default NoseBase;
