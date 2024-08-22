import EarBase from "@/components/avatar/ear/ear-base";
import EarTone from "@/components/avatar/ear/ear-tone";
import {
  PartConfig,
  EarStyle,
  PartProps,
} from "@/components/avatar/sentry-avatar.types";
import { cn } from "@/lib/utils";

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
      <EarBase
        partProps={props}
        className={cn(props.className, "absolute top-0")}
      />
      <EarTone
        partProps={props}
        className={cn(props.className, "absolute top-0")}
      />
    </>
  );
}

export default Ear;
