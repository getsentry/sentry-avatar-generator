import Eyes, { EyesConfig } from "./eyes";
import Face, { FaceConfig } from "./face";
import Mouth from "./mouth";
import classes from "./sentry-avatar.module.css";

export interface SentryAvatarConfig {
  face: FaceConfig;
  eyes: EyesConfig;
}

function SentryAvatar({ config }: { config: SentryAvatarConfig }) {
  return (
    <div className={classes.avatar}>
      <div className={classes.face}>
        <Face width={512} height={512} config={config.face} />
      </div>
      <div className={classes.eyes}>
        <Eyes width={512} height={512} config={config.eyes} />
      </div>
      <div className={classes.mouth}>
        <Mouth width={512} height={512} />
      </div>
    </div>
  );
}

export default SentryAvatar;
