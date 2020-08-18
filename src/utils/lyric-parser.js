/**version:1.0.0
 * 传入歌词，按照正则表达式解析
 * 解析的数据结构为：
 * {
 *   txt:歌词，
 *   time:ms
 * }
 */
// eslint-disable-next-line
const timeExp = /\[(\d{2,}):(\d{2})(?:[\.\:](\d{2,3}))?]/g

const tagRegMap = {
  title: 'ti',
  artist: 'ar',
  album: 'al',
  offset: 'offset',
  by: 'by'
}

export default class Lyric {
  constructor(lrc) {
    this.lrc = lrc
    this.tags = {}
    this.lines = []
    this.curLineIndex = 0
    this.offset = 0

    this._init()
  }

  _init() {
    this._initTag()

    this._initLines()
  }

  _initTag() {
    for (let tag in tagRegMap) {
      const matches = this.lrc.match(new RegExp(`\\[${tagRegMap[tag]}:([^\\]]*)]`, 'i'))
      this.tags[tag] = matches && (matches[1] || '')
    }
  }

  _initLines() {
    const lines = this.lrc.split('\n')
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      let result = timeExp.exec(line)
      if (result) {
        const txt = line.replace(timeExp, '').trim();
        if (txt) {
          if (result[3].length === 3) {
            result[3] = result[3]/10;
          }
          this.lines.push({
            time: result[1] * 60 * 1000 + result[2] * 1000 + (result[3] || 0) * 10,
            txt
          })
        }
      }
    }

    this.lines.sort((a, b) => {
      return a.time - b.time
    })

  }

  findcurLineIndex(time) {
    for (let i = 0; i < this.lines.length; i++) {
      if (time <= this.lines[i].time) {
        return i
      }
    }
    return this.lines.length - 1
  }
}
