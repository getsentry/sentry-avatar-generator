import type React from "react";

function AvatarPreview({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="overflow-hidden w-full bg-violet-600 rounded-full">
      {children}
    </div>
  );
}

export default AvatarPreview;
