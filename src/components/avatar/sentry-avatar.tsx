import Eyes, { EyesConfig } from "./eyes/eyes";
import Face, { FaceConfig } from "./face/face";
import Mouth from "./mouth";

export interface SentryAvatarConfig {
  face: FaceConfig;
  eyes: EyesConfig;
}

function SentryAvatar({ config }: { config: SentryAvatarConfig }) {
  return (
    <div className="relative">
      <Face width={512} height={512} config={config.face} />
      <Eyes width={512} height={512} config={config.eyes} />
      <Mouth width={512} height={512} />
    </div>
  );
}

export default SentryAvatar;
