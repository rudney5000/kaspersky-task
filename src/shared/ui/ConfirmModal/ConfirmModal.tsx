import {Modal} from "@/shared/ui/Modal/Modal.tsx";
import styles from './ConfirmModal.module.scss'
import {Button} from "@/shared/ui/Button/Button.tsx";

interface ConfirmModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    title: string
    message: string
    confirmLabel?: string
    cancelLabel?: string
}
export const ConfirmModal = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmLabel = 'Удалить',
    cancelLabel = "Отмена",
}: ConfirmModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title}>
            <div className={styles.body}>
                <p className={styles.message}>{message}</p>
                <div className={styles.actions}>
                    <Button variant="ghost" onClick={onClose}>{cancelLabel}</Button>
                    <Button variant="danger" onClick={() => { onConfirm(); onClose() }}>{confirmLabel}</Button>
                </div>
            </div>
        </Modal>
    )
}