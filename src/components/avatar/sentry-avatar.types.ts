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

export type PartConfig<PartStyle> = {
  style: PartStyle;
  color?: string;
};

export type PartProps<PartStyle> = {
  width?: number;
  height?: number;
  config: PartConfig<PartStyle>;
  faceColor?: string;
  hairColor?: string;
  className?: string;
};

export type SubPartProps<PartStyle> = {
  partProps: PartProps<PartStyle>;
  className?: string;
};
