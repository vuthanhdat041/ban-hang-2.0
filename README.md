# 🛍️ Đồ án React + Node.js: Hệ thống quản lý cửa hàng

## 📌 Mô tả

Website quản lý bán hàng gồm 2 phần:

- **Frontend**: ReactJS
- **Backend**: Node.js + Express + Sequelize (kết nối sql Server)

## 🔧 Công nghệ sử dụng

- ReactJS, Axios, React Router
- Node.js, Express, Sequelize
- sql server
- Postman (test API)

## 🚀 Tính năng

### Người dùng:

- Đăng ký / Đăng nhập
- Xem sản phẩm
- Đặt hàng

### Admin:

- Quản lý sản phẩm
- Quản lý đơn hàng
- Quản lý người dùng
- Xem doanh thu

## 🛠️ Cách chạy project

### ⚙️ Cài đặt chung

```bash
git clone https://github.com/vuthanhdat041/WebBanHang.git
cd WebBanHang
```

## Cài đặt backend (api)

cd api
npm install
npm start

### 📄 Cấu hình file `.env`

Bạn có thể chỉnh sửa các giá trị trong file `.env` (ví dụ: `DB_USER`, `DB_PASS`) để phù hợp với cấu hình SQL Server trên máy của bạn.

### 📄 Lưu ý về file `.env`

Vì đây là đồ án học tập, file `.env` được public trong repo để tiện cho việc chạy thử.  
Tuy nhiên, **không nên áp dụng cách này với project thật hoặc chứa thông tin bảo mật.**

## Cài đặt frontend (client)

cd client
npm install
npm start
