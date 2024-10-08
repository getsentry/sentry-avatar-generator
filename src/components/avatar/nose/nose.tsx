import NoseBase from "@/components/avatar/nose/nose-base";
import NoseHighlight from "@/components/avatar/nose/nose-highlight";
import NoseShadow from "@/components/avatar/nose/nose-shadow";
import {
  NoseStyle,
  PartConfigFaceColor,
  PartConfigRequiredStyle,
  PartProps,
} from "@/components/avatar/sentry-avatar.types";
import { cn } from "@/lib/utils";

export interface NoseConfig
  extends PartConfigRequiredStyle<NoseStyle>,
    PartConfigFaceColor {}
export type NoseProps = PartProps<NoseConfig, NoseStyle>;

function Nose(props: NoseProps) {
  return (
    <>
      <NoseBase
        partProps={props}
        className={cn(props.className, "absolute top-0")}
      />
      <NoseHighlight
        partProps={props}
        className={cn(props.className, "absolute top-0")}
      />
      <NoseShadow
        partProps={props}
        className={cn(props.className, "absolute top-0")}
      />
    </>
  );
}

export default Nose;
