ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:21036").setExtent([449584.261442, 10038167.095145, 706813.657259, 10301223.694104]);
var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_LokereSubCatchments_1 = new ol.format.GeoJSON();
var features_LokereSubCatchments_1 = format_LokereSubCatchments_1.readFeatures(json_LokereSubCatchments_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21036'});
var jsonSource_LokereSubCatchments_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokereSubCatchments_1.addFeatures(features_LokereSubCatchments_1);
var lyr_LokereSubCatchments_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LokereSubCatchments_1, 
                style: style_LokereSubCatchments_1,
                interactive: true,
                title: '<img src="styles/legend/LokereSubCatchments_1.png" /> Lokere Sub Catchments'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_LokereSubCatchments_1.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_LokereSubCatchments_1];
lyr_LokereSubCatchments_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'District': 'District', 'Dcode': 'Dcode', 'County': 'County', 'CCode': 'CCode', 'Subcounty': 'Subcounty', 'regions': 'regions', 'scode2019': 'scode2019', 'sname2019': 'sname2019', });
lyr_LokereSubCatchments_1.set('fieldImages', {'OBJECTID': '', 'District': '', 'Dcode': '', 'County': '', 'CCode': '', 'Subcounty': '', 'regions': '', 'scode2019': '', 'sname2019': '', });
lyr_LokereSubCatchments_1.set('fieldLabels', {'OBJECTID': 'no label', 'District': 'no label', 'Dcode': 'no label', 'County': 'no label', 'CCode': 'no label', 'Subcounty': 'inline label', 'regions': 'no label', 'scode2019': 'no label', 'sname2019': 'inline label', });
lyr_LokereSubCatchments_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});