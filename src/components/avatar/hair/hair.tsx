import HairBack from "@/components/avatar/hair/hair-back";
import HairFront from "@/components/avatar/hair/hair-front";
import {
  HairStyle,
  PartConfigWithColor,
  PartProps,
} from "@/components/avatar/sentry-avatar.types";
import { cn } from "@/lib/utils";

export type HairConfig = PartConfigWithColor<HairStyle>;
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
