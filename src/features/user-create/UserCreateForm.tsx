import { type UserFormData, userSchema } from '@/entities/user/model/types.ts'
import { Button } from '@/shared/ui/Button/Button.tsx'
import { Input } from '@/shared/ui/Input/Input.tsx'
import { Modal } from '@/shared/ui/Modal/Modal.tsx'
import { useState } from 'react'
import { useAddUserMutation } from '@/entities/user/api/userApi.ts'
import styles from './UserCreateForm.module.scss'

const GROUPS = [
  'CDN/CEO',
  'CDN/Managers',
  'CDN/Financials',
  'CDN/Top Kvants',
  'CDN/Human resources',
  'CDN/Outsourced',
  'CDN/Kvants',
  'CDN/Sales',
  'Unmanaged',
]

interface UserCreateFormProps {
  isOpen: boolean
  onClose: () => void
}

type FormErrors = Partial<Record<keyof UserFormData, string>>

const emptyForm: UserFormData = {
  name: '',
  account: '',
  email: '',
  group: '',
  phone: '',
}

export const UserCreateForm = ({ isOpen, onClose }: UserCreateFormProps) => {
  const [form, setForm] = useState<UserFormData>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [addUser, { isLoading }] = useAddUserMutation()

  const handleChange = (field: keyof UserFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async () => {
    const result = userSchema.safeParse(form)
    if (!result.success) {
      const fieldErrors: FormErrors = {}
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof UserFormData
        fieldErrors[field] = err.message
      })
      setErrors(fieldErrors)
      return
    }
    await addUser(result.data)
    setForm(emptyForm)
    setErrors({})
    onClose()
  }

  const handleClose = () => {
    setForm(emptyForm)
    setErrors({})
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Добавить пользователя">
      <div className={styles.form}>
        <Input
          label="Полное имя"
          placeholder="Иван Иванов"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={errors.name}
        />
        <Input
          label="Учётная запись"
          placeholder="companydomain/IvanIvanov"
          value={form.account}
          onChange={(e) => handleChange('account', e.target.value)}
          error={errors.account}
        />
        <Input
          label="Электронная почта"
          type="email"
          placeholder="ivan@companydomain.com"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={errors.email}
        />
        <div className={styles.field}>
          <label className={styles.label}>Группа</label>
          <select
            className={`${styles.select} ${errors.group ? styles.selectError : ''}`}
            value={form.group}
            onChange={(e) => handleChange('group', e.target.value)}
          >
            <option value="">Выберите группу…</option>
            {GROUPS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {errors.group && <span className={styles.error}>{errors.group}</span>}
        </div>
        <Input
          label="Номер телефона"
          placeholder="+7 (999) 123-45-67"
          value={form.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          error={errors.phone}
        />
        <div className={styles.actions}>
          <Button variant="ghost" onClick={handleClose}>
            Отмена
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? 'Добавление…' : 'Добавить'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
