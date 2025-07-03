export function parseCSV(data) {
  const lines = data.split("\n").filter((line) => line.trim() !== "");
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    let product = {};
    headers.forEach((header, i) => {
      product[header.toLowerCase()] = values[i] || "";
    });
    return {
      name: product.name || "",
      price: parseFloat(product.price) || 0,
      image: product.image || "",
      category: product.category || "",
    };
  });
}

export function formatWhatsAppMessage(cart, totalPrice) {
  let msg = "طلب جديد:\n\n";
  for (const [name, item] of Object.entries(cart)) {
    msg += `- ${name} × ${item.quantity} = ${(item.price * item.quantity).toFixed(2)} dh\n`;
  }
  msg += `\nالمجموع الكلي: ${totalPrice.toFixed(2)} dh`;
  return msg;
}
