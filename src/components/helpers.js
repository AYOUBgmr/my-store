// دالة تنسيق رسالة واتساب مع تفاصيل الطلب
export function formatWhatsAppMessage(cart, totalPrice) {
  let msg = "طلب جديد:\n\n";
  for (const [name, item] of Object.entries(cart)) {
    msg += `- ${name} × ${item.quantity} = ${(item.price * item.quantity).toFixed(2)} dh\n`;
  }
  msg += `\nالمجموع الكلي: ${totalPrice.toFixed(2)} dh`;
  return msg;
}
