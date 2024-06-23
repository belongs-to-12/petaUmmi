var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIGrayDark_1 = new ol.layer.Tile({
            'title': 'ESRI Gray (Dark)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRINatGeo_2 = new ol.layer.Tile({
            'title': 'ESRI NatGeo',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRISatellite_3 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BatasAdministrasiKabupaten_4 = new ol.format.GeoJSON();
var features_BatasAdministrasiKabupaten_4 = format_BatasAdministrasiKabupaten_4.readFeatures(json_BatasAdministrasiKabupaten_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKabupaten_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKabupaten_4.addFeatures(features_BatasAdministrasiKabupaten_4);
var lyr_BatasAdministrasiKabupaten_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKabupaten_4, 
                style: style_BatasAdministrasiKabupaten_4,
                popuplayertitle: "Batas Administrasi Kabupaten",
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasiKabupaten_4.png" /> Batas Administrasi Kabupaten'
            });
var format_BatasAdministrasiKecamatan_5 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_5 = format_BatasAdministrasiKecamatan_5.readFeatures(json_BatasAdministrasiKecamatan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_5.addFeatures(features_BatasAdministrasiKecamatan_5);
var lyr_BatasAdministrasiKecamatan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKecamatan_5, 
                style: style_BatasAdministrasiKecamatan_5,
                popuplayertitle: "Batas Administrasi Kecamatan",
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKecamatan_5.png" /> Batas Administrasi Kecamatan'
            });
var format_ZonaRawanGerakanTanah_6 = new ol.format.GeoJSON();
var features_ZonaRawanGerakanTanah_6 = format_ZonaRawanGerakanTanah_6.readFeatures(json_ZonaRawanGerakanTanah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaRawanGerakanTanah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaRawanGerakanTanah_6.addFeatures(features_ZonaRawanGerakanTanah_6);
var lyr_ZonaRawanGerakanTanah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaRawanGerakanTanah_6, 
                style: style_ZonaRawanGerakanTanah_6,
                popuplayertitle: "Zona Rawan Gerakan Tanah",
                interactive: false,
                title: '<img src="styles/legend/ZonaRawanGerakanTanah_6.png" /> Zona Rawan Gerakan Tanah'
            });
var format_ZonaBahayaGempaBumiMenengah_7 = new ol.format.GeoJSON();
var features_ZonaBahayaGempaBumiMenengah_7 = format_ZonaBahayaGempaBumiMenengah_7.readFeatures(json_ZonaBahayaGempaBumiMenengah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaBahayaGempaBumiMenengah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaBahayaGempaBumiMenengah_7.addFeatures(features_ZonaBahayaGempaBumiMenengah_7);
var lyr_ZonaBahayaGempaBumiMenengah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaBahayaGempaBumiMenengah_7, 
                style: style_ZonaBahayaGempaBumiMenengah_7,
                popuplayertitle: "Zona Bahaya Gempa Bumi Menengah",
                interactive: false,
                title: '<img src="styles/legend/ZonaBahayaGempaBumiMenengah_7.png" /> Zona Bahaya Gempa Bumi Menengah'
            });
var format_ZonaRawanGunungApi_8 = new ol.format.GeoJSON();
var features_ZonaRawanGunungApi_8 = format_ZonaRawanGunungApi_8.readFeatures(json_ZonaRawanGunungApi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaRawanGunungApi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaRawanGunungApi_8.addFeatures(features_ZonaRawanGunungApi_8);
var lyr_ZonaRawanGunungApi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaRawanGunungApi_8, 
                style: style_ZonaRawanGunungApi_8,
                popuplayertitle: "Zona Rawan Gunung Api",
                interactive: false,
                title: '<img src="styles/legend/ZonaRawanGunungApi_8.png" /> Zona Rawan Gunung Api'
            });
var format_PetaGeologi_9 = new ol.format.GeoJSON();
var features_PetaGeologi_9 = format_PetaGeologi_9.readFeatures(json_PetaGeologi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaGeologi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaGeologi_9.addFeatures(features_PetaGeologi_9);
var lyr_PetaGeologi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaGeologi_9, 
                style: style_PetaGeologi_9,
                popuplayertitle: "Peta Geologi",
                interactive: true,
    title: 'Peta Geologi<br />\
    <img src="styles/legend/PetaGeologi_9_0.png" /> a1<br />\
    <img src="styles/legend/PetaGeologi_9_1.png" /> d1<br />\
    <img src="styles/legend/PetaGeologi_9_2.png" /> da<br />\
    <img src="styles/legend/PetaGeologi_9_3.png" /> na<br />\
    <img src="styles/legend/PetaGeologi_9_4.png" /> Qa<br />\
    <img src="styles/legend/PetaGeologi_9_5.png" /> Qak<br />\
    <img src="styles/legend/PetaGeologi_9_6.png" /> Qb1<br />\
    <img src="styles/legend/PetaGeologi_9_7.png" /> Qcc<br />\
    <img src="styles/legend/PetaGeologi_9_8.png" /> Qco<br />\
    <img src="styles/legend/PetaGeologi_9_9.png" /> Qg<br />\
    <img src="styles/legend/PetaGeologi_9_10.png" /> Qgi<br />\
    <img src="styles/legend/PetaGeologi_9_11.png" /> Qke<br />\
    <img src="styles/legend/PetaGeologi_9_12.png" /> Qls2<br />\
    <img src="styles/legend/PetaGeologi_9_13.png" /> Qmi<br />\
    <img src="styles/legend/PetaGeologi_9_14.png" /> Qmo<br />\
    <img src="styles/legend/PetaGeologi_9_15.png" /> Qpkg<br />\
    <img src="styles/legend/PetaGeologi_9_16.png" /> Qpl1<br />\
    <img src="styles/legend/PetaGeologi_9_17.png" /> Qsm<br />\
    <img src="styles/legend/PetaGeologi_9_18.png" /> Qsmo<br />\
    <img src="styles/legend/PetaGeologi_9_19.png" /> QTe<br />\
    <img src="styles/legend/PetaGeologi_9_20.png" /> Qvu3<br />\
    <img src="styles/legend/PetaGeologi_9_21.png" /> Tmj<br />\
    <img src="styles/legend/PetaGeologi_9_22.png" /> Tomk<br />\
    <img src="styles/legend/PetaGeologi_9_23.png" /> <br />'
        });
var format_JenisTanah_10 = new ol.format.GeoJSON();
var features_JenisTanah_10 = format_JenisTanah_10.readFeatures(json_JenisTanah_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JenisTanah_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JenisTanah_10.addFeatures(features_JenisTanah_10);
var lyr_JenisTanah_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JenisTanah_10, 
                style: style_JenisTanah_10,
                popuplayertitle: "Jenis Tanah",
                interactive: true,
    title: 'Jenis Tanah<br />\
    <img src="styles/legend/JenisTanah_10_0.png" /> Rendah<br />\
    <img src="styles/legend/JenisTanah_10_1.png" /> Sangat rendah<br />\
    <img src="styles/legend/JenisTanah_10_2.png" /> Tinggi<br />\
    <img src="styles/legend/JenisTanah_10_3.png" /> <br />'
        });
var format_SaluranIrigasi_11 = new ol.format.GeoJSON();
var features_SaluranIrigasi_11 = format_SaluranIrigasi_11.readFeatures(json_SaluranIrigasi_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaluranIrigasi_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaluranIrigasi_11.addFeatures(features_SaluranIrigasi_11);
var lyr_SaluranIrigasi_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaluranIrigasi_11, 
                style: style_SaluranIrigasi_11,
                popuplayertitle: "Saluran Irigasi",
                interactive: false,
                title: '<img src="styles/legend/SaluranIrigasi_11.png" /> Saluran Irigasi'
            });
var format_Sungai_12 = new ol.format.GeoJSON();
var features_Sungai_12 = format_Sungai_12.readFeatures(json_Sungai_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_12.addFeatures(features_Sungai_12);
var lyr_Sungai_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_12, 
                style: style_Sungai_12,
                popuplayertitle: "Sungai",
                interactive: false,
                title: '<img src="styles/legend/Sungai_12.png" /> Sungai'
            });
var format_Danau_13 = new ol.format.GeoJSON();
var features_Danau_13 = format_Danau_13.readFeatures(json_Danau_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Danau_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Danau_13.addFeatures(features_Danau_13);
var lyr_Danau_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Danau_13, 
                style: style_Danau_13,
                popuplayertitle: "Danau",
                interactive: false,
                title: '<img src="styles/legend/Danau_13.png" /> Danau'
            });
var format_CurahHujan_14 = new ol.format.GeoJSON();
var features_CurahHujan_14 = format_CurahHujan_14.readFeatures(json_CurahHujan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurahHujan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujan_14.addFeatures(features_CurahHujan_14);
var lyr_CurahHujan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujan_14, 
                style: style_CurahHujan_14,
                popuplayertitle: "Curah Hujan",
                interactive: false,
    title: 'Curah Hujan<br />\
    <img src="styles/legend/CurahHujan_14_0.png" /> 106 - 163 mm/tahun<br />\
    <img src="styles/legend/CurahHujan_14_1.png" /> 164 - 219 mm/tahun<br />\
    <img src="styles/legend/CurahHujan_14_2.png" /> 220 - 276 mm/tahun<br />\
    <img src="styles/legend/CurahHujan_14_3.png" /> 276 - 332 mm/tahun<br />\
    <img src="styles/legend/CurahHujan_14_4.png" /> 332 - 389 mm/tahun<br />\
    <img src="styles/legend/CurahHujan_14_5.png" /> 389 - 445 mm/tahun<br />\
    <img src="styles/legend/CurahHujan_14_6.png" /> 445 - 502 mm/tahun<br />\
    <img src="styles/legend/CurahHujan_14_7.png" /> 502 - 558 mm/tahun<br />\
    <img src="styles/legend/CurahHujan_14_8.png" /> > 558 mm/tahun<br />\
    <img src="styles/legend/CurahHujan_14_9.png" /> <br />'
        });
var format_LerengKabMagelang_15 = new ol.format.GeoJSON();
var features_LerengKabMagelang_15 = format_LerengKabMagelang_15.readFeatures(json_LerengKabMagelang_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LerengKabMagelang_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LerengKabMagelang_15.addFeatures(features_LerengKabMagelang_15);
var lyr_LerengKabMagelang_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LerengKabMagelang_15, 
                style: style_LerengKabMagelang_15,
                popuplayertitle: "Lereng Kab Magelang",
                interactive: true,
                title: '<img src="styles/legend/LerengKabMagelang_15.png" /> Lereng Kab Magelang'
            });
var format_KawasanLindungKabupatenMagelang_16 = new ol.format.GeoJSON();
var features_KawasanLindungKabupatenMagelang_16 = format_KawasanLindungKabupatenMagelang_16.readFeatures(json_KawasanLindungKabupatenMagelang_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanLindungKabupatenMagelang_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanLindungKabupatenMagelang_16.addFeatures(features_KawasanLindungKabupatenMagelang_16);
var lyr_KawasanLindungKabupatenMagelang_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanLindungKabupatenMagelang_16, 
                style: style_KawasanLindungKabupatenMagelang_16,
                popuplayertitle: "Kawasan Lindung Kabupaten Magelang",
                interactive: true,
    title: 'Kawasan Lindung Kabupaten Magelang<br />\
    <img src="styles/legend/KawasanLindungKabupatenMagelang_16_0.png" /> Hutan Lindung<br />\
    <img src="styles/legend/KawasanLindungKabupatenMagelang_16_1.png" /> Kawasan Lindung Fisiografis<br />\
    <img src="styles/legend/KawasanLindungKabupatenMagelang_16_2.png" /> Resapan Air<br />\
    <img src="styles/legend/KawasanLindungKabupatenMagelang_16_3.png" /> Taman Nasional<br />\
    <img src="styles/legend/KawasanLindungKabupatenMagelang_16_4.png" /> <br />'
        });
var format_PelabuhanUdara_17 = new ol.format.GeoJSON();
var features_PelabuhanUdara_17 = format_PelabuhanUdara_17.readFeatures(json_PelabuhanUdara_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PelabuhanUdara_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PelabuhanUdara_17.addFeatures(features_PelabuhanUdara_17);
var lyr_PelabuhanUdara_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PelabuhanUdara_17, 
                style: style_PelabuhanUdara_17,
                popuplayertitle: "Pelabuhan Udara",
                interactive: false,
                title: '<img src="styles/legend/PelabuhanUdara_17.png" /> Pelabuhan Udara'
            });
var format_Permukiman_18 = new ol.format.GeoJSON();
var features_Permukiman_18 = format_Permukiman_18.readFeatures(json_Permukiman_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permukiman_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permukiman_18.addFeatures(features_Permukiman_18);
var lyr_Permukiman_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Permukiman_18, 
                style: style_Permukiman_18,
                popuplayertitle: "Permukiman",
                interactive: false,
                title: '<img src="styles/legend/Permukiman_18.png" /> Permukiman'
            });
var format_JaringanJalan_19 = new ol.format.GeoJSON();
var features_JaringanJalan_19 = format_JaringanJalan_19.readFeatures(json_JaringanJalan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_19.addFeatures(features_JaringanJalan_19);
var lyr_JaringanJalan_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_19, 
                style: style_JaringanJalan_19,
                popuplayertitle: "Jaringan Jalan",
                interactive: false,
    title: 'Jaringan Jalan<br />\
    <img src="styles/legend/JaringanJalan_19_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JaringanJalan_19_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JaringanJalan_19_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/JaringanJalan_19_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JaringanJalan_19_4.png" /> Jalan Setapak<br />\
    <img src="styles/legend/JaringanJalan_19_5.png" /> <br />'
        });
var format_TempatPembuanganAkhirTPA_20 = new ol.format.GeoJSON();
var features_TempatPembuanganAkhirTPA_20 = format_TempatPembuanganAkhirTPA_20.readFeatures(json_TempatPembuanganAkhirTPA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatPembuanganAkhirTPA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatPembuanganAkhirTPA_20.addFeatures(features_TempatPembuanganAkhirTPA_20);
var lyr_TempatPembuanganAkhirTPA_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatPembuanganAkhirTPA_20, 
                style: style_TempatPembuanganAkhirTPA_20,
                popuplayertitle: "Tempat Pembuangan Akhir (TPA)",
                interactive: true,
                title: '<img src="styles/legend/TempatPembuanganAkhirTPA_20.png" /> Tempat Pembuangan Akhir (TPA)'
            });
var format_TempatPembuanganSementara3RUmum_21 = new ol.format.GeoJSON();
var features_TempatPembuanganSementara3RUmum_21 = format_TempatPembuanganSementara3RUmum_21.readFeatures(json_TempatPembuanganSementara3RUmum_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatPembuanganSementara3RUmum_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatPembuanganSementara3RUmum_21.addFeatures(features_TempatPembuanganSementara3RUmum_21);
var lyr_TempatPembuanganSementara3RUmum_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatPembuanganSementara3RUmum_21, 
                style: style_TempatPembuanganSementara3RUmum_21,
                popuplayertitle: "Tempat Pembuangan Sementara 3R / Umum",
                interactive: true,
                title: '<img src="styles/legend/TempatPembuanganSementara3RUmum_21.png" /> Tempat Pembuangan Sementara 3R / Umum'
            });
var format_LokasiPotensialPendirianTPABaru_22 = new ol.format.GeoJSON();
var features_LokasiPotensialPendirianTPABaru_22 = format_LokasiPotensialPendirianTPABaru_22.readFeatures(json_LokasiPotensialPendirianTPABaru_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiPotensialPendirianTPABaru_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiPotensialPendirianTPABaru_22.addFeatures(features_LokasiPotensialPendirianTPABaru_22);
var lyr_LokasiPotensialPendirianTPABaru_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiPotensialPendirianTPABaru_22, 
                style: style_LokasiPotensialPendirianTPABaru_22,
                popuplayertitle: "Lokasi Potensial Pendirian TPA Baru",
                interactive: false,
                title: '<img src="styles/legend/LokasiPotensialPendirianTPABaru_22.png" /> Lokasi Potensial Pendirian TPA Baru'
            });
var format_LokasiPotensialPendirianTPABaruPoint_23 = new ol.format.GeoJSON();
var features_LokasiPotensialPendirianTPABaruPoint_23 = format_LokasiPotensialPendirianTPABaruPoint_23.readFeatures(json_LokasiPotensialPendirianTPABaruPoint_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiPotensialPendirianTPABaruPoint_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiPotensialPendirianTPABaruPoint_23.addFeatures(features_LokasiPotensialPendirianTPABaruPoint_23);
var lyr_LokasiPotensialPendirianTPABaruPoint_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiPotensialPendirianTPABaruPoint_23, 
                style: style_LokasiPotensialPendirianTPABaruPoint_23,
                popuplayertitle: "Lokasi Potensial Pendirian TPA Baru (Point)",
                interactive: true,
                title: '<img src="styles/legend/LokasiPotensialPendirianTPABaruPoint_23.png" /> Lokasi Potensial Pendirian TPA Baru (Point)'
            });
var group_TempatPenampunganSampah = new ol.layer.Group({
                                layers: [lyr_TempatPembuanganAkhirTPA_20,lyr_TempatPembuanganSementara3RUmum_21,lyr_LokasiPotensialPendirianTPABaru_22,lyr_LokasiPotensialPendirianTPABaruPoint_23,],
                                fold: "open",
                                title: "Tempat Penampungan Sampah"});
var group_KemiringanLereng = new ol.layer.Group({
                                layers: [lyr_LerengKabMagelang_15,],
                                fold: "open",
                                title: "Kemiringan Lereng"});
var group_KondisiHidrologi = new ol.layer.Group({
                                layers: [lyr_SaluranIrigasi_11,lyr_Sungai_12,lyr_Danau_13,lyr_CurahHujan_14,],
                                fold: "open",
                                title: "Kondisi Hidrologi"});
var group_KondisiGeologi = new ol.layer.Group({
                                layers: [lyr_ZonaRawanGerakanTanah_6,lyr_ZonaBahayaGempaBumiMenengah_7,lyr_ZonaRawanGunungApi_8,lyr_PetaGeologi_9,lyr_JenisTanah_10,],
                                fold: "open",
                                title: "Kondisi Geologi"});
var group_BatasAdministrasi = new ol.layer.Group({
                                layers: [lyr_BatasAdministrasiKabupaten_4,lyr_BatasAdministrasiKecamatan_5,],
                                fold: "open",
                                title: "Batas Administrasi"});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_ESRIGrayDark_1,lyr_ESRINatGeo_2,lyr_ESRISatellite_3,],
                                fold: "open",
                                title: "Base Map"});

lyr_OpenStreetMap_0.setVisible(false);lyr_ESRIGrayDark_1.setVisible(false);lyr_ESRINatGeo_2.setVisible(false);lyr_ESRISatellite_3.setVisible(true);lyr_BatasAdministrasiKabupaten_4.setVisible(true);lyr_BatasAdministrasiKecamatan_5.setVisible(true);lyr_ZonaRawanGerakanTanah_6.setVisible(false);lyr_ZonaBahayaGempaBumiMenengah_7.setVisible(false);lyr_ZonaRawanGunungApi_8.setVisible(false);lyr_PetaGeologi_9.setVisible(false);lyr_JenisTanah_10.setVisible(false);lyr_SaluranIrigasi_11.setVisible(false);lyr_Sungai_12.setVisible(false);lyr_Danau_13.setVisible(false);lyr_CurahHujan_14.setVisible(false);lyr_LerengKabMagelang_15.setVisible(false);lyr_KawasanLindungKabupatenMagelang_16.setVisible(false);lyr_PelabuhanUdara_17.setVisible(false);lyr_Permukiman_18.setVisible(false);lyr_JaringanJalan_19.setVisible(true);lyr_TempatPembuanganAkhirTPA_20.setVisible(true);lyr_TempatPembuanganSementara3RUmum_21.setVisible(true);lyr_LokasiPotensialPendirianTPABaru_22.setVisible(true);lyr_LokasiPotensialPendirianTPABaruPoint_23.setVisible(true);
var layersList = [group_BaseMap,group_BatasAdministrasi,group_KondisiGeologi,group_KondisiHidrologi,group_KemiringanLereng,lyr_KawasanLindungKabupatenMagelang_16,lyr_PelabuhanUdara_17,lyr_Permukiman_18,lyr_JaringanJalan_19,group_TempatPenampunganSampah];
lyr_BatasAdministrasiKabupaten_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDCPUM': 'KDCPUM', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_BatasAdministrasiKecamatan_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDCPUM': 'KDCPUM', 'KDEPUM': 'KDEPUM', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', });
lyr_ZonaRawanGerakanTanah_6.set('fieldAliases', {'Zona': 'Zona', 'Unsur': 'Unsur', 'Keterangan': 'Keterangan', 'Tahun': 'Tahun', 'Wilayah': 'Wilayah', 'LCODE': 'LCODE', });
lyr_ZonaBahayaGempaBumiMenengah_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'KRBID': 'KRBID', 'KELAS': 'KELAS', 'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'FCODE': 'FCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_ZonaRawanGunungApi_8.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_PetaGeologi_9.set('fieldAliases', {'SYMBOLS': 'SYMBOLS', 'NM_LEMBAR': 'NM_LEMBAR', 'NO_LEMBAR': 'NO_LEMBAR', 'PROJECT': 'PROJECT', 'NAME': 'NAME', 'FORMATION': 'FORMATION', 'CLASS_LITH': 'CLASS_LITH', 'T_CLASS_EN': 'T_CLASS_EN', 'B_CLASS_EN': 'B_CLASS_EN', 'DESCRIP1': 'DESCRIP1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JenisTanah_10.set('fieldAliases', {'fid': 'fid', 'TANAH': 'TANAH', 'SKORTAN': 'SKORTAN', 'Sumber': 'Sumber', 'Keterangan': 'Keterangan', 'permeabili': 'permeabili', });
lyr_SaluranIrigasi_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Sungai_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Danau_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CurahHujan_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LerengKabMagelang_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kelas_Lere': 'Kelas_Lere', 'Kemiringan': 'Kemiringan', 'Source': 'Source', 'Penerbit': 'Penerbit', });
lyr_KawasanLindungKabupatenMagelang_16.set('fieldAliases', {'id': 'id', 'kawasan_li': 'kawasan_li', });
lyr_PelabuhanUdara_17.set('fieldAliases', {'id': 'id', 'pelabuhan_': 'pelabuhan_', 'ttk_lokasi': 'ttk_lokasi', 'nm_lokasi': 'nm_lokasi', });
lyr_Permukiman_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JaringanJalan_19.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TempatPembuanganAkhirTPA_20.set('fieldAliases', {'Nama Fasilitas': 'Nama Fasilitas', 'Jenis': 'Jenis', 'Status': 'Status', 'Sampahmasuk (ton/thn)': 'Sampahmasuk (ton/thn)', 'Alamat': 'Alamat', 'Pengelola': 'Pengelola', 'Luas (hektar)': 'Luas (hektar)', 'Sistem Operasional': 'Sistem Operasional', 'Tgl. Akhir Operasi': 'Tgl. Akhir Operasi', 'Luas Landfill Aktif (m2)': 'Luas Landfill Aktif (m2)', 'x': 'x', 'y': 'y', });
lyr_TempatPembuanganSementara3RUmum_21.set('fieldAliases', {'Nama Fasil': 'Nama Fasil', 'Jenis': 'Jenis', 'Status': 'Status', 'Sampahmasu': 'Sampahmasu', 'Sampahterk': 'Sampahterk', 'Alamat': 'Alamat', 'x': 'x', 'y': 'y', });
lyr_LokasiPotensialPendirianTPABaru_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'fid': 'fid', 'TANAH': 'TANAH', 'SKORTAN': 'SKORTAN', 'Sumber': 'Sumber', 'Keterangan': 'Keterangan', 'permeabili': 'permeabili', 'OBJECTID_2': 'OBJECTID_2', 'gridcode_2': 'gridcode_2', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Kelas_Lere': 'Kelas_Lere', 'Kemiringan': 'Kemiringan', 'Source': 'Source', 'Penerbit': 'Penerbit', 'volume': 'volume', 'vol_ha': 'vol_ha', 'volumr': 'volumr', 'vol_haa': 'vol_haa', });
lyr_LokasiPotensialPendirianTPABaruPoint_23.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BatasAdministrasiKabupaten_4.set('fieldImages', {'OBJECTID': '', 'METADATA': '', 'SRS_ID': '', 'KDCPUM': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'UUPP': '', 'LUAS': '', });
lyr_BatasAdministrasiKecamatan_5.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'METADATA': '', 'SRS_ID': '', 'KDCPUM': '', 'KDEPUM': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'LUAS': '', });
lyr_ZonaRawanGerakanTanah_6.set('fieldImages', {'Zona': '', 'Unsur': '', 'Keterangan': '', 'Tahun': '', 'Wilayah': '', 'LCODE': '', });
lyr_ZonaBahayaGempaBumiMenengah_7.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'KRBID': '', 'KELAS': '', 'NAMOBJ': '', 'LCODE': '', 'FCODE': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_ZonaRawanGunungApi_8.set('fieldImages', {'fid': '', 'DN': '', });
lyr_PetaGeologi_9.set('fieldImages', {'SYMBOLS': '', 'NM_LEMBAR': '', 'NO_LEMBAR': '', 'PROJECT': '', 'NAME': '', 'FORMATION': '', 'CLASS_LITH': '', 'T_CLASS_EN': '', 'B_CLASS_EN': '', 'DESCRIP1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_JenisTanah_10.set('fieldImages', {'fid': '', 'TANAH': '', 'SKORTAN': '', 'Sumber': '', 'Keterangan': '', 'permeabili': '', });
lyr_SaluranIrigasi_11.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_Sungai_12.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Danau_13.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_CurahHujan_14.set('fieldImages', {'OBJECTID': '', 'Id': '', 'gridcode': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LerengKabMagelang_15.set('fieldImages', {'OBJECTID': '', 'gridcode': '', 'Shape_Leng': '', 'Shape_Area': '', 'Kelas_Lere': '', 'Kemiringan': '', 'Source': '', 'Penerbit': '', });
lyr_KawasanLindungKabupatenMagelang_16.set('fieldImages', {'id': '', 'kawasan_li': '', });
lyr_PelabuhanUdara_17.set('fieldImages', {'id': '', 'pelabuhan_': '', 'ttk_lokasi': '', 'nm_lokasi': '', });
lyr_Permukiman_18.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_JaringanJalan_19.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_TempatPembuanganAkhirTPA_20.set('fieldImages', {'Nama Fasilitas': '', 'Jenis': '', 'Status': '', 'Sampahmasuk (ton/thn)': '', 'Alamat': '', 'Pengelola': '', 'Luas (hektar)': '', 'Sistem Operasional': '', 'Tgl. Akhir Operasi': '', 'Luas Landfill Aktif (m2)': '', 'x': '', 'y': '', });
lyr_TempatPembuanganSementara3RUmum_21.set('fieldImages', {'Nama Fasil': '', 'Jenis': '', 'Status': '', 'Sampahmasu': '', 'Sampahterk': '', 'Alamat': '', 'x': '', 'y': '', });
lyr_LokasiPotensialPendirianTPABaru_22.set('fieldImages', {'OBJECTID': '', 'Id': '', 'gridcode': '', 'Shape_Leng': '', 'Shape_Area': '', 'fid': '', 'TANAH': '', 'SKORTAN': '', 'Sumber': '', 'Keterangan': '', 'permeabili': '', 'OBJECTID_2': '', 'gridcode_2': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', 'Kelas_Lere': '', 'Kemiringan': '', 'Source': '', 'Penerbit': '', 'volume': '', 'vol_ha': '', 'volumr': '', 'vol_haa': '', });
lyr_LokasiPotensialPendirianTPABaruPoint_23.set('fieldImages', {'id': '', 'Nama': '', });
lyr_BatasAdministrasiKabupaten_4.set('fieldLabels', {'OBJECTID': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDCPUM': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_BatasAdministrasiKecamatan_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDCPUM': 'hidden field', 'KDEPUM': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - always visible', 'WADMKD': 'hidden field', 'WADMKK': 'inline label - always visible', 'WADMPR': 'hidden field', 'LUAS': 'hidden field', });
lyr_ZonaRawanGerakanTanah_6.set('fieldLabels', {'Zona': 'no label', 'Unsur': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Tahun': 'no label', 'Wilayah': 'no label', 'LCODE': 'no label', });
lyr_ZonaBahayaGempaBumiMenengah_7.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'KRBID': 'no label', 'KELAS': 'inline label - always visible', 'NAMOBJ': 'no label', 'LCODE': 'no label', 'FCODE': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_ZonaRawanGunungApi_8.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_PetaGeologi_9.set('fieldLabels', {'SYMBOLS': 'inline label - always visible', 'NM_LEMBAR': 'hidden field', 'NO_LEMBAR': 'hidden field', 'PROJECT': 'inline label - always visible', 'NAME': 'inline label - always visible', 'FORMATION': 'inline label - always visible', 'CLASS_LITH': 'hidden field', 'T_CLASS_EN': 'hidden field', 'B_CLASS_EN': 'hidden field', 'DESCRIP1': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_JenisTanah_10.set('fieldLabels', {'fid': 'hidden field', 'TANAH': 'inline label - always visible', 'SKORTAN': 'hidden field', 'Sumber': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'permeabili': 'inline label - always visible', });
lyr_SaluranIrigasi_11.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Sungai_12.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Danau_13.set('fieldLabels', {'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_CurahHujan_14.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'no label', });
lyr_LerengKabMagelang_15.set('fieldLabels', {'OBJECTID': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Kelas_Lere': 'hidden field', 'Kemiringan': 'inline label - always visible', 'Source': 'inline label - always visible', 'Penerbit': 'hidden field', });
lyr_KawasanLindungKabupatenMagelang_16.set('fieldLabels', {'id': 'hidden field', 'kawasan_li': 'inline label - always visible', });
lyr_PelabuhanUdara_17.set('fieldLabels', {'id': 'no label', 'pelabuhan_': 'no label', 'ttk_lokasi': 'no label', 'nm_lokasi': 'no label', });
lyr_Permukiman_18.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'inline label - always visible', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JaringanJalan_19.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_TempatPembuanganAkhirTPA_20.set('fieldLabels', {'Nama Fasilitas': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Status': 'inline label - always visible', 'Sampahmasuk (ton/thn)': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Pengelola': 'inline label - always visible', 'Luas (hektar)': 'inline label - always visible', 'Sistem Operasional': 'inline label - always visible', 'Tgl. Akhir Operasi': 'inline label - always visible', 'Luas Landfill Aktif (m2)': 'inline label - always visible', 'x': 'hidden field', 'y': 'hidden field', });
lyr_TempatPembuanganSementara3RUmum_21.set('fieldLabels', {'Nama Fasil': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Status': 'inline label - always visible', 'Sampahmasu': 'inline label - always visible', 'Sampahterk': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'x': 'hidden field', 'y': 'hidden field', });
lyr_LokasiPotensialPendirianTPABaru_22.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'fid': 'no label', 'TANAH': 'no label', 'SKORTAN': 'no label', 'Sumber': 'no label', 'Keterangan': 'no label', 'permeabili': 'no label', 'OBJECTID_2': 'no label', 'gridcode_2': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', 'Kelas_Lere': 'no label', 'Kemiringan': 'no label', 'Source': 'no label', 'Penerbit': 'no label', 'volume': 'no label', 'vol_ha': 'no label', 'volumr': 'no label', 'vol_haa': 'no label', });
lyr_LokasiPotensialPendirianTPABaruPoint_23.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', });
lyr_LokasiPotensialPendirianTPABaruPoint_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});