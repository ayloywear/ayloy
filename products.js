// Paste each new product above the marker. Newest products go last.
const products = [
        {
        "category": "shorts",
        "name": "Farklı Parçalı Kot Şort",
        "type": "Şort",
        "material": "Kot",
        "color": "Siyah, Mavi",
        "description": "",
        "images": [
            "20261116_220747.jpg",
            "20261116_220816.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "Ayloy Yeşil Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Yeşil, Beyaz",
        "description": "",
        "images": [
            "20260129_140917.jpg"
        ]
    },
        {
        "category": "sweatshirt",
        "name": "Ayloy Gri Sweatshirt",
        "type": "Sweatshirt",
        "material": "%100 Pamuk",
        "color": "Gri",
        "description": "",
        "images": [
            "20261116_220521.jpg",
            "20261116_220539.jpg"
        ]
    },
        {
        "category": "shirt",
        "name": "Yeşil Kareli Gömlek",
        "type": "Gömlek",
        "material": "%95 Pamuk, %5 Kot",
        "color": "Yeşil",
        "description": "Yeşil gömlek, sırtında kot kumaşından ayloy yazısı.",
        "images": [
            "20260129_124338.jpg",
            "20260129_124415.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "Ayloy Yeşil Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Yeşil",
        "description": "",
        "images": [
            "20260329_182542.jpg"
        ]
    },
        {
        "category": "pants",
        "name": "Koyu Lacivert Baggy Kot",
        "type": "Pantolon",
        "material": "Kot",
        "color": "Koyu lacivert",
        "description": "",
        "images": [
            "20250927_124744.jpg",
            "20250927_124827.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "Sırt Yazılı Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Siyah, Lacivert",
        "description": "",
        "images": [
            "20260308_182652.jpg",
            "20260316_095759.jpg"
        ]
    },
        {
        "category": "pants",
        "name": "Siyah Baggy Pantalon",
        "type": "Pantolon",
        "material": "—",
        "color": "Siyah",
        "description": "",
        "images": [
            "20251227_140023.jpg",
            "20251227_140046.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "Sırt Yazılı Boxy Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Lacivert",
        "description": "",
        "images": [
            "20260529_232102.jpg",
            "20260529_232034.jpg"
        ]
    },
        {
        "category": "pants",
        "name": "Kahverengi Kumaş Baggy Pantalon",
        "type": "Pantolon",
        "material": "%100 Pamuk",
        "color": "Kahverengi, Bej",
        "description": "",
        "images": [
            "20251108_084056.jpg",
            "20251108_084214.jpg"
        ]
    },
        {
        "category": "shorts",
        "name": "Kot Worker Şort",
        "type": "Şort",
        "material": "Kot",
        "color": "Mavi",
        "description": "",
        "images": [
            "20261116_221027.jpg",
            "20261116_221101.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "Sidewalker Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Gri",
        "description": "",
        "images": [
            "20260407_191620.jpg",
            "20260407_191722.jpg"
        ]
    },
        {
        "category": "jacket",
        "name": "Yeşil Gömlek Ceket",
        "type": "Ceket",
        "material": "—",
        "color": "Yeşil",
        "description": "",
        "images": [
            "20261116_220217.jpg",
            "20261116_220309.jpg"
        ]
    },
        {
        "category": "accessory",
        "name": "İp Saplı Çanta",
        "type": "Aksesuar",
        "material": "Kot",
        "color": "Lacivert",
        "description": "",
        "images": [
            "20251129_120709.jpg"
        ]
    },
        {
        "category": "shirt",
        "name": "Yarı Kot Yarı Oduncu Gömlek",
        "type": "Gömlek",
        "material": "%85 Kot %15 Pamuk",
        "color": "Mavi, Bej",
        "description": "",
        "images": [
            "20261116_220413.jpg",
            "20261116_220447.jpg"
        ]
    },
        {
        "category": "shirt",
        "name": "Sırt Yazılı Kot Gömlek",
        "type": "Gömlek",
        "material": "Kot",
        "color": "Mavi",
        "description": "",
        "images": [
            "20261116_220922.jpg",
            "20261116_220954.jpg"
        ]
    },
        {
        "category": "pants",
        "name": "Super Baggy Kot",
        "type": "Pantolon",
        "material": "Kot",
        "color": "Mavi",
        "description": "",
        "images": [
            "20251026_101913.jpg",
            "20251026_102121.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "Sırt Detaylı Oversize Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Beyaz",
        "description": "",
        "images": [
            "20260817_105622.jpg",
            "20260817_105653.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "Ayloy Gri Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Gri",
        "description": "",
        "images": [
            "20260530_132128.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "Highjack Oversize Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Gri",
        "description": "",
        "images": [
            "20260621_134804.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "2Pac Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Açık Gri",
        "description": "Tekstil kalemi ile elle çizilmiştir.",
        "images": [
            "20260909_172928.jpg",
            "20260909_173014.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "Sırt Yazılı Overize Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Beyaz",
        "description": "We ain't broke, we pre rich",
        "images": [
            "20260530_110243.jpg",
            "20260530_110351.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "Sırt İşlemeli Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Lacivert",
        "description": "",
        "images": [
            "20260423_160548.jpg",
            "20260423_160653.jpg"
        ]
    },
        {
        "category": "jacket",
        "name": "Tavus Kuşu Kot Gömlek",
        "type": "Ceket",
        "material": "%75 Kot %25 Halı",
        "color": "Lacivert",
        "description": "Kalıplı bir kot göleğin sırtına, tavus kuşu resimli duvar halısı geçirilmiştir.",
        "images": [
            "20251203_171055.jpg",
            "20251203_171308.jpg"
        ]
    },
        {
        "category": "jacket",
        "name": "Ayloy Kolej Ceket",
        "type": "Ceket",
        "material": "%100 Pamuk",
        "color": "Kahverengi",
        "description": "",
        "images": [
            "20260820_132135.jpg",
            "20260820_110311.jpg"
        ]
    },
        {
        "category": "shorts",
        "name": "Kot Super Baggy Şort",
        "type": "Şort",
        "material": "Kot",
        "color": "Mavi",
        "description": "",
        "images": [
            "20260209_144009.jpg",
            "20260209_144024.jpg"
        ]
    },
        {
        "category": "shirt",
        "name": "Cep İşlemeli Oversize Gömlek",
        "type": "Gömlek",
        "material": "%100 Pamuk",
        "color": "Açık Mavi",
        "description": "",
        "images": [
            "20261116_221256.jpg",
            "20261116_221330.jpg"
        ]
    },
        {
        "category": "sweatshirt",
        "name": "Sırt İşlemeli Sweatshirt",
        "type": "Sweatshirt",
        "material": "%100 Pamuk",
        "color": "Gri, Lacivert",
        "description": "",
        "images": [
            "20250913_112041.jpg",
            "20250913_112145.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "Sırt İşlemeli Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Lacivert",
        "description": "",
        "images": [
            "20260830_144018.jpg",
            "20260830_144101.jpg"
        ]
    },
        {
        "category": "shorts",
        "name": "Siyah Baggy Kot Şort",
        "type": "Şort",
        "material": "Kot",
        "color": "Siyah",
        "description": "",
        "images": [
            "20261116_221142.jpg",
            "20261116_221157.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "Shook Ones, Pt. II Peanut Tişört",
        "type": "Tişört",
        "material": "%95 Pamuk %5 Elastan",
        "color": "Kahverengi",
        "description": "Sırtına Peanuts animasyonundan alınıp, Shook Ones, Pt. II şarkısının giriş sözleriyle hazırlanmış bir görsel nakşedilmiştir.",
        "images": [
            "20260910_124402.jpg",
            "20260910_124510.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "DWade Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Gri",
        "description": "",
        "images": [
            "20261027_203837.jpg"
        ]
    },
        {
        "category": "accessory",
        "name": "Tek Parça Kot Çanta",
        "type": "Aksesuar",
        "material": "Kot",
        "color": "Mavi",
        "description": "",
        "images": [
            "20261025_144726.jpg"
        ]
    },
        {
        "category": "tshirt",
        "name": "JID Oversize Tişört",
        "type": "Tişört",
        "material": "%100 Pamuk",
        "color": "Gri",
        "description": "",
        "images": [
            "20261114_183407.jpg"
        ]
    },
            {
        "category": "accessory",
        "name": "Koyu Kot Çanta",
        "type": "Aksesuar",
        "material": "Kot",
        "color": "Lacivert, Mavi",
        "description": "",
        "images": [
            "20261120_111947.jpg",
            "20261120_111959.jpg",
            "20261120_112054.jpg"
        ]
    },
    
    // Paste new products here.
];
