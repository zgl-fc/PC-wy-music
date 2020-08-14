const timeExp = /\[(\d{2,}):(\d{2})(?:[\.\:](\d{2,3}))?]/g

const STATE_PAUSE = 0
const STATE_PLAYING = 1

const tagRegMap = {
  title: 'ti',
  artist: 'ar',
  album: 'al',
  offset: 'offset',
  by: 'by'
}

function noop() {
}

class Lyric {
  constructor(lrc, hanlder = noop, speed = 1) {
    this.lrc = lrc
    this.tags = {}
    this.lines = []
    this.handler = hanlder
    this.state = STATE_PAUSE
    this.curLineIndex = 0
    this.speed = speed
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

  _findcurLineIndex(time) {
    for (let i = 0; i < this.lines.length; i++) {
      if (time <= this.lines[i].time) {
        return i
      }
    }
    return this.lines.length - 1
  }

  _callHandler(i) {
    if (i < 0) {
      return
    }
    this.handler({
      txt: this.lines[i].txt,
      lineNum: i
    })
  }

  _playRest(isSeek=false) {
    let line = this.lines[this.curLineIndex]
    let delay;
    if(isSeek) {
      delay = line.time - (+new Date() - this.startStamp);
    }else {
      //拿到上一行的歌词开始时间，算间隔
      let preTime = this.lines[this.curLineIndex - 1] ? this.lines[this.curLineIndex - 1].time : 0;
      delay = line.time - preTime;
    }
    this.timer = setTimeout(() => {
      this._callHandler(this.curLineIndex++)
      if (this.curLineIndex < this.lines.length && this.state === STATE_PLAYING) {
        this._playRest()
      }
    }, (delay / this.speed))
  }

  changeSpeed(speed) {
    this.speed = speed;
  }

  play(offset = 0, isSeek = false) {
    if (!this.lines.length) {
      return
    }
    this.state = STATE_PLAYING

    this.curLineIndex = this._findcurLineIndex(offset)
    //现在正处于第this.curLineIndex-1行
    this._callHandler(this.curLineIndex-1)
    this.offset = offset
    this.startStamp = +new Date() - offset

    if (this.curLineIndex < this.lines.length) {
      clearTimeout(this.timer)
      this._playRest(isSeek)
    }
  }

  togglePlay(offset) {
    if (this.state === STATE_PLAYING) {
      this.stop()
      this.offset = offset
    } else {
      this.state = STATE_PLAYING
      this.play(offset, true)
    }
  }

  stop() {
    this.state = STATE_PAUSE
    this.offset = 0
    clearTimeout(this.timer)
  }

  seek(offset) {
    this.play(offset, true)
  }
}

const str = `
[00:00.000] 作曲 : 姚六一\n[00:01.000] 作词 : 姚六一\n[00:10.41]编曲：季志豪\n[00:12.08]录音混音：Morerare studio/季志豪\n[00:14.12]音乐制作发行：猪豆苗音乐工作室\n[00:15.12]企划：网易音乐人 X 飓风计划\n[00:16.12]出品人：小星星Aurora\n[00:24.10]监制：小星星Aurora\n[00:35.05]那一幕怎忘记\n[00:39.31]初次相遇的你\n[00:43.05]路人闹挺挺看我滑稽\n[00:47.06]为你一笑我愿做猴戏\n[00:51.04]一生能有几序\n[00:55.37]牵肠挂肚情义\n[00:59.14]你大可不必猜忌寻觅\n[01:02.88]我愿意一生为你追寻\n[01:06.89]就这般望着你 难免我愁愁\n[01:18.07]除你我禽鸟连花草 成双荡悠悠\n[01:26.08]你呀你冻我心房酸我眼眶一生的伤\n[01:33.67]你呀你彼岸观望置身一旁一生两望\n[01:59.04]也有春花秋月\n[02:02.87]也望相守不渝\n[02:06.73]雨打荷叶吵吵了几滴\n[02:10.80]又怎能熄灭心中柔情\n[02:14.87]谈笑中提起你\n[02:19.00]疼痛这般熟悉\n[02:22.81]如今的你在何处飘零\n[02:26.89]一片片破碎的心难拾起\n[02:30.97]你我为何沦落这步田地\n[02:35.64]就这般望着你 难免我愁愁\n[02:42.23]除你我禽鸟连花草 成双荡悠悠\n[02:50.45]你呀你冻我心房酸我眼眶一生的伤\n[02:57.08]你呀你彼岸观望置身一旁一生两望\n[03:06.95]穷极一生又何惧\n[03:13.48]也许只是一个背影\n[03:15.44]天亮之后就出行\n[03:20.53]你又会在何处伫立\n[03:28.93]是否也在等我的你\n[03:39.41]回顾皆如草木 唯你是青山\n[03:46.10]嘲笑世间 情难两得  天作隔两岸\n[03:53.88]你呀你冻我心房酸我眼眶一生的伤\n[04:01.94]你呀你彼岸观望置身一旁一生两望\n[04:11.46]穷极一生又何惧\n[04:16.05]也许只是一个背影\n[04:19.62]天亮之后就出行\n[04:25.25]在隔对岸等你\n
`
const ly = new Lyric(str);
console.log(ly);