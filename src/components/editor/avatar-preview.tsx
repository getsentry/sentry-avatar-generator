import type React from "react";

function AvatarPreview({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return <div id={id}>{children}</div>;
}

export default AvatarPreview;
