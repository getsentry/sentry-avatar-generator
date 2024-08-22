import EarBase from "@/components/avatar/ear/ear-base";
import EarTone from "@/components/avatar/ear/ear-tone";
import {
  PartConfig,
  EarStyle,
  PartProps,
} from "@/components/avatar/sentry-avatar.types";

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
      <EarBase partProps={props} className="absolute top-0 z-20" />
      <EarTone partProps={props} className="absolute top-0 z-20" />
    </>
  );
}

export default Ear;
