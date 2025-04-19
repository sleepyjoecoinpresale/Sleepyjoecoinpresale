
document.getElementById("presaleForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let buyer = document.getElementById("buyer").value;
    let referrer = document.getElementById("referrer").value || "N/A";
    let amount = parseFloat(document.getElementById("amount").value);
    let tokens = amount * 2500000000; // 1 BNB = 2.5B SPJ

    let table = document.getElementById("transactions");
    let row = table.insertRow(1);
    row.insertCell(0).innerText = buyer;
    row.insertCell(1).innerText = referrer;
    row.insertCell(2).innerText = amount.toFixed(4);
    row.insertCell(3).innerText = tokens.toLocaleString();
});
