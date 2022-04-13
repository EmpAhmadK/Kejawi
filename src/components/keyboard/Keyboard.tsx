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
        <div className="first-row">
            <button className="keyboard-button">ج</button>
            <button className="keyboard-button">ح</button>
            <button className="keyboard-button">خ</button>
            <button className="keyboard-button">ه</button>
            <button className="keyboard-button">ع</button>
            <button className="keyboard-button">غ</button>
            <button className="keyboard-button">ف</button>
            <button className="keyboard-button">ق</button>
            <button className="keyboard-button">ث</button>
            <button className="keyboard-button">ص</button>
            <button className="keyboard-button">ض</button>
        </div>
        <div className="second-row">
            <button className="keyboard-button">ط</button>
            <button className="keyboard-button">ک</button>
            <button className="keyboard-button">م</button>
            <button className="keyboard-button">ن</button>
            <button className="keyboard-button">ت</button>
            <button className="keyboard-button">ا</button>
            <button className="keyboard-button">ل</button>
            <button className="keyboard-button">ب</button>
            <button className="keyboard-button">ي</button>
            <button className="keyboard-button">س</button>
            <button className="keyboard-button">ص</button>
        </div>
        <div className="third-row">
            <button className="keyboard-button">ظ</button>
            <button className="keyboard-button">ز</button>
            <button className="keyboard-button">و</button>
            <button className="keyboard-button">ة</button>
            <button className="keyboard-button">ى</button>
            <button className="keyboard-button">ڠ</button>
            <button className="keyboard-button">ر</button>
            <button className="keyboard-button">ۏ</button>
            <button className="keyboard-button">ڤ</button>
            <button className="keyboard-button">ڽ</button>
            <button className="keyboard-button">ج</button>
        </div>
        <div className="fourth-row">
            <button className="keyboard-button keyboard-special">↵</button>
            <button className="keyboard-button">ݢ</button>
            <button className="keyboard-button">د</button>
            <button className="keyboard-button">٢</button>
            <button className="keyboard-button">ئ</button>
            <button className="keyboard-button">إ</button>
            <button className="keyboard-button">أ</button>
            <button className="keyboard-button">ٴ</button>
            <button className="keyboard-button">ء</button>
            <button className="keyboard-button">ذ</button>
            <button className="keyboard-button keyboard-special">⌫</button>
        </div>
    </div>
  )
}
