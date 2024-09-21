import PaymentForm from "@/components/fragments/PaymentCheck";
import HeroLayout from "@/components/layouts/HeroLayout";
import NavbarLayout from "@/components/layouts/NavbarLayout";

export default function Home() {
  return (
    <>
      <NavbarLayout />
      <HeroLayout />
      <PaymentForm />
    </>
  );
}
