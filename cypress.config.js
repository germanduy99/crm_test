const defineConfig = require('cypress').defineConfig;
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Hàm query DB
async function queryTestDb(query, config) {
  const connection = await mysql.createConnection({
    host: '157.20.201.81',      // 👉 Thay bằng host DB của bạn (VD: 127.0.0.1 hoặc staging-db-server)
    user: 'scots_staging_read',           // 👉 User DB
    password: '*f4ZX8*kLwC84*b9',   // 👉 Password DB
    database: 'scots_staging'      // 👉 Tên database chứa bảng j_class
  });

  const [rows] = await connection.execute(query);
  await connection.end();
  return rows;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://crm.scotsenglish.edu.vn/',
    video: false,

    setupNodeEvents(on, config) {
      on('task', {
        queryDb: (query) => queryTestDb(query, config),

        // 👇 Task để ghi log vào file
        writeLogToFile({ fileName, content }) {
          const logsDir = path.join(__dirname, 'logs');

          // Tạo thư mục nếu chưa có
          if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir);
          }

          const filePath = path.join(logsDir, fileName);

          // Ghi thêm log mới vào file
          fs.appendFileSync(filePath, content + '\n', 'utf8');

          return null;
        }
      });

      return config;
    },
  },
});
