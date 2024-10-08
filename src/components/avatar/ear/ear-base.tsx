import BaseSvg from "@/components/avatar/base-svg";
import { EarConfig } from "@/components/avatar/ear/ear";
import {
  SubPartProps,
  EarStyle,
} from "@/components/avatar/sentry-avatar.types";

function EarBase({
  partProps: {
    width,
    height,
    config: { style, faceColor },
  },
  className,
}: SubPartProps<EarConfig, EarStyle>) {
  switch (style) {
    case EarStyle.FIRST:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Ears_1">
            <path
              id="_x31_"
              fill={faceColor}
              d="M1432.8649,1278.6452c6.6005-4.4004,99.9017-54.9774,99.9017-54.9774l83.6067-217.8176,4.4004-44.0035-24.202-62.7051-39.6032-39.6032-47.3038,2.2002-39.6032,27.5022-62.7051,270.6218,25.5084,118.7826Z"
            />
            <path
              id="_x31_-2"
              data-name="_x31_"
              fill={faceColor}
              d="M447.2257,1272.0717c-6.6005-4.4004-68.2055-48.4039-68.2055-48.4039l-83.6067-217.8176-4.4004-44.0035,24.202-62.7051,39.6032-39.6032,47.3038,2.2002,39.6032,27.5022,62.7051,270.6218-57.2046,112.209Z"
            />
          </g>
        </BaseSvg>
      );

    case EarStyle.SECOND:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Ears_2">
            <path
              fill={faceColor}
              d="M1459.5614,963.3624c0-3.7129,36.2202-58.4976,36.2202-58.4976l50.7429-38.3666,38.3666,34.6537-18.5645,61.8816,4.9505,106.4363-32.1784,101.4858-103.68,66.8295.9566-116.3348,13.614-95.2977,9.5721-62.7903Z"
            />
            <path
              fill={faceColor}
              d="M427.0818,944.8246c0-3.7129-31.2806-39.9599-31.2806-39.9599l-50.7429-38.3666-38.3666,34.6537,18.5645,61.8816-4.9505,106.4363,32.1784,101.4858,90.1812,61.722,12.5422-111.2273-13.614-95.2977-14.5118-81.328Z"
            />
          </g>
        </BaseSvg>
      );

    case EarStyle.THIRD:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Ears_3">
            <polygon
              fill={faceColor}
              points="1460.9413 1001.9362 1496.4346 944.3583 1539.8152 900.9776 1576.886 923.8511 1576.886 1092.6412 1528.7729 1191.2336 1529.5616 1218.0507 1505.8995 1248.0228 1479.8711 1242.5016 1408.8846 1196.7547 1441.2229 1005.8799 1460.9413 1001.9362"
            />
            <polygon
              fill={faceColor}
              points="449.8173 1001.9362 414.3241 944.3583 370.9434 900.9776 333.8727 923.8511 333.8727 1092.6412 381.9858 1191.2336 381.1971 1218.0507 404.8592 1248.0228 430.8876 1242.5016 501.8741 1196.7547 469.5358 1005.8799 449.8173 1001.9362"
            />
          </g>
        </BaseSvg>
      );

    case EarStyle.FOURTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Ears_4">
            <path
              fill={faceColor}
              d="M1472.3744,957.6259c.9445-2.8335,38.7244-53.8364,38.7244-53.8364l23.6125-10.3895,44.3914,6.6115,29.2794,38.7244,12.2785,57.6144-50.0584,72.7264-18.89,96.3388,5.667,56.6699-17.9455,23.6125-21.7235,8.5005-42.5024-14.1675-86.8938-71.7819,61.3924-193.6221,22.668-17.001Z"
            />
            <path
              fill={faceColor}
              d="M434.4081,957.6259c-.9445-2.8335-38.7244-53.8364-38.7244-53.8364l-23.6125-10.3895-44.3914,6.6115-29.2794,38.7244-12.2785,57.6144,50.0584,72.7264,18.89,96.3388-5.667,56.6699,17.9455,23.6125,21.7235,8.5005,42.5024-14.1675,86.8938-71.7819-61.3924-193.6221-22.668-17.001Z"
            />
          </g>
        </BaseSvg>
      );

    case EarStyle.FIFTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Ears_5">
            <path
              fill={faceColor}
              d="M1482.3578,961.2564c0-4.8319,17.7169-38.655,17.7169-38.655l51.54-28.9912,54.7612,61.2037-78.9206,277.0273s-78.9206,33.8231-78.9206,28.9912-64.425-88.5843-64.425-88.5843l53.1506-227.098,45.0975,16.1062Z"
            />
            <path
              fill={faceColor}
              d="M431.6692,961.2564c0-4.8319-17.7169-38.655-17.7169-38.655l-51.54-28.9912-54.7612,61.2037,78.9206,277.0273s78.9206,33.8231,78.9206,28.9912c0-4.8319,64.425-88.5843,64.425-88.5843l-53.1506-227.098-45.0975,16.1062Z"
            />
          </g>
        </BaseSvg>
      );

    case EarStyle.SIXTH:
      return (
        <BaseSvg width={width} height={height} className={className}>
          <g id="Ears_6">
            <path
              fill={faceColor}
              d="M1470.5187,943.1995c4.0581-6.7634,60.871-43.286,60.871-43.286l35.1699,4.0581,9.4688,225.8989-48.6968,86.572-25.7011,18.9376s-62.2237,21.643-62.2237,17.5849-36.5226-284.0645-36.5226-284.0645l67.6344-25.7011Z"
            />
            <path
              fill={faceColor}
              d="M418.2654,943.1995c-4.0581-6.7634-60.871-43.286-60.871-43.286l-35.1699,4.0581-9.4688,225.8989,48.6968,86.572,25.7011,18.9376s62.2237,21.643,62.2237,17.5849c0-4.0581,36.5226-284.0645,36.5226-284.0645l-67.6344-25.7011Z"
            />
          </g>
        </BaseSvg>
      );
  }
}

export default EarBase;
