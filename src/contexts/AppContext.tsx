import { BandsProvider } from "./bands/BandsProvider";

export const AppContext = ({ children }: { children: React.ReactNode }) => {
  return <BandsProvider>{children}</BandsProvider>;
};
