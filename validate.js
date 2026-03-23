// สร้างฟังก์ชันตรวจสอบฟอร์แมตของอีเมล
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ทดสอบฟังก์ชันด้วยอีเมลที่ถูกต้องและไม่ถูกต้อง
console.log(validateEmail("example@example.com")); // ผลลัพธ์ควรเป็น true
console.log(validateEmail("invalid-email")); // ผลลัพธ์ควรเป็น false