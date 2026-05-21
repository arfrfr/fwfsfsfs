var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_AreaJangkauanHalte_1 = new ol.format.GeoJSON();
var features_AreaJangkauanHalte_1 = format_AreaJangkauanHalte_1.readFeatures(json_AreaJangkauanHalte_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaJangkauanHalte_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaJangkauanHalte_1.addFeatures(features_AreaJangkauanHalte_1);
var lyr_AreaJangkauanHalte_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaJangkauanHalte_1, 
                style: style_AreaJangkauanHalte_1,
                popuplayertitle: 'Area Jangkauan Halte',
                interactive: true,
    title: 'Area Jangkauan Halte<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_2.png" /> Halte Basra<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_30.png" /> Halte PMI<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/AreaJangkauanHalte_1_43.png" /> Halte Yos Sudarso<br />' });
var format_AreaJangkauanHaltearea_jangkauan_halte_2 = new ol.format.GeoJSON();
var features_AreaJangkauanHaltearea_jangkauan_halte_2 = format_AreaJangkauanHaltearea_jangkauan_halte_2.readFeatures(json_AreaJangkauanHaltearea_jangkauan_halte_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaJangkauanHaltearea_jangkauan_halte_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaJangkauanHaltearea_jangkauan_halte_2.addFeatures(features_AreaJangkauanHaltearea_jangkauan_halte_2);
var lyr_AreaJangkauanHaltearea_jangkauan_halte_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaJangkauanHaltearea_jangkauan_halte_2, 
                style: style_AreaJangkauanHaltearea_jangkauan_halte_2,
                popuplayertitle: 'Area Jangkauan Halte — area_jangkauan_halte',
                interactive: true,
                title: '<img src="styles/legend/AreaJangkauanHaltearea_jangkauan_halte_2.png" /> Area Jangkauan Halte — area_jangkauan_halte'
            });
var format_JangkauanLayanan_3 = new ol.format.GeoJSON();
var features_JangkauanLayanan_3 = format_JangkauanLayanan_3.readFeatures(json_JangkauanLayanan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JangkauanLayanan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanLayanan_3.addFeatures(features_JangkauanLayanan_3);
var lyr_JangkauanLayanan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JangkauanLayanan_3, 
                style: style_JangkauanLayanan_3,
                popuplayertitle: 'Jangkauan Layanan',
                interactive: true,
                title: '<img src="styles/legend/JangkauanLayanan_3.png" /> Jangkauan Layanan'
            });
var format_TitikHalte_4 = new ol.format.GeoJSON();
var features_TitikHalte_4 = format_TitikHalte_4.readFeatures(json_TitikHalte_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikHalte_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikHalte_4.addFeatures(features_TitikHalte_4);
var lyr_TitikHalte_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikHalte_4, 
                style: style_TitikHalte_4,
                popuplayertitle: 'Titik Halte',
                interactive: true,
                title: '<img src="styles/legend/TitikHalte_4.png" /> Titik Halte'
            });

lyr_Positron_0.setVisible(true);lyr_AreaJangkauanHalte_1.setVisible(true);lyr_AreaJangkauanHaltearea_jangkauan_halte_2.setVisible(true);lyr_JangkauanLayanan_3.setVisible(true);lyr_TitikHalte_4.setVisible(true);
var layersList = [lyr_Positron_0,lyr_AreaJangkauanHalte_1,lyr_AreaJangkauanHaltearea_jangkauan_halte_2,lyr_JangkauanLayanan_3,lyr_TitikHalte_4];
lyr_AreaJangkauanHalte_1.set('fieldAliases', {'ID': 'ID', 'Halte': 'Halte', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas m2': 'Luas m2', 'Rute': 'Rute', 'Destinasi': 'Destinasi', 'Foto': 'Foto', });
lyr_AreaJangkauanHaltearea_jangkauan_halte_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Halte': 'Halte', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas m2': 'Luas m2', 'Rute': 'Rute', 'Destinasi': 'Destinasi', 'Foto': 'Foto', });
lyr_JangkauanLayanan_3.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_TitikHalte_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_AreaJangkauanHalte_1.set('fieldImages', {'ID': 'TextEdit', 'Halte': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Luas m2': 'TextEdit', 'Rute': 'TextEdit', 'Destinasi': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_AreaJangkauanHaltearea_jangkauan_halte_2.set('fieldImages', {'fid': '', 'ID': '', 'Halte': '', 'Kecamatan': '', 'Kelurahan': '', 'Luas m2': '', 'Rute': '', 'Destinasi': '', 'Foto': '', });
lyr_JangkauanLayanan_3.set('fieldImages', {'fid': '', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_TitikHalte_4.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_AreaJangkauanHalte_1.set('fieldLabels', {'ID': 'no label', 'Halte': 'inline label - visible with data', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'Luas m2': 'no label', 'Rute': 'inline label - visible with data', 'Destinasi': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_AreaJangkauanHaltearea_jangkauan_halte_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Halte': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'Luas m2': 'no label', 'Rute': 'no label', 'Destinasi': 'no label', 'Foto': 'no label', });
lyr_JangkauanLayanan_3.set('fieldLabels', {'fid': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_TitikHalte_4.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', });
lyr_TitikHalte_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});