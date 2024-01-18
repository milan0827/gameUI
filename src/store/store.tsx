import { create } from "zustand";

type GameStoreType = {
  id: number;
  skillLabel: string;
  points: number;
};

type StoreType = {
  gameSkill: [];
  increaseSkill: (num: number) => void;
};

const store = (set) => ({
  gameSkill: [
    { skillLabel: "Strength", points: 0 },
    { skillLabel: "Agility", points: 0 },
    { skillLabel: "Magic", points: 0 },
    { skillLabel: "Luck", points: 0 },
    { skillLabel: "Vitality", points: 0 },
  ],

  increaseSkill: (skillLabel: string) =>
    set((state) => {
      return {
        gameSkill: [
          state.gameSkill.filter((skill) => {
            skill.skillLabel !== skillLabel;
            console.log(skillLabel);
          }),
        ],
        // gameSkill: [
        //   state.gameSkill.map((skill: GameStoreType) => {
        //     console.log("Skill hh", { ...skill, points: skill.points + 10 });
        //   }),
        // ],
        // skill: [...state.gameSkill, state.gameSkill.skillLabel],
        // strength: [...state.gameSkill, state.gameSkill.strength + 10],
        // magic: [...state.gameSkill, state.gameSkill.magic + 10],
        // agility: [...state.gameSkill, state.gameSkill.agility + 10],
        // luck: [...state.gameSkill, state.gameSkill.luck + 10],
        // vitaility: [...state.gameSkill, state.gameSkill.vitality + 10],
      };
    }),
});

const useGameStore = create<StoreType>(store);

export { useGameStore };
