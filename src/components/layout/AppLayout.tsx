import CharacterCard from "../ui/Card/CharacterCard";
import SpecCard from "../ui/Card/SpecCard";
import Header from "../ui/Header/Header";

const AppLayout = () => {
  return (
    <main className="bg-bg-image grid grid-rows-content gap-8 grid-cols-content w-full h-screen bg-center bg-cover font-Exo">
      <Header />
      <CharacterCard />
      <SpecCard />
    </main>
  );
};

export default AppLayout;
