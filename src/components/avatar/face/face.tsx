import {
  FaceStyle,
  PartConfigWithColor,
  PartProps,
} from "../sentry-avatar.types";
import FaceHighlight from "./face-highlight";
import FaceBase from "./face-base";
import FaceShadow from "./face-shadow";
import { cn } from "@/lib/utils";

export type FaceConfig = PartConfigWithColor<FaceStyle>;
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
