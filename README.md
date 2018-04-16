# Youtube_popup

JavaScript light library.

## Description
This is an easy library for dynamically loading videos from YouTube with various parameters and a beautiful display in the popup window, which is adaptive to screen sizes on various devices.

>The main purpose of creating this library was the error in Google Chrome version 65 and bigger (Error parsing header X-XSS-Protection :),
which slowed down the loading of the page where are iframes from YouTube. By the way in general, when inserting the iFrame the page 
loads longer.

## How To Use

### Without image
Easy way to use it. Just put attributes **data-video-id=" "** with YouTube video id and  **data-youtube="true"**.
These are required attributes.
Example:
```HTML
<div  data-video-id="bgE_qWp9eeA" data-youtube="true"></div>
```
PopUp window will apper with nice animation loader after clicking on this tag.

### With image
Also you can import image from video. You just need two attributes **data-youtubeimg="true"** and **data-imgsize="maxresdefault"**.
>You can add just one - data-youtubeimg="true" and by default it takes __mqdefault__ 480x360 image.

```HTML
<div data-imgsize="maxresdefault" data-video-id="bgE_qWp9eeA" data-youtube="true" data-youtubeimg="true"></div>
```

Translate pictures sizes.

| parametr of (data-imgsize) attribute         | Image size            |
| ------------- |:-------------:| 
| maxresdefault     | actual image size  | 
| sddefault       | 320x180     |  
| hqdefault  | 120x90      |    
| mqdefault   | 480x360      | 
| default     | 640x480      | 

### Additionally

This lib uses three svg icons to make it fancy:
* When PopUp window is loading. This is an animation svg ico.


![Alt text](https://user-images.githubusercontent.com/24529997/38827693-664e47c6-41bc-11e8-9cd8-6f875a720086.png "YouTube_popup loader svg")
 
* PopUp window close button.


![Alt text](https://user-images.githubusercontent.com/24529997/38827876-f6398332-41bc-11e8-8876-aa85e7584928.png "YouTube_popup close button")

* YouTube defaul video ico on the image.

![Alt text](https://user-images.githubusercontent.com/24529997/38828064-830a9076-41bd-11e8-8126-1b6233988c05.png "YouTube_popup default ico")

## DEMO

Now This lib is used on real e-commerce project [MOBILSHINA.COM.UA](https://www.mobilshina.com.ua/).

## License
Copyright (C) 2018 Lyzhov Mykyta

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.

If you want to use this app or parts of it, please, add link to this repo and DO NOT include ads or any paid options.
