import BaseSvg from "@/components/avatar/base-svg";
import { NoseConfig } from "@/components/avatar/nose/nose";
import {
  SubPartProps,
  NoseStyle,
} from "@/components/avatar/sentry-avatar.types";
import classes from "./nose-highlight.module.css";
import { lightenHexColor } from "@/lib/utils";

const NOSE_HIGHLIGHT_DARKENED_PERCENTAGE = 20;

function NoseHighlight({
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
                <polygon
                  id="highlite"
                  className={classes.cls1}
                  fill={lightenHexColor(
                    faceColor,
                    NOSE_HIGHLIGHT_DARKENED_PERCENTAGE
                  )}
                  points="978.5521 955.8937 989.1565 1190.628 1009.7205 1230.8214 1032.0881 1196.1705 978.5521 955.8937"
                />
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
                <polygon
                  className={classes.cls1}
                  fill={lightenHexColor(
                    faceColor,
                    NOSE_HIGHLIGHT_DARKENED_PERCENTAGE
                  )}
                  points="978.4284 940.941 1019.9662 1232.9574 1065.2515 1210.7737 978.4284 940.941"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );
    case NoseStyle.THIRD:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls2}>
            <g id="Nose">
              <g id="Nose_3">
                <path
                  className={classes.cls1}
                  fill={lightenHexColor(
                    faceColor,
                    NOSE_HIGHLIGHT_DARKENED_PERCENTAGE
                  )}
                  d="M974.313,984.3958c0,2.1497,42.0585,244.7791,42.0585,244.7791l40.2546-25.6166-82.3131-219.1626Z"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );

    case NoseStyle.FOURTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls2}>
            <g id="Nose">
              <g id="Nose_4">
                <polygon
                  className={classes.cls1}
                  fill={lightenHexColor(
                    faceColor,
                    NOSE_HIGHLIGHT_DARKENED_PERCENTAGE
                  )}
                  points="1067.5642 1211.7027 1041.3604 1234.3592 1044.9394 1185.6851 1003.4233 1119.8319 983.4611 986.5655 1067.5642 1211.7027"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );

    case NoseStyle.FIFTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls2}>
            <g id="Nose">
              <g id="Nose_5">
                <polygon
                  className={classes.cls1}
                  fill={lightenHexColor(
                    faceColor,
                    NOSE_HIGHLIGHT_DARKENED_PERCENTAGE
                  )}
                  points="1055.6807 1181.1772 1031.9513 1192.4729 968.4675 989.0236 976.6195 989.0236 1055.6807 1181.1772"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );

    case NoseStyle.SIXTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g className={classes.cls2}>
            <g id="Nose">
              <g id="Nose_6">
                <polygon
                  id="Highlight"
                  className={classes.cls1}
                  fill={lightenHexColor(
                    faceColor,
                    NOSE_HIGHLIGHT_DARKENED_PERCENTAGE
                  )}
                  points="1040.381 1253.6473 1018.8121 1278.2975 973.2055 984.9015 984.379 984.9425 1040.381 1253.6473"
                />
              </g>
            </g>
          </g>
        </BaseSvg>
      );
  }
}

export default NoseHighlight;
