// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/_base/array","jimu/utils"],function(g,e,h){return{getFieldInfosFromWebmap:function(f,k){var b=null,c=k.getLayerInfoByTopLayerId(f);c&&((f=c.getPopupInfo())&&f.fieldInfos?(b=g.clone(f.fieldInfos),c.layerObject&&e.forEach(b,function(a){e.some(c.layerObject.fields,function(d){if(a.fieldName===d.name)return a.type=d.type,!0})})):(b=[],c&&c.layerObject&&e.forEach(c.layerObject.fields,function(a){var d=h.getDefaultPortalFieldInfo(a);d.type=a.type;d.visible=!0;d.isEditable=
!0;b.push(d)})));b&&e.forEach(b,function(a){a.format&&a.format.dateFormat&&a.format.dateFormat.toLowerCase()&&0<=a.format.dateFormat.toLowerCase().indexOf("time")&&(a.format.time=!0)});return b}}});