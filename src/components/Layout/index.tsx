import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col ">
      <main className="w-full mt-[50px] min-h-[70vh] mb-[100px] mx-auto max-w-[1440px] px-[32px] md:px-[64px] lg:px-[120px]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
