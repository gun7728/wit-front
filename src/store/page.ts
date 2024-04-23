import { create } from 'zustand';

interface PageState {
  page: string;
  setPage: (page: string) => void;
}

export const usePageStore = create<PageState>()((set) => ({
  page: 'main',
  setPage: (page) => set({ page: page }),
}));
