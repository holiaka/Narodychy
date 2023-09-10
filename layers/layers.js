var wms_layers = [];

var format_Narodychi2023AEDRmkSv_h_0 = new ol.format.GeoJSON();
var features_Narodychi2023AEDRmkSv_h_0 = format_Narodychi2023AEDRmkSv_h_0.readFeatures(json_Narodychi2023AEDRmkSv_h_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Narodychi2023AEDRmkSv_h_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Narodychi2023AEDRmkSv_h_0.addFeatures(features_Narodychi2023AEDRmkSv_h_0);
var lyr_Narodychi2023AEDRmkSv_h_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Narodychi2023AEDRmkSv_h_0, 
                style: style_Narodychi2023AEDRmkSv_h_0,
                interactive: true,
                title: '<img src="styles/legend/Narodychi2023AEDRmkSv_h_0.png" /> Narodychi 2023 (AEDR, mkSv_h)'
            });
var format_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1 = new ol.format.GeoJSON();
var features_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1 = format_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1.readFeatures(json_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1.addFeatures(features_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1);
var lyr_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1, 
                style: style_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1,
                interactive: true,
                title: '<img src="styles/legend/Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1.png" /> Narodychi_all_UIAR_data_1997-2023 (D, kBq_sq_m) as of 2021'
            });
var format_Narodychi1997DkBq_sq_mWelllogging_2 = new ol.format.GeoJSON();
var features_Narodychi1997DkBq_sq_mWelllogging_2 = format_Narodychi1997DkBq_sq_mWelllogging_2.readFeatures(json_Narodychi1997DkBq_sq_mWelllogging_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Narodychi1997DkBq_sq_mWelllogging_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Narodychi1997DkBq_sq_mWelllogging_2.addFeatures(features_Narodychi1997DkBq_sq_mWelllogging_2);
var lyr_Narodychi1997DkBq_sq_mWelllogging_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Narodychi1997DkBq_sq_mWelllogging_2, 
                style: style_Narodychi1997DkBq_sq_mWelllogging_2,
                interactive: true,
                title: '<img src="styles/legend/Narodychi1997DkBq_sq_mWelllogging_2.png" /> Narodychi 1997 (D, kBq_sq_m) Well logging'
            });
var format_Narodychi1988AEDRmkSv_h_3 = new ol.format.GeoJSON();
var features_Narodychi1988AEDRmkSv_h_3 = format_Narodychi1988AEDRmkSv_h_3.readFeatures(json_Narodychi1988AEDRmkSv_h_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Narodychi1988AEDRmkSv_h_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Narodychi1988AEDRmkSv_h_3.addFeatures(features_Narodychi1988AEDRmkSv_h_3);
var lyr_Narodychi1988AEDRmkSv_h_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Narodychi1988AEDRmkSv_h_3, 
                style: style_Narodychi1988AEDRmkSv_h_3,
                interactive: true,
                title: '<img src="styles/legend/Narodychi1988AEDRmkSv_h_3.png" /> Narodychi 1988 (AEDR, mkSv_h)'
            });

        var lyr_GoogleSatelliteHybrid_4 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_5 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reserve_6 = new ol.format.GeoJSON();
var features_Reserve_6 = format_Reserve_6.readFeatures(json_Reserve_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reserve_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reserve_6.addFeatures(features_Reserve_6);
var lyr_Reserve_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reserve_6, 
                style: style_Reserve_6,
                interactive: true,
                title: '<img src="styles/legend/Reserve_6.png" /> Reserve'
            });
var format_Narodychy_distr_7 = new ol.format.GeoJSON();
var features_Narodychy_distr_7 = format_Narodychy_distr_7.readFeatures(json_Narodychy_distr_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Narodychy_distr_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Narodychy_distr_7.addFeatures(features_Narodychy_distr_7);
var lyr_Narodychy_distr_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Narodychy_distr_7, 
                style: style_Narodychy_distr_7,
                interactive: true,
                title: '<img src="styles/legend/Narodychy_distr_7.png" /> Narodychy_distr'
            });
var group_MeasureresultsDdensitycontaminationorAEDRambientequivalentdoserate = new ol.layer.Group({
                                layers: [lyr_Narodychi2023AEDRmkSv_h_0,lyr_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1,lyr_Narodychi1997DkBq_sq_mWelllogging_2,lyr_Narodychi1988AEDRmkSv_h_3,],
                                title: "Measure results (D - density contamination, or AEDR - ambient equivalent dose rate)"});

lyr_Narodychi2023AEDRmkSv_h_0.setVisible(true);lyr_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1.setVisible(true);lyr_Narodychi1997DkBq_sq_mWelllogging_2.setVisible(true);lyr_Narodychi1988AEDRmkSv_h_3.setVisible(true);lyr_GoogleSatelliteHybrid_4.setVisible(true);lyr_OSMStandard_5.setVisible(true);lyr_Reserve_6.setVisible(true);lyr_Narodychy_distr_7.setVisible(true);
var layersList = [group_MeasureresultsDdensitycontaminationorAEDRambientequivalentdoserate,lyr_GoogleSatelliteHybrid_4,lyr_OSMStandard_5,lyr_Reserve_6,lyr_Narodychy_distr_7];
lyr_Narodychi2023AEDRmkSv_h_0.set('fieldAliases', {'D': 'D', });
lyr_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1.set('fieldAliases', {'Cs-kBk-21': 'Cs-kBk-21', });
lyr_Narodychi1997DkBq_sq_mWelllogging_2.set('fieldAliases', {'D_Cs_97_kB': 'D_Cs_97_kB', });
lyr_Narodychi1988AEDRmkSv_h_3.set('fieldAliases', {'med,mr/g': 'med,mr/g', 'k': 'k', 'med,mkZv/g': 'med,mkZv/g', 'mkZv': 'mkZv', });
lyr_Reserve_6.set('fieldAliases', {'fid': 'fid', 'mvt_id': 'mvt_id', 'ZnPZF': 'ZnPZF', 'Updated': 'Updated', 'NazObPZF': 'NazObPZF', 'NZoPZF': 'NZoPZF', 'AdmRozPZF': 'AdmRozPZF', 'AdrAdmPZF': 'AdrAdmPZF', 'PidDPZF': 'PidDPZF', 'PidNPZF': 'PidNPZF', 'fid_2': 'fid_2', 'mvt_id_2': 'mvt_id_2', 'AdrAdmPZF_': 'AdrAdmPZF_', 'PidDPZF_2': 'PidDPZF_2', 'PidNPZF_2': 'PidNPZF_2', 'ZnPZF_2': 'ZnPZF_2', 'Updated_2': 'Updated_2', 'NazObPZF_2': 'NazObPZF_2', 'NZoPZF_2': 'NZoPZF_2', 'AdmRozPZF_': 'AdmRozPZF_', });
lyr_Narodychy_distr_7.set('fieldAliases', {'id': 'id', });
lyr_Narodychi2023AEDRmkSv_h_0.set('fieldImages', {'D': 'TextEdit', });
lyr_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1.set('fieldImages', {'Cs-kBk-21': 'TextEdit', });
lyr_Narodychi1997DkBq_sq_mWelllogging_2.set('fieldImages', {'D_Cs_97_kB': '', });
lyr_Narodychi1988AEDRmkSv_h_3.set('fieldImages', {'med,mr/g': '', 'k': '', 'med,mkZv/g': '', 'mkZv': '', });
lyr_Reserve_6.set('fieldImages', {'fid': 'TextEdit', 'mvt_id': 'TextEdit', 'ZnPZF': 'TextEdit', 'Updated': 'TextEdit', 'NazObPZF': 'TextEdit', 'NZoPZF': 'TextEdit', 'AdmRozPZF': 'TextEdit', 'AdrAdmPZF': 'TextEdit', 'PidDPZF': 'TextEdit', 'PidNPZF': 'TextEdit', 'fid_2': 'TextEdit', 'mvt_id_2': 'TextEdit', 'AdrAdmPZF_': 'TextEdit', 'PidDPZF_2': 'TextEdit', 'PidNPZF_2': 'TextEdit', 'ZnPZF_2': 'TextEdit', 'Updated_2': 'TextEdit', 'NazObPZF_2': 'TextEdit', 'NZoPZF_2': 'TextEdit', 'AdmRozPZF_': 'TextEdit', });
lyr_Narodychy_distr_7.set('fieldImages', {'id': 'TextEdit', });
lyr_Narodychi2023AEDRmkSv_h_0.set('fieldLabels', {});
lyr_Narodychi_all_UIAR_data_19972023DkBq_sq_masof2021_1.set('fieldLabels', {});
lyr_Narodychi1997DkBq_sq_mWelllogging_2.set('fieldLabels', {});
lyr_Narodychi1988AEDRmkSv_h_3.set('fieldLabels', {});
lyr_Reserve_6.set('fieldLabels', {'fid': 'no label', 'mvt_id': 'no label', 'ZnPZF': 'no label', 'Updated': 'no label', 'NazObPZF': 'no label', 'NZoPZF': 'no label', 'AdmRozPZF': 'no label', 'AdrAdmPZF': 'no label', 'PidDPZF': 'no label', 'PidNPZF': 'no label', 'fid_2': 'no label', 'mvt_id_2': 'no label', 'AdrAdmPZF_': 'no label', 'PidDPZF_2': 'no label', 'PidNPZF_2': 'no label', 'ZnPZF_2': 'no label', 'Updated_2': 'no label', 'NazObPZF_2': 'no label', 'NZoPZF_2': 'no label', 'AdmRozPZF_': 'no label', });
lyr_Narodychy_distr_7.set('fieldLabels', {'id': 'no label', });
lyr_Narodychy_distr_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});