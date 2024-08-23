import type React from "react";

function AvatarPreview({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="w-[512px] h-[512px] overflow-hidden">
      {children}
    </div>
  );
}

export default AvatarPreview;
