import HairBack from "@/components/avatar/hair/hair-back";
import HairFront from "@/components/avatar/hair/hair-front";
import {
  HairStyle,
  PartConfig,
  PartProps,
} from "@/components/avatar/sentry-avatar.types";

export interface HairConfig extends PartConfig<HairStyle> {
  style: HairStyle;
  color?: string;
}

export interface HairProps extends PartProps<HairStyle> {
  width?: number;
  height?: number;
  config: HairConfig;
}

function Hair(props: HairProps) {
  return (
    <>
      <HairBack partProps={props} className="absolute top-0 z-0" />
      <HairFront partProps={props} className="absolute top-0 z-20" />
    </>
  );
}

export default Hair;
