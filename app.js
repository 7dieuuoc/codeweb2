const express = require('express');
const path = require('path');  // Để xác định đường dẫn tệp

const app = express();
const port = 3000;

// Đặt thư mục công cộng (public) chứa các tệp tĩnh như .html, .css, .js
app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa route để phục vụ tệp index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Đảm bảo đúng đường dẫn tới tệp index.html
});

// Bắt đầu server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
