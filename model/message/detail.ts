import * as _Data from './param.ts'
import { ExtendedMap } from '../share.ts'
import { MessageSegmentBase } from './mod.ts'

export { _Data }

/** 纯文本 */
export interface Text extends MessageSegmentBase {
    type: 'text'
    data: _Data.Text & ExtendedMap
}

/** 提及（即 @） */
export interface Mention extends MessageSegmentBase {
    type: 'mention'
    data: _Data.Mention & ExtendedMap
}

/** 提及所有人 */
export interface MentionAll extends MessageSegmentBase {
    type: 'mention_all'
    data: _Data.MentionAll & ExtendedMap
}

/** 图片 */
export interface Image extends MessageSegmentBase {
    type: 'image'
    data: _Data.Image & ExtendedMap
}

/** 语音 */
export interface Voice extends MessageSegmentBase {
    type: 'voice'
    data: _Data.Voice & ExtendedMap
}

/** 音频 */
export interface Audio extends MessageSegmentBase {
    type: 'audio'
    data: _Data.Audio & ExtendedMap
}

/** 视频 */
export interface Video extends MessageSegmentBase {
    type: 'video'
    data: _Data.Video & ExtendedMap
}

/** 文件 */
export interface File extends MessageSegmentBase {
    type: 'file'
    data: _Data.File & ExtendedMap
}

/** 位置 */
export interface Location extends MessageSegmentBase {
    type: 'location'
    data: _Data.Location & ExtendedMap
}

/** 回复 */
export interface Reply extends MessageSegmentBase {
    type: 'reply'
    data: _Data.Reply & ExtendedMap
}

