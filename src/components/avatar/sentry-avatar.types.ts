export enum FaceStyle {
  MAIN = "main",
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
