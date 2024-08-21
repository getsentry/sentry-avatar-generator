export interface FaceConfig {
  style: "main";
  color: string;
}

export interface FaceProps {
  width?: number;
  height?: number;
  config: FaceConfig;
}

function Face({ width, height, config: { color } }: FaceProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 2560 2560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2_84"
        mask-type="luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="2560"
        height="2560"
      >
        <path d="M0 0H2560V2560H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2_84)">
        <path
          d="M1117.13 2390.05C1117.13 2390.05 1411.15 2399.33 1411.15 2390.05C1411.15 2380.76 1711.36 2084.42 1711.36 2084.42L1900.15 1883.25L1977.52 1496.38L1986.81 928.466L1832.06 577.191L1488.52 410.064H1104.75L751.93 580.286L560.043 928.466L581.708 1496.38L640.512 1883.25L820.018 2121.56L1117.13 2390.05Z"
          fill={color}
        />
        <path
          d="M810.543 1117.81H1719.84L1820.09 1208.72L1870.86 1361.33L679.825 1364.04L726.423 1210.89L810.543 1117.81Z"
          fill="#828282"
        />
        <mask
          id="mask1_2_84"
          mask-type="luminance"
          maskUnits="userSpaceOnUse"
          x="561"
          y="520"
          width="557"
          height="1870"
        >
          <path
            d="M561.123 520.267H1117.31V2389.5H561.123V520.267Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_2_84)">
          <g opacity="0.639999">
            <path
              d="M561.122 922.927L581.333 1480.07L636.66 1882.92L816.473 2116.33L1117.31 2389.5L893.14 2121.85L780.758 1945.25L759.753 1724.31L642.817 1483.35L726.422 1210.89L782.321 1161.39L744.277 866.547L870.414 520.263L756.618 575.703L561.122 922.927Z"
              fill="#828282"
            />
          </g>
        </g>
        <mask
          id="mask2_2_84"
          mask-type="luminance"
          maskUnits="userSpaceOnUse"
          x="1407"
          y="502"
          width="580"
          height="1888"
        >
          <path
            d="M1407.61 502.173H1986.43V2389.5H1407.61V502.173Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask2_2_84)">
          <g opacity="0.639999">
            <path
              d="M1986.43 926.637L1976.47 1488.02L1900.54 1886.35L1696.4 2099.2L1407.62 2389.51L1619.22 2097.96L1773.44 1945.25L1794.44 1724.31L1911.38 1483.35L1827.77 1210.89L1771.87 1161.39L1809.92 866.547L1678.97 502.175L1829.59 575.616L1986.43 926.637Z"
              fill="#828282"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Face;
