const cors = require('cors');

const corsOptions = {
    origin: 'https://ban-hang-2-0.vercel.app', // Cập nhật domain của React app
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Các phương thức được phép
    allowedHeaders: ['Content-Type', 'Authorization'], // Header được phép
    credentials: true // Cho phép gửi cookie qua CORS
};

module.exports = cors(corsOptions);
