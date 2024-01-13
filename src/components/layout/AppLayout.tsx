import CharacterCard from "../ui/Card/CharacterCard";
import SpecCard from "../ui/Card/SpecCard";
import Header from "../ui/Header/Header";

const AppLayout = () => {
  return (
    <main className="grid h-screen w-full grid-cols-content grid-rows-content gap-8 bg-bg-image bg-cover bg-center font-Exo text-gray-2/80">
      <Header />
      <CharacterCard />
      <SpecCard />
    </main>
  );
};

export default AppLayout;
