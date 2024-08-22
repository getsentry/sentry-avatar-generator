import { EarStyle, PartConfig, PartProps } from "../sentry-avatar.types";
import EarBase from "./ear-base";
import EarTone from "./ear-tone";

export interface EarConfig extends PartConfig<EarStyle> {
  style: EarStyle;
}

export interface EarProps extends PartProps<EarStyle> {
  width?: number;
  height?: number;
  config: EarConfig;
  faceColor?: string;
}

function Ear(props: EarProps) {
  return (
    <>
      <EarBase partProps={props} className="absolute top-0 order-1" />
      <EarTone partProps={props} className="absolute top-0 order-1" />
    </>
  );
}

export default Ear;
