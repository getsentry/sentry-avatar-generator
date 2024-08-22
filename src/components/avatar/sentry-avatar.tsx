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

function SentryAvatar({ config }: { config: SentryAvatarConfig }) {
  return (
    <div className="relative w-[512px] h-[512px]">
      <Hair width={512} height={512} config={config.hair} />
      <Face width={512} height={512} config={config.face} />
      <Eyes
        width={512}
        height={512}
        config={config.eyes}
        faceColor={config.face.color}
        className="absolute top-0 z-20"
      />
      <Brows width={512} height={512} config={config.brows} />
      <Mouth
        width={512}
        height={512}
        config={config.mouth}
        faceColor={config.face.color}
        className="absolute top-0 z-20"
      />
      <Ear
        width={512}
        height={512}
        config={config.ear}
        faceColor={config.face.color}
      />
    </div>
  );
}

export default SentryAvatar;
