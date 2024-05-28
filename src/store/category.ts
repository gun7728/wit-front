import { create } from 'zustand';

interface CategoryState {
  selectedCategory: string[];
  setSelectedCategory: (selectedCategory: string[]) => void;
}

export const useCategoryStore = create<CategoryState>()((set) => ({
  selectedCategory: [],
  setSelectedCategory: (selectedCategory) => set({ selectedCategory: selectedCategory }),
}));
