import { FaceStyle, SubPartProps } from "../sentry-avatar.types";

function FaceHighlight({
  partProps: {
    width,
    height,
    config: { style },
  },
  className,
}: SubPartProps<FaceStyle>) {
  switch (style) {
    case FaceStyle.MAIN:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <defs>
            <style>
              {`
              .cls-1 {
                isolation: isolate;
              }
              .cls-2 {
                fill: #fff;
                mix-blend-mode: screen;
                opacity: .10;
              }
            `}
            </style>
          </defs>
          <g className="cls-1">
            <g id="Face">
              <g id="Face_1">
                <polygon
                  id="Highlight"
                  className="cls-2"
                  points="1425.094 577.7327 1490.1832 1033.3478 1454.556 1383.1872 1341.0608 1564.0627 1133.9957 1678.8655 1087.371 1735.0542 1041.4075 1751.7568 1105.1042 1620.528 1280.7926 1515.454 1354.019 1134.7422 1416.7646 1043.5111 1366.9708 905.0676 1305.3868 850.5684 1331.2806 696.2324 1294.5631 540.7534 1253.3347 406.8365 1425.094 577.7327"
                />
              </g>
            </g>
          </g>
        </svg>
      );
    case FaceStyle.SECOND:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 1920 1920"
          className={className}
        >
          <defs>
            <style>
              {`
              .cls-1 {
                isolation: isolate;
              }
        
              .cls-2 {
                fill: #fff;
                mix-blend-mode: screen;
                opacity: .10;
              }
              `}
            </style>
          </defs>
          <g className="cls-1">
            <g id="Face">
              <g id="Face_2">
                <path
                  id="Hilite"
                  className="cls-2"
                  d="M1447.1967,552.232c34.5981,120.5527,39.7186,542.1542,39.7186,542.1542,0,0-17.9508,232.5693-28.1828,275.9354-8.5111,36.0723-149.6514,209.9273-149.6514,209.9273l-208.493,174.7464,69.5921-83.2624,164.0534-200.3345,15.07-327.006,61.5329-100.2434-61.2076-173.8419-70.2749-44.3401,45.9985-129.0967-36.7175-155.4791-23.3717-178.9674s161.5137,118.6583,181.9334,189.8081Z"
                />
              </g>
            </g>
          </g>
        </svg>
      );
  }
}

export default FaceHighlight;
