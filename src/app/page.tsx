import React, { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function Root({ children }: RootLayoutProps) {
  return (
    <>   
      {children}
    </>
  );
}