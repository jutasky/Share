# 有点推荐使用v2ray惹 [点这里](https://github.com/jutasky/Share/tree/master/v2ray)

# ssr使用说明

废话不说，看看使用效果，4k无压力
![速度测试1][1]
![速度测试2][2]

## 文件目录结构

  - account/
  - pic/
  - app/
  - [account.md](https://github.com/jutasky/Share/blob/master/ssr/account.md)
  - README.md


## 前置说明

  ### Windows
   Windows用户请下载 [`ShadowsocksR-4.9.2.zip`](https://github.com/jutasky/Share/raw/master/ssr/app/ShadowsocksR-4.9.2.zip) || [`ShadowsocksR-4.7.0.zip`](https://github.com/jutasky/Share/raw/master/ssr/app/ShadowsocksR-4.7.0.zip)
  
   Windows备用: [`electron-ssr-setup-0.2.6.exe`](https://github.com/jutasky/Share/raw/master/ssr/app/electron-ssr-setup-0.2.6.exe)【**注意需要安装python和nodejs环】境！！**

  ### Mac
   macOS, OS X用户请下载 [`ShadowsocksX-R.zip`](https://github.com/jutasky/Share/raw/master/ssr/app/ShadowsocksX-R.zip)

   macOS备用: [`electron-ssr-0.2.6-mac.zip`](https://github.com/jutasky/Share/raw/master/ssr/app/electron-ssr-0.2.6-mac.zip)

  ### Android
   安卓用户请下载 [`ShadowsocksR-release.apk`](https://github.com/jutasky/Share/raw/master/ssr/app/Shadowsocksr-release.apk)

  ### IOS
   抱歉我没有iphone，如果你有什么好的解决方法可以issue

  ### 一些介绍
   `account.md` 存放的为ssr链接，这里的设备均为本人提供使用，如出现无法翻越长城的情况，不是墙升级了，就是我没钱续费了

## **使用**
 ### 订阅服务器
 使用订阅功能可以非常方便的添加节点，一次添加，没有后续操作，打开软体自动更新节点，再也不用一个个添加了！
 
 **订阅地址：**[`https://raw.githubusercontent.com/jutasky/Share/master/ssr/all.txt`](https://raw.githubusercontent.com/jutasky/Share/master/ssr/all.txt)

 #### 添加方法
  - 右键任务栏上的软体图标，找到**服务器订阅**，点击**SSR服务器订阅设置**（例子使用的是原生windows程序）
  - 备用程序的打开操作->右键任务栏上的软体图标->找到**服务器**->点击**订阅管理**->添加
  ![添加订阅服务器][3]
  
  点击**Add**，粘贴入开头👆的订阅地址，确定
  ![添加订阅服务器][4]
  
  没有效果的话，可以单独点击**更新SSR服务器订阅(不通过代理)**，**⚠️注意是不通过代理！！！**
  ![添加订阅服务器][5]
  
  macOS的添加基本雷同（只有备用程序可以！）

 ### **Windows:**
  **step1:**
  将当前目录下的 `ShadowsocksR-4.7.0.zip` 下载到你的计算机

  ![windows_1][10]

  **step2:**
  使用压缩软件**解压**这个压缩包，得到如下目录

  ![windows_2][11]

  **step3:**
  双击运行下图中选的exe文件

  ![windows_3][12]

   **step4:**
  出现如下情况，**请把两个勾选，并允许访问**

  ![windows_4][13]

  **step5:**
  状态栏上会出现一个**小飞机**图标，**没有的话，请检查是否再隐藏活动里**

  ![windows_5][14]

  **step6:**
  右键**小飞机**，按下图选择，**服务器 -> 编辑服务器**

  ![windows_6][15]

  **step7:**
  出现如下界面，填入相应信息，确认，即可食用

  ![windows_7][16]

- - - -

 ### **macOS, OS X:**
  **step1:**
  将当前目录下的 `ShadowsocksX-R.zip` 下载到你的计算机

  ![mac_1][20]
  
  **step2:**
   双击会自动解压出来

  ![mac_2][21]
  
  **step3:**
  打开Finder选择应用程序，将 `ShadowsocksX-R.app` 拖入应用程序文件夹
  
  ![mac_3][22]
  
  **step4:**
  打开Finder
  
  ![mac_4][23]
  
  **step5:**
  搜索或点击运行 `ShadowsocksX-R`
  
  ![mac_5][24]
  
  **step6:**
  如出现如下情况，请选择**打开**
  
  ![mac_6][25]
  
  **step7:**
  状态栏上右键**小飞机**图标，选择 服务器 -> 服务器设置
  > 还有个 **扫描屏幕上的二维码** 也可以使用，windows下的二维码识别有问题
  
  ![mac_7][26]
  
  **step8:**
  出现如下界面，填入相应信息，确认，即可食用
  
  ![mac_8][27]
  
  > 具体操作和windows版本的一样

- - - -

 ### **Android:**
  **step1:**
  将当前目录下的 `ShadowsocksR-release.apk` 下载安装到你到手机上

  ![android_1][30]

  **step2:**
  点击左上方的 `shadowsocks R`

  ![android_2][31]

  **step3:**
  点击这个右下角的 **小加号➕**

  ![android_3][32]

  **step4:**
  这里我们就选择 **手动设置** 了，其他的几项相信聪明的你肯定会用的辣

  ![android_4][33]

  **step5:**
  我们这里又回到了首页，生成了一个空的项目，填入相应的信息，点击右上角的 **小飞机**，起飞吧(๑'ᴗ'๑)

  ![android_5][34]

 
 - - - -

 ### **IOS:**
 > 抱歉，我心里没有B数 (.ↁᴗↁ.)


- - - -
> 2019.12.11 flxxyz updated.


 [1]: ./pic/usage1.png
 [2]: ./pic/usage2.png
 [3]: ./pic/usage3.jpg
 [4]: ./pic/usage4.jpg
 [5]: ./pic/usage5.jpg

 [10]: ./pic/windows/ssr_1.png
 [11]: ./pic/windows/ssr_2.png
 [12]: ./pic/windows/ssr_3.png
 [13]: ./pic/windows/ssr_4.png
 [14]: ./pic/windows/ssr_5.png
 [15]: ./pic/windows/ssr_6.png
 [16]: ./pic/windows/ssr_7.png
 
 [20]: ./pic/mac/ssr_1.png
 [21]: ./pic/mac/ssr_2.png
 [22]: ./pic/mac/ssr_3.png
 [23]: ./pic/mac/ssr_4.png
 [24]: ./pic/mac/ssr_5.png
 [25]: ./pic/mac/ssr_6.png
 [26]: ./pic/mac/ssr_7.png
 [27]: ./pic/mac/ssr_8.png
 
 [30]: ./pic/android/ssr_1.png
 [31]: ./pic/android/ssr_2.png
 [32]: ./pic/android/ssr_3.png
 [33]: ./pic/android/ssr_4.png
 [34]: ./pic/android/ssr_5.png
