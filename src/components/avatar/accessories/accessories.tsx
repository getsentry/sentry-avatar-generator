import GlassesFirst from "@/components/avatar/accessories/glasses-first";
import GlassesSecond from "@/components/avatar/accessories/glasses-second";
import {
  PartConfigWithFaceColor,
  AccessoriesStyle,
  PartProps,
} from "@/components/avatar/sentry-avatar.types";

export type AccessoriesConfig = PartConfigWithFaceColor<AccessoriesStyle>;
export type AccessoriesProps = PartProps<AccessoriesConfig, AccessoriesStyle>;

function Accessories({ config, className }: AccessoriesProps) {
  switch (config.style) {
    case AccessoriesStyle.GLASSES_FIRST:
      return <GlassesFirst config={config} className={className} />;

    case AccessoriesStyle.GLASSES_SECOND:
      return <GlassesSecond config={config} className={className} />;
  }
}

export default Accessories;
