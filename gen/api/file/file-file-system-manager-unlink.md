<!-- https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.unlink.html -->

### FileSystemManager.unlink(Object object)

> 基础库 1.9.9 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

删除文件

#### 参数

##### Object object

  属性       |  类型       | 默认值 | 是否必填|  说明                       | 支持版本
-------------|-------------|--------|---------|-----------------------------|---------
  filePath   |  string     |        |  是     |  要删除的文件路径           |         
  success    |  function   |        |  否     |  接口调用成功的回调函数     |         
  fail       |  function   |        |  否     |  接口调用失败的回调函数     |         
  complete   |  function   |        |  否     |接口调用结束的回调函数（调用成功、失败都会执行）|         

#### fail 回调函数

##### 参数

###### Object res

  属性     |  类型     |  说明   | 支持版本
-----------|-----------|---------|---------
  errMsg   |  string   | 错误信息|         

**res.errMsg 的合法值**

  值                                                 |  说明                 
-----------------------------------------------------|-----------------------
  fail permission denied, open ${path}               |指定的 path 路径没有读权限
  fail no such file or directory ${path}             |  文件不存在           
  fail operation not permitted, unlink ${filePath}   |传入的 filePath 是一个目录
