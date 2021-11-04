import { ReactNode } from "react";
import { Interface } from "readline";
import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";

interface ProvidersType {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersType) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default Providers;
