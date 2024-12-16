console.log("wuttiphat jitkul")
console.log("oae")

let currentInput = "0";  // ตัวแปรเก็บค่าปัจจุบันในหน้าจอเครื่องคิดเลข

function clearDisplay() {
    currentInput = "0";  // รีเซ็ตค่าจอเครื่องคิดเลข
    document.getElementById("display").innerText = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === "0" && value !== ".") {
        currentInput = value;  // หากค่าเริ่มต้นเป็น 0 จะลบ 0 ออก
    } else {
        currentInput += value;  // เชื่อมค่าใหม่เข้ากับค่าเดิม
    }
    document.getElementById("display").innerText = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();  // คำนวณค่าโดยใช้ eval
        document.getElementById("display").innerText = currentInput;
    } catch (error) {
        currentInput = "Error";  // หากเกิดข้อผิดพลาดจะโชว์ข้อความ "Error"
        document.getElementById("display").innerText = currentInput;
    }
}