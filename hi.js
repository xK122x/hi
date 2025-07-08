// Khai báo biến
const productData = {
    name: "Sản phẩm cao cấp XYZ",
    description: "Sản phẩm chất lượng cao với thiết kế hiện đại, phù hợp cho mọi đối tượng sử dụng. Chất liệu an toàn, bền bỉ theo thời gian.",
    features: [
        "Chất liệu cao cấp, an toàn",
        "Thiết kế hiện đại, sang trọng",
        "Dễ dàng vệ sinh và bảo quản",
        "Bảo hành 2 năm"
    ],
    price: "1,299,000",
    image: "br.png",
    contact: {
        email: "support@example.com",
        phone: "0901 234 567"
    }
};

// Cập nhật nội dung trang
document.addEventListener('DOMContentLoaded', function() {
    // Cập nhật thông tin sản phẩm
    document.querySelector('header h1').textContent = productData.name;
    document.getElementById('productDescription').textContent = productData.description;
    document.getElementById('productPrice').textContent = productData.price;
    document.getElementById('contactEmail').textContent = productData.contact.email;
    document.getElementById('contactPhone').textContent = productData.contact.phone;
    
    // Cập nhật năm hiện tại
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Cập nhật tính năng sản phẩm
    const featureList = document.getElementById('featureList');
    featureList.innerHTML = ''; // Xóa các mục mặc định
    productData.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featureList.appendChild(li);
    });
    
    // Thêm sự kiện cho nút mua hàng
    document.getElementById('buyButton').addEventListener('click', function() {
        alert('Cảm ơn bạn đã quan tâm đến sản phẩm! Chúng tôi sẽ liên hệ với bạn sớm.');
        // Có thể thêm code xử lý đặt hàng ở đây
    });
    
    // Thêm hiệu ứng khi cuộn trang
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
// Xử lý dropdown chọn thông tin
document.getElementById('infoDropdown').addEventListener('change', function() {
    // Ẩn tất cả các section
    document.querySelectorAll('.info-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Hiển thị section được chọn
    const selectedSection = document.getElementById(this.value);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
});

// Thêm dữ liệu động cho phần đánh giá
const reviewsData = [
    {
        text: "Sản phẩm chất lượng tốt, tôi rất hài lòng!",
        author: "Nguyễn Văn A"
    },
    {
        text: "Giao hàng nhanh, đúng như mô tả.",
        author: "Trần Thị B"
    },
    {
        text: "Giá cả hợp lý so với chất lượng.",
        author: "Lê Văn C"
    }
];

// Hiển thị đánh giá
function displayReviews() {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = '<h3>Đánh giá từ khách hàng</h3>';
    
    reviewsData.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        reviewDiv.innerHTML = `
            <p class="review-text">"${review.text}"</p>
            <p class="review-author">- ${review.author}</p>
        `;
        reviewsContainer.appendChild(reviewDiv);
    });
}

// Gọi hàm khi trang tải xong
document.addEventListener('DOMContentLoaded', function() {
    // ... (các code hiện có)
    
    // Hiển thị đánh giá
    displayReviews();
    
    // Kích hoạt section đầu tiên
    document.querySelector('.info-section').classList.add('active');
});
// Hàm nhận dạng thiết bị
function detectDevice() {
    const userAgent = navigator.userAgent;
    const screenWidth = window.innerWidth;
    let deviceType = "Desktop";
    let os = "Unknown";
    
    // Nhận dạng hệ điều hành
    if (/Android/i.test(userAgent)) {
        os = "Android";
        deviceType = "Mobile";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        os = "iOS";
        deviceType = /iPad/i.test(userAgent) ? "Tablet" : "Mobile";
    } else if (/Windows/i.test(userAgent)) {
        os = "Windows";
    } else if (/Mac/i.test(userAgent)) {
        os = "Mac";
    } else if (/Linux/i.test(userAgent)) {
        os = "Linux";
    }
    
    // Ưu tiên kích thước màn hình nếu cần
    if (screenWidth < 600) {
        deviceType = "Mobile";
    } else if (screenWidth >= 600 && screenWidth < 1024) {
        deviceType = "Tablet";
    }
    
    // Nhận dạng trình duyệt
    let browser = "Unknown";
    if (/Chrome/i.test(userAgent) && !/Edge/i.test(userAgent)) {
        browser = "Chrome";
    } else if (/Firefox/i.test(userAgent)) {
        browser = "Firefox";
    } else if (/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent)) {
        browser = "Safari";
    } else if (/Edge/i.test(userAgent)) {
        browser = "Edge";
    } else if (/Opera|OPR/i.test(userAgent)) {
        browser = "Opera";
    }
    
    return {
        deviceType,
        os,
        browser,
        screenWidth,
        screenHeight: window.innerHeight,
        userAgent
    };
}

// Hàm điều chỉnh giao diện theo thiết bị
function adjustLayout(deviceInfo) {
    const body = document.body;
    
    // Thêm class cho body theo loại thiết bị
    body.classList.add(`device-${deviceInfo.deviceType.toLowerCase()}`);
    body.classList.add(`os-${deviceInfo.os.toLowerCase()}`);
    
    // Điều chỉnh cụ thể theo từng loại thiết bị
    if (deviceInfo.deviceType === "Mobile") {
        // Tối ưu cho mobile
        document.querySelectorAll('button, a').forEach(element => {
            element.style.minHeight = '44px'; // Kích thước tap target tối thiểu
        });
    }
    
    // Hiển thị thông tin thiết bị (có thể bỏ trong production)
    document.getElementById('deviceInfo').innerHTML = `
        Device: ${deviceInfo.deviceType} | 
        OS: ${deviceInfo.os} | 
        Browser: ${deviceInfo.browser} | 
        Screen: ${deviceInfo.screenWidth}x${deviceInfo.screenHeight}
    `;
}

// Hàm kiểm tra hỗ trợ touch
function checkTouchSupport() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Khi trang tải xong
document.addEventListener('DOMContentLoaded', function() {
    // Nhận dạng thiết bị
    const deviceInfo = detectDevice();
    
    // Điều chỉnh giao diện
    adjustLayout(deviceInfo);
    
    // Thêm class cho touch device nếu cần
    if (checkTouchSupport()) {
        document.body.classList.add('touch-device');
    }
    
    // Theo dõi thay đổi kích thước màn hình
    window.addEventListener('resize', function() {
        const newDeviceInfo = detectDevice();
        adjustLayout(newDeviceInfo);
    });
    
    // ... (các code hiện có khác)
});