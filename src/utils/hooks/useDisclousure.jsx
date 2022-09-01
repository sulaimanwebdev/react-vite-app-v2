import { useState } from "react"

export const useDisclousure = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

    return {
        isOpen,
        toggle
    }
}