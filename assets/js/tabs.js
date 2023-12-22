// Mengambil array dari semua tab
const tabs = document.querySelectorAll(".tab");
// Mengambil array dari semua blok dengan konten tab
const contents = document.querySelectorAll(".content");

// Menjalankan loop untuk setiap tab dan menambahkan event listener
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (event) => {

        // Pertama-tama, kita perlu menghapus kelas aktif dari tab
        let tabsChildren = event.target.parentElement.children;
        for (let t = 0; t < tabsChildren.length; t++) {
            tabsChildren[t].classList.remove("tab--active");
        }
        // Menambahkan kelas aktif
        tabs[i].classList.add("tab--active");
        // Sekarang perlu menghapus kelas aktif dari blok konten tab
        let tabContentChildren = event.target.parentElement.nextElementSibling.children;
        for (let c = 0; c < tabContentChildren.length; c++) {
            tabContentChildren[c].classList.remove("content--active");
        }
        // Menambahkan kelas aktif
        contents[i].classList.add("content--active");

    });
}