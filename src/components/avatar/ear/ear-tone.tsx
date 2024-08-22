import { darkenHexColor } from "@/lib/utils";
import { EarStyle, SubPartProps } from "../sentry-avatar.types";

const EAR_DARKENED_PERCENTAGE = 30;

function EarTone({
  partProps: {
    width,
    height,
    config: { style },
    faceColor,
  },
  className,
}: SubPartProps<EarStyle>) {
  faceColor = faceColor ?? "#000";

  switch (style) {
    case EarStyle.FIRST:
      return (
        <svg
          id="Ears"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <defs></defs>
          <g id="Ears_1">
            <path
              id="Ear_Shadow"
              fill={darkenHexColor(faceColor, EAR_DARKENED_PERCENTAGE)}
              d="M1506.3645,1006.9503c2.2002-6.6005,26.4021-93.5075,26.4021-93.5075l27.5022-6.6005,36.3029,62.7051-22.0018,80.3065-44.0035,129.8105-13.2011,7.7006-12.101-23.1019,15.4012-61.605-14.3012-95.7077Z"
            />
            <path
              id="Ear_Shadow-2"
              data-name="Ear_Shadow"
              fill={darkenHexColor(faceColor, EAR_DARKENED_PERCENTAGE)}
              d="M405.4224,1006.9503c-2.2002-6.6005-26.4021-93.5075-26.4021-93.5075l-27.5022-6.6005-36.3029,62.7051,22.0018,80.3065,44.0035,129.8105,13.2011,7.7006,12.101-23.1019-15.4012-61.605,14.3012-95.7077Z"
            />
          </g>
        </svg>
      );

    case EarStyle.SECOND:
      return (
        <svg
          id="Ears"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <g id="Ears_2">
            <path
              fill={darkenHexColor(faceColor, EAR_DARKENED_PERCENTAGE)}
              d="M1499.4945,1013.7764c1.2376-4.9505,55.6934-110.1492,55.6934-110.1492l6.1882,19.8021-19.8021,50.7429,4.9505,94.06-18.5645,49.5053-21.0397,40.8419-13.614-19.8021,19.8021-48.2676-13.614-76.7332Z"
            />
            <path
              fill={darkenHexColor(faceColor, EAR_DARKENED_PERCENTAGE)}
              d="M392.0883,1013.7764c-1.2376-4.9505-55.6934-110.1492-55.6934-110.1492l-6.1882,19.8021,19.8021,50.7429-4.9505,94.06,18.5645,49.5053,21.0397,40.8419,13.614-19.8021-19.8021-48.2676,13.614-76.7332Z"
            />
          </g>
        </svg>
      );

    case EarStyle.THIRD:
      return (
        <svg
          id="Ears"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <g id="Ears_3">
            <path
              fill={darkenHexColor(faceColor, EAR_DARKENED_PERCENTAGE)}
              d="M1550.0688,955.4006c-2.3662,1.5775-43.3806,82.8176-43.3806,82.8176l16.5635,87.55-18.141,44.9581s12.6198,3.9437,12.6198,1.5775,39.4369-85.9725,39.4369-85.9725l-7.0987-130.9307Z"
            />
            <path
              fill={darkenHexColor(faceColor, EAR_DARKENED_PERCENTAGE)}
              d="M360.6898,955.4006c2.3662,1.5775,43.3806,82.8176,43.3806,82.8176l-16.5635,87.55,18.141,44.9581s-12.6198,3.9437-12.6198,1.5775c0-2.3662-39.4369-85.9725-39.4369-85.9725l7.0987-130.9307Z"
            />
          </g>
        </svg>
      );

    case EarStyle.FOURTH:
      return (
        <svg
          id="Ears"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <g id="Ears_4">
            <path
              fill={darkenHexColor(faceColor, EAR_DARKENED_PERCENTAGE)}
              d="M1508.2653,1026.5743c5.667-55.7254,35.8909-95.3943,35.8909-95.3943l22.668,3.778,22.668,48.1694-46.2804,101.0613-9.445,97.2833-14.1675,19.8345-15.112-24.557s15.9279-47.1951,15.112-51.0029c-8.5005-39.6689-11.334-99.1723-11.334-99.1723Z"
            />
            <path
              fill={darkenHexColor(faceColor, EAR_DARKENED_PERCENTAGE)}
              d="M398.5172,1026.5743c-5.667-55.7254-35.8909-95.3943-35.8909-95.3943l-22.668,3.778-22.668,48.1694,46.2804,101.0613,9.445,97.2833,14.1675,19.8345,15.112-24.557s-15.9279-47.1951-15.112-51.0029c8.5005-39.6689,11.334-99.1723,11.334-99.1723Z"
            />
          </g>
        </svg>
      );

    case EarStyle.FIFTH:
      return (
        <svg
          id="Ears"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <g id="Ears_5">
            <path
              fill={darkenHexColor(faceColor, EAR_DARKENED_PERCENTAGE)}
              d="M1509.7384,1006.3538l4.8319,138.5137-9.6637,33.8231s16.1062-3.2212,16.1062-9.6637,57.9825-202.9386,57.9825-202.9386l-20.9381-27.3806-16.1062,4.8319-32.2125,62.8143Z"
            />
            <path
              fill={darkenHexColor(faceColor, EAR_DARKENED_PERCENTAGE)}
              d="M404.2886,1006.3538l-4.8319,138.5137,9.6637,33.8231s-16.1062-3.2212-16.1062-9.6637-57.9825-202.9386-57.9825-202.9386l20.9381-27.3806,16.1062,4.8319,32.2125,62.8143Z"
            />
          </g>
        </svg>
      );

    case EarStyle.SIXTH:
      return (
        <svg
          id="Ears"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <g id="Ears_6">
            <path
              id="Shadow"
              fill={darkenHexColor(faceColor, EAR_DARKENED_PERCENTAGE)}
              d="M1538.3826,928.7801l-28.5336,31.2456-17.0081,132.8248,14.5783,38.8756-3.2396,48.5945-8.0991,17.818,9.7189,1.6198s30.7765-38.0657,31.5864-41.3053,12.1486-29.9666,12.1486-29.9666l-7.506-169.2252,12.6477-30.4812-2.9245-7.1023-13.3691,7.1023Z"
            />
            <path
              id="Shadow-2"
              data-name="Shadow"
              fill={darkenHexColor(faceColor, EAR_DARKENED_PERCENTAGE)}
              d="M350.4015,928.7801l28.5336,31.2456,17.0081,132.8248-14.5783,38.8756,3.2396,48.5945,8.0991,17.818-9.7189,1.6198s-30.7765-38.0657-31.5864-41.3053-12.1486-29.9666-12.1486-29.9666l7.506-169.2252-12.6477-30.4812,2.9245-7.1023,13.3691,7.1023Z"
            />
          </g>
        </svg>
      );
  }
}

export default EarTone;
