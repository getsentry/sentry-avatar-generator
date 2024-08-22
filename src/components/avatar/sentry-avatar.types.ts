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

export type PartConfigWithColor<PartStyle> = {
  style: PartStyle;
  color: string;
};

export type PartConfigWithFaceColor<PartStyle> = {
  style: PartStyle;
  faceColor: string;
};

export type PartConfigWithHairColor<PartStyle> = {
  style: PartStyle;
  hairColor: string;
};

export type PartConfig<PartStyle> =
  | PartConfigWithColor<PartStyle>
  | PartConfigWithFaceColor<PartStyle>
  | PartConfigWithHairColor<PartStyle>;

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
