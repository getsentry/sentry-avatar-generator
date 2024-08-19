import type React from "react";

function AvatarPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden w-full bg-violet-600 rounded-full">
      {children}
    </div>
  );
}

export default AvatarPreview;
