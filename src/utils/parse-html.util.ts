export function convertToArray(nodeList: NodeListOf<HTMLElement>) {
  let arr: HTMLElement[] = []

  nodeList.forEach(node => {
    arr.push(node)
  })
  return arr
}

export function parseHtml(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  let tags = doc.querySelectorAll('p, h1, h2, h3, h4, h5, h6') as NodeListOf<
    HTMLElement
  >
  let rubbishTags = doc.querySelectorAll(
    'footer, header, .footer, #header, .comments, #comments, .comment, #comment, .ads, #ads, .ad, #ad, .ad-wrapper, #ad-wrapper, .ads-wrapper, #ads-wrapper, .ad-container, #ad-container, .ads-container, #ads-container, .ad-wrap, #ad-wrap, .ads-wrap, #ads-wrap, .article-list, #article-list'
  ) as NodeListOf<HTMLElement>

  let tagArray = convertToArray(tags)
  console.log('TCL: tagArray.length before', tagArray.length)

  let rubbishTagArray = convertToArray(rubbishTags)
  console.log('TCL: rubbishTagArray', rubbishTagArray)

  // filter rubbish tags
  tagArray = tagArray.filter(tag => {
    let flag = true

    rubbishTagArray.forEach(rubbishTag => {
      if (rubbishTag.contains(tag) || tag === rubbishTag) {
        flag = false
      }
    })

    return flag
  })

  // view reserved html
  tagArray.forEach(tag => {
    console.log('tag.outerHTML', tag.outerHTML)
  })

  console.log('TCL: tagArray.length after', tagArray.length)

  return tagArray
}
