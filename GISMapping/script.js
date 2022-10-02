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
    center: [-113.805, 43.927], // Longitude, latitude
    zoom: 8, // Zoom level
    container: "viewDiv" // Div element
  });
  
  // Added another basemap 
  const basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "arcgis-imagery"
  });

  // Code for switching basemaps
  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);
  view.ui.add(basemapToggle, "bottom-right");

 // Marker Code
  const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40],  // Orange
    outline: {
        color: [255, 255, 255], // White
        width: 1
    }
 };
 
 // Popup template Code
 const popupTemplate = {
  title: "{Name}",
  content: "{Description}"
};

// Marker Location Code
  const point1 = { //BYU-I Track
    type: "point",
    longitude: -111.785456,
    latitude: 43.820912
 };

 const point2 = { //Porter Park
  type: "point",
  longitude: -111.790528,
  latitude: 43.823501
};

const point3 = { //Smith Park
  type: "point",
  longitude: -111.773678,
  latitude: 43.827241
};

const point4 = { //Upper Fields Loop
  type: "point",
  longitude: -111.784829,
  latitude: 43.808725
};
const point5 = { //Nature Park
  type: "point",
  longitude: -111.801355,
  latitude: 43.834349
};
 
const point6 = { //Henry's Fork
  type: "point",
  longitude: -111.886754,
  latitude: 43.837392
};

const point7 = { //Upper Fields
type: "point",
longitude: -111.785512,
latitude: 43.812886
};

const point8 = { //University Hills
type: "point",
longitude: -111.789590,
latitude: 43.809402
};

const point9 = { //I-Center Track
type: "point",
longitude: -111.784297,
latitude: 43.818224
};

const point10 = { //Walmart Run
type: "point",
longitude: -111.774444,
latitude: 43.855171
};

const point11 = { //RMHS Track
  type: "point",
  longitude: -116.408952,
  latitude: 43.653646
};

const point12 = { //Eagle Island Park
type: "point",
longitude: -116.397358,
latitude: 43.685664
};

const point13 = { //Heros Park
type: "point",
longitude: -116.430424,
latitude: 43.656995
};

const point14 = { //Settlers Park
type: "point",
longitude: -116.396407,
latitude: 43.635810
};
const point15 = { //Fuller Park
type: "point",
longitude: -116.440478,
latitude: 43.614931
};

const point16 = { //Black Cat Hills
type: "point",
longitude: -116.453763,
latitude: 43.595267
};

const point17 = { //Overland Hills
type: "point",
longitude: -116.432359,
latitude: 43.590380
};

const point18 = { //Bear Creek Park
type: "point",
longitude: -116.401652,
latitude: 43.583755
};

const point19 = { //CPCS Grass
type: "point",
longitude: -116.451527,
latitude: 43.607207
};

const point20 = { //Kleiner Park
type: "point",
longitude: -116.346390,
latitude: 43.625938
};

// Popup attributes code
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
  Description: "Nature Park"
};

const attributes6 = {
  Name: "Run #6",
  Description: "Henry's Fork"
};
const attributes7 = {
  Name: "Run #7",
  Description: "Upper Fields"
};
const attributes8 = {
  Name: "Run #8",
  Description: "University Hills"
};
const attributes9 = {
  Name: "Run #9",
  Description: "I-Center Track"
};
const attributes10 = {
  Name: "Run #10",
  Description: "Walmart Run"
};

const attributes11 = {
  Name: "Run #11",
  Description: "RMHS Track"
};
const attributes12 = {
  Name: "Run #12",
  Description: "Eagle Island Park"
};
const attributes13 = {
  Name: "Run #13",
  Description: "Heros Park"
};
const attributes14 = {
  Name: "Run #14",
  Description: "Settlers Park"
};
const attributes15 = {
  Name: "Run #15",
  Description: "Fuller Park"
};

const attributes16 = {
  Name: "Run #16",
  Description: "Black Cat Hills"
};
const attributes17 = {
  Name: "Run #17",
  Description: "Overland Hills"
};
const attributes18 = {
  Name: "Run #18",
  Description: "Bear Creek Park"
};
const attributes19 = {
  Name: "Run #19",
  Description: "CPCS Grass"
};
const attributes20 = {
  Name: "Run #20",
  Description: "Kleiner Park"
};



//creation of the marker and popup Graphics
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

//added the graphics to the map
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
