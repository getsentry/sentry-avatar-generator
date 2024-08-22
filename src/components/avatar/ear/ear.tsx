import EarBase from "@/components/avatar/ear/ear-base";
import EarTone from "@/components/avatar/ear/ear-tone";
import {
  EarStyle,
  PartProps,
  PartConfigWithFaceColor,
} from "@/components/avatar/sentry-avatar.types";
import { cn } from "@/lib/utils";

export type EarConfig = PartConfigWithFaceColor<EarStyle>;

export interface EarProps extends PartProps<EarConfig, EarStyle> {
  width?: number;
  height?: number;
  config: EarConfig;
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
