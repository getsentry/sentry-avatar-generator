import { darkenHexColor } from "@/lib/utils";
import { FaceStyle, SubPartProps } from "../sentry-avatar.types";

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
                fill={darkenHexColor(color, 10)}
                points="541.9683 886.1291 614.0202 841.8843 1306.736 851.4669 1368.644 908.414 1409.4085 1020.9982 504.572 1023.0304 541.9683 886.1291"
              />
              <polygon
                fill={darkenHexColor(color, 10)}
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
                fill={darkenHexColor(color, 10)}
                points="545.8376 879.8636 603.2737 823.7632 1279.1551 824.9329 1349.9423 870.5135 1401.4985 1020.9982 504.572 1023.0304 545.8376 879.8636"
              />
              <path
                fill={darkenHexColor(color, 10)}
                d="M467.1512,566.0369c-61.9866,121.8109-32.3499,577.2546-32.3499,577.2546l29.8014,254.1987,118.6273,187.389,217.5367,175.1901-59.9426-88.3365-164.0534-200.3345-15.07-327.006-61.5329-100.2434,47.9928-164.6392,56.0526-56.0526-18.5614-126.5869,36.7175-155.4791,19.0763-164.734s-144.3225,130.4815-174.2944,189.3797Z"
              />
            </g>
          </g>
        </svg>
      );
  }
}

export default FaceShadow;
