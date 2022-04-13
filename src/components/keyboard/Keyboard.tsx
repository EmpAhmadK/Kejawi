import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ORTHOGRAPHY } from '../../constants/orthography'
import { useTranslation } from 'react-i18next'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[][]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const { t } = useTranslation()
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      }
      // Take away key event listener for now
      // else {
      //   const key = e.key.toUpperCase()
      //   if (key.length === 1 && key >= 'A' && key <= 'Z') {
      //     onChar(key)
      //   }
      // }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div id="keyboard-cont">
        <div class="first-row">
            <button class="keyboard-button">ج</button>
            <button class="keyboard-button">ح</button>
            <button class="keyboard-button">خ</button>
            <button class="keyboard-button">ه</button>
            <button class="keyboard-button">ع</button>
            <button class="keyboard-button">غ</button>
            <button class="keyboard-button">ف</button>
            <button class="keyboard-button">ق</button>
            <button class="keyboard-button">ث</button>
            <button class="keyboard-button">ص</button>
            <button class="keyboard-button">ض</button>
        </div>
        <div class="second-row">
            <button class="keyboard-button">ط</button>
            <button class="keyboard-button">ک</button>
            <button class="keyboard-button">م</button>
            <button class="keyboard-button">ن</button>
            <button class="keyboard-button">ت</button>
            <button class="keyboard-button">ا</button>
            <button class="keyboard-button">ل</button>
            <button class="keyboard-button">ب</button>
            <button class="keyboard-button">ي</button>
            <button class="keyboard-button">س</button>
            <button class="keyboard-button">ص</button>
        </div>
        <div class="third-row">
            <button class="keyboard-button">ظ</button>
            <button class="keyboard-button">ز</button>
            <button class="keyboard-button">و</button>
            <button class="keyboard-button">ة</button>
            <button class="keyboard-button">ى</button>
            <button class="keyboard-button">ڠ</button>
            <button class="keyboard-button">ر</button>
            <button class="keyboard-button">ۏ</button>
            <button class="keyboard-button">ڤ</button>
            <button class="keyboard-button">ڽ</button>
            <button class="keyboard-button">ج</button>
        </div>
        <div class="fourth-row">
            <button class="keyboard-button keyboard-special">↵</button>
            <button class="keyboard-button">ݢ</button>
            <button class="keyboard-button">د</button>
            <button class="keyboard-button">٢</button>
            <button class="keyboard-button">ئ</button>
            <button class="keyboard-button">إ</button>
            <button class="keyboard-button">أ</button>
            <button class="keyboard-button">ٴ</button>
            <button class="keyboard-button">ء</button>
            <button class="keyboard-button">ذ</button>
            <button class="keyboard-button keyboard-special">⌫</button>
        </div>
    </div>
  )
}
