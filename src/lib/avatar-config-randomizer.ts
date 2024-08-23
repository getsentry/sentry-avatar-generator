import { AvatarConfig, AvatarPart } from "@/App.types";
import {
  AccessoriesStyle,
  BrowsStyle,
  EarStyle,
  EyesStyle,
  FaceStyle,
  FacialHairStyle,
  HairStyle,
  MouthStyle,
  NoseStyle,
} from "@/components/avatar/sentry-avatar.types";
import { configOptions } from "@/lib/config";

// Random color generator
function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomArrayItem<T>(styles: T[]): T {
  return styles[Math.floor(Math.random() * styles.length)];
}

export function randomizeAvatarConfig(): AvatarConfig {
  return {
    face: {
      color: getRandomArrayItem<string>(configOptions[AvatarPart.FACE].colors!),
      style: getRandomArrayItem<FaceStyle>(Object.values(FaceStyle)),
    },
    hair: {
      color: getRandomArrayItem(configOptions[AvatarPart.HAIR].colors!),
      style: getRandomArrayItem<HairStyle>(Object.values(HairStyle)),
    },
    eyes: {
      color: getRandomArrayItem(configOptions[AvatarPart.EYES].colors!),
      style: getRandomArrayItem<EyesStyle>(Object.values(EyesStyle)),
    },
    brows: {
      style: getRandomArrayItem<BrowsStyle>(Object.values(BrowsStyle)),
      color: getRandomColor(),
    },
    mouth: {
      style: getRandomArrayItem<MouthStyle>(Object.values(MouthStyle)),
      color: getRandomColor(),
    },
    ear: {
      style: getRandomArrayItem<EarStyle>(Object.values(EarStyle)),
      color: getRandomColor(),
    },
    nose: {
      style: getRandomArrayItem<NoseStyle>(Object.values(NoseStyle)),
      color: getRandomColor(),
    },
    "facial-hair": {
      style: getRandomArrayItem<FacialHairStyle | null>([
        ...Object.values(FacialHairStyle),
        null,
        null,
        null,
        null,
      ]),
      color: getRandomColor(),
    },
    accessories: {
      style: getRandomArrayItem<AccessoriesStyle | null>([
        ...Object.values(AccessoriesStyle),
        null,
        null,
        null,
        null,
      ]),
      color: getRandomColor(),
    },
  };
}
