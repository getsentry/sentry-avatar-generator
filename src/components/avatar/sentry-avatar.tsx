import Brows, { BrowsConfig } from "./brows/brows";
import Eyes, { EyesConfig } from "./eyes/eyes";
import Face, { FaceConfig } from "./face/face";
import Mouth, { MouthConfig } from "./mouth/mouth";

export interface SentryAvatarConfig {
  face: FaceConfig;
  eyes: EyesConfig;
  brows: BrowsConfig;
  mouth: MouthConfig;
}

function SentryAvatar({ config }: { config: SentryAvatarConfig }) {
  return (
    <div className="relative w-[512px] h-[512px]">
      <Face width={512} height={512} config={config.face} />
      <Eyes width={512} height={512} config={config.eyes} />
      <Brows width={512} height={512} config={config.brows} />
      <Mouth width={512} height={512} config={config.mouth} />
    </div>
  );
}

export default SentryAvatar;
