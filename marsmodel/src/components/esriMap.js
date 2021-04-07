import EsriLoaderReact from 'esri-loader-react';
import { setDefaultOptions, loadModules } from 'esri-loader';
import { render } from 'react-dom';
import React from 'react';

setDefaultOptions({ css: true });
//const EsriMap = () =>
class EsriMap extends React.PureComponent {
    render()
    {
        const options = {
        url: 'https://js.arcgis.com/4.18/'
        };
      return (

        <div>
          <div></div> 
        <EsriLoaderReact 
        style={{position:"absolute", margin:'200px'}}
          options={options} 
          modulesToLoad={['esri/config','esri/Map','esri/views/SceneView', 'esri/layers/ElevationLayer',
           'esri/layers/TileLayer','esri/layers/FeatureLayer','esri/widgets/LayerList']}    
          onReady={({loadedModules: [esriConfig,Map, SceneView,ElevationLayer, TileLayer, FeatureLayer, LayerList], containerNode}) => {
            esriConfig.apiKey='AAPK327bdf28783e4a57ae8ad2252077d0688RAtTE6flZmyt_4cGCbyJQSbjikELk0OfGSOouhoeEkDizoqoPO5Xkw3tlfu1HG';
            const marsElevation = new ElevationLayer({
              url:'https://astro.arcgis.com/arcgis/rest/services/OnMars/MDEM200M/ImageServer',
              copyright:'NASA, ESA, HRSC, Goddard Space Flight Center, USGS Astrogeology Science Center, Esri'
            });

            const marsImagery = new TileLayer({
              url:'https://astro.arcgis.com/arcgis/rest/services/OnMars/MDIM/MapServer',
              title: "Imagery",
              copyright:'USGS Astrogeology Science Center, NASA, JPL, Esri'
            });
            const mapp = new Map({
              ground: {
                layers: [marsElevation]
              },
              layers: [marsImagery]
            });

          const cratersLayer = new FeatureLayer({
              url:'https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/Mars_Nomenclature_Mountains/FeatureServer/7',
              definitionExpression: "type = 'Crater, craters'",
              outFields: ["*"],
              popupTemplate: {
                title: "{origin}",
                content: "name: {clean_name}"
              },
              //definitionExpression: "1=0",
              title: "Craters",
              renderer: {
                type: "simple",
                symbol: {
                  type: "polygon-3d",
                  symbolLayers: [
                    {
                      type: "fill",
                      material: { color: [255, 255, 255, 0.1] },
                      outline: {
                        color: [0, 0, 0, 0.4],
                        size: 2
                      }
                    }
                  ]
                }
              },
              
              labelingInfo: [
                {
                  labelPlacement: "above-center",
                  labelExpressionInfo: { expression: "$feature.NAME" },
                  symbol: {
                    type: "label-3d",
                    symbolLayers: [
                      {
                        type: "text",
                        material: {
                          color: [0, 0, 0, 0.9]
                        },
                        halo: {
                          size: 2,
                          color: [255, 255, 255, 0.7]
                        },
                        font: {
                          size: 10
                        }
                      }
                    ],
                    verticalOffset: {
                      screenLength: 40,
                      maxWorldLength: 500000,
                      minWorldLength: 0
                    },
                    callout: {
                      type: "line",
                      size: 0.5,
                      color: [255, 255, 255, 0.9],
                      border: {
                        color: [0, 0, 0, 0.3]
                      }
                    }
                  }
                }
          ]
          });
          mapp.add(cratersLayer);
          const sqlExpressions = ["Choose a SQL where clause...", "NAME = 'Gala'"];

          // UI
          const selectFilter = document.createElement("select");
          selectFilter.setAttribute("class", "esri-widget esri-select");
          selectFilter.setAttribute("style", "width: 275px; font-family: Avenir Next W00; font-size: 1em;");

          sqlExpressions.forEach(function(sql){
            let option = document.createElement("option");
            option.value = sql;
            option.innerHTML = sql;
            selectFilter.appendChild(option);
          });
          

                // Server-side filter
          function setFeatureLayerFilter(expression) {
            cratersLayer.definitionExpression = expression;
          }
        
          // Event listener
          selectFilter.addEventListener('change', function (event) {
            setFeatureLayerFilter(event.target.value);
          });

            

            const view = new SceneView({
              map: mapp,
              container: containerNode,
              qualityProfile: "high",
              // setting the spatial reference for Mars_2000 coordinate system
              spatialReference: {
                wkid: 104971
              },
              camera: {
                position: {
                  x: 27.63423,
                  y: -6.34466,
                  z: 1281525.766,
                  spatialReference: 104971
                },
                heading: 332.28,
                tilt: 37.12
              }
            });
            const shadedReliefLayer = new TileLayer({
              url:'https://astro.arcgis.com/arcgis/rest/services/OnMars/MColorDEM/MapServer',
              copyright:'USGS Astrogeology Science Center, NASA, JPL, ESA, DLR, Esri',
              title: "Shaded relief",
              visible: false
            });

            mapp.add(shadedReliefLayer);
            const layerList = new LayerList({
                view
            });
            view.ui.add(selectFilter, "top-right");

            view.ui.add(layerList, "top-right");
            
          return view;
          }}
        />
        </div>
    )}}

export default EsriMap;