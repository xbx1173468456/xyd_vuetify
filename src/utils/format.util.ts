import Quill from 'quill'

export function format(quill: Quill, type: string) {
  const selection = quill.getSelection()
  const currentFormat = quill.getFormat(selection)
  const isFormatted = currentFormat[type]

  if (isFormatted) {
    quill.format(type, false)
  } else {
    quill.format(type, true)
  }
}

export function formatTextColor(quill: Quill, type: string, value: string) {
  quill.format(type, value)
}

export function formatClearTextColor(quill: Quill, type: string) {
  quill.format(type, '')
}

export function insertEmbed(quill: Quill, type: string) {
  quill.insertEmbed(2, 'image', 'https://picsum.photos/id/884/200/300')
}
