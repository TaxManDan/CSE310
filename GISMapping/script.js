require(["esri/config",
"esri/Map", 
"esri/views/MapView", 
"esri/widgets/BasemapToggle", 
"esri/widgets/BasemapGallery", 
"esri/symbols/SimpleMarkerSymbol",
"esri/Graphic",
"esri/layers/GraphicsLayer"], 
function (esriConfig,
  Map,
   MapView, 
   BasemapToggle, 
   BasemapGallery,
   SimpleMarkerSymbol,
   Graphic,
   GraphicsLayer
   ) {
  
  esriConfig.apiKey = "AAPKfd8dc246c6a444aeac479dfc80edd277v4Ey97gd6sa3kRaordXId1KhFPPvA5-MDnI7uJGLHq7BFuxysNO1l3lg4nSs9Hqu";

  const map = new Map({
    basemap: "arcgis-topographic" // Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [-111.805, 43.927], // Longitude, latitude
    zoom: 10, // Zoom level
    container: "viewDiv" // Div element
  });
  const basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "arcgis-imagery"
  });

  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);
  view.ui.add(basemapToggle, "bottom-right");

  const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40],  // Orange
    outline: {
        color: [255, 255, 255], // White
        width: 1
    }
 };
 const popupTemplate = {
  title: "{Name}",
  content: "{Description}"
};

  const point1 = { //Create a point
    type: "point",
    longitude: -111.80657463861,
    latitude: 43.8005930608889
 };

 const point2 = { //Create a point
  type: "point",
  longitude: -111.90757463861,
  latitude: 43.8005930608889
};

const point3 = { //Create a point
  type: "point",
  longitude: -111.82657463861,
  latitude: 43.8005930608889
};

const point4 = { //Create a point
  type: "point",
  longitude: -111.81657463861,
  latitude: 43.8005930608889
};
const point5 = { //Create a point
  type: "point",
  longitude: -111.83657463861,
  latitude: 43.8105930608889
};
 
const point6 = { //Create a point
  type: "point",
  longitude: -111.80657463861,
  latitude: 43.8705930608889
};

const point7 = { //Create a point
type: "point",
longitude: -111.80157463861,
latitude: 43.8005930608889
};

const point8 = { //Create a point
type: "point",
longitude: -111.82957463861,
latitude: 43.8005930608889
};

const point9 = { //Create a point
type: "point",
longitude: -111.84657463861,
latitude: 43.8005930608889
};

const point10 = { //Create a point
type: "point",
longitude: -111.80657463861,
latitude: 43.8105930608889
};

const point11 = { //Create a point
  type: "point",
  longitude: -111.80657463861,
  latitude: 43.8605930608889
};

const point12 = { //Create a point
type: "point",
longitude: -111.80757463861,
latitude: 43.8095930608889
};

const point13 = { //Create a point
type: "point",
longitude: -111.82657463861,
latitude: 43.8205930608889
};

const point14 = { //Create a point
type: "point",
longitude: -111.81657463861,
latitude: 43.8005930608889
};
const point15 = { //Create a point
type: "point",
longitude: -111.80657463861,
latitude: 43.8105930608889
};

const point16 = { //Create a point
type: "point",
longitude: -111.80657463861,
latitude: 43.8405930608889
};

const point17 = { //Create a point
type: "point",
longitude: -111.80757463861,
latitude: 43.8505930608889
};

const point18 = { //Create a point
type: "point",
longitude: -111.82657463861,
latitude: 43.9005930608889
};

const point19 = { //Create a point
type: "point",
longitude: -111.81657463861,
latitude: 43.8705930608889
};

const point20 = { //Create a point
type: "point",
longitude: -111.84657463861,
latitude: 43.8105930608889
};


const attributes1 = {
  Name: "Run #1",
  Description: "The BYUI Track"
};
const attributes2 = {
  Name: "Run #2",
  Description: "Porter Park"
};
const attributes3 = {
  Name: "Run #3",
  Description: "Smith Park"
};
const attributes4 = {
  Name: "Run #4",
  Description: "Upper Fields Loop"
};
const attributes5 = {
  Name: "Run #5",
  Description: "I am a polygon"
};

const attributes6 = {
  Name: "Run #6",
  Description: "I am a polygon"
};
const attributes7 = {
  Name: "Run #7",
  Description: "I am a polygon"
};
const attributes8 = {
  Name: "Run #8",
  Description: "I am a polygon"
};
const attributes9 = {
  Name: "Run #9",
  Description: "I am a polygon"
};
const attributes10 = {
  Name: "Run #10",
  Description: "I am a polygon"
};

const attributes11 = {
  Name: "Run #11",
  Description: "I am a polygon"
};
const attributes12 = {
  Name: "Run #12",
  Description: "I am a polygon"
};
const attributes13 = {
  Name: "Run #13",
  Description: "I am a polygon"
};
const attributes14 = {
  Name: "Run #14",
  Description: "I am a polygon"
};
const attributes15 = {
  Name: "Run #15",
  Description: "I am a polygon"
};

const attributes16 = {
  Name: "Run #16",
  Description: "I am a polygon"
};
const attributes17 = {
  Name: "Run #17",
  Description: "I am a polygon"
};
const attributes18 = {
  Name: "Run #18",
  Description: "I am a polygon"
};
const attributes19 = {
  Name: "Run #19",
  Description: "I am a polygon"
};
const attributes20 = {
  Name: "Run #20",
  Description: "I am a polygon"
};




const run1 = new Graphic({
  geometry: point1,
  symbol: simpleMarkerSymbol,

  attributes: attributes1,
  popupTemplate: popupTemplate

});

const run2 = new Graphic({
  geometry: point2,
  symbol: simpleMarkerSymbol,

  attributes: attributes2,
  popupTemplate: popupTemplate

});

const run3 = new Graphic({
  geometry: point3,
  symbol: simpleMarkerSymbol,

  attributes: attributes3,
  popupTemplate: popupTemplate

});

const run4 = new Graphic({
  geometry: point4,
  symbol: simpleMarkerSymbol,

  attributes: attributes4,
  popupTemplate: popupTemplate

});

const run5 = new Graphic({
  geometry: point5,
  symbol: simpleMarkerSymbol,

  attributes: attributes5,
  popupTemplate: popupTemplate

});

const run6 = new Graphic({
  geometry: point6,
  symbol: simpleMarkerSymbol,

  attributes: attributes6,
  popupTemplate: popupTemplate

});

const run7 = new Graphic({
  geometry: point7,
  symbol: simpleMarkerSymbol,

  attributes: attributes7,
  popupTemplate: popupTemplate

});

const run8 = new Graphic({
  geometry: point8,
  symbol: simpleMarkerSymbol,

  attributes: attributes8,
  popupTemplate: popupTemplate

});

const run9 = new Graphic({
  geometry: point9,
  symbol: simpleMarkerSymbol,

  attributes: attributes9,
  popupTemplate: popupTemplate

});

const run10 = new Graphic({
  geometry: point10,
  symbol: simpleMarkerSymbol,

  attributes: attributes10,
  popupTemplate: popupTemplate
})

const run11 = new Graphic({
  geometry: point11,
  symbol: simpleMarkerSymbol,

  attributes: attributes11,
  popupTemplate: popupTemplate

});

const run12 = new Graphic({
  geometry: point12,
  symbol: simpleMarkerSymbol,

  attributes: attributes12,
  popupTemplate: popupTemplate

});

const run13 = new Graphic({
  geometry: point13,
  symbol: simpleMarkerSymbol,

  attributes: attributes13,
  popupTemplate: popupTemplate

});

const run14 = new Graphic({
  geometry: point14,
  symbol: simpleMarkerSymbol,

  attributes: attributes14,
  popupTemplate: popupTemplate

});

const run15 = new Graphic({
  geometry: point15,
  symbol: simpleMarkerSymbol,

  attributes: attributes15,
  popupTemplate: popupTemplate

});

const run16 = new Graphic({
  geometry: point16,
  symbol: simpleMarkerSymbol,

  attributes: attributes16,
  popupTemplate: popupTemplate

});

const run17 = new Graphic({
  geometry: point17,
  symbol: simpleMarkerSymbol,

  attributes: attributes17,
  popupTemplate: popupTemplate

});

const run18 = new Graphic({
  geometry: point18,
  symbol: simpleMarkerSymbol,

  attributes: attributes18,
  popupTemplate: popupTemplate

});

const run19 = new Graphic({
  geometry: point19,
  symbol: simpleMarkerSymbol,

  attributes: attributes19,
  popupTemplate: popupTemplate

});

const run20 = new Graphic({
  geometry: point20,
  symbol: simpleMarkerSymbol,

  attributes: attributes20,
  popupTemplate: popupTemplate
})



graphicsLayer.add(run1);
graphicsLayer.add(run2);
graphicsLayer.add(run3);
graphicsLayer.add(run4);
graphicsLayer.add(run5);
graphicsLayer.add(run6);
graphicsLayer.add(run7);
graphicsLayer.add(run8);
graphicsLayer.add(run9);
graphicsLayer.add(run10);
graphicsLayer.add(run11);
graphicsLayer.add(run12);
graphicsLayer.add(run13);
graphicsLayer.add(run14);
graphicsLayer.add(run15);
graphicsLayer.add(run16);
graphicsLayer.add(run17);
graphicsLayer.add(run18);
graphicsLayer.add(run19);
graphicsLayer.add(run20);


});
