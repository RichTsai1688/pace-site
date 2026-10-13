// Base map for every page: Esri Light Gray (clean background) with Esri reference labels on top.
// No API key is needed. Labels exist only up to zoom 17, so the map stops at 17. Attribution must stay visible. For school-wide or many-class use, check the Esri
// terms and consider a school-hosted tile service; change the layers here only.
window.PACE_TILE={
  maxZoom:17,
  attribution:'Tiles © Esri，Esri、HERE、Garmin 等供應者；地圖資料 © OpenStreetMap contributors',
  layers:[
    {url:'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',maxNativeZoom:16},
    {url:'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}',maxNativeZoom:17}
  ]
};
// Adds the base layers to a map and returns the first (base) tile layer so callers can listen for tile errors.
window.addBaseMap=function(map){
  const T=window.PACE_TILE;
  let base=null;
  T.layers.forEach((l,i)=>{const layer=L.tileLayer(l.url,{maxZoom:T.maxZoom,maxNativeZoom:l.maxNativeZoom,attribution:i===0?T.attribution:''}).addTo(map);if(i===0)base=layer;});
  return base;
};
