export enum FaceStyle {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
  FOURTH = "fourth",
  FIFTH = "fifth",
  SIXTH = "sixth",
}

export enum EyesStyle {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
  FOURTH = "fourth",
  FIFTH = "fifth",
  SIXTH = "sixth",
}

export enum BrowsStyle {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
  FOURTH = "fourth",
  FIFTH = "fifth",
  SIXTH = "sixth",
}

export enum MouthStyle {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
  FOURTH = "fourth",
  FIFTH = "fifth",
  SIXTH = "sixth",
}

export enum EarStyle {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
  FOURTH = "fourth",
  FIFTH = "fifth",
  SIXTH = "sixth",
}

export enum HairStyle {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
  FOURTH = "fourth",
  FIFTH = "fifth",
  SIXTH = "sixth",
}

export enum NoseStyle {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
  FOURTH = "fourth",
  FIFTH = "fifth",
  SIXTH = "sixth",
}

export enum FacialHairStyle {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
  MUSTACHE = "mustache",
}

export enum AccessoriesStyle {
  GLASSES_FIRST = "glasses-first",
  GLASSES_SECOND = "glasses-second",
}

export type PartConfigRequiredStyle<PartStyle> = {
  style: PartStyle;
};

export type PartConfigOptionalStyle<PartStyle> = {
  style: PartStyle | null;
};

export type PartConfigColor = {
  color: string;
};

export type PartConfigFaceColor = {
  faceColor: string;
};

export type PartConfigHairColor = {
  hairColor: string;
};

export type PartConfig<PartStyle> =
  | PartConfigRequiredStyle<PartStyle>
  | PartConfigOptionalStyle<PartStyle>;

export type PartProps<P extends PartConfig<PartStyle>, PartStyle> = {
  width?: number;
  height?: number;
  config: P;
  className?: string;
};

export type SubPartProps<P extends PartConfig<PartStyle>, PartStyle> = {
  partProps: PartProps<P, PartStyle>;
  className?: string;
};
