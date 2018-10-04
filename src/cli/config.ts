/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import * as findup from 'mora-scripts/libs/fs/findup'
import {dirname, resolve, join} from 'path'

// 相关 URL
export const URL = {
  BASE_API: 'https://developers.weixin.qq.com/miniprogram/dev/api/',
  BASE_TPL: 'https://developers.weixin.qq.com/miniprogram/dev/component/'
}

// 相关目录
export const ROOT = dirname(findup.pkg(__dirname))
export const DIR = {
  ROOT,
  GEN_API: join(ROOT, 'gen', 'api'),
  GEN_TPL: join(ROOT, 'gen', 'tpl'),
  MODIFY_API: join(ROOT, 'dist', 'modify', 'api'),
  MODIFY_TPL: join(ROOT, 'dist', 'modify', 'tpl'),
}

// 输出的文件 （在 package.json 中的 data 字段中配置）
const pkg = require(join(ROOT, 'package.json'))
const {components, detailComponents, wx, wxp, promisable} = pkg.data
export const OUTPUT = {
  COMPONENTS: resolve(ROOT, components),
  DETAIL_COMPONENTS: resolve(ROOT, detailComponents),
  WX: resolve(ROOT, wx),
  WXP: resolve(ROOT, wxp),
  PROMISABLE: resolve(ROOT, promisable),
  PRE_PROMISABLE: resolve(ROOT, promisable.replace(/(\w+\.json$)/, 'pre-$1'))
}
