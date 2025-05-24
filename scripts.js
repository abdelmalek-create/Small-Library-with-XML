/* Place your JavaScript in this file */
document.addEventListener("DOMContentLoaded", function() {
    fetch("books.xml")
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(data, "text/xml");
        let books = xmlDoc.getElementsByTagName("book");
        let container = document.getElementById("books-container");

        for (let i = 0; i < books.length; i++) {
            let title = books[i].getElementsByTagName("title")[0].textContent;
            let author = books[i].getElementsByTagName("author")[0].textContent;
            let year = books[i].getElementsByTagName("year")[0].textContent;
            let genre = books[i].getElementsByTagName("genre")[0].textContent;

            let bookDiv = document.createElement("div");
            bookDiv.classList.add("book");
            bookDiv.innerHTML = `<h3>${title}</h3><p><strong>المؤلف:</strong> ${author}</p><p><strong>السنة:</strong> ${year}</p><p><strong>التصنيف:</strong> ${genre}</p>`;

            container.appendChild(bookDiv);
        }
    })
    .catch(error => console.error("خطأ في تحميل البيانات:", error));
});
