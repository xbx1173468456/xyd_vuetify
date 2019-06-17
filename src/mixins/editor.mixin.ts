import * as formatUtil from '@/utils/format.util'

export const editorMixin = {
  methods: {
    formatBold() {
      const that: any = this
      formatUtil.format(that.editor, 'bold')
    },
    formatItalic() {
      const that: any = this

      formatUtil.format(that.editor, 'italic')
    },
    formatColor(color: string, currentSelection: any) {
      const that: any = this

      that.editor.setSelection(currentSelection)
      formatUtil.formatTextColor(that.editor, 'color', color)
    },
    formatClearColor(currentSelection: any) {
      const that: any = this

      that.editor.setSelection(currentSelection)
      formatUtil.formatClearTextColor(that.editor, 'color')
    },
    formatUnderline() {
      const that: any = this
      formatUtil.format(that.editor, 'underline')
    },
    insertImage(imageUrl: string, currentSelection: Range) {
      console.log('TCL: insertImage -> currentSelection', currentSelection)
      const that: any = this
      formatUtil.insertEmbed(that.editor, imageUrl)
    }
  }
}
