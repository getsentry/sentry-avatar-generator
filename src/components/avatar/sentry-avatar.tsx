import Face from "./face";
import Hair, { HairColor } from "./hair";
import classes from "./sentry-avatar.module.css";

export interface SentryAvatarConfig {
  face: number;
  hairColor: HairColor;
}

function SentryAvatar({ config }: { config: SentryAvatarConfig }) {
  return (
    <div className={classes.avatar}>
      <div className={classes.body}>
        <Face i={config.face} />
      </div>
      <div className={classes.hair}>
        <Hair color={config.hairColor} />
      </div>
    </div>
  );
}

export default SentryAvatar;
