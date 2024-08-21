export enum FaceStyle {
  MAIN = "main",
  SECOND = "second",
}

export enum EyesStyle {
  MAIN = "main",
}

export type PartConfig<PartStyle> = {
  style: PartStyle;
  color: string;
};

export type PartProps<PartStyle> = {
  width?: number;
  height?: number;
  config: PartConfig<PartStyle>;
};

export type SubPartProps<PartStyle> = {
  partProps: PartProps<PartStyle>;
  className?: string;
};
