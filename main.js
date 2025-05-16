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

document.addEventListener("DOMContentLoaded", () => {
  const badge = document.querySelector(".cart .badge");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // 장바구니 아이템 총 개수 계산 (수량 합산)
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalCount;

  // 장바구니가 비었으면 0 또는 숨김 처리
  if (totalCount === 0) {
    badge.style.display = "none";
  } else {
    badge.style.display = "inline-block";
  }
});

function updateCartBadge() {
  const badge = document.querySelector(".cart .badge");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalCount;
  badge.style.display = totalCount === 0 ? "none" : "inline-block";
}