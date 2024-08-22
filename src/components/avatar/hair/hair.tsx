import HairBack from "@/components/avatar/hair/hair-back";
import HairFront from "@/components/avatar/hair/hair-front";
import {
  HairStyle,
  PartConfigColor,
  PartConfigOptionalStyle,
  PartProps,
} from "@/components/avatar/sentry-avatar.types";
import { cn } from "@/lib/utils";

export interface HairConfig
  extends PartConfigOptionalStyle<HairStyle>,
    PartConfigColor {}
export type HairProps = PartProps<HairConfig, HairStyle>;

function Hair(props: HairProps) {
  return (
    <>
      <HairBack
        partProps={props}
        className={cn(props.className, "absolute top-0")}
      />
      <HairFront
        partProps={props}
        className={cn(props.className, "absolute top-0 z-[100]")}
      />
    </>
  );
}

export default Hair;
