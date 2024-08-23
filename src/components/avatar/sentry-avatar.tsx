import Nose, { NoseConfig } from "@/components/avatar/nose/nose";
import Brows, { BrowsConfig } from "./brows/brows";
import Ear, { EarConfig } from "./ear/ear";
import Eyes, { EyesConfig } from "./eyes/eyes";
import Face, { FaceConfig } from "./face/face";
import Hair, { HairConfig } from "./hair/hair";
import Mouth, { MouthConfig } from "./mouth/mouth";
import FacialHair, {
  FacialHairConfig,
} from "@/components/avatar/facial-hair/facial-hair";
import Accessories, {
  AccessoriesConfig,
} from "@/components/avatar/accessories/accessories";

export interface SentryAvatarConfig {
  face: FaceConfig;
  eyes: EyesConfig;
  brows: BrowsConfig;
  mouth: MouthConfig;
  ear: EarConfig;
  hair: HairConfig;
  nose: NoseConfig;
  facialHair: FacialHairConfig;
  accessories: AccessoriesConfig;
}

// Layers:
// accessories: z-100
// hair front: z-90
// eyebrows: z-80
// nose: z-70
// eyes: z-60
// mustache: z-50
// mouth: z-40
// beard: z-30
// face: z-20
// ears: z-10
// back hair: z-0
function SentryAvatar({
  width,
  height,
  config,
}: {
  config: SentryAvatarConfig;
  width?: number;
  height?: number;
}) {
  return (
    <div className="relative">
      <Hair
        width={width}
        height={height}
        config={config.hair}
        className="absolute top-0 z-0"
      />
      <Ear
        width={width}
        height={height}
        config={config.ear}
        className="absolute top-0 z-10"
      />
      <Face
        width={width}
        height={height}
        config={config.face}
        className="absolute top-0 z-20"
      />
      <FacialHair
        width={width}
        height={height}
        config={config.facialHair}
        className="absolute top-0 z-40"
      />
      <Mouth
        width={width}
        height={height}
        config={config.mouth}
        className="absolute top-0 z-50"
      />
      <Eyes
        width={width}
        height={height}
        config={config.eyes}
        className="absolute top-0 z-[60]"
      />
      <Nose
        width={width}
        height={height}
        config={config.nose}
        className="absolute top-0 z-[60]"
      />
      <Brows
        width={width}
        height={height}
        config={config.brows}
        className="absolute top-0 z-[80]"
      />
      <Accessories
        width={width}
        height={height}
        config={config.accessories}
        className="absolute top-0 z-[100]"
      />
    </div>
  );
}

export default SentryAvatar;
