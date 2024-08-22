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
function SentryAvatar({ config }: { config: SentryAvatarConfig }) {
  return (
    <div className="relative w-[512px] h-[512px]">
      <Hair
        width={512}
        height={512}
        config={config.hair}
        className="absolute top-0 z-0"
      />
      <Ear
        width={512}
        height={512}
        config={config.ear}
        className="absolute top-0 z-10"
      />
      <Face
        width={512}
        height={512}
        config={config.face}
        className="absolute top-0 z-20"
      />
      <Mouth
        width={512}
        height={512}
        config={config.mouth}
        className="absolute top-0 z-40"
      />
      <FacialHair
        width={512}
        height={512}
        config={config.facialHair}
        className="absolute top-0 z-50"
      />
      <Eyes
        width={512}
        height={512}
        config={config.eyes}
        className="absolute top-0 z-[60]"
      />
      <Nose
        width={512}
        height={512}
        config={config.nose}
        className="absolute top-0 z-[60]"
      />
      <Brows
        width={512}
        height={512}
        config={config.brows}
        className="absolute top-0 z-[80]"
      />
      <Accessories
        width={512}
        height={512}
        config={config.accessories}
        className="absolute top-0 z-[100]"
      />
    </div>
  );
}

export default SentryAvatar;
