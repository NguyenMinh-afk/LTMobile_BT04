// validation.js

// Hàm xác thực số điện thoại
export const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    return phoneRegex.test(phoneNumber);
  };
  
  // Hàm định dạng số điện thoại
  export const formatPhoneNumber = (text) => {
    // Loại bỏ các ký tự không phải số
    return text.replace(/[^0-9]/g, '');
  };
  