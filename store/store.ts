import { create } from 'zustand'

//create modal state
interface ModalState
{
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useModalStore = create<ModalState>()((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))