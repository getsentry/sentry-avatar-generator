import { AccessoriesProps } from "@/components/avatar/accessories/accessories";
import { BrowsProps } from "@/components/avatar/brows/brows";
import { EarProps } from "@/components/avatar/ear/ear";
import { EyesProps } from "@/components/avatar/eyes/eyes";
import { FaceProps } from "@/components/avatar/face/face";
import { FacialHairProps } from "@/components/avatar/facial-hair/facial-hair";
import { HairProps } from "@/components/avatar/hair/hair";
import { MouthProps } from "@/components/avatar/mouth/mouth";
import { NoseProps } from "@/components/avatar/nose/nose";
import {
  FaceStyle,
  EyesStyle,
  BrowsStyle,
  MouthStyle,
  EarStyle,
  HairStyle,
  NoseStyle,
  FacialHairStyle,
  AccessoriesStyle,
} from "@/components/avatar/sentry-avatar.types";

/**
 * Available download aspect ratio options.
 */
export type AspectRatioOption = "9:16" | "1:1" | "16:9";

/**
 * Available avatar parts.
 */
export enum AvatarPart {
  FACE = "face",
  EYES = "eyes",
  BROWS = "brows",
  MOUTH = "mouth",
  EAR = "ear",
  HAIR = "hair",
  NOSE = "nose",
  FACIAL_HAIR = "facial-hair",
  ACCESSORIES = "accessories",
}

/**
 * Mapping of available styles for each avatar part.
 */
export type AvatarPartStyles = {
  [AvatarPart.FACE]: FaceStyle;
  [AvatarPart.EYES]: EyesStyle;
  [AvatarPart.BROWS]: BrowsStyle;
  [AvatarPart.MOUTH]: MouthStyle;
  [AvatarPart.EAR]: EarStyle;
  [AvatarPart.HAIR]: HairStyle | null;
  [AvatarPart.NOSE]: NoseStyle;
  [AvatarPart.FACIAL_HAIR]: FacialHairStyle | null;
  [AvatarPart.ACCESSORIES]: AccessoriesStyle | null;
};

/**
 * Mapping of props needed for each avatar part.
 */
export type AvatarPartProps = {
  [AvatarPart.FACE]: FaceProps;
  [AvatarPart.EYES]: EyesProps;
  [AvatarPart.BROWS]: BrowsProps;
  [AvatarPart.MOUTH]: MouthProps;
  [AvatarPart.EAR]: EarProps;
  [AvatarPart.HAIR]: HairProps;
  [AvatarPart.NOSE]: NoseProps;
  [AvatarPart.FACIAL_HAIR]: FacialHairProps;
  [AvatarPart.ACCESSORIES]: AccessoriesProps;
};

/**
 * Render function type for displaying each body part.
 */
export type RenderFunction<Props extends AvatarPartProps[AvatarPart]> = {
  [key in AvatarPart]: React.ComponentType<Props>;
};

/**
 * Type definition for all avatar generator options.
 */
export type AvatarGeneratorConfigOptions = {
  /**
   * Key is the body part
   */
  [key in AvatarPart]: {
    /**
     * Preset of colors available for the part.
     */
    colors?: string[];
    /**
     * Default color set when the editor is first loaded.
     */
    defaultColor?: string;
    /**
     * Neutral color used to display all styles available for the part.
     */
    neutralColor: string;
    /**
     * Available styles for the part.
     */
    styles: AvatarPartStyles[key][];
    /**
     * Default style for the part when the editor is first loaded.
     */
    defaultStyle: AvatarPartStyles[key];
    /**
     * Allows the user to not have this part as an option.
     */
    allowNull: boolean;
    /**
     * React component used to render this part.
     */
    render: RenderFunction<AvatarPartProps[key]>[key];
  };
};

/**
 * Type definition for how the avatar config is stored.
 */
export type AvatarConfig = {
  [key in AvatarPart]: {
    color: string;
    style: AvatarPartStyles[key];
  };
};
