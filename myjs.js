var celebraionNames = [
    'Ngô Thị Ngọc Ánh',
    'Ngô Thị Mai',
    'Giang Thị Tình',
    'Giang Thị Hạnh',
    'Trần Thị Hương Ly',
    'Đặng Danh Quảng'
];
alert('Hoai anh');
var showmore = document.getElementById("show-more");

showmore.onclick =function() {
    var listname = document.getElementById('list-name');
    var content = "";
    for (var i = 0; i < celebraionNames.length; i++) {
        content += '<li>' + celebraionNames[i] + '</li>';
    }
    showmore.innerHTML += listname;
};