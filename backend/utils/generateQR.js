const QRCode = require('qrcode');

const generateQR = async (data) => {
  try {
    const qrCode = await QRCode.toDataURL(data, {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      width: 300,
      margin: 1,
      color: {
        dark: '#ff6b00',
        light: '#000000'
      }
    });
    return qrCode;
  } catch (error) {
    console.error('QR Code generation error:', error);
    return null;
  }
};

module.exports = generateQR;
