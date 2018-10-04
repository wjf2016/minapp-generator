/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import {TplModifier, TemplateMeta} from '../..'

export default class extends TplModifier {
  modify($root: Cheerio): TemplateMeta[] {
    return [
      {type: 'tableTitleUpdate', index: 1, from: 'MediaError.code', to: 'binderror __描述__ MediaError.code'}
    ]
  }
}
