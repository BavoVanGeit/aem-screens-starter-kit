AEM Screens Starter Kit
====================

### Goal 

To provide you - the developer - with an AEM Screens project on your filesystem, ready to be built and installed to a running AEM 6.2 instance and committed to a version control system. This starter-kit is based on the Geometrixx-Instore example but completely white-labeled and easy to customize.

Table of Contents
=================

* [Requirements](#requirements)
* [Get started](#get-started)
* [Player](#player)
* [Developing](#developing)
* [ToDo](#todo)
* [Credits](#credits)


Requirements
============

- AEM 6.2 renamed to cq-quickstart-dynamicmedia-6.2.0.jar to start with Dynamic Media enabled
- [Apache Maven](https://maven.apache.org/) version `>=3.1.1`
- [OSX ScreensPlayer, iOS ScreensPlayer, Android ScreensPlayer](https://download.macromedia.com/screens/)
- [Documentation](https://docs.adobe.com/docs/en/aem/6-2/deploy/screens.html)


Get started
===========

Clone this repository to your machine to begin.


### Customize

This repository is built around two placeholders to enable quick customization: `brand-pathname-placeholder` and `brand-name-placeholder`.

To customize this boilerplate for your own project, simply replace every occurrence of these two variables with (JCR-friendly) names of your choice. You can use [customize-app.sh](customize-app.sh) for this, if you're using bash.

For example, let's say my brand path name is 'brand' and the brand visual title is 'BrandName'. 

Note: the following has only been tested on OS X. YMMV. Please avoid blank characters in both 'brand' and 'BrandName'.

```
./customize-app.sh brand BrandName
```

### Install

This project is based on the [multimodule-content-package-archetype](http://dev.day.com/content/docs/en/aem/6-0/develop/how-tos/vlt-mavenplugin.html#multimodule-content-package-archetype) (with the bundle removed for simplicity), so it contains the same helpful profiles and properties to build and deploy your project with maven.

From the project root, run:

```
mvn -PautoInstallPackage clean install 
```

... to build *all* the content packages and install to an AEM instance. The CRX host and port can be specified on the command line with `mvn -Dcrx.host=otherhost -Dcrx.port=5502 <goals>`


### Setup

After you register your device the AEM Screens Player will not be allowed to access content. You have to add the Contributors group to the newly created screens-brand-devices group under `http://localhost:4502/useradmin`. Simply restart the AEM Screens Player and you should see your content displayed.


### Edit in AEM

Once built and installed via maven, your new app should be editable in AEM. Take a look at the new [Screens admin console](http://localhost:4502/screens.html/content/screens) to view the available screens apps on your instance.

A new screens folder with the brand name you specified above ('BrandName' in my case) should be listed. Tap it to view the different applications, channels, locations and devices you created. 

A few things to try:

- Replace or upload new images to the brand dam folder (/content/dam/brand-pathname-placeholder/) and add them to one of the default channels - `idle`, `idle-night`
- Add some new products under `/etc/commerce/products/brand-pathname-placeholder/` and rollout the associated 'brand-name-placeholder' catalog. You can even add a new structure and product filters to the catalog. If you create a parallel structure to the 'seasonal' example, the application will render it as a new main scroll down content.
- Change the applauncher under `/apps/brand-pathname-placeholder/components/applauncher/` to a new clientlibs application under `/apps/brand-pathname-placeholder/clientlibs`
- Add a new application channel, add the path to the application `/content/screens/brand-pathname-placeholder/apps/simpleapp` within the template component and start to modify the Hello World example `/apps/simplescreensapp/components/applauncher/`.


Player
======

### Clear player cache on OSX

You can delete these 2 folders to cleanup the caches on OS X:

- firmware and channel cache: `~/Library/Application\ Support/com.adobe.cq.screens.player/files`
- webview cache: `~/Library/Caches/com.adobe.cq.screens.player/`

### Customize player on OSX

There is a player config under `/Applications/AEMScreensPlayer/Contents....`
- sistine.json
- config.xml

### Debugging

- AEM log: `/crx-quickstart/logs/error.log`
- OSX player log: `~/Library/Application\ Support/com.adobe.cq.screens.player/files/logs/error.log`
- Android log: Connect the device via USB > In Terminal type: adb logcat (require Android SDK)
- iOS log: Connect the device via USB > Xcode > Windows > Devices > Your device > View Device Logs

Check player status:

```
ipa info aem-screens-player-ios-2.1.x.ipa
```

### Using video

When using FFMPEG you might encounter some error in the log while creating the dedicated renditions. Therefore the video component might not play your video. To fix this:

- Add `-strict -2` to `customArgs` property of `/etc/dam/video/iehq/jcr:content` and `/etc/dam/video/hq/jcr:content`.
- Change `audioCodec` property of `/etc/dam/video/iehq/jcr:content` and `/etc/dam/video/hq/jcr:content` back to `libvo_aacenc` from `aac`


Developing
==========

### Using with VLT

To use vlt with this project, first build and install the package to your local AEM instance as described above. Then `cd content-core/src/main/content/jcr_root/` and run:

```
vlt --credentials admin:admin checkout -f ../META-INF/vault/filter.xml --force http://localhost:4502/crx
````

Once the working copy is created, you can use the normal ``vlt up`` and ``vlt ci`` commands.

### Uninstall

Just testing the waters? No problem. From the [package manager console](http://localhost:4502/crx/packmgr/index.jsp), locate the package named 'brand-pathname-placeholder-content-1.0-SNAPSHOT.zip'. It should be at the top of the list. Uninstall this package to remove your app, it's template, component, design, and supporting clientlibs.

### Dependencies

- There is only one left Geometrixx dependency to the cq:commerceProvider property with value 'geometrixx' for managing the product catalog.

ToDo
====

- create some more channel templates and applications
- create new screens specific custom components
- add a customize-app.bat to support Windows users

Credits
=======

This project is based on blefebvre's aem-phonegap-starter-kit