import Brows, { BrowsConfig } from "./brows/brows";
import Ear, { EarConfig } from "./ear/ear";
import Eyes, { EyesConfig } from "./eyes/eyes";
import Face, { FaceConfig } from "./face/face";
import Hair, { HairConfig } from "./hair/hair";
import Mouth, { MouthConfig } from "./mouth/mouth";

export interface SentryAvatarConfig {
  face: FaceConfig;
  eyes: EyesConfig;
  brows: BrowsConfig;
  mouth: MouthConfig;
  ear: EarConfig;
  hair: HairConfig;
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
        faceColor={config.face.color}
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
        faceColor={config.face.color}
        className="absolute top-0 z-40"
      />
      <Eyes
        width={512}
        height={512}
        config={config.eyes}
        faceColor={config.face.color}
        className="absolute top-0 z-[60]"
      />
      <Brows
        width={512}
        height={512}
        config={config.brows}
        hairColor={config.hair.color}
        className="absolute top-0 z-[80]"
      />
    </div>
  );
}

export default SentryAvatar;
