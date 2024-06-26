var wms_layers = [];


        var lyr_ESRIGrayDark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (Dark)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRINatGeo_1 = new ol.layer.Tile({
            'title': 'ESRI NatGeo',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'Open Street Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMHumanitarianDataModel_3 = new ol.layer.Tile({
            'title': 'OSM Humanitarian Data Model',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });
var format_PendapatanperKapita_4 = new ol.format.GeoJSON();
var features_PendapatanperKapita_4 = format_PendapatanperKapita_4.readFeatures(json_PendapatanperKapita_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PendapatanperKapita_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PendapatanperKapita_4.addFeatures(features_PendapatanperKapita_4);
var lyr_PendapatanperKapita_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PendapatanperKapita_4, 
                style: style_PendapatanperKapita_4,
                popuplayertitle: "Pendapatan per Kapita",
                interactive: false,
    title: 'Pendapatan per Kapita<br />\
    <img src="styles/legend/PendapatanperKapita_4_0.png" /> 3185000 - 3313000<br />\
    <img src="styles/legend/PendapatanperKapita_4_1.png" /> 3313000 - 3391000<br />\
    <img src="styles/legend/PendapatanperKapita_4_2.png" /> 3391000 - 3486000<br />\
    <img src="styles/legend/PendapatanperKapita_4_3.png" /> 3486000 - 3600000<br />\
    <img src="styles/legend/PendapatanperKapita_4_4.png" /> 3600000 - 3649000<br />'
        });
var format_BatasAdministrasiKotaBandung_5 = new ol.format.GeoJSON();
var features_BatasAdministrasiKotaBandung_5 = format_BatasAdministrasiKotaBandung_5.readFeatures(json_BatasAdministrasiKotaBandung_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKotaBandung_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKotaBandung_5.addFeatures(features_BatasAdministrasiKotaBandung_5);
var lyr_BatasAdministrasiKotaBandung_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKotaBandung_5, 
                style: style_BatasAdministrasiKotaBandung_5,
                popuplayertitle: "Batas Administrasi Kota Bandung",
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKotaBandung_5.png" /> Batas Administrasi Kota Bandung'
            });
var format_PotensiPembelidalamPerspektifSosial_6 = new ol.format.GeoJSON();
var features_PotensiPembelidalamPerspektifSosial_6 = format_PotensiPembelidalamPerspektifSosial_6.readFeatures(json_PotensiPembelidalamPerspektifSosial_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiPembelidalamPerspektifSosial_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiPembelidalamPerspektifSosial_6.addFeatures(features_PotensiPembelidalamPerspektifSosial_6);
var lyr_PotensiPembelidalamPerspektifSosial_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotensiPembelidalamPerspektifSosial_6, 
                style: style_PotensiPembelidalamPerspektifSosial_6,
                popuplayertitle: "Potensi Pembeli dalam Perspektif Sosial",
                interactive: false,
                title: '<img src="styles/legend/PotensiPembelidalamPerspektifSosial_6.png" /> Potensi Pembeli dalam Perspektif Sosial'
            });
var format_AksesibilitasTerhadapPusatEkonomi_7 = new ol.format.GeoJSON();
var features_AksesibilitasTerhadapPusatEkonomi_7 = format_AksesibilitasTerhadapPusatEkonomi_7.readFeatures(json_AksesibilitasTerhadapPusatEkonomi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AksesibilitasTerhadapPusatEkonomi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksesibilitasTerhadapPusatEkonomi_7.addFeatures(features_AksesibilitasTerhadapPusatEkonomi_7);
var lyr_AksesibilitasTerhadapPusatEkonomi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AksesibilitasTerhadapPusatEkonomi_7, 
                style: style_AksesibilitasTerhadapPusatEkonomi_7,
                popuplayertitle: "Aksesibilitas Terhadap Pusat Ekonomi",
                interactive: false,
                title: '<img src="styles/legend/AksesibilitasTerhadapPusatEkonomi_7.png" /> Aksesibilitas Terhadap Pusat Ekonomi'
            });
var format_KawasanPesaingBerdasarkanPesaing_8 = new ol.format.GeoJSON();
var features_KawasanPesaingBerdasarkanPesaing_8 = format_KawasanPesaingBerdasarkanPesaing_8.readFeatures(json_KawasanPesaingBerdasarkanPesaing_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanPesaingBerdasarkanPesaing_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanPesaingBerdasarkanPesaing_8.addFeatures(features_KawasanPesaingBerdasarkanPesaing_8);
var lyr_KawasanPesaingBerdasarkanPesaing_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanPesaingBerdasarkanPesaing_8, 
                style: style_KawasanPesaingBerdasarkanPesaing_8,
                popuplayertitle: "Kawasan Pesaing Berdasarkan Pesaing",
                interactive: false,
                title: '<img src="styles/legend/KawasanPesaingBerdasarkanPesaing_8.png" /> Kawasan Pesaing Berdasarkan Pesaing'
            });
var format_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9 = new ol.format.GeoJSON();
var features_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9 = format_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9.readFeatures(json_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9.addFeatures(features_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9);
var lyr_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9, 
                style: style_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9,
                popuplayertitle: "Estimasi Lokasi yang Tepat dalam Ekspansi  Bento Kopi",
                interactive: false,
                title: '<img src="styles/legend/EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9.png" /> Estimasi Lokasi yang Tepat dalam Ekspansi  Bento Kopi'
            });
var format_JaringanJalan_10 = new ol.format.GeoJSON();
var features_JaringanJalan_10 = format_JaringanJalan_10.readFeatures(json_JaringanJalan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_10.addFeatures(features_JaringanJalan_10);
var lyr_JaringanJalan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_10, 
                style: style_JaringanJalan_10,
                popuplayertitle: "Jaringan Jalan",
                interactive: false,
    title: 'Jaringan Jalan<br />\
    <img src="styles/legend/JaringanJalan_10_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JaringanJalan_10_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JaringanJalan_10_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/JaringanJalan_10_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JaringanJalan_10_4.png" /> Jalan Setapak<br />\
    <img src="styles/legend/JaringanJalan_10_5.png" /> Jalan Tol Dua Jalur Dengan Pemisah Fisik<br />\
    <img src="styles/legend/JaringanJalan_10_6.png" /> Jalan Tol Dua Jalur Tanpa Pemisah Fisik<br />\
    <img src="styles/legend/JaringanJalan_10_7.png" /> <br />'
        });
var format_PusatPerekonomian_11 = new ol.format.GeoJSON();
var features_PusatPerekonomian_11 = format_PusatPerekonomian_11.readFeatures(json_PusatPerekonomian_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PusatPerekonomian_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PusatPerekonomian_11.addFeatures(features_PusatPerekonomian_11);
var lyr_PusatPerekonomian_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PusatPerekonomian_11, 
                style: style_PusatPerekonomian_11,
                popuplayertitle: "Pusat Perekonomian",
                interactive: false,
                title: '<img src="styles/legend/PusatPerekonomian_11.png" /> Pusat Perekonomian'
            });
var format_KantorPemerintahan_12 = new ol.format.GeoJSON();
var features_KantorPemerintahan_12 = format_KantorPemerintahan_12.readFeatures(json_KantorPemerintahan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorPemerintahan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorPemerintahan_12.addFeatures(features_KantorPemerintahan_12);
var lyr_KantorPemerintahan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorPemerintahan_12, 
                style: style_KantorPemerintahan_12,
                popuplayertitle: "Kantor Pemerintahan",
                interactive: false,
                title: '<img src="styles/legend/KantorPemerintahan_12.png" /> Kantor Pemerintahan'
            });
var format_PesaingSejenis_13 = new ol.format.GeoJSON();
var features_PesaingSejenis_13 = format_PesaingSejenis_13.readFeatures(json_PesaingSejenis_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PesaingSejenis_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PesaingSejenis_13.addFeatures(features_PesaingSejenis_13);
var lyr_PesaingSejenis_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PesaingSejenis_13, 
                style: style_PesaingSejenis_13,
                popuplayertitle: "Pesaing Sejenis",
                interactive: false,
                title: '<img src="styles/legend/PesaingSejenis_13.png" /> Pesaing Sejenis'
            });
var format_Gedung_14 = new ol.format.GeoJSON();
var features_Gedung_14 = format_Gedung_14.readFeatures(json_Gedung_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gedung_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gedung_14.addFeatures(features_Gedung_14);
var lyr_Gedung_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gedung_14, 
                style: style_Gedung_14,
                popuplayertitle: "Gedung",
                interactive: false,
                title: '<img src="styles/legend/Gedung_14.png" /> Gedung'
            });
var format_PesaingTidakSejenis_15 = new ol.format.GeoJSON();
var features_PesaingTidakSejenis_15 = format_PesaingTidakSejenis_15.readFeatures(json_PesaingTidakSejenis_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PesaingTidakSejenis_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PesaingTidakSejenis_15.addFeatures(features_PesaingTidakSejenis_15);
var lyr_PesaingTidakSejenis_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PesaingTidakSejenis_15, 
                style: style_PesaingTidakSejenis_15,
                popuplayertitle: "Pesaing Tidak Sejenis",
                interactive: false,
                title: '<img src="styles/legend/PesaingTidakSejenis_15.png" /> Pesaing Tidak Sejenis'
            });
var format_SaranaPendidikan_16 = new ol.format.GeoJSON();
var features_SaranaPendidikan_16 = format_SaranaPendidikan_16.readFeatures(json_SaranaPendidikan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaranaPendidikan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaranaPendidikan_16.addFeatures(features_SaranaPendidikan_16);
var lyr_SaranaPendidikan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaranaPendidikan_16, 
                style: style_SaranaPendidikan_16,
                popuplayertitle: "Sarana Pendidikan",
                interactive: false,
                title: '<img src="styles/legend/SaranaPendidikan_16.png" /> Sarana Pendidikan'
            });
var group_Estimasi = new ol.layer.Group({
                                layers: [lyr_AksesibilitasTerhadapPusatEkonomi_7,lyr_KawasanPesaingBerdasarkanPesaing_8,],
                                fold: "open",
                                title: "Estimasi"});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_ESRIGrayDark_0,lyr_ESRINatGeo_1,lyr_OpenStreetMap_2,lyr_OSMHumanitarianDataModel_3,],
                                fold: "open",
                                title: "BaseMap"});

lyr_ESRIGrayDark_0.setVisible(false);lyr_ESRINatGeo_1.setVisible(false);lyr_OpenStreetMap_2.setVisible(false);lyr_OSMHumanitarianDataModel_3.setVisible(true);lyr_PendapatanperKapita_4.setVisible(false);lyr_BatasAdministrasiKotaBandung_5.setVisible(true);lyr_PotensiPembelidalamPerspektifSosial_6.setVisible(true);lyr_AksesibilitasTerhadapPusatEkonomi_7.setVisible(true);lyr_KawasanPesaingBerdasarkanPesaing_8.setVisible(true);lyr_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9.setVisible(true);lyr_JaringanJalan_10.setVisible(true);lyr_PusatPerekonomian_11.setVisible(false);lyr_KantorPemerintahan_12.setVisible(false);lyr_PesaingSejenis_13.setVisible(true);lyr_Gedung_14.setVisible(false);lyr_PesaingTidakSejenis_15.setVisible(true);lyr_SaranaPendidikan_16.setVisible(false);
var layersList = [group_BaseMap,lyr_PendapatanperKapita_4,lyr_BatasAdministrasiKotaBandung_5,lyr_PotensiPembelidalamPerspektifSosial_6,group_Estimasi,lyr_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9,lyr_JaringanJalan_10,lyr_PusatPerekonomian_11,lyr_KantorPemerintahan_12,lyr_PesaingSejenis_13,lyr_Gedung_14,lyr_PesaingTidakSejenis_15,lyr_SaranaPendidikan_16];
lyr_PendapatanperKapita_4.set('fieldAliases', {'KECAMATAN': 'Kecamatan', 'Kec_id': 'Kec_id', 'ratio': 'ratio', 'kependuduk': 'Total Penduduk', 'kependud_1': 'Jumlah Penduduk Laki Laki', 'kependud_2': 'Jumlah Penduduk Perempuan', 'kependud_3': 'Jumlah Penduduk Usia Produktif', 'kependud_4': 'Pendapatan per Kapita', });
lyr_BatasAdministrasiKotaBandung_5.set('fieldAliases', {'KECAMATAN': 'Kecamatan', 'Kec_id': 'Kec_id', 'ratio': 'ratio', 'kependuduk': 'Total Penduduk', 'kependud_1': 'Jumlah Penduduk Perempuan', 'kependud_2': 'Jumlah Peduduk Laki Laki', 'kependud_3': 'Jumlah Penduduk Usia Produktif', 'kependud_4': 'Pendapatan per Kapita', 'area': 'area', 'perimeter': 'perimeter', });
lyr_PotensiPembelidalamPerspektifSosial_6.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'Kec_id': 'Kec_id', 'ratio': 'ratio', 'kependuduk': 'kependuduk', 'kependud_1': 'kependud_1', 'kependud_2': 'kependud_2', 'kependud_3': 'kependud_3', 'kependud_4': 'kependud_4', });
lyr_AksesibilitasTerhadapPusatEkonomi_7.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LEN': 'SHAPE_LEN', 'length': 'length', });
lyr_KawasanPesaingBerdasarkanPesaing_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'zcoord': 'zcoord', 'NAMOBJ_2': 'NAMOBJ_2', 'FCODE_2': 'FCODE_2', 'REMARK_2': 'REMARK_2', 'SRS_ID_2': 'SRS_ID_2', 'LCODE_2': 'LCODE_2', 'METADATA_2': 'METADATA_2', });
lyr_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'Kec_id': 'Kec_id', 'ratio': 'ratio', 'kependuduk': 'kependuduk', 'kependud_1': 'kependud_1', 'kependud_2': 'kependud_2', 'kependud_3': 'kependud_3', 'kependud_4': 'kependud_4', });
lyr_JaringanJalan_10.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LEN': 'SHAPE_LEN', 'length': 'length', });
lyr_PusatPerekonomian_11.set('fieldAliases', {'NAMA': 'NAMA', 'Y': 'Y', 'X': 'X', });
lyr_KantorPemerintahan_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PesaingSejenis_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Gedung_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PesaingTidakSejenis_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'zcoord': 'zcoord', });
lyr_SaranaPendidikan_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_PendapatanperKapita_4.set('fieldImages', {'KECAMATAN': 'TextEdit', 'Kec_id': 'TextEdit', 'ratio': 'TextEdit', 'kependuduk': 'TextEdit', 'kependud_1': 'TextEdit', 'kependud_2': 'TextEdit', 'kependud_3': 'TextEdit', 'kependud_4': 'TextEdit', });
lyr_BatasAdministrasiKotaBandung_5.set('fieldImages', {'KECAMATAN': 'TextEdit', 'Kec_id': 'TextEdit', 'ratio': 'TextEdit', 'kependuduk': 'TextEdit', 'kependud_1': 'TextEdit', 'kependud_2': 'TextEdit', 'kependud_3': 'TextEdit', 'kependud_4': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_PotensiPembelidalamPerspektifSosial_6.set('fieldImages', {'KECAMATAN': '', 'Kec_id': '', 'ratio': '', 'kependuduk': '', 'kependud_1': '', 'kependud_2': '', 'kependud_3': '', 'kependud_4': '', });
lyr_AksesibilitasTerhadapPusatEkonomi_7.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_LENG': '', 'SHAPE_LEN': '', 'length': '', });
lyr_KawasanPesaingBerdasarkanPesaing_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'xcoord': '', 'ycoord': '', 'zcoord': '', 'NAMOBJ_2': '', 'FCODE_2': '', 'REMARK_2': '', 'SRS_ID_2': '', 'LCODE_2': '', 'METADATA_2': '', });
lyr_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9.set('fieldImages', {'KECAMATAN': '', 'Kec_id': '', 'ratio': '', 'kependuduk': '', 'kependud_1': '', 'kependud_2': '', 'kependud_3': '', 'kependud_4': '', });
lyr_JaringanJalan_10.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_LENG': '', 'SHAPE_LEN': '', 'length': '', });
lyr_PusatPerekonomian_11.set('fieldImages', {'NAMA': '', 'Y': '', 'X': '', });
lyr_KantorPemerintahan_12.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PesaingSejenis_13.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_Gedung_14.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PesaingTidakSejenis_15.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'xcoord': '', 'ycoord': '', 'zcoord': '', });
lyr_SaranaPendidikan_16.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_PendapatanperKapita_4.set('fieldLabels', {'KECAMATAN': 'inline label - always visible', 'Kec_id': 'hidden field', 'ratio': 'hidden field', 'kependuduk': 'inline label - always visible', 'kependud_1': 'inline label - always visible', 'kependud_2': 'inline label - always visible', 'kependud_3': 'inline label - always visible', 'kependud_4': 'inline label - always visible', });
lyr_BatasAdministrasiKotaBandung_5.set('fieldLabels', {'KECAMATAN': 'inline label - always visible', 'Kec_id': 'hidden field', 'ratio': 'hidden field', 'kependuduk': 'inline label - always visible', 'kependud_1': 'inline label - always visible', 'kependud_2': 'inline label - always visible', 'kependud_3': 'inline label - always visible', 'kependud_4': 'inline label - always visible', 'area': 'hidden field', 'perimeter': 'hidden field', });
lyr_PotensiPembelidalamPerspektifSosial_6.set('fieldLabels', {'KECAMATAN': 'no label', 'Kec_id': 'no label', 'ratio': 'no label', 'kependuduk': 'no label', 'kependud_1': 'no label', 'kependud_2': 'no label', 'kependud_3': 'no label', 'kependud_4': 'no label', });
lyr_AksesibilitasTerhadapPusatEkonomi_7.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LEN': 'no label', 'length': 'no label', });
lyr_KawasanPesaingBerdasarkanPesaing_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', 'zcoord': 'no label', 'NAMOBJ_2': 'no label', 'FCODE_2': 'no label', 'REMARK_2': 'no label', 'SRS_ID_2': 'no label', 'LCODE_2': 'no label', 'METADATA_2': 'no label', });
lyr_EstimasiLokasiyangTepatdalamEkspansiBentoKopi_9.set('fieldLabels', {'KECAMATAN': 'inline label - always visible', 'Kec_id': 'no label', 'ratio': 'no label', 'kependuduk': 'no label', 'kependud_1': 'no label', 'kependud_2': 'no label', 'kependud_3': 'no label', 'kependud_4': 'no label', });
lyr_JaringanJalan_10.set('fieldLabels', {'NAMRJL': 'hidden field', 'KONRJL': 'hidden field', 'MATRJL': 'hidden field', 'FGSRJL': 'hidden field', 'UTKRJL': 'hidden field', 'TOLRJL': 'hidden field', 'WLYRJL': 'hidden field', 'AUTRJL': 'hidden field', 'KLSRJL': 'hidden field', 'SPCRJL': 'hidden field', 'JPARJL': 'hidden field', 'ARHRJL': 'hidden field', 'STARJL': 'hidden field', 'KLLRJL': 'hidden field', 'MEDRJL': 'hidden field', 'LOCRJL': 'hidden field', 'JARRJL': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'inline label - always visible', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'SHAPE_LENG': 'hidden field', 'SHAPE_LEN': 'hidden field', 'length': 'hidden field', });
lyr_PusatPerekonomian_11.set('fieldLabels', {'NAMA': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_KantorPemerintahan_12.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PesaingSejenis_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Gedung_14.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PesaingTidakSejenis_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', 'zcoord': 'no label', });
lyr_SaranaPendidikan_16.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_SaranaPendidikan_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});