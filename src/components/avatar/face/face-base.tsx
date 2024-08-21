import { FaceStyle, SubPartProps } from "../sentry-avatar.types";

function FaceBase({
  partProps: {
    width,
    height,
    config: { color, style },
  },
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
        >
          <g id="Face_1">
            <path
              fill={color}
              d="M410.9269,1082.5695l52.2425,324.0947,120.0607,178.2151,191.3467,91.9214,82.5417,71.286s102.0431,12.9688,108.805,13.1316c61.5559,1.482,121.9366-26.2633,121.9366-26.2633l45.0227-56.2784,208.2302-114.4328,114.4328-181.9669,34.4078-351.8702-66.2989-452.9115-171.2397-170.5877-209.4072-93.7709h-212.2955l-179.9481,93.7709-176.3391,226.8661-63.4982,448.7959Z"
            />
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
        >
          <g id="Face_2">
            <path
              fill={color}
              d="M1449.7558,561.4563c60.6747,326.7097,19.6555,763.003,10.321,805.0086s-150.3394,212.4587-150.3394,212.4587l-210.0276,175.023-301.0396,4.6673-219.3622-179.6903-114.3484-179.6903s-74.6765-569.4083-9.3346-802.7723c21.5492-76.9614,182.5241-217.5321,182.5241-217.5321l201.7529-83.0007h230.0983l179.7305,55.0018s186.1234,135.6714,200.0251,210.5265Z"
            />
          </g>
        </svg>
      );
  }
}

export default FaceBase;
