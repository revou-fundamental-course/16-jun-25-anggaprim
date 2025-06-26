document.addEventListener('DOMContentLoaded', function() {
    //TABS
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');
    const indicator = document.getElementById('indicator');

    updateIndicator(document.querySelector('.tab-btn.active'));
    function updateIndicator(activeTab) {
        const tabWidth = activeTab.offsetWidth;
        const tabLeft = activeTab.offsetLeft;
        
        indicator.style.width = `${tabWidth}px`;
        indicator.style.left = `${tabLeft}px`;
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            // Activate clicked tab and corresponding panel
            tab.classList.add('active');
            document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
            
            // Update indicator position
            updateIndicator(tab);
        });
    });

    //BUTTONS
    const btnLuas = document.getElementById('luas-submit');
    const showLuas = document.getElementById('luas-hasil');
    btnLuas.addEventListener('click', function(e) {
        e.preventDefault();
        const luasAlas=document.getElementById('luas-alas').value.trim();
        const luasTinggi=document.getElementById('luas-tinggi').value.trim();
        // console.log(luasAlas);console.log(luasTinggi);
        //if(!luasAlas) {alert('Panjang Alas Segitiga tidak boleh kosong');return;}
        //if(!luasTinggi) {alert('Tinggi Segitiga tidak boleh kosong');return;}
        if(!isValid(luasAlas,'Panjang Alas Segitiga'))return;
        if(!isValid(luasTinggi,'Tinggi Segitiga'))return;
        showLuas.classList.remove('animasiHasil');
        const hasilAkhir = 0.5*parseFloat(luasAlas)*parseFloat(luasTinggi);
        showLuas.textContent=hasilAkhir;
        setTimeout(() => {
            showLuas.classList.add('animasiHasil');
        }, 10);
    });
    const btnKeliling = document.getElementById('keliling-submit');
    const showKeliling = document.getElementById('keliling-hasil');
    btnKeliling.addEventListener('click', function(e) {
        e.preventDefault();
        const kelilingA=document.getElementById('keliling-a').value.trim();
        const kelilingB=document.getElementById('keliling-b').value.trim();
        const kelilingC=document.getElementById('keliling-c').value.trim();
        // console.log(kelilingA);console.log(kelilingB);console.log(kelilingC);
        // if(!kelilingA) {alert('Sisi A tidak boleh kosong');return;}
        // if(!kelilingB) {alert('Sisi B tidak boleh kosong');return;}
        // if(!kelilingC) {alert('Sisi C tidak boleh kosong');return;}
        if(!isValid(kelilingA,'Sisi A'))return;
        if(!isValid(kelilingB,'Sisi B'))return;
        if(!isValid(kelilingC,'Sisi C'))return;
        showKeliling.classList.remove('animasiHasil');
        const hasilAkhir = parseFloat(kelilingA)+parseFloat(kelilingB)+parseFloat(kelilingC);
        showKeliling.textContent=hasilAkhir;
        setTimeout(() => {
            showKeliling.classList.add('animasiHasil');
        }, 10);
    });
});
function isValid(objek,namaObjek){
    if(!objek) {alert(namaObjek+' tidak boleh kosong');return false;}
    num=parseFloat(objek);
    if(isNaN(num)) {alert(namaObjek+' harus berupa angka');return false;}
    if(num<0) {alert(namaObjek+' harus lebih besar dari 0');return false;}
    return true;
}