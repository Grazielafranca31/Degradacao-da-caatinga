
// Treemap data
var layout = {
    autosize: true,
    height: 400,
    margin: {l: 0,r: 0,b: 0,t: 0},
};

parents = ["", "Total Multas - Caatinga", "Total Multas - Caatinga", "Total Multas - Caatinga", "Total Multas - Caatinga", "Total Multas - Caatinga", "Total Multas - Caatinga", "Total Multas - Caatinga", "Total Multas - Caatinga", "Total Multas - Caatinga", "Total Multas - Caatinga", "Total Multas - Caatinga"]
labels = [
    "Total Multas - Caatinga", "Administração Ambiental", "Cadastro Técnico Federal",
    "Controle ambiental", "Fauna", "Flora", "Licenciamento", "Ordenamento urbano e Contr. patrim.",
    "Outras", "Pesca", "Qualidade Ambiental", "Unidade de Conservação",
]
values = [ 19180161.23, 121500.00, 693200.00, 4227640.00, 1746300.00, 8439992.63, 1136322.50, 413000.00, 1752586.10, 411110.00, 7000.00, 231510.00]


labels_2 = [
    "Total Multas / Bioma",
    "Sem info",
    "Amazonia",
    "Caatinga",
    "Cerrado",
    "Costeiro e Marinho",
    "Mata Atlantica",
]
parents_2 = ["", "Total Multas / Bioma", "Total Multas / Bioma", "Total Multas / Bioma", "Total Multas / Bioma", "Total Multas / Bioma", "Total Multas / Bioma"];
values_2 = [
    195462387.76,
    114790225.23,
    5198078.52,
    18641061.23,
    8539399.58,
    35411234.17,
    12882389.03,
]

var data = [{
  type: 'treemap',
  branchvalues: "total",
  labels: labels,
  values: values, 
  parents: parents,
  marker: {colors: [
        "#DAA520",
        "#B8860B",
        "#8B4513",
        "#A0522D",
        "#BC8F8F",
        "#CD853F",
        "#D2691E",
        "#F4A460",
        "#FFDEAD",
        "#F5DEB3",
        "#DEB887",
        "#D2B48C",
    ]}
}]

Plotly.newPlot('myDiv', data, layout)
