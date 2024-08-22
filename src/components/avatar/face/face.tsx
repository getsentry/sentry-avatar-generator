import FaceHighlight from "./face-highlight";
import FaceBase from "./face-base";
import FaceShadow from "./face-shadow";
import { cn } from "@/lib/utils";
import {
  PartConfigRequiredStyle,
  FaceStyle,
  PartProps,
  PartConfigColor,
} from "@/components/avatar/sentry-avatar.types";

export interface FaceConfig
  extends PartConfigRequiredStyle<FaceStyle>,
    PartConfigColor {}
export type FaceProps = PartProps<FaceConfig, FaceStyle>;

function Face(props: FaceProps) {
  return (
    <>
      <FaceBase
        partProps={props}
        className={cn(props.className, "absolute top-0")}
      />
      <FaceShadow
        partProps={props}
        className={cn(props.className, "absolute top-0")}
      />
      <FaceHighlight
        partProps={props}
        className={cn(props.className, "absolute top-0")}
      />
    </>
  );
}

export default Face;
