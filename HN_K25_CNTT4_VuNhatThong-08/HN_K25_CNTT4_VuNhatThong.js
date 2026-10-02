let isRunning = true;
let currentSeatCode = "";
let isSeatValid = false;
let totalRevenue = 0;
let totalTrips = 0;

while (isRunning) {
    const choice = prompt(
        "====================================\n"+
        "HỆ THỐNG BÁN VÉ NHÀ XE GREENLINE BUS\n"+
        "====================================\n"+
        "1. Nhập và kiểm chuẩn mã đặt chỗ\n"+
        "2. Tính tiền vé xe khách\n"+
        "3. Thẩm định mã vé xe may mắn\n"+
        "0. Thoát chương trình\n"+
        "====================================\n"+
        "Vui lòng nhập lựa chọn (0-3): "
    )

    const rawInput = choice.trim()

    if (rawInput === null || rawInput ===""){
        alert("Vui lòng không để trống lựa chọn!")
        continue;
    }else if(isNaN(rawInput)){
        alert("Vui long nhap so 0-3!")
        continue;
    }

    switch (rawInput) {
        case "1":
            currentSeatCode = "";
            isSeatValid = false;
            const codeInput = prompt("Nhap ma dat cho: ")
            const cleanCodeInput = codeInput.trim().toUpperCase()
            if (cleanCodeInput === null || cleanCodeInput === ""){
                alert("Ma dat cho khong duoc de trong")
                break
            }else if (cleanCodeInput.length <6 ) {
                alert("Do dai ma toi thieu 6 ky tu")
                break
            }else if (!cleanCodeInput.startsWith("BUS-")){
                alert("Ma dat cho phai bat dau bang BUS-")
                break
            }else if (cleanCodeInput.includes(" ")) {
                alert("Trong ma dat khong duoc co khoang trong")
                break
            }
            alert("Ma dat cho hop le, da mo lua chon 2.")
            currentSeatCode = cleanCodeInput;
            isSeatValid = true;    
            break;
        case "2":
            if (isSeatValid == false){
                alert("Vui lòng nhập mã phiếu ở lựa chọn 1")
                break;
            };

            let seatCount = 0;
            let pricePerSeat = 0;
            let isCanceled = false;

            while (true) {
                const rawCount = prompt("Nhập số ghế: ")
                if (rawCount === "" || rawCount === null) {
                    alert("Vui lòng nhập số nguyên")
                    continue
                }
                else if (rawCount <= 0 ){
                    alert("Vui lòng nhập Giá trị > 0")
                    continue
                }
                else if(isNaN(rawCount)){
                    alert("Giá trị nhập phải là số")
                    continue
                }
                seatCount = rawCount
                break;
            }
            if (isCanceled){
                alert("Giao dịch bị huỷ, trạng thái không ảnh hưởng")
                isCanceled = true
                break;
            }

            while (true) {
                const rawService = prompt("Nhập đơn giá  ")
                if (rawService == null || rawService == "") {
                    alert("Vui lòng không để trống")
                    continue
                }
                else if (rawService <= 0 ){
                    alert("Vui lòng nhập Giá trị > 0")
                    continue
                }
                else if(isNaN(rawService)){
                    alert("Giá trị nhập phải là số")
                    continue
                }
                pricePerSeat = rawService
                break;
            }
            if (isCanceled){
                alert("Giao dịch bị huỷ, trạng thái không ảnh hưởng")
                isCanceled = true
                break;
            }

            const baseCost = seatCount * pricePerSeat;
            const discount = seatCount >= 4 ? Math.round(baseCost * 0.1) : 0;
            const postDiscountCost = baseCost - discount;
            const suplyFee = Math.round(postDiscountCost * 0.08);
            const totalPayment = postDiscountCost + suplyFee;

            alert(
                "===============\n"+
                "  IN HOA DON   \n"+
                "===============\n"+
                `Chi phi co so: ${baseCost}\n`+
                `Giam gia: ${discount}\n`+
                `Phu phi: ${suplyFee}\n`+
                `Tong thanh toan: ${totalPayment}\n`
            )
            totalRevenue += totalPayment;
            totalTrips += 1;
            break;
        case "3":
            break;
        case "0":
            alert("Ban da thoat chuong trinh!")
            isRunning = false
            break;
        default:
            alert("Vui long chon lua chon tu 0 den 3: ")
            break;
    }
}