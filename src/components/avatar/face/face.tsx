import { FaceStyle, PartConfig, PartProps } from "../sentry-avatar.types";
import FaceHighlight from "./face-highlight";
import FaceBase from "./face-base";
import FaceShadow from "./face-shadow";
import { cn } from "@/lib/utils";

export interface FaceConfig extends PartConfig<FaceStyle> {
  style: FaceStyle;
  color?: string;
}

export interface FaceProps extends PartProps<FaceStyle> {
  width?: number;
  height?: number;
  config: FaceConfig;
}

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
