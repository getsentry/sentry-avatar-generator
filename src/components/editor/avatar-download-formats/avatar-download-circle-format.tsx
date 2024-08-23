import SentryAvatar, {
  SentryAvatarConfig,
} from "@/components/avatar/sentry-avatar";

/**
 * Default avatar canvas size: 1985x2500
 * Centered avatar canvas size: 1920x1920
 */
function AvatarDownloadCircleFormat({
  avatarConfig,
}: {
  avatarConfig: SentryAvatarConfig;
}) {
  const avatarWidth = 700;
  const avatarHeight = 700;

  const innerCircleSize = 700;
  const outerCanvas = innerCircleSize + 400;

  return (
    <div
      id="circle-export"
      className="flex justify-center items-center"
      style={{ width: outerCanvas, height: outerCanvas }}
    >
      <div
        className="rounded-full bg-[#EE8019] flex justify-center"
        style={{ width: innerCircleSize, height: innerCircleSize }}
      >
        <div
          style={{
            width: avatarWidth,
            height: avatarHeight,
          }}
        >
          <SentryAvatar config={avatarConfig} />
        </div>
      </div>
    </div>
  );
}

export default AvatarDownloadCircleFormat;
