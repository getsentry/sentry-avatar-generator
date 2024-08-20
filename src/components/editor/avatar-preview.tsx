import type React from "react";

function AvatarPreview({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="h-full w-full">
      {children}
    </div>
  );
}

export default AvatarPreview;
