import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard ",
  description: "",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default DashboardLayout;