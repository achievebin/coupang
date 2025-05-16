document.addEventListener("DOMContentLoaded", function () {
        const toggleBtn = document.getElementById("categoryToggleBtn");
        const categoryMenu = document.getElementById("categoryMenu");

        // 버튼 클릭 시 카테고리 메뉴 열기/닫기
        toggleBtn.addEventListener("click", function (event) {
            event.stopPropagation(); // 클릭 이벤트 전파 방지
            const isVisible = categoryMenu.style.display === "block";
            categoryMenu.style.display = isVisible ? "none" : "block";
        });

        // 메뉴 바깥 클릭 시 카테고리 메뉴 닫기
        document.addEventListener("click", function (event) {
            const isClickInside = toggleBtn.contains(event.target) || categoryMenu.contains(event.target);
            if (!isClickInside) {
                categoryMenu.style.display = "none";
            }
            });
        });

document.getElementById("searchForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const keyword = document.getElementById("searchInput").value.trim();
        if (keyword) {
            sessionStorage.setItem("search", keyword);
            window.location.href = "./search.html";
        }
    });