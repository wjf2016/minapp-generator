<!-- https://developers.weixin.qq.com/miniprogram/dev/api/canvas/set-text-align.html -->

canvasContext.setTextAlign
==========================

> 基础库 1.1.0 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

### 定义

用于设置文字的对齐

### 语法

    canvasContext.setTextAlign(align)
    canvasContext.textAlign = align // 基础库 1.9.90 起支持
    

### 参数

  参数    |  类型     |  定义                          
----------|-----------|--------------------------------
  align   |  String   |可选值 'left'、'center'、'right'

### 示例代码：

    const ctx = wx.createCanvasContext('myCanvas')
    
    ctx.setStrokeStyle('red')
    ctx.moveTo(150, 20)
    ctx.lineTo(150, 170)
    ctx.stroke()
    
    ctx.setFontSize(15)
    ctx.setTextAlign('left')
    ctx.fillText('textAlign=left', 150, 60)
    
    ctx.setTextAlign('center')
    ctx.fillText('textAlign=center', 150, 80)
    
    ctx.setTextAlign('right')
    ctx.fillText('textAlign=right', 150, 100)
    
    ctx.draw()
    

![](https://developers.weixin.qq.com/miniprogram/dev/image/canvas/set-text-align.png)
