import BaseSvg from "@/components/avatar/base-svg";
import { NoseConfig } from "@/components/avatar/nose/nose";
import {
  SubPartProps,
  NoseStyle,
} from "@/components/avatar/sentry-avatar.types";
import classes from "./nose-shadow.module.css";
import { darkenHexColor } from "@/lib/utils";

const NOSE_SHADOW_DARKENED_PERCENTAGE = 20;

function NoseShadow({
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
          <g className={classes.cls2}>
            <g id="Nose">
              <g id="Nose_1">
                <g id="Nose_1_Tones">
                  <polygon
                    id="shadow"
                    className={classes.cls1}
                    fill={darkenHexColor(
                      faceColor,
                      NOSE_SHADOW_DARKENED_PERCENTAGE
                    )}
                    points="942.412 955.591 921.8067 1191.3817 901.2426 1231.575 878.875 1196.9242 942.412 955.591"
                  />
                  <polygon
                    id="shadow-2"
                    data-name="shadow"
                    className={classes.cls1}
                    fill={darkenHexColor(
                      faceColor,
                      NOSE_SHADOW_DARKENED_PERCENTAGE
                    )}
                    points="845.2203 1266.5023 849.7759 1279.0301 911.4986 1279.0301 942.2436 1307.2787 979.5069 1307.2787 1011.9901 1279.0301 1073.1016 1279.0301 1076.0874 1267.408 1017.5599 1250.2733 983.9629 1276.7523 931.0048 1276.7523 899.6855 1250.2733 845.2203 1266.5023"
                  />
                </g>
              </g>
            </g>
          </g>
        </BaseSvg>
      );
    case NoseStyle.SECOND:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls2}>
            <g id="Nose">
              <g id="Nose_2">
                <g id="Nose_2_Tones">
                  <path
                    className={classes.cls1}
                    fill={darkenHexColor(
                      faceColor,
                      NOSE_SHADOW_DARKENED_PERCENTAGE
                    )}
                    d="M941.9729,940.6011c0,3.393-41.5557,292.3563-41.5557,292.3563l-46.3704-23.1536,87.926-269.2027Z"
                  />
                  <polygon
                    className={classes.cls1}
                    fill={darkenHexColor(
                      faceColor,
                      NOSE_SHADOW_DARKENED_PERCENTAGE
                    )}
                    points="828.9799 1293.7789 839.7303 1307.8269 902.6494 1307.761 935.4779 1346.6532 989.3101 1346.137 1024.0844 1308.1527 1092.0281 1307.0827 1100.0529 1291.033 1026.257 1259.5672 985.973 1307.0686 938.0618 1307.0686 901.8484 1259.5672 828.9799 1293.7789"
                  />
                </g>
              </g>
            </g>
          </g>
        </BaseSvg>
      );
    case NoseStyle.THIRD:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls1}>
            <g id="Nose">
              <g id="Nose_3">
                <g id="Nose_3_Tones">
                  <path
                    className={classes.cls2}
                    fill={darkenHexColor(
                      faceColor,
                      NOSE_SHADOW_DARKENED_PERCENTAGE
                    )}
                    d="M928.8256,982.063c0,2.1497-47.5932,247.1119-47.5932,247.1119l-40.2546-25.6166,87.8478-221.4954Z"
                  />
                  <path
                    className={classes.cls2}
                    fill={darkenHexColor(
                      faceColor,
                      NOSE_SHADOW_DARKENED_PERCENTAGE
                    )}
                    d="M811.9747,1278.2991l5.8126,7.2658,87.8658.4215,30.2029,25.0087,45.7743.7266,34.8757-25.7935,78.177.9798,5.016-7.8823s-80.3267-15.6696-82.4765-14.953-34.4574,26.6634-34.4574,26.6634h-42.913l-37.782-26.6052-90.0955,14.1682Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </BaseSvg>
      );
    case NoseStyle.FOURTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls1}>
            <g id="Nose">
              <g id="Nose_4">
                <g id="Nose_4_Tones">
                  <polygon
                    className={classes.cls2}
                    fill={darkenHexColor(
                      faceColor,
                      NOSE_SHADOW_DARKENED_PERCENTAGE
                    )}
                    points="845.7618 1211.7027 871.9656 1234.3592 868.3866 1185.6851 909.9028 1119.8319 932.8046 986.5159 845.7618 1211.7027"
                  />
                  <path
                    className={classes.cls2}
                    fill={darkenHexColor(
                      faceColor,
                      NOSE_SHADOW_DARKENED_PERCENTAGE
                    )}
                    d="M825.5453,1295.6366s22.3005-32.8974,44.2729-37.6562c28.6318,19.3265,62.2742,39.3688,62.2742,39.3688l46.5267-.7158s45.8109-29.3476,61.5584-38.653c13.7668.6075,41.2866,37.6679,41.2866,37.6679l-61.8402.3616-40.1419,26.7612-43.2444-.0696-37.4044-26.9129-73.2882-.1521Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </BaseSvg>
      );
    case NoseStyle.FIFTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls1}>
            <g id="Nose">
              <g id="Nose_5">
                <g id="Nose_5_Tones">
                  <polygon
                    className={classes.cls2}
                    fill={darkenHexColor(
                      faceColor,
                      NOSE_SHADOW_DARKENED_PERCENTAGE
                    )}
                    points="857.0439 1180.8545 880.4156 1192.4729 931.1146 988.7107 923.4142 988.344 857.0439 1180.8545"
                  />
                  <path
                    className={classes.cls2}
                    fill={darkenHexColor(
                      faceColor,
                      NOSE_SHADOW_DARKENED_PERCENTAGE
                    )}
                    d="M800.5503,1252.47c0,1.679,13.1691,21.5383,13.1691,21.5383l58.338-6.6461,44.8161,27.4656,67.6087-.0719,50.0381-27.3633s57.1144,6.9934,58.6699,6.2337c3.2657-1.595,12.4722-22.2265,12.4722-22.2265l-18.173,7.113-43.0937-13.4318-63.2415,34.6989-58.2045.5597-62.1221-35.2585-32.4602,13.4318-27.8169-6.0427Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </BaseSvg>
      );
    case NoseStyle.SIXTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls1}>
            <g id="Nose">
              <g id="Nose_6">
                <g id="Nose_6_Tones">
                  <polygon
                    className={classes.cls2}
                    fill={darkenHexColor(
                      faceColor,
                      NOSE_SHADOW_DARKENED_PERCENTAGE
                    )}
                    points="873.6197 1250.3721 895.9223 1278.2975 943.3647 984.9788 932.0484 984.9788 873.6197 1250.3721"
                  />
                  <path
                    className={classes.cls2}
                    fill={darkenHexColor(
                      faceColor,
                      NOSE_SHADOW_DARKENED_PERCENTAGE
                    )}
                    d="M843.4963,1326.6216c0,1.679,71.9942,20.8974,71.9942,20.8974l10.2642,13.675,59.0114-.298,9.5597-13.3769,75.977-21.1954,1.4902-4.1725-58.2687-13.0408-35.0171,30.923h-48.4836l-37.1827-30.923-50.8349,13.3388,1.4902,4.1725Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </BaseSvg>
      );
  }
}

export default NoseShadow;
