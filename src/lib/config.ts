import { AvatarGeneratorConfigOptions, AvatarPart } from "@/App.types";
import Accessories from "@/components/avatar/accessories/accessories";
import Brows from "@/components/avatar/brows/brows";
import Ear from "@/components/avatar/ear/ear";
import Eyes from "@/components/avatar/eyes/eyes";
import Face from "@/components/avatar/face/face";
import FacialHair from "@/components/avatar/facial-hair/facial-hair";
import Hair from "@/components/avatar/hair/hair";
import Mouth from "@/components/avatar/mouth/mouth";
import Nose from "@/components/avatar/nose/nose";
import {
  FaceStyle,
  EyesStyle,
  BrowsStyle,
  MouthStyle,
  NoseStyle,
  EarStyle,
  HairStyle,
  FacialHairStyle,
  AccessoriesStyle,
} from "@/components/avatar/sentry-avatar.types";

export const configOptions: AvatarGeneratorConfigOptions = {
  [AvatarPart.FACE]: {
    colors: ["#eed6cb", "#e6c3b3", "#d29779", "#c06a3f", "#864a2d", "#4d2a1a"],
    defaultColor: "#d29779",
    neutralColor: "#8E8E8E",
    styles: Object.values(FaceStyle),
    defaultStyle: Object.values(FaceStyle)[0],
    allowNull: false,
    render: Face,
  },
  [AvatarPart.EYES]: {
    colors: ["#475676", "#7f8e91", "#515055", "#54513e", "#5a381c", "#19110f"],
    defaultColor: "#54513e",
    neutralColor: "#444444",
    styles: Object.values(EyesStyle),
    defaultStyle: Object.values(EyesStyle)[0],
    allowNull: false,
    render: Eyes,
  },
  [AvatarPart.BROWS]: {
    neutralColor: "#444444",
    styles: Object.values(BrowsStyle),
    defaultStyle: Object.values(BrowsStyle)[0],
    allowNull: false,
    render: Brows,
  },
  [AvatarPart.MOUTH]: {
    neutralColor: "#444444",
    styles: Object.values(MouthStyle),
    defaultStyle: Object.values(MouthStyle)[0],
    allowNull: false,
    render: Mouth,
  },
  [AvatarPart.NOSE]: {
    neutralColor: "#444444",
    styles: Object.values(NoseStyle),
    defaultStyle: Object.values(NoseStyle)[0],
    allowNull: false,
    render: Nose,
  },
  [AvatarPart.EAR]: {
    neutralColor: "#444444",
    styles: Object.values(EarStyle),
    defaultStyle: Object.values(EarStyle)[0],
    allowNull: false,
    render: Ear,
  },
  [AvatarPart.HAIR]: {
    colors: ["#FDFAF3", "#F2E39F", "#D87436", "#9F4112", "#4F2210", "#2d241c"],
    defaultColor: "#2d241c",
    neutralColor: "#444444",
    styles: Object.values(HairStyle),
    defaultStyle: Object.values(HairStyle)[0],
    allowNull: true,
    render: Hair,
  },
  [AvatarPart.FACIAL_HAIR]: {
    neutralColor: "#444444",
    styles: Object.values(FacialHairStyle),
    defaultStyle: null,
    allowNull: true,
    render: FacialHair,
  },
  [AvatarPart.ACCESSORIES]: {
    neutralColor: "#444444",
    styles: Object.values(AccessoriesStyle),
    defaultStyle: null,
    allowNull: true,
    render: Accessories,
  },
};
