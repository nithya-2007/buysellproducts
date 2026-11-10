function buyProduct(name) {
    showToast("✓ " + name + " selected");
}

function openSell() {
    document.getElementById("sellModal").style.display = "flex";
}

function closeSell() {
    document.getElementById("sellModal").style.display = "none";
}

function sellProduct() {

    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;

    if (name === "" || price === "") {
        showToast("Please enter product details");
        return;
    }

    closeSell();

    showToast("✓ " + name + " listed for sale");

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCondition").value = "";
    document.getElementById("productLocation").value = "";
}

function searchProduct() {

    let search = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        let name = product.dataset.name.toLowerCase();

        if (name.includes(search)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function showToast(message) {

    let toast = document.getElementById("toast");

    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}
