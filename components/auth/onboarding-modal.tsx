import { getCurrencies } from "@/lib/utils";
import OnboardingForm from "./onboarding-form";

const OnboardingModal = async () => {
  const currencies = await getCurrencies();

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-zinc-900/70 z-50">
      <div className="bg-white rounded-3xl p-4 max-w-[420px] w-full">
        <h3 className="text-lg font-semibold">
          Welcome! Let&apos;s Get Started.
        </h3>
        <p className="text-sm text-zinc-500">
          Choose your preferred currency to continue.
        </p>
        <OnboardingForm currencies={currencies} />
      </div>
    </div>
  );
};

export default OnboardingModal;
