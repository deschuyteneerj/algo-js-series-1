// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)

(() => {
    let tab = document.createElement("table");

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        tr.appendChild(td);
        tab.appendChild(tr);
    }

    document.getElementById("target").appendChild(tab);
})();
