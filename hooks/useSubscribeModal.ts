import { create } from "zustand";

interface SubsribeModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useSubscribeModal = create<SubsribeModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useSubscribeModal;